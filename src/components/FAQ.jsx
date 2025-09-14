"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";


const faqs = [
  {
    q: "Do you offer free shipping?",
    a: "Yes, we offer free shipping on all domestic orders over $100. International shipping rates are calculated at checkout.",
  },
  {
    q: "What is your return policy?",
    a: "You can return any product within 30 days of purchase for a full refund. The item must be unused and in its original packaging.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order is shipped, you will receive an email with a tracking number and a link to the carrier's website to monitor its progress.",
  },
  {
    q: "Are your products eco-friendly?",
    a: "We are committed to sustainability. Many of our products are made from recycled materials and we use 100% recyclable packaging.",
  },
];



export default function FAQ() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          How Can We Help?
        </h2>
        <p className="text-lg text-slate-400 text-center mb-12">
          Find answers to the most common questions about our services and
          products.
        </p>

        <Accordion type="single" collapsible className="w-full">
            {
                faqs.map((faq, index) => (
                    <AccordionItem value={index} key={index}>
                        <AccordionTrigger>{faq.q}</AccordionTrigger>
                        <AccordionContent>{faq.a}</AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
      </div>
    </section>
  );
}