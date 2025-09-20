import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PATCH(req, { params }) {
  const { productId } = params;

  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    // যদি _id MongoDB তে ObjectId হিসেবে থাকে:
    const filter = ObjectId.isValid(productId) ? { _id: new ObjectId(productId) } : { _id: productId };

    const { _id, ...dataToUpdate } = body;

    const result = await db.collection("products").updateOne(
      filter,
      { $set: dataToUpdate }
    );

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ message: "Product not found!" }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, updatedId: productId }), { status: 200 });
  } catch (error) {
    console.error("PATCH error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
