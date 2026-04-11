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
      { name: "Stripe" }
    ],
    services: ["Web Development", "App Development", "UX/UI Design"],
    year: "2024",
    adminLink: "https://bite-buzz-admin.vercel.app/",
    userLink: "https://bite-buzz-frontend.vercel.app/",
    liveLink: "https://bite-buzz-frontend.vercel.app/",
    heroImage: "/project1/img1.png",
    gallery: [
      { src: "/project1/img2.png", alt: "BiteBuzz Hero Section", span: "wide" },
      { src: "/project1/img3.png", alt: "Orders Dashboard", span: "normal" },
      { src: "/project1/img4.png", alt: "Menu Inventory Management", span: "normal" }
    ],
    clientQuote: {
      text: "Code Loom took our vision of a modern food delivery platform and turned it into a high-conversion reality. The speed of the site is unparalleled.",
      author: "Akshitha",
      role: "Product Owner, BiteBuzz"
    }
  },
  {
    id: "02",
    slug: "atlas-technologies",
    title: "Atlas Technologies",
    category: "Web & Brand Design",
    subtitle: "A digital identity for a pioneering robotics firm.",
    description: "Atlas Technologies is at the forefront of industrial robotics. They needed a digital presence that balanced industrial power with cutting-edge software precision.",
    challenge: "Atlas needed to appeal to both engineers and enterprise CXOs. The site had to look hyper-technical yet feel approachable and mission-driven.",
    solution: "We developed a 'Technical Minimalism' design system. Bold typography, precision-grid layouts, and cinematic hardware photography were used to showcase their robotics capabilities.",
    impact: [
      { label: "Inbound Leads", value: "2.5x" },
      { label: "Avg. Session", value: "4m 12s" },
      { label: "Brand Equity", value: "Premium" }
    ],
    stack: [
      { name: "React" },
      { name: "GSAP" },
      { name: "Three.js" },
      { name: "Sanity CMS" }
    ],
    services: ["Web Development", "MVP Prototyping"],
    year: "2023",
    liveLink: "https://atlasthech.com",
    heroImage: "/project2/xktGFEeTfvx5MDldvQxlaw79M.png_width=800&height=1200.png",
    gallery: [
      { src: "/project2/vdtm4vbMi9SyPgj2Z1bVuq9b2o.png_width=960&height=1200.png", alt: "Brand Visualization", span: "wide" }
    ],
    clientQuote: {
      text: "Code Loom captured our DNA perfectly. They translated complex robotics concepts into a world-class visual experience.",
      author: "Sarah Jorgan",
      role: "Head of Marketing, Atlas"
    }
  },
  {
    id: "03",
    slug: "orbital-bank",
    title: "Orbital Bank",
    category: "Motion & 3D Design",
    subtitle: "The future of digital banking in three dimensions.",
    description: "Orbital Bank is a neobank focused on the Gen-Z demographic. They wanted their card management app to feel like a high-end gaming interface.",
    challenge: "How do you make banking feel 'fun' without losing the trust and security necessary for a financial institution?",
    solution: "We integrated real-time 3D card rendering and physics-based motion. The entire UI react to the user's touch, creating a tactile and 'expensive' feeling digital product.",
    impact: [
      { label: "Waitlist Join", value: "50k+" },
      { label: "Engagement", value: "+80%" },
      { label: "Design Award", value: "Site of Day" }
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
      { src: "/project3/1KCYDj61X5Ycm5Vp5kluuhMho.png_width=2400&height=1600.png", alt: "3D Dashboard", span: "wide" },
      { src: "/project3/TwCiV5MUt16Q38ftZYKlEhNhbJI.png_width=1984&height=2400.png", alt: "Mobile Card View", span: "normal" }
    ],
    clientQuote: {
      text: "The motion and 3D work Code Loom delivered is on another level. Our app is being cited as a new benchmark for neobanks.",
      author: "Marcus Aurelius",
      role: "Founder, Orbital"
    }
  }
];
