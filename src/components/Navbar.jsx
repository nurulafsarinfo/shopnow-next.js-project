"use client";

import {  signOut, useSession } from "next-auth/react";

import Link from "next/link";
import { ShimmeringText } from "./ui/shadcn-io/shimmering-text";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


export default function Navbar(){
    const { data: session, status } = useSession();

console.log('sassion data is', session, status)

if(status === "loading"){
    return <div className="navbar-placeholder text-center">...</div>
}

    return(
        <div className="border-b">
        <nav className="w-11/12 mx-auto py-2 flex justify-between items-center">
            <Link href={"/"} className="font-bold text-2xl">
                <ShimmeringText
                    text={"ShopNow"}
                >
                </ShimmeringText>
                
            </Link>

            {/* <p className="font-bold text-xl">Shop<span>Now</span></p> */}

            <div className="flex gap-4 bg-[#33d6ef] px-6 py-2 rounded-md border-[1px] border-teal-600 text-sm">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/about">About</Link>
                <Link href="/contact-us">Contact Us</Link>
                <Link href="/dashboard">Dashboard</Link>
            </div>

            {
                session ? (
                    <div className="flex items-center gap-4">
                        {/* add user image or default avater */}

                        <Avatar>
                            <AvatarImage src={session.user.image} alt="user avater"/>
                            <AvatarFallback>N/A</AvatarFallback>
                        </Avatar>

                        {/* <img src={session.user.image || Avatar} 
                        alt="user avater"
                        className="w-8 h-8 rounded-full"/> */}

                        <button 
                            onClick={() => signOut({callbackUrl: '/'})}
                            className="px-2 py-1 border bg-cyan-400 rounded-sm text-white font-medium hover:text-black transition duration-500"
                        >
                            LogOut
                        </button>
                    </div>
                ) : (

                    <div>
                        <Link href={'/login'} className="px-2 py-2 border mr-2 rounded-sm hover:bg-cyan-400 font-medium transition duration-300">LogIn</Link>
                        <Link href={'/signup'} className="px-2 py-2 border bg-cyan-400 rounded-sm text-white font-medium hover:text-black transition duration-500">SignUp</Link>
                    </div>
                )
            }
        </nav>
        </div>
    );
}