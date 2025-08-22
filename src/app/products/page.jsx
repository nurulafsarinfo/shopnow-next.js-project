import { listProducts } from "../lib/products"

export default async function ProductPage() {
    const products = await listProducts();

    console.log('all products', products);

    return (
        <div className="p-6">
            <h1 className="text-2xl text-center font-bold mb-6">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    products.map((product) => (
                        <div key={product._id} className="border rounded-lg shadow p-4 ">
                            <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover rounded" />
                            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                            <p className="text-gray-500">{product.brand}</p>
                            <div className="flex gap-2 items-baseline">
                                <p className="text-xl font-bold mt-2">$ {product.discountPrice}</p>
                                <p className="line-through mt-2 text-red-500 ">$ {product.price}</p>
                                
                            </div>

                            <a href={`/products/${product.slug}`} className="text-[#33d6ef] hover:underline block mt-2 border text-center py-1 rounded-sm">View Details</a>
                        </div>     
                    ))
                }
            </div>
        </div>
    )
}