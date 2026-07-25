import React, { useState, useEffect } from "react";
import About from "./sections/About";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import NavBar from "./sections/NavBar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Stats from "./sections/Stats";

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skillGroups = [
    {
      title: "Frontend",
      items: [
        "React",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Sass",
        "Framer Motion",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "Java",
        "Spring Boot",
        "Spring Security",
        "REST API Design",
      ],
    },
    {
      title: "Mobile & Desktop",
      items: ["React Native", "JavaFX"],
    },
    {
      title: "Databases",
      items: ["MongoDB", "MySQL", "Firebase", "Supabase", "MongoDB Atlas"],
    },
    {
      title: "Cloud & DevOps",
      items: ["Vercel", "Hostinger", "Docker", "GitHub Actions"],
    },
    {
      title: "Integrations",
      items: ["Paystack", "Termii", "Brevo", "Clerk", "JWT", "OAuth", "Gemini AI"],
    },
    {
      title: "Tools & Version Control",
      items: [
        "Postman",
        "Figma",
        "VS Code",
        "IntelliJ",
        "Android Studio",
        "Git",
        "GitHub",
        "GitLab",
      ],
    },
  ];

  const projects = [
    {
      title: "FinWise",
      subtitle: "Fintech Platform",
      category: "Full-Stack",
      year: "2026",
      tech: [
        "React Native (Expo)",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Paystack",
        "VTPass",
        "Cloudinary",
        "Brevo",
        "React/Vite",
      ],
      description:
        "A full-stack Nigerian fintech platform with a React Native mobile app, Node.js/Express REST API, and a React/Vite admin dashboard.",
      bullets: [
        "Three-tier KYC system with BVN-linked verification at Tier 2, JWT authentication, and OTP delivery via Brevo",
        "Multi-wallet management with Paystack virtual accounts (NUBAN) for bank deposits, P2P and bank transfers, virtual cards, and QR code payments",
        "VTPass bill payments integration for airtime, data, electricity, and TV",
        "Admin dashboard for user management, transaction oversight, and KYC document review",
      ],
      github: "https://github.com/gokedev",
    },
    {
      title: "Chatify",
      subtitle: "Messaging App",
      category: "Full-Stack",
      year: "2024",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      description:
        "A real-time messaging platform supporting instant messaging, image sharing, and friend requests.",
      bullets: [
        "Socket.io-powered live message delivery and online presence indicators",
        "Real-time friend request system with notification updates",
      ],
      github: "https://github.com/gokedev/CHATIFY-APP",
      liveDemo: "https://chatify8.vercel.app",
    },
    {
      title: "Zuzu's Delightful Delivery",
      subtitle: "Client Demo — Food Delivery",
      category: "Frontend",
      year: "2025",
      tech: ["React", "CSS", "Vercel"],
      description:
        "Frontend demo for a Nigerian food delivery service. Warm, inviting design with menu browsing and order flow. Built on spec to showcase initiative in identifying real business problems.",
      liveDemo: "https://zuzus-delightful-delivery.vercel.app/",
    },
    {
      title: "Isle of Barra Retreat",
      subtitle: "Client Demo — Hospitality",
      category: "Frontend",
      year: "2025",
      tech: ["React", "CSS", "Vercel"],
      description:
        "Frontend demo for a hospitality and retreat business. Calming aesthetic with booking and gallery pages. Built on spec to demonstrate tailored UX for a specific industry.",
      liveDemo: "https://isle-of-barra-retreat.vercel.app/",
    },
    {
      title: "Mario Pizza Pulse",
      subtitle: "Client Demo — Restaurant",
      category: "Frontend",
      year: "2025",
      tech: ["React", "CSS", "Vercel"],
      description:
        "Frontend demo for a local restaurant. Bold, energetic layout with menu, online ordering, and contact section. Built on spec as a proactive freelance pitch.",
      liveDemo: "https://mario-pizza-pulse.vercel.app/",
    },
    {
      title: "Sales & Inventory System",
      subtitle: "Desktop App",
      category: "Backend",
      year: "2024",
      tech: ["Java", "JavaFX", "MySQL", "JDBC", "Maven", "FontAwesomeFX"],
      description:
        "Desktop inventory management application with stock tracking, a sales analytics dashboard, and role-based access control.",
      bullets: [
        "JDBC integration with MySQL following an MVC-style architecture",
        "Real-time sales analytics dashboard with reporting features",
      ],
      github: "https://github.com/gokedev/Sales-Inventroy",
    },
    {
      title: "Restaurant Website",
      subtitle: "Personal Project",
      category: "Frontend",
      year: "2024",
      tech: ["React", "CSS"],
      description:
        "Modern restaurant website featuring interactive design, responsive layout, and smooth user experience.",
      github: "https://github.com/gokedev/Resturant",
      liveDemo: "https://goke-resturant.vercel.app",
    },
  ];

  const experience = [
    {
      role: "Frontend Developer Intern",
      company: "Alaffia Media",
      location: "Lagos, Nigeria",
      period: "Jan 2026 - Present",
      bullets: [
        "Built and deployed Alaffia Daily Reset, a production PWA that automates daily audio publishing through date-driven scheduling and zero-padded file naming logic, with WhatsApp community integration. Live at daily.alaffiaradio.com.",
        "Built and deployed Alaffia Pause, a production PWA delivering a 30-day guided audio program with campaign start-day offset logic and social sharing. Live at pause.alaffiaradio.com.",
        "Collaborated with the media and brand team to align all technical outputs with editorial direction and product milestones.",
      ],
      tech: ["React", "Vite", "PWA"],
    },
  ];

  const certifications = [
    {
      title: "AI Starter Kit",
      issuer: "ALX",
      year: "2025",
    },
    {
      title: "Master Mind Series - Full Stack Development",
      issuer: "National Institute of Information Technology (NIIT)",
      year: "In Progress",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_rgba(0,0,0,0.9))]">
      <NavBar isScrolled={isScrolled} />
      <Hero />
      <Stats />
      <Marquee />
      <About />
      <Experience experience={experience} />
      <Skills skillGroups={skillGroups} />
      <Projects projects={projects} />
      <Certifications certifications={certifications} />
      <Contact />
      <Footer />
    </div>
  );
}
