import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "agbajestephen5@gmail.com",
    href: "mailto:agbajestephen5@gmail.com",
    isLink: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 901 405 7707",
    href: "tel:+2349014057707",
    isLink: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: null,
    isLink: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/agbaje-stephen-88b02932b",
    isLink: true,
    external: true,
  },
];

const socials = [
  { icon: Github, href: "https://github.com/gokedev", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/agbaje-stephen-88b02932b", label: "LinkedIn" },
  { icon: Mail, href: "mailto:agbajestephen5@gmail.com", label: "Email" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-blue-300"
        >
          Get In{" "}
          <span className="text-gradient">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 mb-16 text-lg"
        >
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, feel free to reach out!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            const Wrapper = card.isLink ? motion.a : motion.div;
            const wrapperProps = card.isLink
              ? { href: card.href, target: card.external ? "_blank" : undefined, rel: card.external ? "noopener noreferrer" : undefined }
              : {};

            return (
              <Wrapper
                key={card.label}
                {...wrapperProps}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="group relative flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-500/5 hover:border-blue-400/30 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.5)] transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Glow bg */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-xl" />

                <div className="relative p-3 bg-blue-500/10 rounded-lg border border-blue-400/20 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-blue-300" size={22} />
                </div>
                <div className="relative">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{card.label}</div>
                  <div className="font-medium text-gray-200 group-hover:text-blue-100 transition-colors text-sm">
                    {card.value}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center mt-14 pt-10 border-t border-white/10"
        >
          <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest">Or reach out directly</p>
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-blue-300/80 hover:text-blue-200 hover:bg-blue-500/10 hover:border-blue-400/30 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.4)] transition-all duration-300"
                aria-label={label}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
