import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex text-gray-500 text-sm">
            <Link to="/" className="hover:text-brand-dark">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Privacy Policy</span>
          </nav>
        </div>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#8B6E4F] mb-12">Privacy Policy</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-gray-600">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
                <li>Name and contact information</li>
                <li>Billing and shipping addresses</li>
                <li>Email address</li>
                <li>Phone number</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-gray-600">We use the information we collect to:</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
                <li>Process your orders and provide customer service</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
              <p className="text-gray-600">
                We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our business.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Security</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-gray-600">You have the right to:</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-2 text-gray-600">
                <p>Sweet Pea's Cabinetry</p>
                <p>24 Molter Place</p>
                <p>Bloomfield, NJ 07003</p>
                <p>Email: info@sweetpeashome.com</p>
                <p>Phone: 973-748-1177</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible.
              </p>
              <p className="text-gray-600 mt-2">
                Last Updated: March 17, 2024
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;