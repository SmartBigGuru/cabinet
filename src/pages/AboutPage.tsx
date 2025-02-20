import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight, Clock, Users, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">Where Kitchens Is Born And Family Memories Begin</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p className="text-xl leading-relaxed">
                At our company, we believe the kitchen is more than a room—it's the heart of the home. It's where Sunday pancakes turn into laughter, holiday dinners bring generations together, and gourmet dreams come to life.
              </p>
              
              <p className="text-xl leading-relaxed">
                Each cabinet, countertop, and design we create is crafted with care, inspired by the families and cooks who bring them to life. Whether it's a space for quiet morning coffees or bustling family feasts, we're honored to build the backdrop for your most cherished moments.
              </p>
              
              <p className="text-xl leading-relaxed italic font-medium text-gray-800">
                Let's design a kitchen that feels like home—because every great meal deserves a great story.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Users className="w-12 h-12 text-brand-mint mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">30+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Award className="w-12 h-12 text-brand-mint mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Heart className="w-12 h-12 text-brand-mint mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">98%</h3>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
            </div>

            {/* CTA Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <Link 
                to="/contact" 
                className="group bg-brand-mint p-8 rounded-lg hover:opacity-90 transition duration-300"
              >
                <Mail className="w-12 h-12 text-brand-dark mb-4" />
                <h3 className="text-2xl font-bold text-brand-dark mb-2">Get in Touch</h3>
                <p className="text-gray-700 mb-4">Ready to start your kitchen transformation? Let's discuss your vision.</p>
                <div className="flex items-center text-brand-dark font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Contact Us <ChevronRight className="w-5 h-5 ml-2" />
                </div>
              </Link>

              <div className="bg-gray-900 p-8 rounded-lg text-white">
                <Clock className="w-12 h-12 text-brand-mint mb-4" />
                <h3 className="text-2xl font-bold mb-2">Visit Our Showroom</h3>
                <p className="text-gray-300 mb-4">Experience our craftsmanship firsthand at our showroom.</p>
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    24 Molter Place, Bloomfield, NJ 07003
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    973-748-1177
                  </p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7897416477584!2d-74.19121562342987!3d40.77494597138325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3aa9b8f04c943%3A0x3c7f8d85973f8a0d!2s24%20Molter%20Pl%2C%20Bloomfield%2C%20NJ%2007003!5e0!3m2!1sen!2sus!4v1710644183488!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;