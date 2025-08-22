import Link from "next/link";
import { MdDeliveryDining } from "react-icons/md";
import { LuMousePointerClick } from "react-icons/lu";



export default function Hero () {
    return (
        <div className="bg-[#eaf8fa] p-8">
            <div className="space-y-3 pt-7">
                <p className="text-center text-[14px] text-gray-800 md:text-lg flex justify-center">
                    <MdDeliveryDining size={24} className="text-[#31c9e0] "/> 580+ daily orders shipped all over the Country.</p>
                <div className=" text-center">
                    <p className="text-5xl md:text-7xl font-bold ">
                        Discover
                    </p> <br />
                    <p className="text-3xl md:text-5xl">
                        the <span className="text-[rgb(49,201,224)]">Future</span> of Tech <span className="text-[#31c9e0]">Today!</span>
                    </p>
                    <p className="text-[14px] mt-5 text-gray-700">Transform your life with Modern technology 🤩</p>
                </div>
            </div>

            <div className="flex gap-3 justify-center my-10">
                <div className="relative">
                    <Link href={''} className="bg-teal-900 px-8 md:px-10 py-3 text-white rounded-4xl text-sm hover:bg-teal-800 transition transform duration-1000">Start Shopping</Link>
                    <LuMousePointerClick size={34} className="absolute -bottom-4 -right-2 text-[#31c9e0] animate-pulse"/>
                </div>

                <div>
                    <Link href={''} className="px-4 md:px-6 py-3 rounded-4xl border text-sm">Learn More</Link>
                </div>
            </div>
        </div>
    );
}