import React from "react";

const techItems = [
  "React", "Next.js", "Node.js", "TypeScript", "JavaScript", "React Native",
  "Java", "Spring Boot", "Express.js", "MongoDB", "MySQL", "Tailwind CSS",
  "Framer Motion", "Paystack", "REST APIs", "Git", "Docker", "Vercel",
  "Firebase", "Supabase", "JWT", "OAuth", "PWA", "Socket.io",
];

export default function Marquee() {
  return (
    <section className="relative py-8 overflow-hidden border-y border-white/5 bg-white/[0.02]">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

      <div className="flex w-fit animate-marquee">
        {[...techItems, ...techItems].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="whitespace-nowrap px-6 py-2 text-sm text-gray-400 hover:text-blue-300 transition-colors cursor-default"
          >
            {tech}
            <span className="ml-6 text-blue-500/40">✦</span>
          </span>
        ))}
      </div>

      <div className="flex w-fit animate-marquee-reverse mt-2">
        {[...techItems, ...techItems].reverse().map((tech, i) => (
          <span
            key={`rev-${tech}-${i}`}
            className="whitespace-nowrap px-6 py-2 text-sm text-gray-500 hover:text-blue-300 transition-colors cursor-default"
          >
            {tech}
            <span className="ml-6 text-blue-500/30">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
