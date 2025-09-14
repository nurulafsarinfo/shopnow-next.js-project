"use client"
import Image from "next/image";
import Link from "next/link";

export default function footer(){
    return(
    <div className="bg-gray-300">
        <footer className="w-11/12 mx-auto p-8 bg-gray-300 row-start-3 flex gap-[24px] flex-wrap items-start justify-between">
       <div>
        <p>ShopNow</p>
       </div>

       <div>
        <p>Quick Link</p>
        <ul>
            <li><Link href={'/home'}>Home</Link></li>
            <li><Link href={'/products'}>Products</Link></li>
            <li><Link href={'/contact-us'}>Contact us</Link></li>
            <li><Link href={'/about-us'}>About Us</Link></li>
        </ul>
       </div>
       <div>
        <p>Send Message</p>
        <input type="text" placeholder="Type your message..." className="input border rounded-md p-2"/>
       </div>
      </footer>
    </div>
    )
}