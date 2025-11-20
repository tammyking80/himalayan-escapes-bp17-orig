import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, ArrowRight, Filter } from 'lucide-react';
import { tourPackages } from '../data/packages';
import { generateWhatsAppLink, packageInquiryMessage } from '../utils/whatsapp';

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Packages' },
    { id: 'honeymoon', label: 'Honeymoon' },
    { id: 'family', label: 'Family' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'luxury', label: 'Luxury' },
    { id: 'budget', label: 'Budget' },
    { id: 'weekend', label: 'Weekend' }
  ];

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'budget', label: 'Under ₹10,000', max: 10000 },
    { id: 'mid', label: '₹10,000 - ₹20,000', min: 10000, max: 20000 },
    { id: 'premium', label: '₹20,000 - ₹35,000', min: 20000, max: 35000 },
    { id: 'luxury', label: 'Above ₹35,000', min: 35000 }
  ];

  const filteredPackages = tourPackages.filter((pkg) => {
    const categoryMatch = selectedCategory === 'all' || pkg.category === selectedCategory;

    let priceMatch = true;
    if (priceRange !== 'all') {
      const range = priceRanges.find(r => r.id === priceRange);
      if (range) {
        const price = pkg.price.twoPersons;
        priceMatch = (!range.min || price >= range.min) && (!range.max || price <= range.max);
      }
    }

    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/8350672/pexels-photo-8350672.jpeg?auto=compress&cs=tinysrgb&w=1600)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/60"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Tour Packages
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Carefully curated packages for every type of traveler and budget
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="text-emerald-600" size={20} />
            <h3 className="text-lg font-bold text-slate-900">Filter Packages</h3>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-3">Package Type</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    selectedCategory === category.id
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">Price Range</label>
            <div className="flex flex-wrap gap-2">
              {priceRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => setPriceRange(range.id)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    priceRange === range.id
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">
            {filteredPackages.length} {filteredPackages.length === 1 ? 'Package' : 'Packages'} Found
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.duration}
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                    {pkg.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{pkg.tagline}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin size={16} className="text-emerald-600 flex-shrink-0" />
                    <span className="line-clamp-1">{pkg.destinations.join(' • ')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Calendar size={16} className="text-emerald-600 flex-shrink-0" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Users size={16} className="text-emerald-600 flex-shrink-0" />
                    <span>Difficulty: {pkg.difficulty}</span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 mb-4">
                  <div className="text-xs text-slate-500 mb-1">Starting from</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-emerald-600">
                      ₹{pkg.price.twoPersons.toLocaleString()}
                    </span>
                    <span className="text-sm text-slate-600">per person</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    For 2 persons in double occupancy
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="text-xs font-semibold text-slate-700 mb-2">KEY HIGHLIGHTS</div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {pkg.highlights.slice(0, 3).map((highlight, index) => (
                      <span
                        key={index}
                        className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to={`/packages/${pkg.id}`}
                      className="text-center bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-lg font-medium text-sm transition"
                    >
                      View Details
                    </Link>
                    <a
                      href={generateWhatsAppLink(packageInquiryMessage(pkg.name, pkg.id))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition"
                    >
                      Inquire
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-slate-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <Filter className="text-slate-400" size={48} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No Packages Found</h3>
            <p className="text-slate-600 mb-6">Try adjusting your filters to see more options</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setPriceRange('all');
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Reset Filters
            </button>
          </div>
        )}

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Package?
          </h2>
          <p className="text-lg text-emerald-100 mb-6 max-w-2xl mx-auto">
            We specialize in creating personalized itineraries tailored to your preferences, budget, and travel style.
          </p>
          <a
            href={generateWhatsAppLink('Hello! I would like to create a custom tour package for Himachal Pradesh. Can you help me?')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
          >
            Request Custom Package
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Packages;
