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
  userLinkLabel?: string;
  adminLinkLabel?: string;
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
      { src: "/project1/img2.png", alt: "Malnadu Kitchen - High-Performance Food Ordering Dashboard UI", span: "wide" },
      { src: "/project1/img3.png", alt: "Malnadu Kitchen - Real-time Delivery Tracking Interface for Foodies", span: "normal" }
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
      { src: "/project2/img2.png", alt: "Empathy AI - Mood Sentimental Analysis and Vibe-Check Feature", span: "wide" },
      { src: "/project2/img3.png", alt: "Empathy AI - Patient Mood History and Progress Analytics", span: "normal" },
      { src: "/project2/img4.png", alt: "Empathy AI - Therapeutic Care Exercises and Patient Dashboard", span: "normal" },
      { src: "/project2/img5.png", alt: "Empathy AI - Advanced Neuro-Psychiatric Diagnostic Tools", span: "normal" }
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
    year: "2026",
    liveLink: "https://edrleam-operations.vercel.app/",
    heroImage: "/project3/img1.png",
    gallery: [
      { src: "/project3/img2.png", alt: "EDRLEAM Operations - Strategic Admin Financial Dashboard", span: "wide" },
      { src: "/project3/img3.png", alt: "EDRLEAM Operations - Mobile-First Trainer Assignment Portal", span: "normal" }
    ],
    clientQuote: {
      text: "The new dashboard transformed how we track our training projects. We now see our profit margins instantly, and our trainers have everything they need in one place.",
      author: "Srivardhan",
      role: "Founder, EDRLEAM"
    }
  },
  {
    id: "smart-quiz-jr",
    slug: "smart-quiz-jr",
    title: "Smart Quiz JR",
    category: "AI & EdTech Platform",
    subtitle: "Frictionless classroom gamification powered by Generative AI.",
    description: "Smart Quiz JR is a high-performance educational platform that bridges the gap between traditional teaching and modern engagement. It leverages large language models to automate the pedagogical loop of question creation, delivery, and real-time assessment.",
    challenge: "Teachers often spend hours manually curating quiz questions for diverse age groups. Smart Quiz JR needed to automate this process while maintaining academic rigor and providing a zero-latency competitive environment for students in a classroom setting.",
    solution: "We engineered a dual-portal architecture featuring an 'AI Question Factory' for teachers and a high-density, real-time interface for students. By optimizing the synchronization engine for sub-100ms latency and implementing a custom sentiment-aware leaderboard, we created a truly immersive competitive learning experience.",
    impact: [
      { label: "Question Gen", value: "Instant" },
      { label: "Latency", value: "<100ms" },
      { label: "Student Eng.", value: "+85%" }
    ],
    stack: [
      { name: "React" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "LLM APIs" },
      { name: "Railway" }
    ],
    services: ["AI Integration", "Real-time Systems", "EdTech Design"],
    year: "2026",
    liveLink: "https://smartquiz-jr-eight.vercel.app/",
    adminLink: "https://smartquiz-jr-eight.vercel.app/templates/teacher_start.html",
    userLinkLabel: "Student Portal",
    adminLinkLabel: "Teacher Portal",
    heroImage: "/project4/hero.png",
    gallery: [
      { src: "/project4/interface.png", alt: "Smart Quiz JR - Generative AI Question Engine for Teachers", span: "wide" },
      { src: "/project4/leaderboard.png", alt: "Smart Quiz JR - Real-time Classroom Leaderboard and Student Stats", span: "normal" }
    ],
    clientQuote: {
      text: "Smart Quiz JR has completely revolutionized our assessment workflow. The AI-generated questions are academically rigorous, and the zero-latency competitive environment keeps our students fully engaged.",
      author: "Rajendran Padmanabhan",
      role: "Sunrise International School, Abu Dhabi"
    }
  },
  {
    id: "bake-to-cherriish",
    slug: "bake-to-cherriish",
    title: "Bake To Cherriish",
    category: "Full-Stack Development & E-commerce",
    subtitle: "Scaling a boutique bakery through simplified custom order management.",
    description: "Bake To Cherriish is a premium boutique bakery dedicated to crafting 'Classic Cakes and Premium Joy'. They needed a digital home that could handle the high complexity of custom cake orders while maintaining their personal, home-baked brand essence.",
    challenge: "Managing custom cake requests involves tracking detailed specifications (weight, flavor, design) and strict delivery timelines. Doing this manually via social media was becoming a bottleneck for scaling Shravani's vision.",
    solution: "We developed a centralized order intake portal featuring a 'Customization Wizard' that guides clients through the cake selection process. By integrating a one-day pre-order logic and direct WhatsApp consultation pipelines, we streamlined the transition from curiosity to confirmed delivery.",
    impact: [
      { label: "Order Management", value: "Centralized" },
      { label: "Lead Conversion", value: "+45%" },
      { label: "Cust. Experience", value: "Premium" }
    ],
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "WhatsApp API" }
    ],
    services: ["E-commerce Development", "Brand Identity", "Workflow Automation"],
    year: "2024",
    liveLink: "https://bake-to-cherriish-osfy.vercel.app/",
    heroImage: "/project5/hero.png",
    gallery: [
      { src: "/project5/img1.png", alt: "Bake To Cherriish - Custom Cake Selection Interface", span: "wide" },
      { src: "/project5/img2.png", alt: "Bake To Cherriish - Premium Flavors and Dessert Gallery", span: "normal" }
    ],
    clientQuote: {
      text: "Code Loom captured the essence of Bake To Cherriish perfectly. The platform handles our complex custom cake orders seamlessly, allowing me to focus on baking rather than logistics.",
      author: "Shravani",
      role: "Founder & Lead Pâtissier"
    }
  }
];
