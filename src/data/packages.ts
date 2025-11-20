import { TourPackage } from '../types';

export const tourPackages: TourPackage[] = [
  {
    id: 'shimla-manali-classic',
    name: 'Shimla Manali Classic Tour',
    tagline: 'Experience the best of Himachal in 6 days',
    category: 'family',
    duration: '6 Days / 5 Nights',
    destinations: ['Shimla', 'Manali', 'Kullu', 'Solang Valley'],
    image: 'https://images.pexels.com/photos/1483681/pexels-photo-1483681.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: {
      twoPersons: 16500,
      threeFourPersons: 15300,
      fivePlusPersons: 14200,
      child: 11500
    },
    inclusions: [
      'Accommodation in 3-star hotels',
      'Daily breakfast and dinner',
      'All transfers and sightseeing by private vehicle',
      'Experienced driver cum guide',
      'All toll taxes and parking',
      'Rohtang Pass permit (subject to availability)'
    ],
    exclusions: [
      'Lunch and beverages',
      'Entry fees to monuments and activities',
      'Personal expenses',
      'Travel insurance',
      'Any items not mentioned in inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Shimla',
        description: 'Arrive at Shimla, check into hotel, evening walk on Mall Road',
        activities: ['Mall Road exploration', 'Ridge visit', 'Lakkar Bazaar shopping'],
        meals: ['Dinner'],
        accommodation: '3-star hotel in Shimla'
      },
      {
        day: 2,
        title: 'Shimla Local Sightseeing',
        description: 'Full day Shimla tour covering all major attractions',
        activities: ['Jakhu Temple', 'Christ Church', 'Viceregal Lodge', 'Kufri excursion'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-star hotel in Shimla'
      },
      {
        day: 3,
        title: 'Shimla to Manali',
        description: 'Scenic drive to Manali via Kullu, check-in at Manali',
        activities: ['Kullu Valley drive', 'Beas River views', 'Evening at leisure'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-star hotel in Manali'
      },
      {
        day: 4,
        title: 'Manali Local Tour',
        description: 'Explore the heritage and natural beauty of Manali',
        activities: ['Hadimba Temple', 'Vashisht Hot Springs', 'Old Manali', 'Club House'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-star hotel in Manali'
      },
      {
        day: 5,
        title: 'Solang Valley and Rohtang Pass',
        description: 'Adventure day at Solang Valley, Rohtang Pass visit (if open)',
        activities: ['Solang Valley activities', 'Snow activities', 'Photography'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-star hotel in Manali'
      },
      {
        day: 6,
        title: 'Departure from Manali',
        description: 'Checkout and departure with beautiful memories',
        activities: ['Shopping at Mall Road', 'Departure'],
        meals: ['Breakfast'],
        accommodation: 'N/A'
      }
    ],
    highlights: [
      'Visit to Rohtang Pass',
      'Solang Valley adventure activities',
      'Heritage sites of Shimla',
      'Scenic mountain drives',
      'Temple visits'
    ],
    difficulty: 'Easy'
  },
  {
    id: 'honeymoon-special',
    name: 'Romantic Himachal Honeymoon',
    tagline: 'Create memories that last a lifetime',
    category: 'honeymoon',
    duration: '7 Days / 6 Nights',
    destinations: ['Shimla', 'Manali', 'Kasol'],
    image: 'https://images.pexels.com/photos/8350765/pexels-photo-8350765.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: {
      twoPersons: 28500,
      threeFourPersons: 26000,
      fivePlusPersons: 24500,
      child: 19500
    },
    inclusions: [
      'Luxury 4-star accommodation',
      'Candlelight dinner once',
      'Room decoration on arrival',
      'All meals (breakfast and dinner)',
      'Private luxury vehicle',
      'Flower bouquet and cake',
      'Special couple photography session',
      'All transfers and sightseeing'
    ],
    exclusions: [
      'Lunch',
      'Adventure activity charges',
      'Personal expenses',
      'Travel insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Shimla - Begin Your Love Story',
        description: 'Arrive in romantic Shimla, decorated room awaits you',
        activities: ['Check-in to luxury hotel', 'Room decoration', 'Evening Mall Road walk'],
        meals: ['Dinner'],
        accommodation: '4-star hotel in Shimla'
      },
      {
        day: 2,
        title: 'Shimla Sightseeing and Romance',
        description: 'Explore scenic beauty of Shimla together',
        activities: ['Jakhu Temple', 'Kufri', 'Couple photography', 'Mall Road shopping'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: '4-star hotel in Shimla'
      },
      {
        day: 3,
        title: 'Shimla to Manali - Scenic Journey',
        description: 'Beautiful drive through mountains to Manali',
        activities: ['Scenic drive', 'Kullu Valley sightseeing', 'Check-in at Manali'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: '4-star hotel in Manali'
      },
      {
        day: 4,
        title: 'Manali Local Tour',
        description: 'Discover the charm of Manali together',
        activities: ['Hadimba Temple', 'Old Manali', 'Vashisht Hot Springs', 'Mall Road'],
        meals: ['Breakfast', 'Candlelight Dinner'],
        accommodation: '4-star hotel in Manali'
      },
      {
        day: 5,
        title: 'Solang Valley Adventure',
        description: 'Adventure and romance in Solang Valley',
        activities: ['Solang Valley', 'Adventure activities', 'Cable car ride', 'Photography'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: '4-star hotel in Manali'
      },
      {
        day: 6,
        title: 'Kasol Excursion - Nature and Peace',
        description: 'Day trip to serene Kasol and Parvati Valley',
        activities: ['Kasol village', 'Parvati River', 'Manikaran', 'Israeli cafes'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: '4-star hotel in Manali'
      },
      {
        day: 7,
        title: 'Departure with Sweet Memories',
        description: 'Checkout and departure',
        activities: ['Last minute shopping', 'Departure'],
        meals: ['Breakfast'],
        accommodation: 'N/A'
      }
    ],
    highlights: [
      'Candlelight dinner',
      'Room decoration',
      'Couple photography',
      'Luxury accommodation',
      'Romantic locations'
    ],
    difficulty: 'Easy'
  },
  {
    id: 'adventure-special',
    name: 'Himachal Adventure Trek',
    tagline: 'For the thrill seekers and adventure lovers',
    category: 'adventure',
    duration: '8 Days / 7 Nights',
    destinations: ['Manali', 'Solang Valley', 'Kasol', 'Kheerganga'],
    image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: {
      twoPersons: 22500,
      threeFourPersons: 20800,
      fivePlusPersons: 19200,
      child: 16500
    },
    inclusions: [
      'Accommodation in camps and hotels',
      'All meals during trek',
      'Professional trek guide',
      'Adventure activity sessions',
      'Camping equipment',
      'First aid and safety equipment',
      'All permits and forest charges'
    ],
    exclusions: [
      'Personal trekking gear',
      'Travel insurance (mandatory)',
      'Personal expenses',
      'Any additional activities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Manali',
        description: 'Reach Manali, briefing session, gear check',
        activities: ['Arrival', 'Trek briefing', 'Gear inspection'],
        meals: ['Dinner'],
        accommodation: 'Hotel in Manali'
      },
      {
        day: 2,
        title: 'Solang Valley Activities',
        description: 'Full day adventure activities',
        activities: ['Paragliding', 'Zorbing', 'Skiing (seasonal)', 'Cable car'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Hotel in Manali'
      },
      {
        day: 3,
        title: 'Manali to Kasol',
        description: 'Travel to Kasol, acclimatization',
        activities: ['Drive to Kasol', 'Parvati River', 'Village exploration'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Guesthouse in Kasol'
      },
      {
        day: 4,
        title: 'Kasol to Kheerganga Trek Start',
        description: 'Begin trek to Kheerganga',
        activities: ['Trek start from Barshaini', 'Forest trail', 'Reach Kheerganga'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Camp at Kheerganga'
      },
      {
        day: 5,
        title: 'Kheerganga - Hot Springs Day',
        description: 'Explore Kheerganga and relax in hot springs',
        activities: ['Hot spring bath', 'Photography', 'Parvati Kund visit'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Camp at Kheerganga'
      },
      {
        day: 6,
        title: 'Kheerganga to Kasol Trek Back',
        description: 'Descend back to Kasol',
        activities: ['Trek down', 'Evening at Kasol', 'Cafe hopping'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Guesthouse in Kasol'
      },
      {
        day: 7,
        title: 'Kasol to Manali - River Rafting',
        description: 'River rafting in Kullu, return to Manali',
        activities: ['River rafting', 'Return to Manali', 'Shopping'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Hotel in Manali'
      },
      {
        day: 8,
        title: 'Departure',
        description: 'Check out and depart',
        activities: ['Departure'],
        meals: ['Breakfast'],
        accommodation: 'N/A'
      }
    ],
    highlights: [
      'Kheerganga trek',
      'Paragliding at Solang',
      'River rafting',
      'Hot springs bath',
      'Mountain camping'
    ],
    difficulty: 'Moderate'
  },
  {
    id: 'spiti-expedition',
    name: 'Spiti Valley Expedition',
    tagline: 'Journey to the cold desert mountains',
    category: 'adventure',
    duration: '9 Days / 8 Nights',
    destinations: ['Shimla', 'Kalpa', 'Kaza', 'Chandratal', 'Manali'],
    image: 'https://images.pexels.com/photos/10498441/pexels-photo-10498441.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: {
      twoPersons: 32500,
      threeFourPersons: 30200,
      fivePlusPersons: 28500,
      child: 25000
    },
    inclusions: [
      'Accommodation in hotels and homestays',
      'All meals',
      'Experienced driver and guide',
      'Oxygen cylinders and first aid',
      'All permits and inner line permits',
      'Camping at Chandratal',
      'Monastery entry fees'
    ],
    exclusions: [
      'Personal expenses',
      'Travel insurance (mandatory)',
      'Additional food and beverages',
      'Any activity charges'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Shimla Arrival',
        description: 'Reach Shimla and acclimatization',
        activities: ['Rest', 'Evening walk', 'Briefing'],
        meals: ['Dinner'],
        accommodation: 'Hotel in Shimla'
      },
      {
        day: 2,
        title: 'Shimla to Kalpa',
        description: 'Journey through Kinnaur valley',
        activities: ['Drive to Kalpa', 'Kinnaur valley views', 'Kinner Kailash views'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Hotel in Kalpa'
      },
      {
        day: 3,
        title: 'Kalpa to Tabo',
        description: 'Visit ancient Tabo monastery',
        activities: ['Tabo monastery', 'Gue village', 'Dhankar'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Guesthouse in Tabo'
      },
      {
        day: 4,
        title: 'Tabo to Kaza',
        description: 'Reach Spiti headquarters',
        activities: ['Drive to Kaza', 'Acclimatization'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Hotel in Kaza'
      },
      {
        day: 5,
        title: 'Kaza Local Sightseeing',
        description: 'Explore Key, Kibber, and Langza',
        activities: ['Key Monastery', 'Kibber village', 'Langza Buddha', 'Comic village'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Hotel in Kaza'
      },
      {
        day: 6,
        title: 'Kaza to Chandratal',
        description: 'Journey to the Moon Lake',
        activities: ['Drive to Chandratal', 'Lake visit', 'Photography', 'Camping'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Camp at Chandratal'
      },
      {
        day: 7,
        title: 'Chandratal to Manali',
        description: 'Cross Kunzum Pass to Manali',
        activities: ['Kunzum Pass', 'Rohtang Pass', 'Reach Manali'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Hotel in Manali'
      },
      {
        day: 8,
        title: 'Manali Rest Day',
        description: 'Relax and recover in Manali',
        activities: ['Rest', 'Shopping', 'Local sightseeing'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Hotel in Manali'
      },
      {
        day: 9,
        title: 'Departure from Manali',
        description: 'Tour ends with memories',
        activities: ['Departure'],
        meals: ['Breakfast'],
        accommodation: 'N/A'
      }
    ],
    highlights: [
      'Chandratal Lake camping',
      'Key Monastery',
      'World\'s highest villages',
      'Kinnaur and Spiti valleys',
      'Ancient Buddhist culture'
    ],
    difficulty: 'Challenging'
  },
  {
    id: 'budget-weekend',
    name: 'Shimla Kufri Weekend Gateway',
    tagline: 'Quick escape from city life',
    category: 'weekend',
    duration: '3 Days / 2 Nights',
    destinations: ['Shimla', 'Kufri'],
    image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: {
      twoPersons: 8500,
      threeFourPersons: 7800,
      fivePlusPersons: 7200,
      child: 5500
    },
    inclusions: [
      'Budget hotel accommodation',
      'Breakfast and dinner',
      'Shimla and Kufri sightseeing',
      'All transfers',
      'Driver allowance'
    ],
    exclusions: [
      'Lunch',
      'Entry fees',
      'Personal expenses',
      'Activity charges'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Mall Road',
        description: 'Reach Shimla, evening at Mall Road',
        activities: ['Check-in', 'Mall Road', 'Ridge', 'Shopping'],
        meals: ['Dinner'],
        accommodation: 'Budget hotel'
      },
      {
        day: 2,
        title: 'Kufri and Local Sightseeing',
        description: 'Full day tour',
        activities: ['Kufri', 'Jakhu Temple', 'Christ Church', 'Scandal Point'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Budget hotel'
      },
      {
        day: 3,
        title: 'Departure',
        description: 'Checkout and leave',
        activities: ['Shopping', 'Departure'],
        meals: ['Breakfast'],
        accommodation: 'N/A'
      }
    ],
    highlights: [
      'Budget friendly',
      'Perfect weekend getaway',
      'All major attractions',
      'Shopping at Mall Road'
    ],
    difficulty: 'Easy'
  },
  {
    id: 'dharamshala-mcleodganj',
    name: 'Dharamshala McLeodganj Spiritual Tour',
    tagline: 'Find peace in the Himalayas',
    category: 'family',
    duration: '5 Days / 4 Nights',
    destinations: ['Dharamshala', 'McLeod Ganj', 'Triund'],
    image: 'https://images.pexels.com/photos/18357700/pexels-photo-18357700.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: {
      twoPersons: 14500,
      threeFourPersons: 13200,
      fivePlusPersons: 12000,
      child: 9500
    },
    inclusions: [
      'Hotel accommodation',
      'Breakfast and dinner',
      'All sightseeing and transfers',
      'Monastery visits',
      'Tibet Museum entry',
      'Triund trek guide'
    ],
    exclusions: [
      'Lunch',
      'Personal expenses',
      'Optional meditation courses',
      'Travel insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Dharamshala',
        description: 'Reach and settle in',
        activities: ['Check-in', 'Lower Dharamshala', 'Dal Lake'],
        meals: ['Dinner'],
        accommodation: 'Hotel in McLeod Ganj'
      },
      {
        day: 2,
        title: 'McLeod Ganj Spiritual Tour',
        description: 'Explore Tibetan culture',
        activities: ['Dalai Lama Temple', 'Tibet Museum', 'Namgyal Monastery', 'Tibetan Market'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Hotel in McLeod Ganj'
      },
      {
        day: 3,
        title: 'Triund Trek',
        description: 'Day trek to Triund',
        activities: ['Trek to Triund', 'Himalayan views', 'Trek back'],
        meals: ['Breakfast', 'Packed Lunch', 'Dinner'],
        accommodation: 'Hotel in McLeod Ganj'
      },
      {
        day: 4,
        title: 'Bhagsu and Dharamkot',
        description: 'Explore surrounding villages',
        activities: ['Bhagsu Waterfall', 'Bhagsunath Temple', 'Dharamkot', 'Naddi viewpoint'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Hotel in McLeod Ganj'
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Leave with peaceful mind',
        activities: ['Shopping', 'Departure'],
        meals: ['Breakfast'],
        accommodation: 'N/A'
      }
    ],
    highlights: [
      'Dalai Lama Temple visit',
      'Triund trek',
      'Tibetan culture immersion',
      'Peaceful atmosphere',
      'Mountain views'
    ],
    difficulty: 'Moderate'
  },
  {
    id: 'luxury-grand-tour',
    name: 'Grand Himachal Luxury Tour',
    tagline: 'Experience Himachal in ultimate comfort',
    category: 'luxury',
    duration: '11 Days / 10 Nights',
    destinations: ['Shimla', 'Kasauli', 'Dharamshala', 'Dalhousie', 'Manali'],
    image: 'https://images.pexels.com/photos/13223373/pexels-photo-13223373.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: {
      twoPersons: 55000,
      threeFourPersons: 48000,
      fivePlusPersons: 45000,
      child: 35000
    },
    inclusions: [
      '5-star luxury accommodation',
      'All meals with multi-cuisine options',
      'Luxury vehicle with professional chauffeur',
      'English speaking guide',
      'Airport transfers',
      'Welcome drinks and gifts',
      'Spa sessions',
      'Heritage walks',
      'All entry fees and permits'
    ],
    exclusions: [
      'Airfare',
      'Personal expenses',
      'Additional spa services',
      'Tips and gratuities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival Shimla - Royal Welcome',
        description: 'VIP arrival and luxury check-in',
        activities: ['Airport pickup', '5-star check-in', 'Welcome dinner'],
        meals: ['Dinner'],
        accommodation: '5-star hotel Shimla'
      },
      {
        day: 2,
        title: 'Shimla Heritage Tour',
        description: 'Colonial architecture and history',
        activities: ['Viceregal Lodge', 'Christ Church', 'Mall Road', 'Heritage walk'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: '5-star hotel Shimla'
      },
      {
        day: 3,
        title: 'Shimla to Kasauli',
        description: 'Scenic drive to quiet Kasauli',
        activities: ['Drive to Kasauli', 'Monkey Point', 'Gilbert Trail', 'Spa session'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Luxury resort Kasauli'
      },
      {
        day: 4,
        title: 'Kasauli to Dharamshala',
        description: 'Journey to spiritual Dharamshala',
        activities: ['Drive to Dharamshala', 'Evening at leisure'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: '5-star hotel Dharamshala'
      },
      {
        day: 5,
        title: 'Dharamshala Cultural Experience',
        description: 'Tibetan culture and spirituality',
        activities: ['Dalai Lama Temple', 'Norbulingka Institute', 'Tibetan cuisine lunch'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: '5-star hotel Dharamshala'
      },
      {
        day: 6,
        title: 'Dharamshala to Dalhousie',
        description: 'Colonial hill station experience',
        activities: ['Drive to Dalhousie', 'Colonial architecture', 'Evening walk'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Luxury hotel Dalhousie'
      },
      {
        day: 7,
        title: 'Khajjiar - Mini Switzerland',
        description: 'Day trip to stunning Khajjiar',
        activities: ['Khajjiar visit', 'Horse riding', 'Kalatop Wildlife', 'Spa'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Luxury hotel Dalhousie'
      },
      {
        day: 8,
        title: 'Dalhousie to Manali',
        description: 'Journey to adventure capital',
        activities: ['Scenic drive', 'Kullu Valley', 'Check-in at luxury resort'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: '5-star resort Manali'
      },
      {
        day: 9,
        title: 'Manali Luxury Experience',
        description: 'Best of Manali in comfort',
        activities: ['Hadimba Temple', 'Old Manali', 'Vashisht', 'Luxury dinner'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: '5-star resort Manali'
      },
      {
        day: 10,
        title: 'Solang Valley Premium Activities',
        description: 'Adventure with comfort',
        activities: ['Solang Valley', 'Cable car', 'Premium adventure activities', 'Spa'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: '5-star resort Manali'
      },
      {
        day: 11,
        title: 'Departure',
        description: 'Farewell to the mountains',
        activities: ['Leisure time', 'Shopping', 'Airport transfer'],
        meals: ['Breakfast'],
        accommodation: 'N/A'
      }
    ],
    highlights: [
      'Five-star luxury accommodation',
      'All meals included',
      'Spa sessions',
      'Heritage experiences',
      'Complete Himachal coverage',
      'Personal guide and luxury vehicle'
    ],
    difficulty: 'Easy'
  },
  {
    id: 'family-fun-special',
    name: 'Family Fun Himachal Tour',
    tagline: 'Perfect holiday for the entire family',
    category: 'family',
    duration: '7 Days / 6 Nights',
    destinations: ['Shimla', 'Manali', 'Kullu'],
    image: 'https://images.pexels.com/photos/8350672/pexels-photo-8350672.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: {
      twoPersons: 18500,
      threeFourPersons: 16800,
      fivePlusPersons: 15200,
      child: 12000
    },
    inclusions: [
      'Family-friendly hotels',
      'Breakfast and dinner',
      'All sightseeing',
      'Kid-friendly activities',
      'Family games evening',
      'All transfers',
      'Ice cream treats for kids'
    ],
    exclusions: [
      'Lunch',
      'Additional activities',
      'Personal expenses'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Shimla Arrival',
        description: 'Welcome to family fun',
        activities: ['Check-in', 'Mall Road', 'Toy train ride'],
        meals: ['Dinner'],
        accommodation: 'Family hotel Shimla'
      },
      {
        day: 2,
        title: 'Shimla Fun Day',
        description: 'Activities for all ages',
        activities: ['Kufri Fun World', 'Yak ride', 'Jakhu Temple', 'Shopping'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Family hotel Shimla'
      },
      {
        day: 3,
        title: 'Shimla to Manali',
        description: 'Scenic family drive',
        activities: ['Drive to Manali', 'Stops at viewpoints', 'Check-in'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Family hotel Manali'
      },
      {
        day: 4,
        title: 'Manali Local Tour',
        description: 'Explore with family',
        activities: ['Hadimba Temple', 'Club House', 'Mall Road', 'Games evening'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Family hotel Manali'
      },
      {
        day: 5,
        title: 'Solang Valley Family Day',
        description: 'Fun activities for everyone',
        activities: ['Solang Valley', 'Horse riding', 'Cable car', 'Snow play'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Family hotel Manali'
      },
      {
        day: 6,
        title: 'Kullu and Manikaran',
        description: 'Cultural family outing',
        activities: ['Kullu', 'Manikaran Gurudwara', 'River views', 'Langar'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Family hotel Manali'
      },
      {
        day: 7,
        title: 'Departure',
        description: 'Family memories created',
        activities: ['Shopping', 'Departure'],
        meals: ['Breakfast'],
        accommodation: 'N/A'
      }
    ],
    highlights: [
      'Kid-friendly activities',
      'Toy train ride',
      'Fun World at Kufri',
      'Family bonding time',
      'Safe and comfortable'
    ],
    difficulty: 'Easy'
  }
];
