
import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">Popular Currencies</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline">World Currencies</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">New Zealand Currency</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Egypt Currency</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Sweden Currency</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Chinese Currency</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Recent Conversions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline">8050 UAH to RUB</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">12500 MMK to USD</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">1.1 Million BTC to INR</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">250000 NGN to GHS</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">48 USD to INR</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Misc. Conversions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline">₹ to USD</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">₹ to EUR</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">₹ to Pound</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">1 PHP to AUD</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">1 Million Dollars in Rupees</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline">Home</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">About</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Privacy</a>
              </li>
            </ul>
            
            <div className="mt-6 flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-converter-blue">
                <img src="/lovable-uploads/5e64dcc0-975d-4e73-a682-e24d7800503b.png" alt="Tradays" className="h-8" />
              </a>
              <a href="#" className="text-gray-600 hover:text-converter-blue">
                <img src="/lovable-uploads/795c00ec-ec54-43cf-98fd-f54828a11251.png" alt="MetaTrader" className="h-8" />
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="text-center text-sm text-gray-500">
          <p>Copyright 2010-2025, ConverTex</p>
          <p className="mt-2">This website uses cookies to ensure you get the best experience on our website</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

