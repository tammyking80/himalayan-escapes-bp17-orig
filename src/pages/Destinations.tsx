import { useState } from 'react';
import { MapPin, Thermometer, Calendar, Mountain, ArrowRight, Clock } from 'lucide-react';
import { destinations } from '../data/destinations';
import { generateWhatsAppLink, customPackageMessage } from '../utils/whatsapp';

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Destinations' },
    { id: 'popular', label: 'Popular' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'peaceful', label: 'Peaceful' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1600)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/60"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Explore Himachal Pradesh
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Discover breathtaking destinations across the land of snow-capped mountains
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="md:flex">
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>

                <div className="md:w-3/5 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition">
                        {destination.name}
                      </h2>
                      <p className="text-emerald-600 font-medium text-sm">{destination.tagline}</p>
                    </div>
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <Mountain className="text-emerald-600" size={24} />
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {destination.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-start gap-2">
                      <Thermometer size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-slate-500">Altitude</div>
                        <div className="text-sm font-semibold text-slate-900">{destination.altitude}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-slate-500">From Shimla</div>
                        <div className="text-sm font-semibold text-slate-900">{destination.distanceFromShimla}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-slate-500">Travel Time</div>
                        <div className="text-sm font-semibold text-slate-900">{destination.travelTime}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-slate-500">Best Time</div>
                        <div className="text-sm font-semibold text-slate-900 line-clamp-1">
                          {destination.bestTime.split(' ')[0]}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs font-semibold text-slate-700 mb-2">TOP HIGHLIGHTS</div>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 4).map((highlight, index) => (
                        <span
                          key={index}
                          className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 4 && (
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-medium">
                          +{destination.highlights.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={generateWhatsAppLink(customPackageMessage(destination.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition"
                    >
                      Plan Trip
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="text-slate-500">Popular Activities: </span>
                    <span className="text-slate-900 font-medium">
                      {destination.activities.slice(0, 3).join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Decide Where to Go?
          </h2>
          <p className="text-lg text-emerald-100 mb-6 max-w-2xl mx-auto">
            Let our travel experts help you choose the perfect destination based on your preferences, budget, and travel dates.
          </p>
          <a
            href={generateWhatsAppLink('Hello! I need help choosing the right destination in Himachal Pradesh for my trip. Can you assist me?')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
          >
            Get Expert Advice
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
