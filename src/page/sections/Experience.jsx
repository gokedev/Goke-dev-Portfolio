import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience({ experience }) {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-blue-300"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-blue-500/20"></div>

          {experience.map((job, index) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 md:pl-20 pb-12 last:pb-0"
            >
              <div className="absolute left-0 md:left-8 top-1 w-3 h-3 -translate-x-1.5 rounded-full bg-blue-500 border-2 border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-500/5 hover:border-blue-400/30 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-400/20">
                    <Briefcase className="text-blue-300" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {job.role}
                    </h3>
                    <p className="text-blue-300 font-medium">
                      {job.company}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {job.location} · {job.period}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-4">
                  {job.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {job.tech && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-blue-300/80 bg-blue-500/10 border border-blue-400/20 rounded-md px-2 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
