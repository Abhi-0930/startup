export interface ProjectData {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  impact: {
    label: string;
    value: string;
  }[];
  stack: {
    name: string;
    icon?: string;
  }[];
  services: string[];
  liveLink?: string;
  adminLink?: string;
  userLink?: string;
  slug: string;
  year: string;
  heroImage: string;
  gallery: {
    src: string;
    alt: string;
    caption?: string;
    span?: "normal" | "wide";
  }[];
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
}

export const projectsData: ProjectData[] = [
  {
    id: "01",
    slug: "bitebuzz-delivery",
    title: "BiteBuzz Delivery",
    category: "Full-Stack Development",
    subtitle: "A seamless, high-performance food delivery experience.",
    description: "BiteBuzz is a premium food delivery platform designed to connect foodies with their favorite local restaurants. We focused on creating an 'appetizing' digital experience that prioritizes speed, intuitive navigation, and effortless ordering.",
    challenge: "The goal was to build a web platform that feels as fluid as a native app, capable of handling complex menu hierarchies and real-time order tracking without any performance lag.",
    solution: "We implemented a modular menu system with smart filtering and a lightning-fast checkout flow. Using Next.js and optimized asset delivery, we achieved sub-second page transitions and a highly responsive mobile experience.",
    impact: [
      { label: "Order Speed", value: "-45%" },
      { label: "User Retention", value: "+35%" },
      { label: "Active Users", value: "10k+" }
    ],
    stack: [
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "PostgreSQL" }
    ],
    services: ["Web Development", "MVP Prototyping"],
    year: "2024",
    heroImage: "/project1/img1.png",
    gallery: [
      { src: "/project1/img2.png", alt: "Ordering Screen", span: "wide" },
      { src: "/project1/img3.png", alt: "Tracking Screen", span: "normal" }
    ],
    clientQuote: {
      text: "Code Loom took our idea for a food app and made it real very fast. The website is so quick and easy for our customers to use.",
      author: "Akshitha",
      role: "Product Owner, BiteBuzz"
    }
  },
  {
    id: "empathy-ai",
    slug: "empathy-ai",
    title: "Empathy AI",
    category: "AI & Full-Stack Development",
    subtitle: "An AI helper that understands how you feel.",
    description: "Empathy AI is an app that helps people feel better by talking to them. It is smarter than normal bots because it can see your face and hear your voice to know your real mood.",
    challenge: "Text messages don't always show how someone is feeling. We needed a way for the AI to understand a person's mood from their face and voice at the same time.",
    solution: "We used smart AI tools to recognize feelings from video and voice. We kept all the data private and safe, and made the app very smooth and easy for anyone to use.",
    impact: [
      { label: "Mood Accuracy", value: "92%" },
      { label: "Privacy", value: "Safe" },
      { label: "Response", value: "Quick" }
    ],
    stack: [
      { name: "React 19" },
      { name: "Python" },
      { name: "LangChain" },
      { name: "OpenAI GPT-4" },
      { name: "MongoDB" }
    ],
    services: ["AI Applications", "Full-Stack Development", "UX/UI Design"],
    year: "2024",
    heroImage: "/project2/img1.png",
    gallery: [
      { src: "/project2/img2.png", alt: "Feeling Analysis", span: "wide" },
      { src: "/project2/img3.png", alt: "Mood History", span: "normal" },
      { src: "/project2/img4.png", alt: "Care Exercises", span: "normal" }
    ],
    clientQuote: {
      text: "The way this app understands face and voice is amazing. It feels much more human and helpful than other AI tools.",
      author: "Abhi",
      role: "Lead Engineer, Empathy AI"
    }
  },
  {
    id: "03",
    slug: "orbital-bank",
    title: "Orbital Bank",
    category: "Motion & 3D Design",
    subtitle: "A modern bank app that feels like a game.",
    description: "Orbital Bank is a new bank for young people. They wanted their app to look and feel as fast and fun as a modern video game.",
    challenge: "Banks have to be safe, but they are often boring. We wanted to make it fun to use without making people worry about their money.",
    solution: "We added cool 3D cards that users can move around on the screen. Everything in the app moves very smoothly, making it feel high-quality and modern.",
    impact: [
      { label: "Waitlist", value: "50k+" },
      { label: "User Likes", value: "+80%" },
      { label: "Awards", value: "Best Design" }
    ],
    stack: [
      { name: "Next.js" },
      { name: "Three.js" },
      { name: "Tailwind CSS" }
    ],
    services: ["App Development", "AI Applications", "MVP Prototyping"],
    year: "2024",
    heroImage: "/project3/uqJwE4mTSKeNtBAX8YU8vy1hkVs.png_width=2400&height=1600.png",
    gallery: [
      { src: "/project3/1KCYDj61X5Ycm5Vp5kluuhMho.png_width=2400&height=1600.png", alt: "3D View", span: "wide" },
      { src: "/project3/TwCiV5MUt16Q38ftZYKlEhNhbJI.png_width=1984&height=2400.png", alt: "Mobile Card", span: "normal" }
    ],
    clientQuote: {
      text: "The moving 3D parts Code Loom made are amazing. Our app is now considered one of the best-looking bank apps out there.",
      author: "Marcus Aurelius",
      role: "Founder, Orbital"
    }
  }
];
