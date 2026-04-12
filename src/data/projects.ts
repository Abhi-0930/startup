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
    id: "bitebuzz-delivery",
    slug: "bitebuzz-delivery",
    title: "BiteBuzz Delivery",
    category: "Full-Stack Development",
    subtitle: "A fast food delivery website built in just 21 days.",
    description: "BiteBuzz is a new food delivery website. They needed a fast and simple place to help find customers quickly in a busy market.",
    challenge: "There are already many delivery platforms. BiteBuzz needed to be much faster and easier to use than others, and they needed it ready to launch in less than a month.",
    solution: "We made a very fast website that helps people order food in just a few clicks. We finished everything in 21 days, and more than 1,000 people used it on the very first day.",
    impact: [
      { label: "Launch Time", value: "21 Days" },
      { label: "Early Users", value: "1,200+" },
      { label: "Order Speed", value: "Fast" }
    ],
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "PostgreSQL" }
    ],
    services: ["Web Development", "MVP Prototyping"],
    year: "2024",
    liveLink: "https://bite-buzz-frontend.vercel.app/",
    heroImage: "/project1/img1.png",
    gallery: [
      { src: "/project1/img2.png", alt: "Ordering Screen", span: "wide" },
      { src: "/project1/img3.png", alt: "Tracking Screen", span: "normal" }
    ],
    clientQuote: {
      text: "Code Loom took our idea for a food website and made it real very fast. The site is so quick and easy for our customers to use.",
      author: "Akshitha",
      role: "Product Owner, BiteBuzz"
    }
  },
  {
    id: "empathy-ai",
    slug: "empathy-ai",
    title: "Empathy AI",
    category: "AI & Full-Stack Development",
    subtitle: "An AI website that understands how you feel.",
    description: "Empathy AI is a website that helps people feel better by talking to them. It is smarter than normal bots because it can see your face and hear your voice to know your real mood.",
    challenge: "Text messages don't always show how someone is feeling. We needed a way for the AI to understand a person's mood from their face and voice at the same time.",
    solution: "We used smart AI tools to recognize feelings from video and voice. We kept all the data private and safe, and made the website very smooth and easy for anyone to use.",
    impact: [
      { label: "Mood Accuracy", value: "92%" },
      { label: "Privacy", value: "Safe" },
      { label: "Response", value: "Quick" }
    ],
    stack: [
      { name: "React 19" },
      { name: "Node.js" },
      { name: "Flask" },
      { name: "Vector DB" },
      { name: "Docker" },
      { name: "LangChain" }
    ],
    services: ["AI Applications", "Full-Stack Development", "UX/UI Design"],
    year: "2025",
    liveLink: "https://empathy-ai-demo.vercel.app",
    heroImage: "/project2/img1.png",
    gallery: [
      { src: "/project2/img2.png", alt: "Feeling Analysis", span: "wide" },
      { src: "/project2/img3.png", alt: "Mood History", span: "normal" },
      { src: "/project2/img4.png", alt: "Care Exercises", span: "normal" }
    ],
    clientQuote: {
      text: "The way this website understands face and voice is amazing. It feels much more human and helpful than other AI tools.",
      author: "Abhi",
      role: "Lead Engineer, Empathy AI"
    }
  },
  {
    id: "03",
    slug: "orbital-bank",
    title: "Orbital Bank",
    category: "Motion & 3D Design",
    subtitle: "A modern bank website that feels like a game.",
    description: "Orbital Bank is a new bank for young people. They wanted their website to look and feel as fast and fun as a modern video game.",
    challenge: "Banks have to be safe, but they are often boring. We wanted to make it fun to use without making people worry about their money.",
    solution: "We added cool 3D cards that users can move around on the screen. Everything in the website moves very smoothly, making it feel high-quality and modern.",
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
    liveLink: "https://orbital-bank.co",
    heroImage: "/project3/uqJwE4mTSKeNtBAX8YU8vy1hkVs.png_width=2400&height=1600.png",
    gallery: [
      { src: "/project3/1KCYDj61X5Ycm5Vp5kluuhMho.png_width=2400&height=1600.png", alt: "3D View", span: "wide" },
      { src: "/project3/TwCiV5MUt16Q38ftZYKlEhNhbJI.png_width=1984&height=2400.png", alt: "Mobile Card", span: "normal" }
    ],
    clientQuote: {
      text: "The moving 3D parts Code Loom made are amazing. Our website is now considered one of the best-looking bank sites out there.",
      author: "Marcus Aurelius",
      role: "Founder, Orbital"
    }
  }
];
