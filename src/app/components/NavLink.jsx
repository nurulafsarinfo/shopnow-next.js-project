"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
    const pathname = usePathname();
    const isActive = pathname === href;
    
    return (
        <Link 
            href={href}
            className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-slate-300 transition-all hover:bg-slate-700 hover:text-white 
                ${isActive ? "bg-slate-700" : "text-white"}
            `}
        >
            {children}
        </Link>
    )
}