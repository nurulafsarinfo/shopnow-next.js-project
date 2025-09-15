"use client";

import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-slate-50 dark:bg-black py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question, feedback, or just want to say hello, feel free to reach out.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">Contact Information</h3>
            
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-100">Our Office</h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Cumilla, Chittagong Division, Bangladesh
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-100">Phone</h4>
                <a href="tel:+8801633355971" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  +880 1633355971
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-100">Email</h4>
                <a href="mailto:contactafsar@shopnow.com" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  contactafsar@shopnow.com
                </a>
              </div>
            </div>

            {/* Local Time */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-100">Local Time</h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Monday, 6:44 AM (GMT+6)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">Send us a Message</h3>
            {/* NOTE: This form is for UI purposes. You'll need to add a backend service or API endpoint to handle submissions. */}
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
