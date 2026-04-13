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
    id: "malnadu-kitchen",
    slug: "malnadu-kitchen",
    title: "Malnadu Kitchen",
    category: "Full-Stack Development",
    subtitle: "Bringing authentic Malnad flavors to urban foodies in 21 days.",
    description: "Malnadu Kitchen is a premier restaurant brand in Bangalore dedicated to preserving and serving the authentic culinary heritage of Karnataka's Malnad region. They needed a high-performance digital presence to match their growing offline popularity.",
    challenge: "In Bangalore's hyper-competitive food delivery market, Malnadu Kitchen required a platform that wasn't just another menu, but a fast, reliable, and immersive experience that could handle 1,000+ simultaneous orders during peak morning and evening rushes.",
    solution: "We engineered a lightning-fast ordering system that reduced the journey from discovery to checkout to just 45 seconds. By optimizing image delivery for traditional dishes and implementing a robust backend, we ensured zero downtime during their biggest launch to date.",
    impact: [
      { label: "Launch Time", value: "21 Days" },
      { label: "Peak Orders", value: "1,500/hr" },
      { label: "Check-out Speed", value: "45s" }
    ],
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "PostgreSQL" }
    ],
    services: ["Web Development", "Admin Dashboard", "MVP Prototyping"],
    year: "2024",
    liveLink: "https://malnadu-kitchen.vercel.app/",
    adminLink: "https://malnadukitchen-admin.vercel.app/",
    heroImage: "/project1/img1.png",
    gallery: [
      { src: "/project1/img2.png", alt: "Ordering Screen", span: "wide" },
      { src: "/project1/img3.png", alt: "Tracking Screen", span: "normal" }
    ],
    clientQuote: {
      text: "Code Loom took our idea for a food website and made it real very fast. The site is so quick and easy for our customers to use.",
      author: "Nabin",
      role: "Senior Staff / Guest Relations"
    }
  },
  {
    id: "empathy-ai",
    slug: "empathy-ai",
    title: "Empathy AI",
    category: "AI & Full-Stack Development",
    subtitle: "Advanced Neuro-Psychiatry platform for empathetic mental health care.",
    description: "Mind Matters with Ajay is a specialized Neuro-Psychiatry center led by Dr. Ajay Kumar Joopaka. They provide comprehensive psychiatric care, focusing on depression, anxiety, and neuro-behavioral disorders through a blend of medicine and technology.",
    challenge: "Psychiatric consultation often feels intimidating for patients. The goal was to build a digital gateway that uses AI to provide an initial 'vibe-check' and mood analysis, making it easier for patients to express themselves before their formal clinical session.",
    solution: "We developed a proprietary AI sentiment engine that analyzes vocal tonality and facial micro-expressions. This pre-clinical assessment tool helps Dr. Ajay's team understand patient state-of-mind instantly, allowing for more personalized and effective treatment cycles.",
    impact: [
      { label: "Assessment Accuracy", value: "94%" },
      { label: "Patient Comfort", value: "+80%" },
      { label: "Response Time", value: "Instant" }
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
    liveLink: "https://mindmatterswithajay.com",
    heroImage: "/project2/img1.png",
    gallery: [
      { src: "/project2/img2.png", alt: "Feeling Analysis", span: "wide" },
      { src: "/project2/img3.png", alt: "Mood History", span: "normal" },
      { src: "/project2/img4.png", alt: "Care Exercises", span: "normal" },
      { src: "/project2/img5.png", alt: "Advanced Diagnostics", span: "normal" }
    ],
    clientQuote: {
      text: "The way this website understands face and voice is amazing. It feels much more human and helpful than other AI tools.",
      author: "Dr. Ajay Kumar",
      role: "Mind Matters with Ajay"
    }
  },
  {
    id: "edrleam-operations",
    slug: "edrleam-operations",
    title: "EDRLEAM Operations",
    category: "Workforce & Training Management",
    subtitle: "Streamlining complex training logistics with high-density operational intelligence.",
    description: "EDRLEAM Operations is a high-performance Training Management System (TMS) designed to coordinate large-scale educational programs. It bridges the gap between administrators, trainers, and academic institutions through a unified, data-driven dashboard.",
    challenge: "Coordinating multi-city training programs involves tracking hundreds of trainers, diverse college schedules, and complex financial flows. EDRLEAM needed a system that provided real-time visibility into project profitability while maintaining a seamless operational flow for individual trainers in the field.",
    solution: "We built a tiered glassmorphism dashboard that separates strategic financial oversight from granular task management. By implementing a custom role-based access system and real-time revenue-profit tracking, the platform provides administrators with immediate fiscal clarity while giving trainers a mobile-first assignment portal.",
    impact: [
      { label: "Ops Efficiency", value: "+60%" },
      { label: "Profit Analytics", value: "Real-time" },
      { label: "Trainer Sat.", value: "95%" }
    ],
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Vercel" }
    ],
    services: ["Operations Software", "Admin Dashboard", "UI/UX Design"],
    year: "2024",
    liveLink: "https://edrleam-operations.vercel.app/",
    adminLink: "https://edrleam-operations.vercel.app/admin/projects",
    heroImage: "/project3/img1.png",
    gallery: [
      { src: "/project3/img2.png", alt: "Admin Dashboard Overview", span: "wide" },
      { src: "/project3/img3.png", alt: "Trainer Portal View", span: "normal" }
    ],
    clientQuote: {
      text: "The new dashboard transformed how we track our training projects. We now see our profit margins instantly, and our trainers have everything they need in one place.",
      author: "Abhishek Jujjuvarapu",
      role: "Founder, EDRLEAM"
    }
  }
];
