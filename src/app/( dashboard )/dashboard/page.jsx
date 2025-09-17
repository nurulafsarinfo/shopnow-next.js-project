"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Spinner } from "@/components/ui/shadcn-io/spinner";

export default function CheckoutPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log('dashboard status', status);
  // Redirect unauthenticated user
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  if (session) {
    return (
      <div className="min-h-screen p-8">
        <h1 className="text-2xl font-bold">Checkout Page</h1>
        <p className="mt-2 text-lg">Welcome {session.user?.name}</p>
        <aside className="mt-6">
          {/* Checkout content goes here */}
        </aside>
      </div>
    );
  }

  return null;
}
