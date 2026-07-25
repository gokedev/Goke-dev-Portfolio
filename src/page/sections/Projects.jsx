import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-blue-300"
        >
          Featured{" "}
          <span className="text-gradient">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 mb-16 text-lg"
        >
          A collection of my recent work showcasing full stack development and
          product-focused builds.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <motion.div
                whileHover={{
                  perspective: 1000,
                  rotateX: 2,
                  rotateY: -3,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-500/5 hover:border-blue-400/30 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.6)] transition-colors duration-300 h-full flex flex-col"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                <div className="relative flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-200 transition-colors">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-sm text-gray-500">{project.subtitle}</p>
                    )}
                  </div>
                  {project.year && (
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="text-xs text-blue-300/60 bg-blue-500/10 border border-blue-400/20 rounded-md px-2 py-1 shrink-0 ml-3"
                    >
                      {project.year}
                    </motion.span>
                  )}
                </div>

                <p className="relative text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.bullets && (
                  <ul className="relative space-y-2 mb-4">
                    {project.bullets.map((bullet, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                        className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                )}

                <div className="relative flex flex-wrap gap-2 mb-4 mt-auto">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1, y: -1 }}
                      className="text-xs text-blue-300/80 bg-blue-500/10 border border-blue-400/20 rounded-md px-2 py-1 cursor-default transition-colors hover:bg-blue-500/20 hover:text-blue-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="relative flex items-center gap-4 text-sm border-t border-white/10 pt-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-200 transition-colors"
                    >
                      <Github size={16} />
                      GitHub
                    </motion.a>
                  )}
                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-200 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
