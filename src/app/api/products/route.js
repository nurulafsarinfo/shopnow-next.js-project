import { addProduct, updateProductById } from "@/lib/products";

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


// export async function PATCH(req, {params}) {
//     const { productId } = params;

//     try{
//         const body = await req.json();

//         const result = await updateProductById(productId, body);

//         if(result.matchedCount === 0) {
//             return new Response(JSON.stringify({ message: "Product not Found!"}));
//         }

//         return new Response(JSON.stringify({
//          success: true, id: result.updatedId
//         }), { status: 200 })

//     } catch (error) {
//         return new Response(JSON.stringify({ error: error.message }), { status: 500 }); 
//     }
// }