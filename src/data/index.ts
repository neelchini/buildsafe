export type Mentor = {
  id: string;
  name: string;
  avatar: string;
  subject: string;
  university: string;
  rating: number;
  reviews: number;
  price: number;
  verified: boolean;
  about: string;
  languages: string[];
};

export type Therapist = {
  id: string;
  name: string;
  avatar: string;
  degree: string;
  rating: number;
  price: number;
  specialties: string[];
  language: 'English' | 'Bangla' | 'Both';
};

export const mentors: Mentor[] = [
  {
    id: 'md-karim',
    name: 'Md. Karim',
    avatar: 'https://i.pravatar.cc/100?img=12',
    subject: 'Physics',
    university: 'Dhaka University (DU)',
    rating: 4.9,
    reviews: 55,
    price: 800,
    verified: true,
    about: "Hello! I performed well in the DU admission test. It didn’t happen overnight. I’ve felt every emotion you’re going through—but I made it, and you will too. I believe in you. If you need help, reach out.",
    languages: ['Bangla', 'English']
  },
  {
    id: 'jhumka-das',
    name: 'Jhumka Das',
    avatar: 'https://i.pravatar.cc/100?img=32',
    subject: 'EEE',
    university: 'BUET',
    rating: 5.0,
    reviews: 41,
    price: 900,
    verified: true,
    about: "BUET EEE mentor focusing on problem solving patterns and time management strategies.",
    languages: ['Bangla']
  },
  {
    id: 'fahim-ahmed',
    name: 'Fahim Ahmed',
    avatar: 'https://i.pravatar.cc/100?img=51',
    subject: 'MBBS',
    university: 'DMCH',
    rating: 4.8,
    reviews: 28,
    price: 700,
    verified: false,
    about: "Medical college admission prep with a focus on revision cadence and mock tests.",
    languages: ['Both']
  }
];

export const therapists: Therapist[] = [
  {
    id: 'aisha-rahman',
    name: 'Dr. Aisha Rahman',
    avatar: 'https://i.pravatar.cc/100?img=5',
    degree: 'M.A. Clinical Psychology',
    rating: 4.9,
    price: 800,
    specialties: ['Anxiety & Stress', 'Academic Pressure'],
    language: 'Both'
  },
  {
    id: 'dahla-poar',
    name: 'Dahla Poar',
    avatar: 'https://i.pravatar.cc/100?img=36',
    degree: 'Licensed Therapist',
    rating: 4.7,
    price: 800,
    specialties: ['Depression', 'Exam Anxiety'],
    language: 'English'
  },
  {
    id: 'law-rowweed',
    name: 'Law Rowweed',
    avatar: 'https://i.pravatar.cc/100?img=67',
    degree: 'Licensed Therapist',
    rating: 4.8,
    price: 800,
    specialties: ['Stress', 'Motivation'],
    language: 'Bangla'
  }
];

export const articles = [
  { id: 'exam-anxiety', title: '5 Ways to Combat Exam Anxiety', date: '2025-10-01' },
  { id: 'study-tips', title: 'How to Plan Your Last 30 Days Before Exam', date: '2025-09-20' }
];

export const nextSession = {
  date: 'Mon, Oct 28',
  time: '10:00 AM',
  with: 'Dr. Aisha Rahman'
}
