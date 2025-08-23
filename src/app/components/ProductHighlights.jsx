import Link from "next/link";
import { getProductsForHighlight } from "../lib/products";

export default async function ProductHighlights() {
    
    const products = await getProductsForHighlight();
    console.log('six products', products);

    return (
        <div className="p-6">
            <h1 className="mb-6 text-center text-2xl font-bold">Latest Products</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                    // Step 1: Make the card a vertical flex container
                    <div key={product._id.toString()} className="flex flex-col rounded-lg border bg-white p-4 shadow transition hover:shadow-lg">
                        
                        {/* Step 2: Wrap content in a div and make it grow */}
                        <div className="flex-grow">
                            <img 
                                src={product.images[0]} 
                                alt={product.name} 
                                className="h-48 w-full rounded object-cover" 
                            />
                            {/* Step 3 (Optional): Truncate long titles */}
                            <h2 className="mt-4 truncate text-lg font-semibold" title={product.name}>
                                {product.name}
                            </h2>
                            <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                            <div className="mt-2 flex items-baseline gap-2">
                                <p className="text-xl font-bold text-gray-900">${product.discountPrice}</p>
                                <p className="text-sm text-red-500 line-through">${product.price}</p>
                            </div>
                        </div>
                        
                        {/* This Link will now always be at the bottom */}
                        <Link 
                            href={`/products/${product.slug}`} 
                            className="mt-4 block rounded-md border bg-cyan-500 py-2 text-center font-semibold text-white transition hover:bg-cyan-600"
                        >
                            View Details
                        </Link>

                    </div>
                ))}
            </div>
            <div className="my-6 text-center text-cyan-600 hover:underline">
                <Link href={'/products'}>View All Products...</Link>
            </div>
        </div>
    );
}