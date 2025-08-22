import Link from "next/link";

export default function Navbar(){
    return(
        <div className="border-b">

        <nav className="w-11/12 mx-auto py-2 flex justify-between items-center">
            <div>
                <p>Shop<span>Now</span></p>
            </div>

            <div className="flex gap-4 bg-[#33d6ef] px-6 py-2 rounded-md border-[1px] border-teal-600 text-sm">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/about">About</Link>
            </div>

            <div>
                <button>LogIn</button>
            </div>
        </nav>
        </div>
    );
}