import clientPromise from "@/app/lib/mongodb";
import { hash } from "bcrypt";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();

        const client = await clientPromise;
        const db = client.db("shopnow_app_db");
        const users = db.collection("users");

        const existingUser = await users.findOne({ email });

        if(existingUser) {
            return new Response(JSON.stringify({ message: "User already exist"}), { status: 400 })
        }

        const hashedPassword = await hash(password, 10)

        await users.insertOne({
            name, email, password: hashedPassword,
        });

        return new Response(JSON.stringify({ message: "User created successfully"}), { status: 201 });

    } catch (error) {
        return new Response(JSON.stringify({ message: "Error creating user" }), { status: 500 });
    };
    
};