import React from "react";
import { MessageSquare, BarChart3, Receipt } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-10 w-10 text-expense-600" />,
    title: "Chat to log expenses",
    description:
      "Just tell our AI about your purchases in everyday language, and it'll categorize and record them automatically.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-expense-600" />,
    title: "Smart, real-time insights",
    description:
      "Get personalized insights about your spending habits as you go, with helpful tips to save more.",
  },
  {
    icon: <Receipt className="h-10 w-10 text-expense-600" />,
    title: "Scan receipts automatically",
    description:
      "Take a photo of your receipt and our AI will extract all the details instantly, no manual entry needed.",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-expense-50"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-bold font-display mb-4">
            Expense tracking that feels like a conversation
          </h2>
          <p className="text-gray-600 text-lg">
            No more complicated apps. aixpense brings the simplicity of chat to
            personal finance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center card-hover"
            >
              <div className="bg-expense-100 p-3 rounded-2xl mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
