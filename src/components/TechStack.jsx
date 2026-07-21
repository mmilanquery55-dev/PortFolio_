
import React, { memo } from "react";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiFastapi,
  SiTensorflow,
  SiScikitlearn,
  SiMysql,
} from "react-icons/si";
import { m, LazyMotion, domMax, useReducedMotion } from "framer-motion";

// Static data outside component to prevent re-creation on render
const TECH_DATA = [
  { name: "Python", icon: FaPython, color: "from-yellow-400 to-blue-500" },
  { name: "React", icon: FaReact, color: "from-cyan-400 to-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "from-yellow-400 to-yellow-600" },
  { name: "FastAPI", icon: SiFastapi, color: "from-green-400 to-emerald-600" },
  { name: "Node.js", icon: FaNodeJs, color: "from-green-500 to-lime-500" },
  { name: "TensorFlow", icon: SiTensorflow, color: "from-orange-400 to-red-500" },
  { name: "Scikit-Learn", icon: SiScikitlearn, color: "from-orange-500 to-yellow-400" },
  { name: "MySQL", icon: SiMysql, color: "from-blue-500 to-cyan-500" },
  { name: "Git", icon: FaGitAlt, color: "from-orange-500 to-red-600" },
  { name: "GitHub", icon: FaGithub, color: "from-slate-700 to-slate-900" },
];

// Memoized Individual Card Component
const TechCard = memo(({ item, variants }) => {
  const Icon = item.icon;
  
  return (
    <m.li
      variants={variants}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }} // Subtle feedback on click
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative list-none overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl cursor-pointer will-change-transform transition-all duration-500 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
    >
      {/* Glow Effect */}
      <div
        className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
        aria-hidden="true"
      />

      {/* Icon Container */}
      <div
        className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-3xl text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
      >
        <Icon aria-hidden="true" />
      </div>

      <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
        {item.name}
      </h3>

      {/* Bottom Animated Line - Updated with whileTap for click support */}
      <m.div 
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        whileTap={{ scaleX: 1 }} // Line appears on click
        transition={{ duration: 0.4 }}
        className="mt-5 h-1 origin-left rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" 
      />
    </m.li>
  );
});

TechCard.displayName = "TechCard";

const TechStack = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <LazyMotion features={domMax}>
      <section
        id="tech-stack"
        className="relative overflow-hidden bg-slate-950 py-24"
        aria-labelledby="tech-stack-title"
      >
        <m.div
          animate={{ opacity: [0.1, 0.15, 0.1], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl will-change-transform"
          aria-hidden="true"
        />
        <m.div
          animate={{ opacity: [0.1, 0.12, 0.1], scale: [1.05, 1, 1.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl will-change-transform"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <m.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium uppercase tracking-widest text-cyan-400">
              Expertise
            </span>

            <h2 id="tech-stack-title" className="mt-6 text-4xl font-extrabold text-white md:text-5xl">
              My{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Technologies, frameworks, and tools I use to build modern,
              scalable, and AI-powered applications.
            </p>
          </m.div>

          <m.ul 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          >
            {TECH_DATA.map((item) => (
              <TechCard key={item.name} item={item} variants={itemVariants} />
            ))}
          </m.ul>
        </div>
      </section>
    </LazyMotion>
  );
};

export default memo(TechStack);        