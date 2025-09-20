import { ObjectId } from "mongodb";
import clientPromise from "./mongodb";


 
// for get all products
export async function listProducts() {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME)
    return await db.collection('products').find({}).toArray();
}


//for single product
export async function getProductBySlug(slug){
    const client = await clientPromise;
    const decodedSlug = decodeURIComponent(slug);

    const db = client.db(process.env.DB_NAME);
    return await db.collection('products').findOne({ slug: decodedSlug });
}


export async function getProductById(productId) {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME)

    const product = await db.collection('products').findOne({_id: new ObjectId(productId) });

    return JSON.parse(JSON.stringify(product));
}


export async function getProductsForHighlight( ) {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const products = await db.collection('products').find({}).sort({_id: -1}).limit(6).toArray();

    return products;
}

export async function  addProduct(product) {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    return db.collection('products').insertOne(product);
}


// // update product by id 
// export async function updateProductById(productId, product) {
//     try{
//         const client = await clientPromise;
//         const db = client.db(process.env.DB_NAME)

//         const {_id, ...dataToUpdate } = product;

//         console.log("Is valid ObjectId?", ObjectId.isValid(productId))

//         const result = await db.collection("products").updateOne(
//             { _id: productId },
//             { $set: dataToUpdate}
//         );

//         return result;

//     }catch(error) {
//         console.error("Database update error:", error);
//         throw new Error ("Failed to update product in database.")
//     }
// }