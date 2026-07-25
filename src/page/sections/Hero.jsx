import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Backend Engineer",
  "Frontend Engineer",
  "Mobile Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl animate-pulse-glow"></div>
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 h-40 w-40 rounded-full bg-blue-600/5 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 20, 0], y: [0, 30, -15, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-blue-400/5 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-200">
                <motion.span
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-blue-400"
                ></motion.span>
                Hello, I am
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-4 py-1 text-sm text-green-300"
              >
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                Available for work
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Agbaje{" "}
              <span className="text-gradient">Stephen</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-2xl md:text-3xl text-blue-300 mb-2 font-mono h-10"
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="inline-block w-[3px] h-[1em] bg-blue-300 ml-1 align-middle"
              />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 text-gray-500 text-sm mb-6"
            >
              <MapPin size={14} />
              Lagos, Nigeria
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed"
            >
              I build web and mobile applications that solve real problems
              for businesses in Africa. From fintech platforms with payment
              integrations to production PWAs for media companies — I own
              projects from API design to deployment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-400 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)] transition-colors duration-300 flex items-center gap-2"
              >
                View My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-blue-400/40 text-blue-200 font-medium rounded-md hover:bg-blue-500/10 transition-colors duration-300"
              >
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-5 mt-8"
            >
              {[
                { icon: Github, href: "https://github.com/gokedev" },
                { icon: Linkedin, href: "https://linkedin.com/in/agbaje-stephen-88b02932b" },
                { icon: Mail, href: "mailto:agbajestephen5@gmail.com" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-blue-300/80 hover:text-blue-200 transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Orbiting dots */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-orbit">
                  <div className="w-3 h-3 rounded-full bg-blue-400/60 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-orbit-reverse">
                  <div className="w-2 h-2 rounded-full bg-blue-300/40 shadow-[0_0_8px_rgba(147,197,253,0.4)]"></div>
                </div>
              </div>

              {/* Glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-3xl border border-blue-500/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 rounded-3xl border border-blue-400/5"
              />

              {/* Profile image */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute -inset-6 rounded-3xl bg-blue-500/10 blur-2xl animate-pulse-glow"></div>
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10">
                  <img
                    src="/steve.jpg"
                    alt="Agbaje Stephen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -z-10 top-8 right-8 w-full h-full border border-white/10 rounded-2xl"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
