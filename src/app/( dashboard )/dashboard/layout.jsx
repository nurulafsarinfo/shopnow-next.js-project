"use client"

import Link from "next/link"
import NavLink from "@/components/NavLink"
import {
  Drawer,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({ children }) {
  return (
    <div className="antialiased flex min-h-screen">
      {/* ✅ Drawer for mobile / tablet */}
      <div className="lg:hidden">
        <Drawer direction="left">
          <DrawerTrigger asChild className="fixed top-2 left-3">
            <Button variant="outline">☰ Menu</Button>
          </DrawerTrigger>
          <DrawerOverlay />
          <DrawerContent className="w-64 bg-slate-900 text-white">
            <DrawerHeader>
              <DrawerTitle>
                <Link href="/dashboard" className="block text-2xl font-bold text-center">
                  ShopNow
                </Link>
              </DrawerTitle>
            </DrawerHeader>
            <nav className="flex flex-col gap-3 p-4">
              <NavLink href="/dashboard">📊 Overview</NavLink>
              <NavLink href="/dashboard/add-product">➕ Add Product</NavLink>
              <NavLink href="/dashboard/my-added-products">📦 All Products</NavLink>
              <div className="mt-auto">
                <NavLink href="/">↩️ Back to Site</NavLink>
              </div>
            </nav>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button className="w-full">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      {/* ✅ Static Sidebar for large screens */}
      <aside className="hidden max-h-screen lg:flex lg:w-64 lg:flex-col bg-slate-900 text-white">
        <div className="border-b border-slate-700 p-6 text-center">
          <Link href="/dashboard" className="text-2xl font-bold">
            ShopNow
          </Link>
        </div>
        <nav className="flex flex-1 flex-col gap-3 p-4">
          <NavLink href="/dashboard">📊 Overview</NavLink>
          <NavLink href="/dashboard/add-product">➕ Add Product</NavLink>
          <NavLink href="/dashboard/my-added-products">📦 All Products</NavLink>
          <div className="mt-auto">
            <NavLink href="/">↩️ Back to Site</NavLink>
          </div>
        </nav>
      </aside>

      {/* ✅ Main dashboard content */}
      <main className="flex-1  h-screen overflow-auto p-6 pt-10 bg-gray-100">
        {children}
      </main>
    </div>
  )
}
