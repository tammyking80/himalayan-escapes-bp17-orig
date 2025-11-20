import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { generateWhatsAppLink, contactMessage } from '../utils/whatsapp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    numberOfPeople: '',
    travelDates: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = contactMessage(
      formData.name,
      formData.destination || 'Himachal Pradesh',
      parseInt(formData.numberOfPeople) || 2,
      formData.travelDates || 'Flexible'
    );
    const additionalInfo = formData.message ? `\n\nAdditional Information: ${formData.message}` : '';
    const fullMessage = message + additionalInfo + `\n\nContact Email: ${formData.email}\nPhone: ${formData.phone}`;

    window.open(generateWhatsAppLink(fullMessage), '_blank');
  };

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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Get in touch with us to plan your perfect Himachal adventure
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
              <p className="text-slate-600 mb-6">
                Fill out the form below and we'll get back to you via WhatsApp within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Preferred Destination
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                    >
                      <option value="">Select destination</option>
                      <option value="Shimla">Shimla</option>
                      <option value="Manali">Manali</option>
                      <option value="Dharamshala">Dharamshala</option>
                      <option value="Spiti Valley">Spiti Valley</option>
                      <option value="Kasol">Kasol</option>
                      <option value="Dalhousie">Dalhousie</option>
                      <option value="Multiple Destinations">Multiple Destinations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Number of People
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formData.numberOfPeople}
                      onChange={(e) => setFormData({ ...formData, numberOfPeople: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                      placeholder="2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Travel Dates
                    </label>
                    <input
                      type="text"
                      value={formData.travelDates}
                      onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                      placeholder="e.g., Dec 15-22, 2024"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your preferences, special requirements, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send via WhatsApp
                </button>

                <p className="text-sm text-slate-600 text-center">
                  By submitting this form, you'll be redirected to WhatsApp to complete your inquiry
                </p>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Office Address</h4>
                    <p className="text-slate-600 text-sm">
                      Mall Road, Shimla<br />
                      Himachal Pradesh 171001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Phone className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                    <a href="tel:+919876543210" className="text-emerald-600 hover:text-emerald-700 text-sm block mb-1">
                      +91 98765 43210
                    </a>
                    <p className="text-slate-600 text-xs">Available for calls & WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Mail className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <a href="mailto:info@himalayanescapes.com" className="text-emerald-600 hover:text-emerald-700 text-sm block mb-1">
                      info@himalayanescapes.com
                    </a>
                    <p className="text-slate-600 text-xs">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Clock className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600 text-sm">
                      Monday - Saturday<br />
                      9:00 AM - 7:00 PM IST<br />
                      <span className="text-xs">Sunday: By appointment</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Quick Response</h3>
              <p className="text-emerald-100 text-sm mb-4">
                Need immediate assistance? Contact us directly on WhatsApp for quick responses to your queries.
              </p>
              <a
                href={generateWhatsAppLink('Hello! I have a question about Himachal tour packages. Can you help me?')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-emerald-600 hover:bg-slate-100 text-center py-3 rounded-lg font-semibold transition"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Emergency Contact</h3>
              <p className="text-slate-600 text-sm mb-3">
                For travelers already on tour with us, our 24/7 emergency helpline is available:
              </p>
              <a
                href="tel:+919876543210"
                className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-lg font-semibold transition"
              >
                Emergency: +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
