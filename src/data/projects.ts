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
    title: "Finlytics Redesign",
    category: "UX/UI Design",
    subtitle: "Modernizing financial analytics for a global user base.",
    description: "Finlytics came to us with a complex, legacy platform that was losing users due to high friction and a dated aesthetic. We rebuilt the experience from the ground up, focusing on data clarity and seamless navigation.",
    challenge: "The primary challenge was organizing massive amounts of real-time financial data into a clean, intuitive dashboard that didn't overwhelm the user while maintaining all power-user features.",
    solution: "We implemented a modular widget system coupled with a high-contrast dark theme. This allowed users to customize their view while significantly reducing cognitive load through smart grouping and visual hierarchy.",
    impact: [
      { label: "User Retention", value: "+40%" },
      { label: "Load Time", value: "0.8s" },
      { label: "Onboarding Time", value: "-60%" }
    ],
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" }
    ],
    services: ["Web Development", "SEO Improvement", "App Development"],
    year: "2024",
    liveLink: "https://finlytics.app",
    heroImage: "/project1/zvQ7tedi7AxHplgmospF42dcjQo.png_width=1200&height=800.png",
    gallery: [
      { src: "/project1/5kd7Hmen8Zb7gfwj1BZyuA0ko.png_width=1200&height=800.png", alt: "Finlytics Dashboard", span: "wide" },
      { src: "/project1/MAVstedJYqQvsrJ7l1kxjR498.jpg_width=1200&height=904.png", alt: "Mobile Analytics View", span: "normal" }
    ],
    clientQuote: {
      text: "The Zerogrid team didn't just redesign our UI; they redefined how our users interact with their data. The results were immediate and massive.",
      author: "David Chen",
      role: "CEO, Finlytics"
    }
  },
  {
    id: "02",
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
      text: "Zerogrid captured our DNA perfectly. They translated complex robotics concepts into a world-class visual experience.",
      author: "Sarah Jorgan",
      role: "Head of Marketing, Atlas"
    }
  },
  {
    id: "03",
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
      text: "The motion and 3D work Zerogrid delivered is on another level. Our app is being cited as a new benchmark for neobanks.",
      author: "Marcus Aurelius",
      role: "Founder, Orbital"
    }
  }
];
