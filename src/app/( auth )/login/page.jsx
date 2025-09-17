"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const res = await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            redirect: false, // for manualy redirect
        });

        
        setIsLoading(false);

        if (res.ok) {
            router.refresh();
            // redirect home page login successfully
            router.push('/');
        } else {
            // res.error এ NextAuth থেকে পাঠানো এরর মেসেজ থাকে
            setError("Invalid Credentials. Please try again.");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md">
                <form 
                    onSubmit={handleSubmit} 
                    className="rounded-xl border bg-white p-8 shadow-lg"
                >
                    {/* Form Header */}
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
                        <p className="mt-2 text-gray-500">Log in to continue to your account.</p>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-6">
                        <div>
                            <label 
                                htmlFor="email" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email" // <--- name অ্যাট্রিবিউট জরুরি
                                placeholder="you@example.com"
                                value={formData.email}
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
                                id="password"
                                type="password"
                                name="password" // <--- name অ্যাট্রিবিউট জরুরি
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 px-4 py-2 shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                    </div>
                    
                    {/* Error Message Display */}
                    {error && (
                        <p className="mt-4 rounded-md bg-red-100 p-3 text-center text-sm text-red-600">
                            {error}
                        </p>
                    )}

                    {/* Submit Button */}
                    <div className="mt-8">
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full rounded-lg bg-cyan-500 px-4 py-2.5 text-center font-semibold text-white shadow-sm transition duration-200 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-cyan-300"
                        >
                            {isLoading ? 'Logging In...' : 'Log In'}
                        </button>
                    </div>

                    <p className="text-center text-gray-400 my-4">_____OR_____</p>
                    
                    <button onClick={() => signIn('google', { callbackUrl: '/' })} className="text-center py-2 border border-cyan-600 my-4 w-full rounded-lg hover:bg-cyan-500 hover:text-white transition duration-500">
                        Sign in with Google
                    </button>

                </form>

                {/* Footer Link */}
                <p className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <Link href="/signup" className="font-medium text-cyan-600 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}