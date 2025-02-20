import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const cabinets = [
  {
    id: 1,
    category: 'quartz',
    name: 'Modern Shaker Cabinet',
    image: '/cabinets/IMG_2706.jpg',
    price: '$249.99',
    rating: 5,
  },
  {
    id: 2,
    category: 'granite',
    name: 'Classic White Cabinet',
    image: '/cabinets/IMG_2799.jpg',
    price: '$199.99',
    rating: 4,
  },
  {
    id: 3,
    category: 'porcelain',
    name: 'Farmhouse Style Cabinet',
    image: '/cabinets/IMG_2876.jpg',
    price: '$299.99',
    rating: 5,
  },
  {
    id: 4,
    category: 'marble',
    name: 'Luxury Marble Cabinet',
    image: '/cabinets/IMG_2890.jpg',
    price: '$499.99',
    rating: 5,
  },
  {
    id: 5,
    category: 'quartzite',
    name: 'Natural Quartzite Cabinet',
    image: '/cabinets/IMG_2895.jpg',
    price: '$399.99',
    rating: 5,
  },
  {
    id: 6,
    category: 'prefabricated',
    name: 'Pre-fab Modern Cabinet',
    image: '/cabinets/IMG_2958.jpg',
    price: '$179.99',
    rating: 4,
  },
];

const countertops = [
  {
    id: 101,
    category: 'quartz',
    name: 'Premium Quartz Countertop',
    image: '/countertops/IMG_2579.jpg',
    price: '$2,499.99',
    rating: 5,
  },
  {
    id: 102,
    category: 'marble',
    name: 'Marble Waterfall Island',
    image: '/countertops/IMG_2580.jpg',
    price: '$3,999.99',
    rating: 5,
  },
  {
    id: 103,
    category: 'granite',
    name: 'Granite Slab Counter',
    image: '/countertops/IMG_2581.jpg',
    price: '$1,999.99',
    rating: 4,
  },
  {
    id: 104,
    category: 'quartzite',
    name: 'Natural Quartzite Surface',
    image: '/countertops/IMG_2582.jpg',
    price: '$2,799.99',
    rating: 5,
  },
  {
    id: 105,
    category: 'porcelain',
    name: 'STILE® Porcelain Surface',
    image: '/countertops/IMG_2583.jpg',
    price: '$1,899.99',
    rating: 4,
  },
];

const ProductScroller = ({
  products,
  title,
}: {
  products: typeof cabinets | typeof countertops;
  title: string;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          {title}
        </h2>
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-none w-[280px] md:w-[350px] snap-start bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <Link
                    to={`/collections/${product.category}`}
                    className="absolute top-4 right-4 bg-brand-mint text-brand-dark px-3 py-1 rounded-full text-sm font-medium hover:opacity-90 transition duration-300"
                  >
                    {product.category.charAt(0).toUpperCase() +
                      product.category.slice(1)}
                  </Link>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-4">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-brand-mint fill-current"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-brand-mint text-brand-dark px-4 py-2 rounded-md hover:opacity-90 transition duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <>
      <ProductScroller products={cabinets} title="Featured Cabinets" />
      <ProductScroller products={countertops} title="Featured Countertops" />
    </>
  );
};

export default FeaturedProducts;
