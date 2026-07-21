  

import React, { memo } from "react";
import { FaGithub, FaArrowRight, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

// PERFORMANCE: Assets should be WebP in production for 30% smaller payload
import email_spam from "../assets/email_spam.png";
import fake from "../assets/fake.png";
import salary from "../assets/salary.jpeg";

// PRE-ALLOCATION: Data moved outside to prevent re-allocation on every render
const PROJECTS = [    
  {
    title: "Email Spam Detection",
    image: email_spam,
    github: "https://github.com/mmilanquery55-dev/spam-detection-nlp",
    category: "Machine Learning",
  },
  {
    title: "Fake News Detection",
    image: fake,
    github: "https://github.com/mmilanquery55-dev/fake-news-detection-using-nlp-machine-learning-",
    category: "Deep Learning",
  },
  {
    title: "Salary Prediction",
    image: salary,
    github: "https://github.com/mmilanquery55-dev/salary-prediction-using-years-experience",
    category: "Regression",
  },
  {
    title: "Student Management System",
    github: "https://github.com/mmilanquery55-dev/Student-Management-System-",
    category: "Python",
  },
  {
    title: "Quiz Game",
    github: "https://github.com/mmilanquery55-dev/Quiz-Game-",
    category: "Python",
  },
  {
    title: "ATM Simulation",
    github: "https://github.com/mmilanquery55-dev/ATM-Simulations",
    category: "Python",
  },
];

// ANIMATION VARIANTS: Moved outside to improve JS execution time
const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-24"
      aria-labelledby="projects-heading"
    >
      {/* Background Glows - Optimized with pointer-events-none */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full" 
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-extrabold text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-7">
            A collection of Machine Learning, Artificial Intelligence, and Software Development projects demonstrating clean engineering.
          </p>
        </header>

        <motion.div 
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.title}
              variants={CARD_VARIANTS}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-cyan-400/40 transition-all duration-500 will-change-transform"
            >
              {/* Image Section - Optimized for CLS */}
              <div className="relative overflow-hidden aspect-video bg-slate-900">
                {project.image ? (
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="225"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-cyan-500/5">
                    <FaCode className="text-5xl text-cyan-500/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-4">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold text-white mb-5 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <div className="flex items-center justify-between">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-slate-950 font-bold hover:bg-cyan-400 transition-colors duration-300"
                  >
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`View details for ${project.title}`}
                    className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300"
                  >
                    <FaArrowRight aria-hidden="true" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(FeaturedProjects);  