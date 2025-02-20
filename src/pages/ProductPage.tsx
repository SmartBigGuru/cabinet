import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Extended product data
const productData = {
  1: {
    name: 'Modern Shaker Cabinet',
    price: '$249.99',
    rating: 5,
    description: `Our Modern Shaker Cabinet represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities. Each cabinet is meticulously crafted from premium hardwood, showcasing the natural beauty of the material while maintaining clean, modern lines that define today's aesthetic preferences.

The cabinet's versatile design makes it an ideal choice for various kitchen styles, from minimalist modern to transitional spaces. The premium soft-close hinges and drawers provide a luxurious feel while ensuring quiet, smooth operation that will last for years to come.

We understand that every kitchen is unique, which is why we offer custom sizing options to ensure a perfect fit for your space. The cabinet's durable construction and timeless design are backed by our lifetime warranty, giving you peace of mind in your investment.

Available in multiple finish options, these cabinets can be perfectly matched to your existing décor or serve as the foundation for a complete kitchen renovation. The attention to detail in every aspect of construction, from the precision joinery to the carefully selected hardware, reflects our commitment to quality and craftsmanship.`,
    features: [
      'Solid wood construction',
      'Soft-close doors and drawers',
      'Custom size options available',
      'Multiple finish options',
      'Lifetime warranty',
      'Premium grade plywood box construction',
      'Dovetail drawer construction',
      'Full-extension drawer glides',
      'Adjustable shelving',
      'Water-resistant finish',
      'Six-way adjustable hinges',
      'Available in various door styles',
      'Matching toe kicks included',
      'Optional interior organizers'
    ],
    images: [
      'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  },
  2: {
    name: 'Classic White Cabinet',
    price: '$199.99',
    rating: 4,
    description: 'The Classic White Cabinet offers timeless elegance with modern functionality. These versatile cabinets brighten any space while providing ample storage and durability.',
    features: [
      'Premium white finish',
      'Adjustable shelving',
      'Dovetail drawer construction',
      'Water-resistant coating',
      '25-year warranty'
    ],
    images: [
      'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600489000042-c4df14549455?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600489000166-c2086d79f5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1609347744403-2306e8a9ae27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1609347745859-68ba2018b1e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1609347746297-fb5cc44232a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  },
  3: {
    name: 'Farmhouse Style Cabinet',
    price: '$299.99',
    rating: 5,
    description: 'Embrace rustic charm with our Farmhouse Style Cabinet. Each piece is carefully crafted to bring warmth and character to your space while maintaining modern functionality.',
    features: [
      'Distressed finish options',
      'Solid wood panels',
      'Vintage-style hardware',
      'Adjustable shelving',
      'Lifetime warranty'
    ],
    images: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556911219-7e19680e7945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556911214-5ec6e8ce6b50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556911220-bec6393d0c62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  }
};

const ProductPage = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email'
  });

  const product = productData[Number(id)];
  if (!product) return <div>Product not found</div>;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex text-gray-500 text-sm">
            <a href="/" className="hover:text-brand-dark">Home</a>
            <span className="mx-2">/</span>
            <a href="/collections" className="hover:text-brand-dark">Collections</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Features Section */}
        <div className="lg:col-span-3 order-3 lg:order-1">
          <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
            <h3 className="text-xl font-semibold mb-4 text-brand-dark">Features & Specifications</h3>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-brand-mint rounded-full mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative lg:col-span-5 order-1 lg:order-2 bg-white p-6 rounded-lg shadow-sm">
          <div className="aspect-w-4 aspect-h-3 relative rounded-lg overflow-hidden mb-6">
            <img
              src={product.images[currentImageIndex]}
              alt={`${product.name} view ${currentImageIndex + 1}`}
              className="w-full h-[500px] object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentImageIndex === index ? 'bg-brand-mint' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          {/* Image Gallery */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-brand-dark">More Views</h3>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  className={`relative rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
                    currentImageIndex === index ? 'ring-2 ring-brand-mint' : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-32 object-cover"
                  />
                  <div className={`absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors ${
                    currentImageIndex === index ? 'bg-black/10' : ''
                  }`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:col-span-4 order-2 lg:order-3 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            {[...Array(product.rating)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-brand-mint fill-current" />
            ))}
            <span className="ml-2 text-gray-600">({product.rating}/5)</span>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-6">{product.price}</p>
          <div className="text-gray-600 mb-8 space-y-4 whitespace-pre-line">{product.description}</div>
          </div>

          {/* Quote Request Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-mint focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-mint focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-mint focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Preferred Contact Method</label>
                <select
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-mint focus:border-transparent"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-mint focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-mint text-brand-dark py-3 rounded-md hover:opacity-90 transition duration-300 font-semibold"
              >
                Request Quote
              </button>
            </form>
          </div>
          
          {/* Additional Info */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Shipping & Installation</h3>
            <div className="space-y-3 text-gray-600">
              <p>• Free delivery within 50 miles of our showroom</p>
              <p>• Professional installation available</p>
              <p>• Typical delivery time: 2-3 weeks</p>
              <p>• White glove delivery service included</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductPage;