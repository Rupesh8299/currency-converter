import React from "react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">ConverTex</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-converter-blue"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 hover:text-converter-blue"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-converter-blue"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="mailto:Rupesh8299@gmail.com"
                  className="hover:text-converter-blue"
                >
                  Rupesh8299@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">About</h3>
            <p className="text-gray-600">
              ConverTex provides real-time currency conversion and exchange rate
              tracking for multiple currencies worldwide.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} ConverTex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
