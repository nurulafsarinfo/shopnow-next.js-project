import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "./mongodb";
import { compare } from "bcrypt";
import { signIn } from "next-auth/react";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const authOptions = {
    adapter: MongoDBAdapter(clientPromise),

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password"},
            }, 

            async authorize(credentials) {
                const client = await clientPromise;
                const db = client.db("shopnow_app_db");
                const users = db.collection("users");

                const user = await users.findOne({ email: credentials.email });

                if(!user) return null;

                const isValid = await compare(credentials.password, user.password);

                if(!isValid) return null;

                return { id: user._id.toString(), name: user.name, email: user.email };
            },
        }),
    ],

    callbacks: {
        // signin callback (Google OAuth)
        // async signIn({ user, account }) {
        //     if(account.provider === "google") {
        //         console.log('google login success')
        //         try {
        //             const client = await clientPromise;
        //             const db = client.db("shopnow_app_db");
        //             const users = db.collection("users");

        //             const existingUser = await users.findOne({ email: user.email});

        //             if(!existingUser) {
        //                 await users.insertOne({
        //                     name: user.name,
        //                     email: user.email,
        //                     image: user.image,
        //                     provider: account.provider,
        //                     providerAccountId: account.providerAccountId,
        //                     createdAt: new Date(),
        //                 });
        //             }
        //             return true;
        //         } catch (err) {
        //             console.log("OAuth signin error: ", err);
        //             return false;
        //         }
        //     }
        //     return true; // for credentials login
        // },

        async session({ session, token }) {
            // const client = await clientPromise;
            // const db = client.db("shopnow_app_db");
            // const users = db.collection("users");

            // const user = await users.findOne({ email: session.user.email })

            // if(user) session.user.id = user._id.toString();
            
            if(token && session.user) {
                session.user.id = token.id;
            }

            return session;
        },

        async jwt({ token, user }) {
            if(user) {
                token.id = user.id;
            }
            return token;
        },
    },

    session: {
        strategy: "jwt",
    },

    pages: {
        signIn: "/login",
    },

    secret: process.env.NEXTAUTH_SECRET
}