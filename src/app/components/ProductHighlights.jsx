import Link from "next/link";
import { getProductsForHighlight } from "../lib/products";

export default async function ProductHighlights() {
    
    const products = await getProductsForHighlight();
    console.log('six products', products);

     return (
            <div className="p-6">
                <h1 className="mb-6 text-center text-2xl font-bold">Latest Products</h1>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <div key={product._id.toString()} className="rounded-lg border p-4 shadow">
                            <img 
                                src={product.images[0]} 
                                alt={product.name} 
                                className="h-48 w-full rounded object-cover" 
                            />
                            <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
                            <p className="text-gray-500">{product.brand}</p>
                            <div className="flex items-baseline gap-2">
                                <p className="mt-2 text-xl font-bold">$ {product.discountPrice}</p>
                                <p className="mt-2 text-red-500 line-through">$ {product.price}</p>
                            </div>
                            
                            {/* use Link for Client-side navigation */}
                            <Link 
                                href={`/products/${product.slug}`} 
                                className="mt-2 block rounded-sm border py-1 text-center text-[#33d6ef] hover:underline"
                            >
                                View Details
                            </Link>

                        </div>
                    ))}
                </div>
                <div className="my-6 underline text-[#33d6ef] text-center">
                    <Link href={'/products'}>Click More...</Link>
                </div>
            </div>
        )
}