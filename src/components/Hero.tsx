import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    caption: 'Transform Your Kitchen with Premium Solutions'
  },
  {
    url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    caption: 'Luxury Countertops & Custom Cabinetry'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    caption: 'Crafted for Your Dream Kitchen'
  },
  {
    url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    caption: 'Timeless Design, Superior Quality'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="relative min-w-full h-full"
            style={{
              backgroundImage: `url("${image.url}")`,
              backgroundSize: 'cover'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
              <div className="max-w-2xl text-white px-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">{image.caption}</h1>
                <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed">Discover our collection of handcrafted cabinets and luxurious countertops designed to elevate your home's aesthetic and functionality.</p>
                <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4">
                  <Link to="/collections" className="bg-brand-mint text-brand-dark px-8 py-3 rounded-md hover:opacity-90 transition duration-300 flex items-center">
                    Collections
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Link>
                  <a href="tel:973-748-1177" className="bg-white text-brand-dark px-8 py-3 rounded-md hover:bg-brand-light transition duration-300 text-center">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors z-10"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-brand-mint' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;