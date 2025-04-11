import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-40">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-4">
        <div className="text-gradient font-display text-2xl font-bold">
          aixpense
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#features"
            className="text-gray-600 hover:text-expense-600 transition-colors"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="text-gray-600 hover:text-expense-600 transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#faq"
            className="text-gray-600 hover:text-expense-600 transition-colors"
          >
            FAQ
          </a>
        </nav>
        <div>
          <Button
            className="rounded-full hover:bg-expense-700 text-white text-sm"
            // onClick={handleTryDemo}
          >
            Try Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
