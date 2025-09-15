import CredentialsProvider from 'next-auth/providers/credentials'
// import GoogleProvider from "next-auth/providers/google"
import { compare } from "bcrypt";
import clientPromise from "./mongodb"
import Google from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        // Social login 
        Google( {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: { label: "Password", type: "password"}
            },

            async authorize(credentials) {
                const client = await clientPromise;
                const db = client.db("shopnow_app_db");
                const users = db.collection("users");

                const user = await users.findOne({ email: credentials.email });
                
                if(!user) return null;

                const isValid = await compare(credentials.password, user.password);

                if(!isValid) return null;

                return {id: user._id, name: user.name, email: user.email}
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
};