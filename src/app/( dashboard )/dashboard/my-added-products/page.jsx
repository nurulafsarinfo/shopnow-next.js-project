"use client"

import { Spinner } from "@/components/ui/shadcn-io/spinner";
import { useQuery } from "@tanstack/react-query";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const fetchMyProducts = async () => {
  const response = await fetch('/api/getProductByEmail');
    if(!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}





export default function MyAllProducts() {
    const router = useRouter();

    const {data: products, error, isLoading } = useQuery({
        queryKey: ['myProducts'],
        queryFn: fetchMyProducts,
    });


console.log('my- products:', products)


    const handleUpdate = (productId) => {
      router.push(`/dashboard/updateProduct/${productId}`)
    }

    if(isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Spinner />
            </div>
        );
    }
    
    if(error) return <p>Error: {error.message}</p>


  return (
    <div className="max-w-screen mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My Products</h1>
        <p className="mt-1 text-gray-600">
          You have added a total of {products ? products.length : 0} products.
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
        <table className="table w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Product</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Brand</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Price</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Stock</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product._id.toString()} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-4">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="h-12 w-12 rounded-xs object-cover" 
                    />
                    <div>
                      <div className="font-medium text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-500">{product.slug}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.brand}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-baseline gap-2">
                    <p className="font-bold text-gray-900">${product.discountPrice}</p>
                    <p className="text-xs text-red-500 line-through">${product.price}</p>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap">

                  <span className={`rounded-full px-2 py-1 text-xs font-semibold ${
                    product.stock > 10 ? 'bg-green-100 text-green-800' : 
                    product.stock > 0 ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {product.stock > 10 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out of Stock'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                   {/* Update and delete icon */}
                  <div className="flex items-center justify-end gap-4">
                    <Link href={`/dashboard/my-added-products/${product._id.toString()}`}  className="text-blue-600 hover:text-blue-800" title="Edit Product">
                      <Pencil className="h-5 w-5" />
                    </Link>
                    <button onClick={() => handleDelete(product._id.toString())} className="text-red-600 hover:text-red-800" title="Delete Product">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}