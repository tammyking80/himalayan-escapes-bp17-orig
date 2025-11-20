import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: 'shimla',
    name: 'Shimla',
    tagline: 'The Queen of Hills',
    description: 'The capital city of Himachal Pradesh, Shimla is a charming hill station known for its colonial architecture, pleasant weather, and scenic beauty. Once the summer capital of British India, it retains its old-world charm with heritage buildings, churches, and the famous Mall Road.',
    image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: [
      'Mall Road and Ridge',
      'Jakhu Temple',
      'Christ Church',
      'Kufri - Adventure Activities',
      'Viceregal Lodge',
      'Toy Train Ride',
      'Tara Devi Temple',
      'Summer Hill'
    ],
    bestTime: 'March to June and December to February',
    activities: ['Sightseeing', 'Shopping', 'Trekking', 'Ice Skating', 'Toy Train Ride'],
    distanceFromShimla: '0 km',
    travelTime: 'Base Location',
    altitude: '2,205 meters',
    temperature: {
      summer: '15°C to 30°C',
      winter: '-2°C to 10°C'
    }
  },
  {
    id: 'manali',
    name: 'Manali',
    tagline: 'Valley of Gods',
    description: 'Nestled in the Kullu Valley, Manali is a high-altitude Himalayan resort town famous for its cool climate and snow-capped mountains. A paradise for adventure enthusiasts and nature lovers, it offers stunning landscapes, ancient temples, and thrilling activities.',
    image: 'https://images.pexels.com/photos/1483681/pexels-photo-1483681.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: [
      'Rohtang Pass',
      'Solang Valley',
      'Hadimba Temple',
      'Old Manali',
      'Beas River',
      'Vashisht Hot Springs',
      'Manu Temple',
      'Jogini Falls'
    ],
    bestTime: 'October to June',
    activities: ['Paragliding', 'Skiing', 'River Rafting', 'Trekking', 'Mountain Biking'],
    distanceFromShimla: '250 km',
    travelTime: '7-8 hours',
    altitude: '2,050 meters',
    temperature: {
      summer: '10°C to 25°C',
      winter: '-15°C to 5°C'
    }
  },
  {
    id: 'dharamshala',
    name: 'Dharamshala',
    tagline: 'Little Lhasa of India',
    description: 'The residence of His Holiness the Dalai Lama, Dharamshala is a spiritual and cultural hub. Divided into Lower and Upper Dharamshala (McLeod Ganj), it offers a unique blend of Tibetan and Indian culture, surrounded by dense pine and deodar forests.',
    image: 'https://images.pexels.com/photos/18357700/pexels-photo-18357700.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: [
      'McLeod Ganj',
      'Dalai Lama Temple',
      'Bhagsu Waterfall',
      'Triund Trek',
      'Namgyal Monastery',
      'Tibet Museum',
      'St. John Church',
      'Dal Lake'
    ],
    bestTime: 'March to June and September to November',
    activities: ['Trekking', 'Meditation', 'Temple Visits', 'Shopping', 'Nature Walks'],
    distanceFromShimla: '235 km',
    travelTime: '7 hours',
    altitude: '1,457 meters',
    temperature: {
      summer: '22°C to 38°C',
      winter: '0°C to 15°C'
    }
  },
  {
    id: 'kullu',
    name: 'Kullu',
    tagline: 'Valley of Gods',
    description: 'Famous for its Dussehra festival and lush valleys, Kullu is situated on the banks of the Beas River. Known for its apple orchards, serene landscapes, and adventure activities, it serves as the gateway to the Kullu-Manali valley.',
    image: 'https://images.pexels.com/photos/8350672/pexels-photo-8350672.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: [
      'Great Himalayan National Park',
      'Raghunath Temple',
      'Bijli Mahadev Temple',
      'Kasol nearby',
      'Manikaran Sahib',
      'Parvati Valley',
      'River Rafting',
      'Apple Orchards'
    ],
    bestTime: 'October to June',
    activities: ['River Rafting', 'Trekking', 'Camping', 'Fishing', 'Nature Photography'],
    distanceFromShimla: '235 km',
    travelTime: '7 hours',
    altitude: '1,278 meters',
    temperature: {
      summer: '10°C to 30°C',
      winter: '-5°C to 12°C'
    }
  },
  {
    id: 'spiti-valley',
    name: 'Spiti Valley',
    tagline: 'The Middle Land',
    description: 'A cold desert mountain valley located high in the Himalayas, Spiti Valley is known for its Buddhist monasteries, barren landscapes, and pristine beauty. It offers one of the most challenging yet rewarding travel experiences in India.',
    image: 'https://images.pexels.com/photos/10498441/pexels-photo-10498441.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: [
      'Key Monastery',
      'Chandratal Lake',
      'Kaza Town',
      'Kibber Village',
      'Pin Valley National Park',
      'Dhankar Monastery',
      'Komic Village',
      'Langza Buddha Statue'
    ],
    bestTime: 'May to October',
    activities: ['High Altitude Trekking', 'Monastery Visits', 'Photography', 'Mountain Biking', 'Stargazing'],
    distanceFromShimla: '412 km',
    travelTime: '12-14 hours',
    altitude: '3,810 meters',
    temperature: {
      summer: '5°C to 15°C',
      winter: '-30°C to -10°C'
    }
  },
  {
    id: 'kasol',
    name: 'Kasol',
    tagline: 'Mini Israel of India',
    description: 'A small village in Himachal Pradesh situated along the banks of the Parvati River, Kasol has become a popular destination for backpackers and nature lovers. Known for its Israeli cafes, trekking trails, and laid-back hippie culture.',
    image: 'https://images.pexels.com/photos/8350765/pexels-photo-8350765.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: [
      'Parvati River',
      'Chalal Trek',
      'Kheerganga Trek',
      'Tosh Village',
      'Manikaran Hot Springs',
      'Israeli Cafes',
      'Malana Village',
      'Rasol Trek'
    ],
    bestTime: 'March to June and October to December',
    activities: ['Trekking', 'Camping', 'River Side Relaxation', 'Village Exploration', 'Photography'],
    distanceFromShimla: '270 km',
    travelTime: '8 hours',
    altitude: '1,640 meters',
    temperature: {
      summer: '15°C to 30°C',
      winter: '-5°C to 10°C'
    }
  },
  {
    id: 'dalhousie',
    name: 'Dalhousie',
    tagline: 'Little Switzerland of India',
    description: 'Named after British Governor-General Lord Dalhousie, this hill station is built on five hills and offers panoramic views of snow-capped peaks. Known for its colonial architecture, churches, and Victorian-era mansions.',
    image: 'https://images.pexels.com/photos/13223373/pexels-photo-13223373.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: [
      'Khajjiar - Mini Switzerland',
      'Kalatop Wildlife Sanctuary',
      'St. John Church',
      'Panchpula',
      'Dainkund Peak',
      'Satdhara Falls',
      'Subhash Baoli',
      'Ganji Pahari'
    ],
    bestTime: 'March to June and September to November',
    activities: ['Sightseeing', 'Horse Riding', 'Nature Walks', 'Photography', 'Shopping'],
    distanceFromShimla: '325 km',
    travelTime: '9 hours',
    altitude: '2,036 meters',
    temperature: {
      summer: '15°C to 30°C',
      winter: '-5°C to 10°C'
    }
  },
  {
    id: 'kasauli',
    name: 'Kasauli',
    tagline: 'Serene Colonial Hill Station',
    description: 'A small cantonment town known for its Victorian architecture and tranquil atmosphere. Kasauli offers a perfect weekend getaway with its pine and cedar forests, colonial-era buildings, and stunning sunset views.',
    image: 'https://images.pexels.com/photos/13708344/pexels-photo-13708344.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: [
      'Monkey Point',
      'Christ Church',
      'Kasauli Brewery',
      'Gilbert Trail',
      'Sunset Point',
      'Lower Mall Road',
      'Kasauli Club',
      'Baptist Church'
    ],
    bestTime: 'March to June and September to November',
    activities: ['Nature Walks', 'Bird Watching', 'Heritage Walks', 'Photography', 'Relaxation'],
    distanceFromShimla: '77 km',
    travelTime: '2.5 hours',
    altitude: '1,927 meters',
    temperature: {
      summer: '15°C to 30°C',
      winter: '0°C to 15°C'
    }
  },
  {
    id: 'mcleodganj',
    name: 'McLeod Ganj',
    tagline: 'Spiritual Heart of Himachal',
    description: 'Upper Dharamshala, popularly known as McLeod Ganj, is the home of the Tibetan spiritual leader Dalai Lama. A perfect blend of Tibetan culture and Himalayan beauty, it attracts spiritual seekers, trekkers, and culture enthusiasts.',
    image: 'https://images.pexels.com/photos/13730596/pexels-photo-13730596.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: [
      'Tsuglagkhang Complex',
      'Bhagsu Waterfall',
      'Triund Trek',
      'Tibetan Market',
      'Norbulingka Institute',
      'St. John in Wilderness',
      'Dharamkot',
      'Naddi Viewpoint'
    ],
    bestTime: 'March to June and September to December',
    activities: ['Trekking', 'Meditation Courses', 'Tibetan Culture', 'Yoga', 'Shopping'],
    distanceFromShimla: '235 km',
    travelTime: '7 hours',
    altitude: '2,082 meters',
    temperature: {
      summer: '20°C to 35°C',
      winter: '0°C to 15°C'
    }
  },
  {
    id: 'kinnaur',
    name: 'Kinnaur',
    tagline: 'Land of Gods and Apple Orchards',
    description: 'A tribal district in the heart of the Himalayas, Kinnaur is known for its apple orchards, Buddhist monasteries, and stunning mountain landscapes. The region offers a unique cultural experience with its ancient villages and traditions.',
    image: 'https://images.pexels.com/photos/13074645/pexels-photo-13074645.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlights: [
      'Kalpa',
      'Chitkul - Last Indian Village',
      'Sangla Valley',
      'Nako Lake',
      'Kamru Fort',
      'Apple Orchards',
      'Reckong Peo',
      'Kinnaur Kailash'
    ],
    bestTime: 'April to October',
    activities: ['Village Tourism', 'Apple Picking', 'Trekking', 'Monastery Visits', 'Photography'],
    distanceFromShimla: '230 km',
    travelTime: '8 hours',
    altitude: '2,320 meters',
    temperature: {
      summer: '10°C to 25°C',
      winter: '-10°C to 5°C'
    }
  }
];
