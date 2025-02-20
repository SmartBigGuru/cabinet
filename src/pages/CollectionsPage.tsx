import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const countertops = [
  {
    id: 'quartz',
    name: 'QUARTZ COUNTERTOPS',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Elegant and durable surfaces'
  },
  {
    id: 'granite',
    name: 'GRANITE COUNTERTOPS',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Timeless natural stone beauty'
  },
  {
    id: 'marble',
    name: 'MARBLE COUNTERTOPS',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Luxurious classic elegance'
  },
  {
    id: 'quartzite',
    name: 'QUARTZITE COUNTERTOPS',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Natural durability and style'
  }
];

const cabinets = [
  {
    id: 'modern',
    name: 'MODERN CABINETS',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Sleek contemporary designs'
  },
  {
    id: 'traditional',
    name: 'TRADITIONAL CABINETS',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Timeless classic styles'
  },
  {
    id: 'custom',
    name: 'CUSTOM CABINETS',
    image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Tailored to your needs'
  }
];

const CollectionGrid = ({ items, title, subtitle }: { 
  items: typeof countertops | typeof cabinets; 
  title: string;
  subtitle: string;
}) => (
  <div className="mb-20">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-[#8B6E4F] mb-4">{title}</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Link
          key={item.id}
          to={`/collections/${item.id}`}
          className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
        >
          <img 
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white text-center">
              {item.name}
            </h3>
            <p className="text-white/90 text-center mt-2">
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

const CollectionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">Discover Our Premium Collections</h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Explore our curated selection of luxury countertops and cabinetry. Each piece is crafted with precision 
              and designed to transform your space into something extraordinary.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact"
                className="bg-brand-mint text-brand-dark px-8 py-3 rounded-md hover:opacity-90 transition duration-300 flex items-center"
              >
                Schedule Consultation
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-white text-brand-dark px-8 py-3 rounded-md hover:bg-brand-light transition duration-300"
              >
                Visit Showroom
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-16">
          <nav className="flex text-gray-500 text-sm">
            <Link to="/" className="hover:text-brand-dark">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Collections</span>
          </nav>
        </div>

        <CollectionGrid
          items={countertops}
          title="Premium Countertops"
          subtitle="Discover our selection of high-quality countertop materials, each chosen for its unique characteristics and lasting beauty."
        />

        <CollectionGrid
          items={cabinets}
          title="Custom Cabinetry"
          subtitle="Explore our range of cabinet styles, from modern to traditional, each crafted to bring both beauty and functionality to your space."
        />
      </div>
      </div>
    </div>
  );
};

export default CollectionsPage;