import { getProductByEmail } from "@/lib/getProductsByEmail";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const products = await getProductByEmail();
        return NextResponse.json(products);
    } catch (error) {
        console.log("Failed to fetch products:", error)
        return NextResponse.json(
            { message: "Authenticsation required or server error"},
            { status: 500 }
        );
    }
}