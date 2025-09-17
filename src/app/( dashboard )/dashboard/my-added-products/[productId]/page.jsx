import EditProductForm from "@/components/EditProductForm";
import { getProductById } from "@/lib/products";

export default async function UpdateProduct({params}) {
    const {productId} = params;

    const product = await getProductById(productId);

    console.log('product by id : ', product)
    
     if (!product) {
        return (
            <div className="p-8 text-center">
                <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
                <p className="mt-2 text-gray-500">
                    Could not find a product with the ID: {productId}
                </p>
            </div>
        );
    }


    return(
        <div>
            <p className="mb-2 font-semibold">product: <span className="text-gray-700 font-normal">{product?.slug}</span></p>
            <EditProductForm product={product}/>
        </div>
    
    )
}