import React from "react";
import { Instagram, Twitter, Facebook, Github } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container px-4 md:px-6 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-gradient font-display text-xl font-bold mb-4">
              aiexpense
            </h3>
            <p className="text-gray-600 mb-4">Your finances, one chat away.</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-expense-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-expense-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-expense-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-expense-600 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-expense-600">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-expense-600">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-expense-600">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-expense-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-expense-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-expense-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-expense-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">hello@aiexpense.ai</li>
              <li className="text-gray-600">San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500">
            © 2025 aiexpense. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 md:mt-0">
            Launching Soon on iOS & Android
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
