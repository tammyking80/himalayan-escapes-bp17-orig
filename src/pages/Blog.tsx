import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'Best Time to Visit Himachal Pradesh: A Season-wise Guide',
      excerpt: 'Discover the ideal time to visit different destinations in Himachal based on weather, activities, and your travel preferences.',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Travel Tips',
      date: '2024-11-15',
      readTime: '8 min read'
    },
    {
      id: '2',
      title: 'Complete Packing Guide for Himachal Trip',
      excerpt: 'Everything you need to pack for your Himachal adventure, from clothing to essentials, based on season and destination.',
      image: 'https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Travel Tips',
      date: '2024-11-10',
      readTime: '6 min read'
    },
    {
      id: '3',
      title: 'Top 10 Adventure Activities in Manali',
      excerpt: 'From paragliding to river rafting, explore the most thrilling adventures that Manali has to offer for adrenaline junkies.',
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Adventure',
      date: '2024-11-05',
      readTime: '7 min read'
    },
    {
      id: '4',
      title: 'Spiti Valley Travel Guide: The Ultimate Adventure',
      excerpt: 'Everything you need to know about planning a trip to the mesmerizing Spiti Valley, including routes, permits, and must-visit places.',
      image: 'https://images.pexels.com/photos/10498441/pexels-photo-10498441.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Destination Guide',
      date: '2024-10-28',
      readTime: '12 min read'
    },
    {
      id: '5',
      title: 'Himachali Cuisine: Must-Try Local Dishes',
      excerpt: 'Discover the rich flavors of Himachal Pradesh with our guide to traditional local dishes you must try during your visit.',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Food & Culture',
      date: '2024-10-20',
      readTime: '5 min read'
    },
    {
      id: '6',
      title: 'Budget Travel Guide to Shimla and Manali',
      excerpt: 'Plan an affordable yet memorable trip to Shimla and Manali with our comprehensive budget travel guide.',
      image: 'https://images.pexels.com/photos/1483681/pexels-photo-1483681.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Budget Travel',
      date: '2024-10-15',
      readTime: '10 min read'
    },
    {
      id: '7',
      title: 'Kasol and Kheerganga Trek: Complete Guide',
      excerpt: 'A detailed guide to planning your Kasol trip and conquering the beautiful Kheerganga trek with tips and recommendations.',
      image: 'https://images.pexels.com/photos/8350765/pexels-photo-8350765.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Trekking',
      date: '2024-10-08',
      readTime: '9 min read'
    },
    {
      id: '8',
      title: 'Photography Tips for Himachal Pradesh',
      excerpt: 'Capture the stunning landscapes of Himachal like a pro with these essential photography tips and best locations.',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Photography',
      date: '2024-10-01',
      readTime: '6 min read'
    },
    {
      id: '9',
      title: 'Dharamshala and McLeod Ganj: Spiritual Journey',
      excerpt: 'Explore the spiritual side of Himachal with our guide to Dharamshala and McLeod Ganj, home of the Dalai Lama.',
      image: 'https://images.pexels.com/photos/18357700/pexels-photo-18357700.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Spiritual',
      date: '2024-09-25',
      readTime: '8 min read'
    }
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Travel Guide & Blog
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Expert tips, guides, and stories to help you plan your perfect Himachal trip
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <button className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Travel Advice?
          </h2>
          <p className="text-lg text-emerald-100 mb-6 max-w-2xl mx-auto">
            Our travel experts are here to help you plan the perfect Himachal adventure. Get personalized recommendations and answers to all your questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
