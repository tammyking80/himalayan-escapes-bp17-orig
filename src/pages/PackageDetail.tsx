import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Users, Check, X, ArrowRight, Clock, Mountain } from 'lucide-react';
import { tourPackages } from '../data/packages';
import { generateWhatsAppLink, packageInquiryMessage } from '../utils/whatsapp';

const PackageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const pkg = tourPackages.find((p) => p.id === id);

  if (!pkg) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Package Not Found</h1>
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
          >
            <ArrowRight size={20} className="rotate-180" />
            Back to Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${pkg.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/50"></div>
        <div className="relative z-10 h-full flex items-end pb-12">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                {pkg.duration}
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-1.5 rounded-full text-sm font-semibold capitalize">
                {pkg.category} Package
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              {pkg.name}
            </h1>
            <p className="text-xl text-slate-200 mb-6">{pkg.tagline}</p>
            <div className="flex flex-wrap gap-4 text-white">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-emerald-400" />
                <span>{pkg.destinations.join(' • ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-emerald-400" />
                <span>Difficulty: {pkg.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Package Overview</h2>
              <p className="text-slate-700 leading-relaxed mb-6">{pkg.tagline}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <Calendar className="text-emerald-600 mb-2" size={24} />
                  <div className="text-sm text-slate-600 mb-1">Duration</div>
                  <div className="font-bold text-slate-900">{pkg.duration}</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <Mountain className="text-emerald-600 mb-2" size={24} />
                  <div className="text-sm text-slate-600 mb-1">Destinations</div>
                  <div className="font-bold text-slate-900">{pkg.destinations.length} Places</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <Users className="text-emerald-600 mb-2" size={24} />
                  <div className="text-sm text-slate-600 mb-1">Group Type</div>
                  <div className="font-bold text-slate-900 capitalize">{pkg.category}</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Day-wise Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((day) => (
                  <div key={day.day} className="border-l-4 border-emerald-600 pl-6 relative">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {day.day}
                    </div>
                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-slate-900">{day.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-slate-600 mt-1">
                        <Clock size={14} />
                        <span>Day {day.day}</span>
                      </div>
                    </div>
                    <p className="text-slate-700 mb-3">{day.description}</p>
                    <div className="space-y-2">
                      {day.activities.length > 0 && (
                        <div>
                          <span className="text-sm font-semibold text-slate-700">Activities: </span>
                          <span className="text-sm text-slate-600">{day.activities.join(', ')}</span>
                        </div>
                      )}
                      {day.meals.length > 0 && (
                        <div>
                          <span className="text-sm font-semibold text-slate-700">Meals: </span>
                          <span className="text-sm text-slate-600">{day.meals.join(', ')}</span>
                        </div>
                      )}
                      <div>
                        <span className="text-sm font-semibold text-slate-700">Stay: </span>
                        <span className="text-sm text-slate-600">{day.accommodation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Check className="text-emerald-600" size={24} />
                  Inclusions
                </h3>
                <ul className="space-y-2">
                  {pkg.inclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-700">
                      <Check size={16} className="text-emerald-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <X className="text-red-600" size={24} />
                  Exclusions
                </h3>
                <ul className="space-y-2">
                  {pkg.exclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-700">
                      <X size={16} className="text-red-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Package Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {pkg.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Package Pricing</h3>

                <div className="space-y-4 mb-6">
                  <div className="border-b pb-4">
                    <div className="text-sm text-slate-600 mb-1">2 Persons (DBR)</div>
                    <div className="text-2xl font-bold text-emerald-600">
                      ₹{pkg.price.twoPersons.toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-500">per person</div>
                  </div>

                  <div className="border-b pb-4">
                    <div className="text-sm text-slate-600 mb-1">3-4 Persons (DBR)</div>
                    <div className="text-2xl font-bold text-emerald-600">
                      ₹{pkg.price.threeFourPersons.toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-500">per person</div>
                  </div>

                  <div className="border-b pb-4">
                    <div className="text-sm text-slate-600 mb-1">5+ Persons</div>
                    <div className="text-2xl font-bold text-emerald-600">
                      ₹{pkg.price.fivePlusPersons.toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-500">per person</div>
                  </div>

                  <div>
                    <div className="text-sm text-slate-600 mb-1">Child (5-10 Years)</div>
                    <div className="text-2xl font-bold text-emerald-600">
                      ₹{pkg.price.child.toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-500">per child</div>
                  </div>
                </div>

                <a
                  href={generateWhatsAppLink(packageInquiryMessage(pkg.name, pkg.id))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 rounded-lg font-semibold transition mb-3"
                >
                  Book on WhatsApp
                </a>

                <p className="text-xs text-center text-slate-600">
                  Prices are subject to availability and seasonality
                </p>
              </div>

              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
                <h4 className="font-bold text-slate-900 mb-3">Need Help?</h4>
                <p className="text-sm text-slate-700 mb-4">
                  Our travel experts are available to answer your questions and help you plan your perfect trip.
                </p>
                <a
                  href="tel:+919876543210"
                  className="block text-center bg-white hover:bg-slate-50 text-emerald-600 border-2 border-emerald-600 py-2 rounded-lg font-medium text-sm transition mb-2"
                >
                  Call: +91 98765 43210
                </a>
                <a
                  href="mailto:info@himalayanescapes.com"
                  className="block text-center bg-white hover:bg-slate-50 text-emerald-600 border-2 border-emerald-600 py-2 rounded-lg font-medium text-sm transition"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
