import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "When will aiexpense be available?",
    answer:
      "We're planning to launch our beta in Q3 2025, with priority access given to those on our waitlist. Sign up now to be among the first to experience aiexpense.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Absolutely! We use bank-level encryption to protect your data. aiexpense never stores your actual banking credentials, and all conversations are encrypted end-to-end.",
  },
  {
    question: "Do I need to connect my bank account?",
    answer:
      "No, connecting your bank account is completely optional. You can use aiexpense as a standalone expense tracker by simply chatting with our AI about your expenses.",
  },
  {
    question: "Is there a subscription fee?",
    answer:
      "aiexpense will offer both free and premium tiers. The basic tracking features will always be free, while advanced insights and integrations will be part of our premium plan.",
  },
  {
    question: "Will aiexpense work with my existing budgeting system?",
    answer:
      "We're working on integrations with popular financial tools and services. If you have a specific request, please let us know after signing up for the waitlist!",
  },
];

const FAQSection = () => {
  return (
    <section id="faqs" className="py-16 md:py-24 bg-expense-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-bold font-display mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Get answers to common questions about aiexpense.
          </p>
        </div>

        <div className="max-w-[800px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="text-left font-medium py-4 hover:no-underline text-md">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
