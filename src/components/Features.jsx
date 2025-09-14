const features = [
  { title: "Latest Gadgets", desc: "Stay ahead with trending devices." },
  { title: "Affordable Prices", desc: "Get the best deals every day." },
  { title: "Secure Checkout", desc: "Your data is safe with us." },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Shop With Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-4">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
