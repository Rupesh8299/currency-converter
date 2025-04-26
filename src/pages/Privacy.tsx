import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-converter-blue">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              This privacy policy is maintained by the ConverTex development team:
            </p>
            <ul className="mt-2 text-sm text-gray-600">
              <li><strong>Team Lead:</strong> Rupesh Kumar Singh</li>
              <li><strong>Core Developers:</strong> Aman Gupta, Aquib Anwer</li>
            </ul>
          </div>

          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                1. Information We Collect
              </h2>
              <p>
                When you use ConverTex, we collect the following types of
                information:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Account information (email address and name)</li>
                <li>Usage data (currency conversion history)</li>
                <li>Device information (browser type, IP address)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                2. How We Use Your Information
              </h2>
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide and maintain our currency conversion service</li>
                <li>Send you important account notifications</li>
                <li>Improve our service and user experience</li>
                <li>Detect and prevent fraudulent activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                3. Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your
                personal information. However, no method of transmission over
                the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                4. Third-Party Services
              </h2>
              <p>We use third-party services for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Authentication (Firebase)</li>
                <li>Currency exchange rates (FreeCurrencyAPI)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                5. Contact Us
              </h2>
              <p>
                If you have any questions about our Privacy Policy, please
                contact us at:
              </p>
              <p className="mt-2">Email: Rupesh8299@gmail.com</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                6. Changes to This Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page.
              </p>
            </section>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>Last updated: April 27, 2025</p>
            <p className="mt-1">For inquiries about this policy, contact Team Lead Rupesh Kumar Singh at Rupesh8299@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
