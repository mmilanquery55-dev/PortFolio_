


import React, { memo } from "react";
import {
  FaCode,
  FaBrain,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import Seo from "../components/Seo"; 

// Data moved outside to prevent re-allocation on render
const SKILL_CATEGORIES = [
  {
    title: "Programming",
    icon: <FaCode aria-hidden="true" />,
    skills: ["Python", "JavaScript", "Java", "PHP", "C"],
  },
  {
    title: "AI & Machine Learning",
    icon: <FaBrain aria-hidden="true" />,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase aria-hidden="true" />,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    title: "Tools",
    icon: <FaTools aria-hidden="true" />,
    skills: ["Git", "GitHub", "Docker", "Vercel", "Render"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
      aria-labelledby="skills-heading"
    >
      <Seo
        title="Technical Skills & Expertise | Milan Bishwakarma"
        description="Explore my technical expertise in Artificial Intelligence, Machine Learning, Python, and Full Stack Development. Specialized in building intelligent, scalable applications."
      />
      
      {/* Background Glows - Optimized with pointer-events-none */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading Section */}
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
            My Expertise
          </span>

          <h2 id="skills-heading" className="mt-6 text-4xl font-extrabold md:text-6xl">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            I specialize in Artificial Intelligence, Machine Learning,
            Full Stack Development, and modern technologies for building
            scalable and intelligent applications.
          </p>
        </header>

        {/* Skill Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {SKILL_CATEGORIES.map((category) => (
            <article
              key={category.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 will-change-transform"
            >
              {/* Card Header */}
              <div className="mb-8 flex items-center gap-4">
                <div 
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-2xl text-white shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
                >
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="text-gray-400">
                    {category.skills.length} Technologies
                  </p>
                </div>
              </div>

              {/* Skills List - Semantic ul/li for Accessibility */}
              <ul className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-cyan-500/20 bg-slate-900 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Bottom CTA / Vision Section */}
        <footer className="mt-24 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-blue-500/10 p-12 text-center backdrop-blur-xl">
          <h3 className="text-3xl font-bold text-white">
            Always Learning, Always Growing 🚀
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Technology evolves every day, and I believe continuous learning is
            the key to building innovative, intelligent, and impactful software
            solutions.
          </p>

          <div 
            className="mx-auto mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" 
            role="presentation"
          />
        </footer>
      </div>
    </section>
  );
};

// Use memo to prevent re-renders when parent components update
export default memo(Skills);    