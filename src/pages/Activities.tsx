import { useState } from 'react';
import { MapPin, Calendar, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { activities } from '../data/activities';
import { generateWhatsAppLink, activityInquiryMessage } from '../utils/whatsapp';

const Activities = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Activities' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'nature', label: 'Nature' },
    { id: 'spiritual', label: 'Spiritual' }
  ];

  const filteredActivities = activities.filter(
    (activity) => selectedCategory === 'all' || activity.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1600)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/60"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Activities & Experiences
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              From thrilling adventures to peaceful cultural experiences
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{activity.name}</h3>
                  <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {activity.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-slate-700 mb-4 leading-relaxed">{activity.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                      <Calendar size={16} className="text-emerald-600" />
                      <span className="font-semibold">Best Season</span>
                    </div>
                    <p className="text-sm text-slate-900 pl-6">{activity.bestSeason}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                      <Clock size={16} className="text-emerald-600" />
                      <span className="font-semibold">Duration</span>
                    </div>
                    <p className="text-sm text-slate-900 pl-6">{activity.duration}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                      <TrendingUp size={16} className="text-emerald-600" />
                      <span className="font-semibold">Difficulty</span>
                    </div>
                    <p className="text-sm text-slate-900 pl-6">{activity.difficulty}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                      <span className="font-semibold">Price Range</span>
                    </div>
                    <p className="text-sm font-bold text-emerald-600 pl-6">{activity.price}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                    <MapPin size={16} className="text-emerald-600" />
                    <span className="font-semibold">Best Locations</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-6">
                    {activity.bestLocations.map((location, index) => (
                      <span
                        key={index}
                        className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                      >
                        {location}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 mb-4">
                  <div className="text-sm font-semibold text-slate-700 mb-2">What's Included</div>
                  <ul className="space-y-1">
                    {activity.includes.slice(0, 3).map((item, index) => (
                      <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-emerald-600 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={generateWhatsAppLink(activityInquiryMessage(activity.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 rounded-lg font-semibold transition"
                >
                  Book This Activity
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
