"use client";

import { Award, Globe, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="order-last lg:order-first">
            {/* Using a placeholder image that represents technology/gadgets. 
                Replace with your actual image. */}
            <img
              src="https://placehold.co/600x450/1e293b/ffffff?text=Our+Workspace"
              alt="Team working with modern gadgets in a workspace"
              width={600}
              height={450}
              className="rounded-2xl shadow-xl aspect-[4/3] w-full object-cover"
            />
          </div>

          {/* Text Content Column */}
          <div className="space-y-8">
            <div>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
                Our Mission
              </span>
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Connecting You to the Future.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                We are passionate about providing the best gadgets that make life
                easier and more enjoyable. Our curated selection ensures top-notch quality at unbeatable
                prices, helping us build a loyal customer base worldwide.
              </p>
            </div>

            {/* Feature Highlights with Icons */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Award className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                    Top-Notch Quality
                  </h3>
                  <p className="mt-1 text-slate-500 dark:text-slate-400">
                    Every product is vetted for the highest standards of performance and durability.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Globe className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                    Global Community
                  </h3>
                  <p className="mt-1 text-slate-500 dark:text-slate-400">
                    We've built a loyal and happy customer base that spans across the globe.
                  </p>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <HeartHandshake className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                    Customer First
                  </h3>
                  <p className="mt-1 text-slate-500 dark:text-slate-400">
                    Our dedicated support team is here to ensure your complete satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
