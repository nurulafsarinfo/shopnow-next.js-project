import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import clientPromise from "./mongodb";

export async function  getProductByEmail() {
    const session = await getServerSession(authOptions);

    if(!session || !session.user || !session.user.email){
        throw new Error("User not authenticated!")
    }

    const client = await clientPromise;
    const db = client.db("shopnow_app_db");
    const products = await db.collection("products").find({ sellerEmail: session.user.email}).toArray();

    return products;
}