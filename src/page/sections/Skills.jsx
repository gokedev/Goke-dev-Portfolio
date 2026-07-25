import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Smartphone,
  Database,
  Cloud,
  Plug,
  Wrench,
} from "lucide-react";

const iconMap = {
  Frontend: Code2,
  Backend: Server,
  "Mobile & Desktop": Smartphone,
  Databases: Database,
  "Cloud & DevOps": Cloud,
  Integrations: Plug,
  "Tools & Version Control": Wrench,
};

export default function Skills({ skillGroups }) {
  return (
    <section id="skills" className="relative py-32 px-6 bg-white/5">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-blue-300"
        >
          Technical{" "}
          <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.title] || Code2;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-500/5 hover:border-blue-400/30 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.4)] transition-all duration-300"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                <div className="relative flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-blue-500/10 rounded-lg border border-blue-400/20 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Icon
                      className="text-blue-300 group-hover:text-blue-200 transition-colors"
                      size={20}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-200">
                    {group.title}
                  </h3>
                </div>

                <div className="relative flex flex-wrap gap-2">
                  {group.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05 + i * 0.03,
                      }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-400 hover:bg-blue-500/10 hover:border-blue-400/30 hover:text-blue-200 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
