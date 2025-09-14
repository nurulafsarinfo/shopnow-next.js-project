"use client";

export default function CTA() {
  return (
    <section className="py-20 bg-cyan-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">
        Ready to Upgrade Your Lifestyle?
      </h2>
      <a
        href="/products"
        className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Start Shopping
      </a>
    </section>
  );
}