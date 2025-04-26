import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
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
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using ConverTex, you agree to be bound by these
                Terms of Service and our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                2. Service Description
              </h2>
              <p>
                ConverTex provides currency conversion services and exchange
                rate information. While we strive for accuracy, we cannot
                guarantee that all rates and conversions are error-free.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                3. User Accounts
              </h2>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  You must provide accurate and complete information when
                  creating an account
                </li>
                <li>
                  You are responsible for maintaining the security of your
                  account credentials
                </li>
                <li>
                  You must notify us immediately of any unauthorized use of your
                  account
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                4. Acceptable Use
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Use the service for any illegal purposes</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the service</li>
                <li>
                  Use automated systems or software to extract data from our
                  service
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                5. Intellectual Property
              </h2>
              <p>
                All content and functionality on ConverTex is the exclusive
                property of ConverTex and its licensors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                6. Limitation of Liability
              </h2>
              <p>
                ConverTex is provided "as is" without any warranties. We are not
                liable for any damages arising from the use of our service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                7. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time.
                Continued use of the service after changes constitutes
                acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                8. Termination
              </h2>
              <p>
                We reserve the right to terminate or suspend access to our
                service immediately, without prior notice, for any violation of
                these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                9. Contact
              </h2>
              <p>
                For any questions regarding these terms, please contact us at:
              </p>
              <p className="mt-2">Email: Rupesh8299@gmail.com</p>
            </section>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>Last updated: April 27, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
