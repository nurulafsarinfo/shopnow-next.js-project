import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/dist/server/api-utils";

export default async function CheckoutPage() {
    const session = await getServerSession(authOptions);

    if(!session) {
        redirect("/login");
    }

    return (
        <div>
            <h1>Checkout Page</h1>
            <p>Welcome {session.user?.name}</p>
        </div>
    )
    
}