"use client";
import { Button } from "./ui/button";

export const handleScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Header = () => {
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-40">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-4">
        <div className="text-gradient font-display text-2xl font-bold">
          aixpense
        </div>
        <nav className="hidden md:flex items-center space-x-6 list-none">
          <li
            onClick={() => {
              handleScrollToSection("features");
            }}
            className="text-gray-600 hover:text-expense-600 transition-colors cursor-pointer"
          >
            Features
          </li>
          <li
            onClick={() => {
              handleScrollToSection("testimonials");
            }}
            className="text-gray-600 hover:text-expense-600 transition-colors cursor-pointer"
          >
            Testimonials
          </li>
          <li
            onClick={() => {
              handleScrollToSection("faqs");
            }}
            className="text-gray-600 hover:text-expense-600 transition-colors cursor-pointer"
          >
            FAQs
          </li>
        </nav>
        <div>
          <Button className="rounded-full bg-expense-600 hover:bg-expense-700 text-white px-4 py-2 text-sm font-medium">
            Try Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
