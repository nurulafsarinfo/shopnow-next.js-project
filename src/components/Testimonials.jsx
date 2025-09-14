"use client";

// Decorative quote icon
const QuoteIcon = () => (
  <svg
    className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 text-slate-600 opacity-20"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.05038 12.312C1.05038 10.9823 1.63321 9.8701 2.80004 8.97758C3.96575 8.08506 5.13146 7.6388 6.29717 7.6388V5.93245C5.0343 5.93245 3.86859 6.27871 2.80004 6.97123C1.73037 7.66375 1.05038 8.64772 1.05038 9.92314V12.312H4.63321V14H0V9.43735C0 7.42013 0.882193 5.76101 2.64546 4.46001C4.40873 3.15901 6.172 2.50851 7.93527 2.50851V4.21486C6.8656 4.21486 5.89309 4.56111 5.01775 5.25363C4.14241 5.94615 3.61741 6.84992 3.44275 7.86494C3.83241 7.6388 4.27065 7.46961 4.75748 7.35737C5.2443 6.97123 5.73113 6.97123 6.21796 6.97123C7.57527 6.97123 8.68393 7.44747 9.54464 8.39994C10.4054 9.35242 10.8357 10.5896 10.8357 12.0115V14H6.29717V12.312H1.05038ZM11.4575 12.312C11.4575 10.9823 12.0403 9.8701 13.2071 8.97758C14.3728 8.08506 15.5385 7.6388 16.7042 7.6388V5.93245C15.4414 5.93245 14.2757 6.27871 13.2071 6.97123C12.1375 7.66375 11.4575 8.64772 11.4575 9.92314V12.312H15.0403V14H10.4071V9.43735C10.4071 7.42013 11.2893 5.76101 13.0526 4.46001C14.8159 3.15901 16.5791 2.50851 18.3424 2.50851V4.21486C17.2727 4.21486 16.3002 4.56111 15.4249 5.25363C14.5495 5.94615 14.0245 6.84992 13.8499 7.86494C14.2395 7.6388 14.6778 7.46961 15.1646 7.35737C15.6514 6.97123 16.1383 6.97123 16.6251 6.97123C17.9824 6.97123 19.0911 7.44747 19.9518 8.39994C20.8125 9.35242 21.2428 10.5896 21.2428 12.0115V14H16.7042V12.312H11.4575Z"
      fill="currentColor"
    />
  </svg>
);

const testimonials = [
  {
    name: "Alex Johnson",
    location: "New York, USA",
    product: "Wireless Earbuds Pro",
    feedback:
      "The earbuds are just amazing! Great sound quality and super fast delivery from ShopNow. Highly recommended.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1974&q=80",
  },
  {
    name: "Sarah Lee",
    location: "London, UK",
    product: "Smartwatch X200",
    feedback:
      "I love my new smartwatch! The design is sleek and the features are beyond my expectations. ShopNow never disappoints.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=2070&q=80",
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    product: "Gaming Laptop Pro 15",
    feedback:
      "ShopNow made it so easy to order. The laptop is powerful and perfect for my work and gaming. Definitely worth it!",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1974&q=80",
  },
  {
    name: "Emily Rodriguez",
    location: "Madrid, Spain",
    product: "4K Ultra HD TV",
    feedback:
      "Amazing quality TV at an affordable price. The packaging was excellent, and delivery was faster than expected.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1974&q=80",
  },
  {
    name: "David Smith",
    location: "Sydney, Australia",
    product: "Bluetooth Speaker Boom",
    feedback:
      "I’ve tried many speakers, but this one is just awesome! Deep bass, portable, and ShopNow gave me the best deal.",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1974&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          What Our Customers Say
        </h2>
        <p className="text-lg text-slate-400 mb-16 max-w-2xl mx-auto">
          Real reviews from happy ShopNow shoppers about their favorite products.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="[perspective:1000px] group">
              {/* Flipper */}
              <div className="h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className="inset-0 bg-slate-800/90 backdrop-blur-sm p-8 rounded-xl border border-slate-700 flex flex-col items-center justify-center [backface-visibility:hidden]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-[#33d6ef] shadow-lg"
                  />
                  <h4 className="text-xl font-bold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#33d6ef] text-sm">{testimonial.location}</p>
                  <p className="text-slate-400 text-sm mt-2 italic">
                    Bought: {testimonial.product}
                  </p>
                </div>
                
                {/* Back Side */}
                <div className="absolute inset-0 bg-slate-800 p-8 rounded-xl border border-slate-700 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <QuoteIcon />
                  <div className="flex flex-col items-center justify-center h-full">
                    <p className="text-lg text-slate-300 text-center">
                      “{testimonial.feedback}”
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
