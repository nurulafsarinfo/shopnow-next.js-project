"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function SignupPage() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    // State for loading and error handling for better UX
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true); // Start loading
        setError(null);     // Clear previous errors

        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            router.push("/");
        } else {
            const errorData = await res.json();
            setError(errorData.message || 'Signup failed. Please try again.');
        }
        
        setIsLoading(false); // Stop loading
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md">
                <form 
                    onSubmit={handleSubmit} 
                    className="rounded-xl border bg-white p-8 shadow-lg"
                >
                    {/* Form Header */}
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-gray-800">Create Your Account</h1>
                        <p className="mt-2 text-gray-500">Get started with our service today!</p>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-6">
                        <div>
                            <label 
                                htmlFor="name" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 px-4 py-2 shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>

                        <div>
                            <label 
                                htmlFor="email" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 px-4 py-2 shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>

                        <div>
                            <label 
                                htmlFor="password" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 px-4 py-2 shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                    </div>
                    
                    {/* Error Message Display */}
                    {error && (
                        <p className="mt-4 rounded-md bg-red-100 p-3 text-center text-sm text-red-600">
                            *{error}
                        </p>
                    )}

                    {/* Submit Button */}
                    <div className="mt-8">
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full rounded-lg bg-cyan-500 px-4 py-2.5 text-center font-semibold text-white shadow-sm transition duration-200 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-cyan-300"
                        >
                            {isLoading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </div>
                    
                    <p className="text-center text-gray-400 my-4">_____OR_____</p>
                    
                    <button onClick={() => signIn('google', { callbackUrl: '/' })} className="text-center py-2 border border-cyan-600 my-4 w-full rounded-lg hover:bg-cyan-500 hover:text-white transition duration-500">
                        Sign in with Google
                    </button>

                </form>


                {/* Footer Link */}
                <p className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <Link href="/login" className="font-medium text-cyan-600 hover:underline">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
}