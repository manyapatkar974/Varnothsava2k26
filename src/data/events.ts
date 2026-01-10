export interface Event {
  id: string;
  name: string;
  category: "cultural" | "technical" | "sports" | "food" | "moto" | "annual" | "annual-day" | "college-band" | "extra";
  description: string;
  rules: string[];
  date: string;
  time: string;
  venue: string;
  price: number;
  image?: string;
  isFlagship?: boolean;
  requiresRegistration?: boolean;
  animationIndex?: number;
  isExternal?: boolean;
}

export const festivalDate = new Date("2026-03-11T09:00:00");

export const events: Event[] = [
  // External College Events - March 11-12
  // Annual Day
  {
    id: "annual-day",
    name: "Annual Day",
    category: "annual-day",
    description: "Celebrating the annual awards ceremony with prize distributions and cultural performances. A memorable day of achievements and recognition!",
    rules: [
      "Attendance is voluntary",
      "Valid ID required",
      "Dress code: Smart casual",
      "Registration not required"
    ],
    date: "March 11, 2026",
    time: "10:00 AM",
    venue: "Main Auditorium",
    price: 0,
    requiresRegistration: false,
    animationIndex: 0,
    isExternal: true,
  },
  // College Band Performance
  {
    id: "college-band",
    name: "College Band",
    category: "college-band",
    description: "Experience live performances from the college's talented band members playing your favorite hits and original compositions!",
    rules: [
      "Open for all students",
      "Seating on first-come-first-serve basis",
      "No outside recording",
      "Registration not required"
    ],
    date: "March 11, 2026",
    time: "2:00 PM",
    venue: "Open Air Theatre",
    price: 0,
    requiresRegistration: false,
    animationIndex: 1,
    isExternal: true,
  },
  // Yakshagana Performance
  {
    id: "yakshagana",
    name: "Yakshagana",
    category: "cultural",
    description: "Experience the ancient art of Yakshagana! A mesmerizing traditional performance filled with elaborate costumes, dramatic dialogue, and captivating storytelling.",
    rules: [
      "Open for all students",
      "No registration needed",
      "Seating on first-come-first-serve basis",
      "Photography allowed"
    ],
    date: "March 12, 2026",
    time: "4:00 PM",
    venue: "Open Air Theatre",
    price: 0,
    requiresRegistration: false,
    animationIndex: 9,
    isExternal: true,
  },
  // Tech Talk from Industry Experts
  {
    id: "tech-talk",
    name: "Tech Talk: AI & Innovation",
    category: "technical",
    description: "Industry experts share insights on artificial intelligence and future innovations. Interactive Q&A session included!",
    rules: [
      "For all students and staff",
      "Bring notebooks",
      "Registration not required",
      "Certificates of attendance will be provided"
    ],
    date: "March 12, 2026",
    time: "9:30 AM",
    venue: "Seminar Hall",
    price: 100,
    requiresRegistration: true,
    animationIndex: 2,
    isExternal: true,
  },
  // Startup Pitch Event
  {
    id: "startup-pitch",
    name: "Startup Pitch Evening",
    category: "technical",
    description: "Watch young entrepreneurs pitch their innovative ideas to investors. Network with founders and learn from their journey!",
    rules: [
      "Open to all",
      "Pitches by selected startups",
      "Registration not required",
      "Refreshments will be served"
    ],
    date: "March 12, 2026",
    time: "3:00 PM",
    venue: "Conference Room",
    price: 150,
    requiresRegistration: true,
    animationIndex: 3,
    isExternal: true,
  },
  // Inter-College Sports Tournament
  {
    id: "inter-college-sports",
    name: "Inter-College Sports Tournament",
    category: "sports",
    description: "An exciting inter-college sports competition featuring various games and competitions. Teams from different colleges compete for glory!",
    rules: [
      "Only inter-college teams",
      "Valid college ID required",
      "Team size varies by sport",
      "Registration not required"
    ],
    date: "March 11-12, 2026",
    time: "9:00 AM",
    venue: "Sports Complex",
    price: 250,
    requiresRegistration: true,
    animationIndex: 4,
    isExternal: true,
  },
  // Guest Lecture: Industry Leaders
  {
    id: "guest-lecture",
    name: "Guest Lecture: Industry Leaders Speak",
    category: "technical",
    description: "Renowned industry leaders and innovators share their experiences and insights. A unique opportunity to learn from the best in the field!",
    rules: [
      "Open to all students from partner colleges",
      "Seats limited - first come first serve",
      "No registration required",
      "Certificate of participation provided"
    ],
    date: "March 12, 2026",
    time: "2:00 PM",
    venue: "Main Auditorium",
    price: 100,
    requiresRegistration: true,
    animationIndex: 5,
    isExternal: true,
  },
  // Inter-College Cultural Exchange
  {
    id: "cultural-exchange",
    name: "Inter-College Cultural Exchange",
    category: "cultural",
    description: "Celebrate diverse cultures! Colleges showcase their unique cultural traditions, food, and performances. A vibrant celebration of diversity!",
    rules: [
      "Open for all college students",
      "Cultural performances welcome",
      "Food stalls encouraged",
      "Registration not required"
    ],
    date: "March 11, 2026",
    time: "12:00 PM",
    venue: "Open Air Theatre",
    price: 150,
    requiresRegistration: true,
    animationIndex: 6,
    isExternal: true,
  },
  // Gaming Tournament - External
  {
    id: "gaming-tournament-external",
    name: "Inter-College Gaming Championship",
    category: "technical",
    description: "Compete in popular gaming titles with teams from other colleges. Win amazing prizes and become the gaming champions!",
    rules: [
      "Inter-college teams only",
      "Games: PUBG, CS2, FIFA",
      "Valid college ID required",
      "Registration not required - walk-in teams welcome"
    ],
    date: "March 12, 2026",
    time: "10:00 AM",
    venue: "Gaming Arena",
    price: 300,
    requiresRegistration: true,
    animationIndex: 7,
    isExternal: true,
  },
  // Workshop: Emerging Technologies
  {
    id: "tech-workshop",
    name: "Workshop: Emerging Technologies & AI",
    category: "technical",
    description: "Hands-on workshop on latest technologies including AI, blockchain, and cloud computing. Learn from industry experts!",
    rules: [
      "For college students (all years)",
      "Limited seats - 100 participants",
      "Laptops recommended",
      "Registration not required"
    ],
    date: "March 12, 2026",
    time: "11:00 AM",
    venue: "Computer Lab Block",
    price: 200,
    requiresRegistration: true,
    animationIndex: 8,
    isExternal: true,
  },

  // Internal College Events - March 13-14
  // Moto Mania - Flagship
  {
    id: "moto-mania",
    name: "Moto Mania",
    category: "moto",
    description: "The ultimate flagship event! Experience thrilling bike stunts, races, and exhibitions. Feel the adrenaline rush!",
    rules: [
      "Valid driving license required",
      "Safety gear mandatory",
      "Vehicle inspection compulsory",
      "Follow all safety guidelines"
    ],
    date: "March 13, 2026",
    time: "2:00 PM",
    venue: "Racing Track",
    price: 0,
    requiresRegistration: false,
    isFlagship: true,
    animationIndex: 4,
    isExternal: false,
  },
  // Dance Fusion
  {
    id: "dance-fusion",
    name: "Dance Fusion",
    category: "cultural",
    description: "A spectacular dance competition featuring fusion of classical and contemporary styles. Show your moves and win exciting prizes!",
    rules: [
      "Team size: 4-12 members",
      "Time limit: 6-8 minutes",
      "Music must be submitted 2 days prior",
      "Props allowed with prior approval"
    ],
    date: "March 13, 2026",
    time: "10:00 AM",
    venue: "Main Auditorium",
    price: 300,
    requiresRegistration: true,
    animationIndex: 5,
    isExternal: false,
  },
  // Battle of Bands
  {
    id: "battle-of-bands",
    name: "Battle of Bands",
    category: "cultural",
    description: "Rock the stage with your band! The ultimate showdown of musical talent awaits. Bring your instruments and passion!",
    rules: [
      "Team size: 4-8 members",
      "Performance time: 10-15 minutes",
      "Own instruments required",
      "Sound check scheduled prior"
    ],
    date: "March 13, 2026",
    time: "6:00 PM",
    venue: "Open Air Theatre",
    price: 400,
    requiresRegistration: true,
    animationIndex: 6,
    isExternal: false,
  },
  // Fashion Runway
  {
    id: "fashion-show",
    name: "Fashion Runway",
    category: "cultural",
    description: "Walk the ramp with style and elegance. Showcase traditional and contemporary fashion. Dazzle the audience!",
    rules: [
      "Team size: 8-15 members",
      "Theme will be announced",
      "Time limit: 10 minutes",
      "Costumes must be appropriate"
    ],
    date: "March 14, 2026",
    time: "5:00 PM",
    venue: "Main Auditorium",
    price: 350,
    requiresRegistration: true,
    animationIndex: 7,
    isExternal: false,
  },
  // Voice of Varnothsava
  {
    id: "singing-solo",
    name: "Voice of Varnothsava",
    category: "cultural",
    description: "Solo singing competition for all music lovers. Any language, any genre! Let your voice shine!",
    rules: [
      "Solo performance only",
      "Time limit: 4-5 minutes",
      "Karaoke tracks allowed",
      "Live instruments optional"
    ],
    date: "March 13, 2026",
    time: "1:00 PM",
    venue: "Mini Auditorium",
    price: 150,
    requiresRegistration: true,
    animationIndex: 8,
    isExternal: false,
  },
  // Code Storm Hackathon
  {
    id: "hackathon",
    name: "Code Storm",
    category: "technical",
    description: "24-hour hackathon to build innovative solutions. Code, create, conquer! Collaborate with brilliant minds!",
    rules: [
      "Team size: 2-4 members",
      "Bring your own laptops",
      "Internet provided",
      "Problem statement on spot"
    ],
    date: "March 13-14, 2026",
    time: "9:00 AM",
    venue: "Computer Lab",
    price: 200,
    requiresRegistration: true,
    animationIndex: 9,
    isExternal: false,
  },
  // Robo Wars
  {
    id: "robo-wars",
    name: "Robo Wars",
    category: "technical",
    description: "Build robots and battle it out! May the best machine win. A thrilling display of engineering!",
    rules: [
      "Team size: 2-5 members",
      "Robot specs will be provided",
      "Safety guidelines mandatory",
      "Weapons must be approved"
    ],
    date: "March 14, 2026",
    time: "11:00 AM",
    venue: "Sports Ground",
    price: 250,
    requiresRegistration: true,
    animationIndex: 10,
    isExternal: false,
  },
  // Food Fest
  {
    id: "food-fest",
    name: "Food Fest",
    category: "food",
    description: "A culinary extravaganza featuring cuisines from around the world. Taste, enjoy, and vote for your favorites!",
    rules: [
      "Entry ticket required",
      "Food coupons available",
      "Cooking competitions open",
      "No outside food"
    ],
    date: "March 13-14, 2026",
    time: "All Day",
    venue: "Food Court",
    price: 100,
    requiresRegistration: true,
    animationIndex: 11,
    isExternal: false,
  },
  // Master Chef Challenge
  {
    id: "masterchef",
    name: "Master Chef Challenge",
    category: "food",
    description: "Cook your signature dish and impress the judges. Mystery ingredients, unlimited creativity!",
    rules: [
      "Solo or duo participation",
      "Time limit: 90 minutes",
      "Basic ingredients provided",
      "Signature dish required"
    ],
    date: "March 14, 2026",
    time: "12:00 PM",
    venue: "Food Court Stage",
    price: 200,
    requiresRegistration: true,
    animationIndex: 12,
    isExternal: false,
  },
  // Cricket Tournament
  {
    id: "cricket-tournament",
    name: "Cricket Thunder",
    category: "sports",
    description: "Fast-paced cricket tournament featuring exciting matches and amazing performances. Feel the cricket fever!",
    rules: [
      "Team size: 11 members",
      "T20 format",
      "Valid cricket kit required",
      "Tournament rules apply"
    ],
    date: "March 13-14, 2026",
    time: "3:00 PM",
    venue: "Cricket Ground",
    price: 300,
    requiresRegistration: true,
    animationIndex: 13,
    isExternal: false,
  },
  // Basketball Showdown
  {
    id: "basketball-showdown",
    name: "Basketball Showdown",
    category: "sports",
    description: "High-energy basketball matches with slam dunks and thrilling plays. Show your court skills!",
    rules: [
      "Team size: 5 members",
      "Standard basketball rules",
      "Professional or amateur teams",
      "Schedule will be announced"
    ],
    date: "March 13, 2026",
    time: "4:00 PM",
    venue: "Basketball Court",
    price: 250,
    requiresRegistration: true,
    animationIndex: 14,
    isExternal: false,
  },
  // Badminton Championship
  {
    id: "badminton-championship",
    name: "Badminton Championship",
    category: "sports",
    description: "Singles and doubles badminton competition with prizes for champions. Racquets ready!",
    rules: [
      "Singles and doubles categories",
      "Standard badminton rules",
      "Bring your own racquets",
      "Tournament brackets will be decided"
    ],
    date: "March 14, 2026",
    time: "10:00 AM",
    venue: "Sports Complex",
    price: 150,
    requiresRegistration: true,
    animationIndex: 15,
    isExternal: false,
  },
  // Photography Contest
  {
    id: "photography-contest",
    name: "Through the Lens",
    category: "cultural",
    description: "Showcase your photography skills! Capture moments and share stories through your lens.",
    rules: [
      "Digital or printed photos",
      "Theme will be announced",
      "Max 5 submissions per person",
      "Original work only"
    ],
    date: "March 14, 2026",
    time: "9:00 AM",
    venue: "Gallery Space",
    price: 100,
    requiresRegistration: true,
    animationIndex: 16,
    isExternal: false,
  },
  // Art & Painting Exhibition
  {
    id: "art-exhibition",
    name: "Art Canvas",
    category: "cultural",
    description: "Display your artistic creations! Paintings, sketches, and digital art welcome.",
    rules: [
      "All art forms welcome",
      "Canvas size: max 3x3 feet",
      "Judge selection will be done",
      "Awards for best artwork"
    ],
    date: "March 13, 2026",
    time: "11:00 AM",
    venue: "Art Gallery",
    price: 120,
    requiresRegistration: true,
    animationIndex: 17,
    isExternal: false,
  },
  // Debate Competition
  {
    id: "debate-competition",
    name: "Debate Showdown",
    category: "cultural",
    description: "Showcase your oratory skills in this thrilling debate competition. Voice your ideas with confidence!",
    rules: [
      "Team size: 2 members",
      "Topics will be announced",
      "Preliminary and finals rounds",
      "Time allocation: 7 minutes per side"
    ],
    date: "March 14, 2026",
    time: "2:00 PM",
    venue: "Auditorium Hall",
    price: 100,
    requiresRegistration: true,
    animationIndex: 18,
    isExternal: false,
  },
  // Quiz Competition
  {
    id: "quiz-competition",
    name: "Quiz Master",
    category: "technical",
    description: "Test your knowledge! Exciting quiz competition with questions across various domains.",
    rules: [
      "Team size: 2-3 members",
      "Multiple rounds",
      "Topics: General Knowledge & Tech",
      "Fastest finger first"
    ],
    date: "March 13, 2026",
    time: "3:00 PM",
    venue: "Seminar Room",
    price: 100,
    requiresRegistration: true,
    animationIndex: 19,
    isExternal: false,
  },
  // Stand-up Comedy Show
  {
    id: "comedy-show",
    name: "Comedy Night",
    category: "cultural",
    description: "Laugh out loud with hilarious stand-up comedy performances. A night full of fun and laughter!",
    rules: [
      "Open for all students",
      "Seating on first-come basis",
      "No offensive content",
      "Timing: 5-7 minutes per performer"
    ],
    date: "March 14, 2026",
    time: "6:00 PM",
    venue: "Open Air Theatre",
    price: 50,
    requiresRegistration: true,
    animationIndex: 20,
    isExternal: false,
  },
];

export const getEventsByCategory = (category: string) => {
  return events.filter((event) => event.category === category);
};

export const getEventById = (id: string) => {
  return events.find((event) => event.id === id);
};

// Event image mapping - maps event names/IDs to image links
export const eventImageMap: Record<string, string> = {
  "annual-day": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=500&fit=crop",
  "college-band": "https://cdn.vectorstock.com/i/500p/53/20/rock-band-vector-35320.jpg?w=600&h=500&fit=crop",
  "yakshagana": "https://sdmit.in/wp-content/uploads/2019/04/IMG_0173-01.jpeg-min-min.jpg?w=600&h=500&fit=crop",
  "tech-talk": "https://business.adobe.com/resources/articles/media_11f8157886d0fc1188016436d8d1683e9c6f5a47d.png?width=1200&format=pjpg&optimize=medium?w=600&h=500&fit=crop",
  "startup-pitch": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop",
  "inter-college-sports": "https://tse1.mm.bing.net/th/id/OIP.gJwoqSv1FqtjYuQNTDzSCgHaDF?rs=1&pid=ImgDetMain&o=7&rm=3?w=600&h=500&fit=crop",
  "guest-lecture": "https://roelto.com/wp-content/uploads/2021/03/TRM_332234290-scaled.jpeg?w=600&h=500&fit=crop",
  "cultural-exchange": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=500&fit=crop",
  "gaming-tournament-external": "https://static.vecteezy.com/system/resources/previews/036/788/017/non_2x/ai-generated-people-with-headsets-in-an-online-game-at-an-event-free-photo.jpg?w=600&h=500&fit=crop",
  "tech-workshop": "https://roelto.com/wp-content/uploads/2021/03/TRM_332234290-scaled.jpeg?w=600&h=500&fit=crop",
  "moto-mania": "https://tse4.mm.bing.net/th/id/OIP.TTMVfFoFMbKyHXHuShE9BgHaEW?w=700&h=411&rs=1&pid=ImgDetMain&o=7&rm=3?w=600&h=500&fit=crop",
  "dance-fusion": "https://wallpapercave.com/wp/wp13884836.jpg?w=600&h=500&fit=crop",
  "battle-of-bands": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=500&fit=crop",
  "fashion-show": "https://tse1.mm.bing.net/th/id/OIP.mbfdvrRllAapz0Au7lNijgHaEJ?w=740&h=415&rs=1&pid=ImgDetMain&o=7&rm=3?w=600&h=500&fit=crop",
  "singing-solo": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=500&fit=crop",
  "hackathon": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=500&fit=crop",
  "robo-wars": "https://tse2.mm.bing.net/th/id/OIP.x1I9fc16IJLS4V2PlhvxkgHaE6?rs=1&pid=ImgDetMain&o=7&rm=3?w=600&h=500&fit=crop",
  "food-fest": "https://tse1.mm.bing.net/th/id/OIP.p2m9UruwEtn-izztMrLiBQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3?w=600&h=500&fit=crop",
  "masterchef": "https://www.shutterstock.com/shutterstock/videos/28346290/thumb/4.jpg?ip=x480?w=600&h=500&fit=crop",
  "cricket-tournament": "https://tse3.mm.bing.net/th/id/OIP.2vPjWPqOWai-EKfhjTZNeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3?w=600&h=500&fit=crop",
  "basketball-showdown": "https://tse4.mm.bing.net/th/id/OIP.mpTn8CIFMugvLt-hcyesqAHaEL?w=1024&h=577&rs=1&pid=ImgDetMain&o=7&rm=3?w=600&h=500&fit=crop",
  "badminton-championship": "https://images.squarespace-cdn.com/content/v1/5bd969d6506fbe4b1a0f5e6b/1613556027347-TNYY9VEX2PRTODIHEP9J/shutterstock_1592944909+-+Badminton+racket+and+shuttlecock+in+motion_1200px+JPEG.jpg?w=600&h=500&fit=crop",
  "photography-contest": "https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=600&h=500&fit=crop",
  "art-exhibition": "https://tse3.mm.bing.net/th/id/OIP.Es8HbJrcS8a0Qr21mQAYyAHaE7?w=1199&h=799&rs=1&pid=ImgDetMain&o=7&rm=3?w=600&h=500&fit=crop",
  "debate-competition": "https://competition.ledx.law/wp-content/uploads/sites/17/2023/02/debate.png?w=600&h=500&fit=crop",
  "quiz-competition": "https://as2.ftcdn.net/v2/jpg/03/32/68/71/1000_F_332687153_gmsohq86koOEWFYlYSI3N6xzb1zIcG88.jpg?w=600&h=500&fit=crop",
  "comedy-show": "https://st2.depositphotos.com/8299646/11075/v/950/depositphotos_110755230-stock-illustration-stand-up-comedy-logo.jpg?w=600&h=500&fit=crop",
};

export const getEventImage = (eventId: string): string => {
  return eventImageMap[eventId] || "/gallery/annual-1.jpg"; // fallback image
};
