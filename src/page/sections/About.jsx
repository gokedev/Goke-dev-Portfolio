import React from "react";
import { motion } from "framer-motion";

const words = [
  { text: "African media", highlight: true },
  { text: "and" },
  { text: "fintech", highlight: true },
  { text: "use cases" },
];

const skills = [
  "React",
  "Node.js/Express",
  "React Native",
  "Java/Spring Boot",
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-blue-300"
          >
            About{" "}
            <span className="text-gradient">Me</span>
          </motion.h2>

          <div className="space-y-6 text-lg text-gray-400 leading-relaxed border-l border-blue-400/30 pl-6">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I'm a full stack developer with hands-on experience building and
              shipping production web and mobile applications for{" "}
              <span className="text-white font-medium">
                African media and fintech use cases
              </span>
              . I'm currently a Frontend Developer Intern at{" "}
              <motion.span
                whileHover={{ color: "#93c5fd" }}
                className="text-white font-medium cursor-default"
              >
                Alaffia Media
              </motion.span>{" "}
              in Lagos, Nigeria, where I build production PWAs and collaborate with
              editorial and brand teams.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Skilled in{" "}
              <span className="text-white">
                React, Node.js/Express, React Native, and Java/Spring Boot
              </span>
              , with practical experience designing REST APIs, implementing
              authentication, integrating payment and KYC systems (Paystack,
              BVN/NIN), and deploying full stack applications end to end.
              Comfortable owning a project from API design through to production
              deployment.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I care about clarity in code and communication, and I bring a calm,
              consistent approach to collaboration. I'm curious by nature, always
              learning, and I value the small details that make products feel
              polished.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Outside of tech, I'm learning to play the saxophone — creative
              outlets that keep my problem-solving fresh and my perspective
              balanced.
            </motion.p>
          </div>

          {/* Quick skill badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3 mt-10"
          >
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-sm text-blue-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
