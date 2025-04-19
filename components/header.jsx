"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { toast } from "sonner";
import {
  ArrowLeft,
  ConstructionIcon,
  Hammer,
  Sparkle,
  Timer,
} from "lucide-react";

export const handleScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Header = () => {
  const { push } = useRouter();
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-40">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-4">
        <div className="text-gradient font-display text-2xl font-bold">
          expainse
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
          <Button
            onClick={() => {
              window.location.href =
                "https://preview--expense-whisper-ai.lovable.app/dashboard";
            }}
            className="cursor-pointer rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-[#4e94fb] to-[#33da87]"
          >
            <Sparkle className="size-5" /> Try Demo{" "}
            <Sparkle className="size-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
