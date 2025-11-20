export interface Destination {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  bestTime: string;
  activities: string[];
  distanceFromShimla: string;
  travelTime: string;
  altitude: string;
  temperature: {
    summer: string;
    winter: string;
  };
}

export interface TourPackage {
  id: string;
  name: string;
  tagline: string;
  category: 'honeymoon' | 'family' | 'adventure' | 'luxury' | 'budget' | 'weekend' | 'extended';
  duration: string;
  destinations: string[];
  image: string;
  price: {
    twoPersons: number;
    threeFourPersons: number;
    fivePlusPersons: number;
    child: number;
  };
  inclusions: string[];
  exclusions: string[];
  itinerary: DayItinerary[];
  highlights: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
}

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: string[];
  accommodation: string;
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  category: 'adventure' | 'cultural' | 'nature' | 'spiritual';
  image: string;
  bestLocations: string[];
  bestSeason: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Difficult';
  price: string;
  requirements: string[];
  includes: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  package: string;
  date: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}
