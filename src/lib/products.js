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

