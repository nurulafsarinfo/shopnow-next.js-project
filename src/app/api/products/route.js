import { addProduct } from "@/app/lib/products";

export async function POST(req) {
    try {
        const body = await req.json();
        const result = await addProduct(body);

        return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
           status: 201, 
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {status: 500});
    }
}