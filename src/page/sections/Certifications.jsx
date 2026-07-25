import React from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const icons = {
  "AI Starter Kit": Award,
  "Master Mind Series - Full Stack Development": GraduationCap,
};

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
          Certifications{" "}
          <span className="text-gradient">& Awards</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const Icon = icons[cert.title] || Award;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative p-7 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-500/5 hover:border-blue-400/30 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.5)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-xl" />

                <div className="relative flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-400/20 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                    <Icon className="text-blue-300" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-100 transition-colors leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-blue-300/80 text-sm mt-1">{cert.issuer}</p>
                    <div className="mt-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-400/20 text-blue-300/80">
                        {cert.year === "In Progress" && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse mr-2"></span>
                        )}
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
