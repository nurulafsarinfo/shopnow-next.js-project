import { getProductBySlug } from "@/lib/products";

export default async function  ProductDetails({ params }) {
    const {slug} = await params;

    const product = await getProductBySlug(slug);

    if(!product) {
        return <h1 className="p-6 text-red-500">Product not found</h1>
    }

    return(
        <div className="p-8 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img src={product.images[0]} alt={product.name} className="w-full rounded-lg shadow object-cover" />

                <div>
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-gray-500">{product.brand}</p>
                    <p className="text-xl font-semibold mt-2">$ {product.discountPrice}</p>
                    <p className="mt-4 text-gray-900">{product.description}</p>

                    <ul className="list-disc pl-6 mt-4 text-gray-600">
                        {product.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>

                    <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}