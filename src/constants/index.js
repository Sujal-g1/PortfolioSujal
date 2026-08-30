// index.js
export const servicesData = [
{
  title: "Full-Stack Development",

  description:
    "I build end-to-end web applications with modern frontend architecture, scalable backend systems, and reliable data layers—turning complex requirements into production-ready digital products.",

  items: [
    {
      title: "Frontend Engineering",
      description: "(React, Next.js, TypeScript, Tailwind CSS, Interactive UI/UX)",
    },

    {
      title: "Backend & APIs",
      description: "(Node.js, Express.js, REST APIs, JWT, WebSockets)",
    },

    {
      title: "Data & Infrastructure",
      description: "(MongoDB, PostgreSQL, MySQL, Redis, Docker, Cloud Deployment)",
    },
  ],
},
{
  title: "Modern Web Engineering",

  description:
    "I engineer modern web experiences that combine responsive interfaces, real-time functionality, secure APIs, and scalable data systems to deliver fast and reliable applications.",

  items: [
    {
      title: "Modern Frontend",
      description: "(React, Next.js, TypeScript, Zustand, Tailwind CSS, GSAP)",
    },

    {
      title: "Real-Time Systems",
      description: "(WebSockets, Socket.IO, WebRTC, Live Tracking, Real-Time Communication)",
    },

    {
      title: "Secure Architecture",
      description: "(JWT Authentication, Firebase, REST APIs, End-to-End Encryption)",
    },
  ],
},
{
  title: "Product Engineering",

  description:
    "I transform ideas into functional digital products—from intuitive interfaces to backend architecture, real-time features, authentication, and deployment—with a focus on usability and reliability.",

  items: [
    {
      title: "Product Interfaces",
      description: "(React, Next.js, Tailwind CSS, Material UI, Framer Motion)",
    },

    {
      title: "Application Architecture",
      description: "(Node.js, Express.js, REST APIs, MongoDB, PostgreSQL)",
    },

    {
      title: "Real-World Features",
      description: "(Payments & Wallets, Maps, QR/NFC, Notifications, Real-Time Systems)",
    },
  ],
},
{
  title: "AI-Powered Development",

  description:
    "I combine full-stack engineering with modern AI capabilities to build intelligent applications that turn complex workflows into accessible, practical, and user-focused experiences.",

  items: [
    {
      title: "AI Integration",
      description: "(Generative AI, LLM Integration, Google Gemini API, Prompt Engineering)",
    },

    {
      title: "Full-Stack Systems",
      description: "(React, Node.js, Express.js, MongoDB, REST APIs, Firebase)",
    },

    {
      title: "Intelligent Experiences",
      description: "(Voice Assistance, Multilingual Interfaces, Contextual AI Features)",
    },
  ],
},
{
  title: "Scalable Application Development",

  description:
    "I design and develop reliable applications with clean architecture, secure authentication, real-time communication, optimized data management, and scalable technology choices.",

  items: [
    {
      title: "Scalable Backend",
      description: "(Node.js, Express.js, REST APIs, WebSockets, Microservice-Ready Architecture)",
    },

    {
      title: "Data Engineering",
      description: "(MongoDB, MySQL, PostgreSQL, Redis, Structured Data Models)",
    },

    {
      title: "Security & Reliability",
      description: "(JWT, Firebase Authentication, WebRTC, End-to-End Encryption, Docker)",
    },
  ],
},
];

export const projects = [
  {
    id: 1,
    name: "Zingleee",
    description:
      "A privacy-first communication platform with secure real-time messaging, voice and video calls, and community discussions without requiring phone numbers.",

    href: "https://zingleee.vercel.app",

    image: "/assets/projects/zingleee.png",

    bgImage: "/assets/backgrounds/blanket.jpg",

    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Socket.IO" },
      { id: 5, name: "WebRTC" },
      { id: 6, name: "Tailwind CSS" },
    ],
  },

  {
    id: 2,
    name: "JeevanVriksha",
    description:
      "A maternal and child healthcare platform designed for rural healthcare workers to manage patient records, vitals, vaccinations, medicines, and field visits with an AI-powered multilingual assistant.",

    href: "https://jeevanvriksha.vercel.app/",

    image: "/assets/projects/jeevan.png",

    bgImage: "/assets/backgrounds/blanket.jpg",

    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Google Gemini" },
      { id: 5, name: "i18next" },
      { id: 6, name: "Tailwind CSS" },
    ],
  },

  {
    id: 3,
    name: "Mobizee",
    description:
      "A smart mobility platform featuring real-time bus tracking, interactive maps, seat reservations, wallet integration, NFC ticketing, ride coordination, taxi booking, and live safety features.",

    href: "https://syraxxmobizee-frontend.onrender.com/",

    image: "/assets/projects/mobizee.png",

    bgImage: "/assets/backgrounds/blanket.jpg",

    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Socket.IO" },
      { id: 5, name: "Leaflet.js" },
      { id: 6, name: "Tailwind CSS" },
    ],
  },

  {
  id: 4,
  name: "Syraxx Ochi",
  description:
    "A creative agency website clone inspired by Ochi.design, recreating its bold visual identity, smooth animations, interactive layouts, and modern editorial-style user experience.",

  href: "https://syraxxochi.vercel.app",

  image: "/assets/projects/ochi.png",

  bgImage: "/assets/backgrounds/blanket.jpg",

  frameworks: [
    { id: 1, name: "React.js" },
    { id: 2, name: "Vite" },
    { id: 3, name: "GSAP" },
    { id: 4, name: "Framer Motion" },
    { id: 5, name: "JavaScript" },
    { id: 6, name: "CSS" },
  ],
},

{
  id: 5,
  name: "SocialScheduler",
  description:
    "An AI-powered social media automation platform designed to simplify content creation, scheduling, and social media management through an intelligent and streamlined workflow.",

  href: "https://github.com/Sujal-g1/SocialScheduler",

  image: "/assets/projects/scheduler.png",

  bgImage: "/assets/backgrounds/blanket.jpg",

  frameworks: [
    { id: 1, name: "React.js" },
    { id: 2, name: "JavaScript" },
    { id: 3, name: "AI / GenAI" },
  ],
},
];

export const skillGroups = [
  {
    number: "01",
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "Python"],
  },
  {
    number: "02",
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Zustand",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    number: "03",
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "WebRTC",
      "JWT",
      "Firebase",
    ],
  },
  {
    number: "04",
    title: "AI / GenAI",
    skills: [
      "Generative AI",
      "LLM Integration",
      "Prompt Engineering",
    ],
  },
  {
    number: "05",
    title: "Databases",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Prisma ORM"
    ],
  },
  {
    number: "06",
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Vercel",
      "Render",
    ],
  },
];


export const socials = [

  { name: "LinkedIn", href: "https://www.linkedin.com/in/sujalgarg20" },
  { name: "GitHub", href: "https://github.com/Sujal-g1" },
  { name: "Instagram", href:"https://www.instagram.com/_sujal.py" },
];
