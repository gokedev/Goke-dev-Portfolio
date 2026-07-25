import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-300">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed border-l border-blue-400/30 pl-6">
            <p>
              I'm a full stack developer with hands-on experience building and
              shipping production web and mobile applications for{" "}
              <span className="text-white">
                African media and fintech use cases
              </span>
              . I'm currently a Frontend Developer Intern at{" "}
              <span className="text-white">Alaffia Media</span> in Lagos,
              Nigeria, where I build production PWAs and collaborate with
              editorial and brand teams.
            </p>
            <p>
              Skilled in{" "}
              <span className="text-white">
                React, Node.js/Express, React Native, and Java/Spring Boot
              </span>
              , with practical experience designing REST APIs, implementing
              authentication, integrating payment and KYC systems (Paystack,
              BVN/NIN), and deploying full stack applications end to end.
              Comfortable owning a project from API design through to production
              deployment.
            </p>
            <p>
              I care about clarity in code and communication, and I bring a calm,
              consistent approach to collaboration. I'm curious by nature, always
              learning, and I value the small details that make products feel
              polished.
            </p>
            <p>
              Outside of tech, I'm learning to play the saxophone—creative
              outlets that keep my problem-solving fresh and my perspective
              balanced.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
