import React from 'react';
import { Shield, Clock, PenTool, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'All our cabinets are built with premium materials and backed by our lifetime warranty.'
  },
  {
    icon: Clock,
    title: 'Fast Installation',
    description: 'Professional installation team ensures quick and efficient setup of your new cabinets.'
  },
  {
    icon: PenTool,
    title: 'Custom Solutions',
    description: 'Tailored designs to match your specific needs and space requirements.'
  },
  {
    icon: Award,
    title: 'Expert Craftsmanship',
    description: '30+ years of experience in creating beautiful, durable cabinetry.'
  }
];

const WhyChooseUs = () => {
  return (
    <div>
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-4 md:p-6 rounded-lg hover:bg-gray-50 transition duration-300">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-brand-mint" />
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default WhyChooseUs;