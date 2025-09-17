 "use client"
 
 import { useState } from "react";
 import { useForm } from "react-hook-form";
 
 export default function EditProductForm() {
  
 const { register, handleSubmit, formState: {errors}, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [ apiError, setApiError ] = useState(null);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setApiError(null);

        const processedData = {
            ...data,
            updatedAt: new Date().toISOString(),
            image: data.images.split('\n').filter(url => url.trim() !== ''),
            features: data.features.split('\n').filter(feature => feature.trim() !== ''),
        }

       

    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 rounded-lg border bg-white p-8 shadow-sm">
            <h1 className="text-2xl font-semibold text-slate-900">Add Product</h1>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 ">
                {/* product name  */}
                <div className="">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input type="text" {...register("name", {required: "Product name is required"})} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-2"/>
                </div>

                <div>
                    <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug</label>
                    <input type="text" {...register("slug", {required: "Slug is required"})} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-2" />
                </div>
                 {/* Brand */}
                <div>
                    <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand</label>
                    <input type="text" id="brand" {...register("brand", { required: "Brand is required" })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-2" />
                    {errors.brand && <p className="mt-1 text-sm text-red-600">{errors.brand.message}</p>}
                </div>

                {/* Category */}
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <input type="text" id="category" {...register("category", { required: "Category is required" })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-2" />
                    {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>}
                </div>
                
                {/* Price */}
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input type="number" step="0.01" id="price" {...register("price", { required: "Price is required", valueAsNumber: true, min: { value: 0, message: "Price must be a positive number" } })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-2" />
                    {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>}
                </div>

                {/* Discount Price */}
                <div>
                    <label htmlFor="discountPrice" className="block text-sm font-medium text-gray-700">Discount Price</label>
                    <input type="number" step="0.01" id="discountPrice" {...register("discountPrice", { valueAsNumber: true, min: { value: 0, message: "Discount price must be a positive number" } })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-2" />
                    {errors.discountPrice && <p className="mt-1 text-sm text-red-600">{errors.discountPrice.message}</p>}
                </div>

                {/* Stock */}
                <div>
                    <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock</label>
                    <input type="number" id="stock" {...register("stock", { required: "Stock is required", valueAsNumber: true, min: { value: 0, message: "Stock cannot be negative" }, pattern: { value: /^\d+$/, message: "Stock must be a whole number" } })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-2" />
                    {errors.stock && <p className="mt-1 text-sm text-red-600">{errors.stock.message}</p>}
                </div>

                {/* Currency */}
                <div>
                    <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Currency</label>
                    <input type="text" id="currency" defaultValue="USD" {...register("currency")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-2" />
                </div>
            </div>
            
            {/* Description */}
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea id="description" rows="4" {...register("description", { required: "Description is required" })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-2"></textarea>
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                {/* Images */}
                <div>
                    <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images (one URL per line)</label>
                    <textarea id="images" rows="4" {...register("images", { required: "At least one image URL is required" })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-2"></textarea>
                    {errors.images && <p className="mt-1 text-sm text-red-600">{errors.images.message}</p>}
                </div>

                {/* Features */}
                <div>
                    <label htmlFor="features" className="block text-sm font-medium text-gray-700">Features (one per line)</label>
                    <textarea id="features" rows="4" {...register("features", { required: "At least one feature is required" })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-2"></textarea>
                    {errors.features && <p className="mt-1 text-sm text-red-600">{errors.features.message}</p>}
                </div>
            </div>

            {/* API Error Display */}
            {apiError && <p className="mt-1 rounded-md bg-red-100 p-3 text-center text-sm text-red-600">{apiError}</p>}

            {/* Submit Button */}
            <div className="flex justify-end">
                <button type="submit" disabled={isSubmitting} className="rounded-lg bg-cyan-600 px-6 py-2.5 text-center font-semibold text-white shadow-sm transition duration-200 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-cyan-300">
                    {isSubmitting ? "Saving..." : "Save Product"}
                </button>
            </div>
        </form>
    );
}