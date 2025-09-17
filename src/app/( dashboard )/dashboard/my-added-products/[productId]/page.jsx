import EditProductForm from "@/components/EditProductForm";
import { getProductById } from "@/lib/products";
import { useForm } from "react-hook-form";

export default async function UpdateProduct({params}) {
    const {productId} = params;

    const product = await getProductById(productId);

    console.log('product by id : ', product)
    


    return(
        <div>
            <p>product: {product.slug}</p>
            <EditProductForm product={product} />
        </div>
    
    )
}