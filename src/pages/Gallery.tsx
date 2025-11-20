import { useState } from 'react';
import { destinations } from '../data/destinations';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'mountains', label: 'Mountains' },
    { id: 'temples', label: 'Temples & Culture' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'valleys', label: 'Valleys' }
  ];

  const galleryImages = [
    ...destinations.map(dest => ({
      src: dest.image,
      title: dest.name,
      category: dest.name.toLowerCase().includes('spiti') || dest.name.toLowerCase().includes('kinnaur') ? 'mountains' : 'valleys'
    })),
    {
      src: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Trekking Adventure',
      category: 'adventure'
    },
    {
      src: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Paragliding',
      category: 'adventure'
    },
    {
      src: 'https://images.pexels.com/photos/3779816/pexels-photo-3779816.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Buddhist Monastery',
      category: 'temples'
    },
    {
      src: 'https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'River Rafting',
      category: 'adventure'
    },
    {
      src: 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Camping',
      category: 'adventure'
    }
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1600)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/60"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Photo Gallery</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Glimpses of the breathtaking beauty of Himachal Pradesh
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Create Your Own Memories?
          </h2>
          <p className="text-lg text-emerald-100 mb-6 max-w-2xl mx-auto">
            Book your Himachal adventure today and capture moments that will last a lifetime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
