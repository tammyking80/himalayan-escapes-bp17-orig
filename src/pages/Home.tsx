import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, MapPin, Calendar, Shield, Heart, Camera, Mountain as MountainIcon, Compass, Sparkles } from 'lucide-react';
import { tourPackages } from '../data/packages';
import { destinations } from '../data/destinations';
import { activities } from '../data/activities';
import { testimonials } from '../data/testimonials';
import { generateWhatsAppLink, packageInquiryMessage, customPackageMessage } from '../utils/whatsapp';

const Home = () => {
  const featuredPackages = tourPackages.slice(0, 4);
  const featuredDestinations = destinations.slice(0, 6);
  const featuredActivities = activities.slice(0, 4);
  const latestTestimonials = testimonials.slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1483681/pexels-photo-1483681.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/30">
            <Sparkles size={18} className="text-emerald-400" />
            <span className="text-emerald-100 text-sm font-medium">Since 2016 - Trusted by 5000+ Travelers</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover the Magic of<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Himachal Pradesh
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Experience breathtaking mountains, ancient temples, and thrilling adventures with Himachal's premier travel agency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-xl"
            >
              Explore Tour Packages
              <ArrowRight size={20} />
            </Link>
            <a
              href={generateWhatsAppLink(customPackageMessage('Himachal Pradesh'))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              Plan Custom Trip
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <Users className="text-emerald-600" size={32} />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">5000+</div>
              <div className="text-slate-600">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <Calendar className="text-emerald-600" size={32} />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">8+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <MapPin className="text-emerald-600" size={32} />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-slate-600">Destinations</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <Award className="text-emerald-600" size={32} />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">4.9/5</div>
              <div className="text-slate-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Featured Tour Packages
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Handpicked packages designed for unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.duration}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition">
                    {pkg.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{pkg.tagline}</p>
                  <div className="flex items-center gap-2 mb-4 text-sm text-slate-600">
                    <MapPin size={16} className="text-emerald-600" />
                    <span className="line-clamp-1">{pkg.destinations.join(', ')}</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-emerald-600">
                      ₹{pkg.price.twoPersons.toLocaleString()}
                    </span>
                    <span className="text-sm text-slate-600">per person</span>
                  </div>
                  <Link
                    to={`/packages/${pkg.id}`}
                    className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg font-medium transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              View All Packages
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Explore Destinations
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From snow-capped peaks to serene valleys, discover the beauty of Himachal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredDestinations.map((dest) => (
              <Link
                key={dest.id}
                to="/destinations"
                className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{dest.name}</h3>
                  <p className="text-slate-200 text-sm mb-3">{dest.tagline}</p>
                  <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:gap-3 transition-all">
                    <span>Explore Now</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              View All Destinations
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Himalayan Escapes?
            </h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Your trusted partner for unforgettable Himachal adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-4">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Safe & Secure</h3>
              <p className="text-emerald-100">
                Licensed and registered travel agency with comprehensive travel insurance and 24/7 support
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-4">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Service</h3>
              <p className="text-emerald-100">
                Customized itineraries tailored to your preferences, budget, and travel style
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-4">
                <MountainIcon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
              <p className="text-emerald-100">
                Based in Shimla with 8+ years of experience and deep knowledge of Himachal
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Guides</h3>
              <p className="text-emerald-100">
                Professional, friendly guides with extensive knowledge of local culture and history
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Best Value</h3>
              <p className="text-emerald-100">
                Competitive pricing with no hidden costs, transparent billing and excellent service
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-4">
                <Compass size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Booking</h3>
              <p className="text-emerald-100">
                Easy booking process with flexible payment options and hassle-free cancellations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Popular Activities
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Adventure, culture, and nature experiences await you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredActivities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-xl font-bold text-white mb-1">{activity.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-slate-600 text-sm mb-3 line-clamp-2">{activity.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-slate-600">Difficulty:</span>
                    <span className="text-sm font-semibold text-emerald-600">{activity.difficulty}</span>
                  </div>
                  <Link
                    to="/activities"
                    className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg font-medium transition text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              View All Activities
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real experiences from real travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">"{testimonial.review}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.location}</div>
                  <div className="text-xs text-emerald-600 mt-1">{testimonial.package}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Camera size={48} className="mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Himalayan Adventure?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let us plan your perfect trip to Himachal Pradesh. Contact us today for personalized packages and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/packages"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              Browse Packages
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
