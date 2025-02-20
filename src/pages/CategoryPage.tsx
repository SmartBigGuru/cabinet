import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star } from 'lucide-react';

const categoryProducts = {
  countertops: [
    {
      id: 101,
      category: 'quartz',
      name: 'Premium Quartz Countertop',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      price: '$2,499.99',
      rating: 5,
      description: 'Elegant and durable quartz countertop with seamless design, perfect for modern kitchens'
    },
    {
      id: 102,
      category: 'marble',
      name: 'Marble Waterfall Island',
      image: 'https://images.unsplash.com/photo-1600607687126-8a3414349a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      price: '$3,999.99',
      rating: 5,
      description: 'Stunning marble waterfall island with dramatic veining and luxurious finish'
    },
    {
      id: 103,
      category: 'granite',
      name: 'Granite Slab Counter',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      price: '$1,999.99',
      rating: 4,
      description: 'Natural granite countertop with unique patterns and exceptional durability'
    },
    {
      id: 104,
      category: 'quartzite',
      name: 'Natural Quartzite Surface',
      image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      price: '$2,799.99',
      rating: 5,
      description: 'Premium quartzite countertop combining natural beauty with superior strength'
    },
    {
      id: 105,
      category: 'porcelain',
      name: 'STILE® Porcelain Surface',
      image: 'https://images.unsplash.com/photo-1600607687339-1d9f159c0d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      price: '$1,899.99',
      rating: 4,
      description: 'Innovative porcelain countertop offering exceptional heat and scratch resistance'
    },
    {
      id: 106,
      category: 'prefabricated',
      name: 'Pre-fab Quartz Counter',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      price: '$1,499.99',
      rating: 4,
      description: 'Cost-effective prefabricated quartz countertop with quick installation'
    }
  ],
  quartz: [
    {
      id: 1,
      name: 'Modern Quartz Cabinet',
      image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      price: '$249.99',
      rating: 5,
      description: 'Contemporary design with durable quartz finish'
    },
    {
      id: 4,
      name: 'Quartz Premium Cabinet',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      price: '$299.99',
      rating: 4,
      description: 'Premium quartz cabinetry with modern aesthetics'
    }
  ],
  quartzite: [
    {
      id: 5,
      name: 'Natural Quartzite Cabinet',
      image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      price: '$399.99',
      rating: 5,
      description: 'Natural quartzite finish with elegant design'
    }
  ],
  granite: [
    {
      id: 2,
      name: 'Classic Granite Cabinet',
      image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      price: '$199.99',
      rating: 4,
      description: 'Traditional style with granite accents'
    }
  ],
  marble: [
    {
      id: 6,
      name: 'Luxury Marble Cabinet',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      price: '$499.99',
      rating: 5,
      description: 'Luxurious marble finish with premium features'
    }
  ],
  prefabricated: [
    {
      id: 7,
      name: 'Pre-fab Modern Cabinet',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      price: '$179.99',
      rating: 4,
      description: 'Efficient pre-fabricated design for quick installation'
    }
  ],
  porcelain: [
    {
      id: 3,
      name: 'STILE® Porcelain Cabinet',
      image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      price: '$299.99',
      rating: 5,
      description: 'Modern porcelain finish with STILE® technology'
    }
  ]
};

const categoryNames = {
  countertops: 'Kitchen Countertops',
  quartz: 'Quartz Collection',
  quartzite: 'Quartzite Collection',
  granite: 'Granite Collection',
  marble: 'Marble Collection',
  prefabricated: 'Prefabricated Collection',
  porcelain: 'STILE® Porcelain Collection'
};

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  if (!categoryId || !categoryProducts[categoryId as keyof typeof categoryProducts]) {
    return <div>Category not found</div>;
  }

  const products = categoryProducts[categoryId as keyof typeof categoryProducts];
  const categoryName = categoryNames[categoryId as keyof typeof categoryNames];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex text-gray-500 text-sm">
            <Link to="/" className="hover:text-brand-dark">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/collections" className="hover:text-brand-dark">Collections</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{categoryName}</span>
          </nav>
        </div>

        <h1 className="text-4xl font-bold text-center text-[#8B6E4F] mb-12">{categoryName}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center mb-4">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-mint fill-current" />
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-brand-dark bg-brand-mint px-4 py-2 rounded-md hover:opacity-90 transition duration-300">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;