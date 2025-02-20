import React from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What types of cabinets do you offer?",
    answer: "We offer a wide range of cabinet styles including modern, traditional, and transitional designs. Our materials include quartz, quartzite, granite, marble, prefabricated, and STILE® porcelain options."
  },
  {
    question: "Do you offer custom cabinet sizes?",
    answer: "Yes, we offer custom sizing for all our cabinet lines to ensure a perfect fit for your space. Our expert team will work with you to determine the ideal dimensions for your needs."
  },
  {
    question: "What is your installation process?",
    answer: "Our professional installation team handles the entire process, from initial measurements to final installation. We ensure minimal disruption to your home and maintain the highest quality standards."
  },
  {
    question: "How long does installation typically take?",
    answer: "Installation time varies depending on the project scope. A typical kitchen installation usually takes 2-3 days. We'll provide you with a specific timeline during your consultation."
  },
  {
    question: "Do you offer design services?",
    answer: "Yes, our experienced design team offers complimentary consultations to help you choose the perfect cabinets and layout for your space. We can create 3D renderings to visualize your project."
  },
  {
    question: "What is the warranty coverage?",
    answer: "Our cabinets come with a limited lifetime warranty covering manufacturing defects. Specific coverage details vary by product line and will be provided with your purchase."
  },
  {
    question: "How do I maintain my cabinets?",
    answer: "Regular cleaning with a soft, damp cloth and mild soap is recommended. Avoid harsh chemicals or abrasive cleaners. We provide detailed care instructions with every installation."
  },
  {
    question: "What is your service area?",
    answer: "We serve the greater New Jersey area from our Bloomfield location. Contact us for specific coverage details in your location."
  }
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex text-gray-500 text-sm">
            <Link to="/" className="hover:text-brand-dark">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">FAQ</span>
          </nav>
        </div>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#8B6E4F] mb-12">Frequently Asked Questions</h1>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
            <Link
              to="/contact"
              className="inline-block bg-brand-mint text-brand-dark px-8 py-3 rounded-md hover:opacity-90 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;