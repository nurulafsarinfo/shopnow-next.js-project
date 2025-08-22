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
    const db = client.db(process.env.DB_NAME);
    return await db.collection('products').findOne({ slug });
}