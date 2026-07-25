import React from "react";
import { motion } from "framer-motion";

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="relative py-32 px-6 bg-white/5">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-blue-300"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-blue-500/10 hover:border-blue-400/30 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.6)] transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-gray-400 mb-1">{cert.issuer}</p>
              <p className="text-sm text-gray-500">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
