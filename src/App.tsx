import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CategoryPage from './pages/CategoryPage';
import CollectionsPage from './pages/CollectionsPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand-dark text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:973-748-1177" className="flex items-center hover:text-brand-mint transition-colors duration-300">
              <Phone className="w-4 h-4 mr-2" />
              973-748-1177
            </a>
            <a href="mailto:info@sweetpeashome.com" className="hidden sm:flex items-center hover:text-brand-mint transition-colors duration-300">
              <Mail className="w-4 h-4 mr-2" />
              info@sweetpeashome.com
            </a>
          </div>
          <div className="flex items-center hover:text-brand-mint transition-colors duration-300 cursor-pointer">
            <MapPin className="w-4 h-4 mr-2" />
            Find a Showroom
          </div>
        </div>
      </div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collections/:categoryId" element={<CategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;