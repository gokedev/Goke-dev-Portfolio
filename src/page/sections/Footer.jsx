import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/gokedev", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/agbaje-stephen-88b02932b", label: "LinkedIn" },
  { icon: Mail, href: "mailto:agbajestephen5@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+2349014057707", label: "Phone" },
];

export default function Footer() {
  return (
    <footer className="relative px-6 pb-8 pt-16 border-t border-white/10 bg-gradient-to-b from-black via-black/95 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/sa-logo.svg" alt="SA" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-semibold tracking-wide text-blue-300">
                Agbaje Stephen
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Full stack developer building production web and mobile
              applications for African media and fintech with React, Node.js,
              React Native, and Java.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") || href.startsWith("tel") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 bg-white/5 border border-white/10 rounded-lg text-blue-300/60 hover:text-blue-200 hover:bg-blue-500/10 hover:border-blue-400/30 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-sm font-semibold text-gray-300 mb-5 uppercase tracking-wider">
              Quick Links
            </div>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-300 hover:pl-1 transition-all duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-gray-300 mb-5 uppercase tracking-wider">
              Contact
            </div>
            <div className="flex flex-col gap-2.5 text-sm text-gray-400">
              <a href="mailto:agbajestephen5@gmail.com" className="hover:text-blue-300 transition-colors">
                agbajestephen5@gmail.com
              </a>
              <a href="tel:+2349014057707" className="hover:text-blue-300 transition-colors">
                +234 901 405 7707
              </a>
              <p className="text-gray-500">Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2026 Agbaje Stephen. All rights reserved. Built with React &amp;
            Tailwind CSS.
          </p>
          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 bg-white/5 border border-white/10 rounded-lg text-blue-300/60 hover:text-blue-200 hover:bg-blue-500/10 hover:border-blue-400/30 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
