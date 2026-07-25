import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

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
          Get In Touch
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

        <div className="grid md:grid-cols-2 gap-6">
          <motion.a
            href="mailto:agbajestephen5@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-500/10 hover:border-blue-400/30 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.6)] transition-all duration-300"
          >
            <Mail className="text-blue-300" size={24} />
            <div>
              <div className="text-sm text-gray-500">Email</div>
              <div className="font-medium">agbajestephen5@gmail.com</div>
            </div>
          </motion.a>

          <motion.a
            href="tel:+2349014057707"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-500/10 hover:border-blue-400/30 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.6)] transition-all duration-300"
          >
            <Phone className="text-blue-300" size={24} />
            <div>
              <div className="text-sm text-gray-500">Phone</div>
              <div className="font-medium">+234 901 405 7707</div>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl"
          >
            <MapPin className="text-blue-300" size={24} />
            <div>
              <div className="text-sm text-gray-500">Location</div>
              <div className="font-medium">Lagos, Nigeria</div>
            </div>
          </motion.div>

          <motion.a
            href="https://linkedin.com/in/agbaje-stephen-88b02932b"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-500/10 hover:border-blue-400/30 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.6)] transition-all duration-300"
          >
            <Linkedin className="text-blue-300" size={24} />
            <div>
              <div className="text-sm text-gray-500">LinkedIn</div>
              <div className="font-medium">Connect with me</div>
            </div>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-6 mt-12 pt-12 border-t border-white/10"
        >
          <a
            href="https://github.com/gokedev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300/80 hover:text-blue-200 transition-colors"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/agbaje-stephen-88b02932b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300/80 hover:text-blue-200 transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:agbajestephen5@gmail.com"
            className="text-blue-300/80 hover:text-blue-200 transition-colors"
          >
            <Mail size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
