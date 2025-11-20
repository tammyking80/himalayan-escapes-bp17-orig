import { Award, Users, Heart, Shield, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1483681/pexels-photo-1483681.jpeg?auto=compress&cs=tinysrgb&w=1600)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/60"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Your trusted travel partner for Himachal adventures since 2016
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Welcome to Himalayan Escapes
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Based in the heart of Shimla, Himalayan Escapes has been crafting unforgettable travel experiences across Himachal Pradesh since 2016. What started as a small local travel service has grown into one of the region's most trusted tour operators, serving over 5,000 happy travelers from across India and around the world.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We specialize in creating personalized itineraries that showcase the best of Himachal Pradesh - from the snow-capped peaks of Spiti Valley to the serene monasteries of Dharamshala, from thrilling adventures in Manali to peaceful retreats in Kasauli. Our deep local knowledge, professional team, and commitment to excellence ensure that every journey with us becomes a cherished memory.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <Users className="text-emerald-600" size={32} />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">5000+</div>
            <div className="text-slate-600">Happy Travelers</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <Award className="text-emerald-600" size={32} />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">8+</div>
            <div className="text-slate-600">Years Experience</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <MapPin className="text-emerald-600" size={32} />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
            <div className="text-slate-600">Destinations Covered</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <Shield className="text-emerald-600" size={32} />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
            <div className="text-slate-600">Licensed & Insured</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 md:p-12 mb-16 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-emerald-100 leading-relaxed text-center mb-8">
              To provide authentic, safe, and memorable travel experiences that showcase the natural beauty, rich culture, and warm hospitality of Himachal Pradesh while promoting sustainable and responsible tourism practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Heart size={40} className="mx-auto mb-3" />
                <h3 className="font-bold mb-2">Passion</h3>
                <p className="text-emerald-100 text-sm">
                  We love what we do and it shows in every trip we organize
                </p>
              </div>
              <div className="text-center">
                <Shield size={40} className="mx-auto mb-3" />
                <h3 className="font-bold mb-2">Safety</h3>
                <p className="text-emerald-100 text-sm">
                  Your safety and security are our top priorities
                </p>
              </div>
              <div className="text-center">
                <Users size={40} className="mx-auto mb-3" />
                <h3 className="font-bold mb-2">Service</h3>
                <p className="text-emerald-100 text-sm">
                  Exceptional customer service from inquiry to journey's end
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-emerald-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Local Expertise</h3>
                <p className="text-slate-700">
                  Based in Shimla with deep knowledge of every corner of Himachal Pradesh. Our guides are locals who know hidden gems and best experiences.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Shield className="text-emerald-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Licensed & Insured</h3>
                <p className="text-slate-700">
                  Fully licensed travel agency with comprehensive insurance coverage. All our services meet government safety and quality standards.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Heart className="text-emerald-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Personalized Service</h3>
                <p className="text-slate-700">
                  No cookie-cutter packages. We customize every itinerary based on your preferences, interests, and budget to create your perfect trip.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Users className="text-emerald-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">24/7 Support</h3>
                <p className="text-slate-700">
                  Round-the-clock customer support during your trip. Our team is always available to assist you with any needs or emergencies.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Award className="text-emerald-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Best Value</h3>
                <p className="text-slate-700">
                  Competitive pricing with no hidden costs. Transparent billing and excellent value for money with quality accommodations and services.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Heart className="text-emerald-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Sustainable Tourism</h3>
                <p className="text-slate-700">
                  Committed to responsible travel practices that protect the environment and support local communities while providing authentic experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-full mb-4">
                <MapPin className="text-emerald-600" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Visit Us</h3>
              <p className="text-slate-700 text-sm">
                Mall Road, Shimla<br />
                Himachal Pradesh 171001
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-full mb-4">
                <Phone className="text-emerald-600" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-700 text-sm">
                +91 98765 43210<br />
                Mon - Sat: 9 AM - 7 PM
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-full mb-4">
                <Mail className="text-emerald-600" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-700 text-sm">
                info@himalayanescapes.com<br />
                We reply within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
