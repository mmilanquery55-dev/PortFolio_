

import React, { memo } from "react";
import {
  FaBrain,
  FaRobot,
  FaPython,
  FaLaptopCode,
} from "react-icons/fa";
import { motion } from "framer-motion";

/**
 * PERFORMANCE: Moved constants outside the component scope.
 * This prevents re-allocation of memory and calculation overhead on every re-render.
 */
const SERVICES_DATA = [
  {
    title: "Machine Learning",
    desc: "Regression, Classification, Clustering, Feature Engineering, Model Evaluation.",
    icon: FaBrain,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Deep Learning",
    desc: "CNN, RNN, TensorFlow, Keras, PyTorch, Computer Vision & NLP.",
    icon: FaRobot,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Python Development",
    desc: "Automation, REST APIs, Desktop Applications, Data Processing & Scripting.",
    icon: FaPython,
    color: "from-yellow-400 to-green-500",
  },
  {
    title: "Web Development",
    desc: "React.js, FastAPI, MySQL, PostgreSQL, SQLite & Responsive Web Apps.",
    icon: FaLaptopCode,
    color: "from-blue-500 to-cyan-500",
  },
];

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, ease: "easeOut" },
  },
};

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 py-24"
      aria-labelledby="services-title"
    >
      {/* Background Glows: Pointer-events-none prevents interaction interference */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" 
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header: Optimized for SEO and A11y */}
        <motion.header 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-bold tracking-widest text-cyan-400 uppercase">
             What I Offer
          </span>

          <h2 id="services-title" className="mt-6 text-4xl font-black text-white md:text-5xl">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Services 
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            {/* Building modern AI-powered applications, scalable backend systems, 
            and intelligent machine learning solutions with a focus on efficiency. */}
             I build modern AI-powered applications, scalable backend systems,             
             intelligent machine learning solutions, and responsive web           
             experiences using the latest technologies.  
          </p>
        </motion.header>

        {/* Cards Grid: Semantic article tags for better SEO/A11y */}
        <motion.div 
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={ITEM_VARIANTS}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10 will-change-transform"
              >
                {/* Visual Accent Glow */}
                <div 
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                  aria-hidden="true"
                >
                  <div
                    className={`absolute -top-16 right-0 h-40 w-40 rounded-full bg-gradient-to-br ${service.color} blur-[80px] opacity-20`}
                  />
                </div>

                {/* Icon Container: GPU Accelerated via will-change */}
                <div
                  className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-3xl text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 will-change-transform`}
                  aria-hidden="true"
                >
                  <Icon />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                  {service.title}
                </h3>

                <p className="leading-relaxed text-gray-400 text-sm md:text-base">
                  {service.desc}
                </p>

                {/* Animated Bottom Border Accent */}
                <div 
                  className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full"
                  role="presentation"
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// Use memo to prevent re-renders when parent components update
export default memo(Services);     