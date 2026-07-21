
import React, { memo } from "react";
import Seo from "../components/Seo";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

// Optimized Assets: Ensure these are WebP in your production folder
import email_spam from "../assets/email_spam.png";
import fake from "../assets/fake.png";
import salary from "../assets/salary.jpeg";
import insurance from "../assets/insurance.png";

// PERFORMANCE: Static data moved outside to prevent re-allocation on every render
const PROJECT_DATA = [
  {
    projectName: "Email Spam Detection",
    technology: ["Python", "NLP", "Machine Learning"],
    projectImage: email_spam,
    githubLink: "https://github.com/mmilanquery55-dev/spam-detection-nlp",
    description: "Detect spam emails using NLP preprocessing and Machine Learning classification.",
  },
  {
    projectName: "Fake News Detection",
    technology: ["Python", "NLP", "Machine Learning"],
    projectImage: fake,
    githubLink: "https://github.com/mmilanquery55-dev/fake-news-detection-using-nlp-machine-learning-",
    description: "Predict fake and real news articles using Natural Language Processing.",
  },
  {
    projectName: "Insurance Charges Prediction",
    technology: ["Python", "Regression", "Machine Learning"],
    projectImage: insurance,
    githubLink: "https://github.com/mmilanquery55-dev/insurance-charges-prediction",
    description: "Estimate insurance charges using regression models and feature engineering.",
  },
  {
    projectName: "Salary Prediction",
    technology: ["Python", "Regression", "Machine Learning"],
    projectImage: salary,
    githubLink: "https://github.com/mmilanquery55-dev/salary-prediction-using-years-experience",
    description: "Predict employee salaries based on years of experience.",
  },
];

// SUB-COMPONENT: Memoized for performance
const ProjectCard = memo(({ project, index }) => {
  return (
    <article
      className="group bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl overflow-hidden hover:border-cyan-400 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)] will-change-transform"
    >
      {/* Image Container - CLS Optimized */}
      <div className="overflow-hidden aspect-video relative">
        <img
          src={project.projectImage}
          alt={`Screenshot of ${project.projectName} project`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-white">
            {project.projectName}
          </h2>
          <span className="text-cyan-400 font-mono font-bold" aria-hidden="true">
            0{index + 1}
          </span>
        </div>

        <p className="text-gray-400 leading-7 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies - Semantic List */}
        <ul className="flex flex-wrap gap-3 mt-6" aria-label="Technologies used">
          {project.technology.map((tech) => (
            <li
              key={tech}
              className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.projectName} source code on GitHub`}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold transition-colors duration-300"
          >
            <FaGithub aria-hidden="true" />
            GitHub
          </a>

          <button
            aria-label={`View live demo of ${project.projectName}`}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/50 hover:bg-cyan-500 hover:text-slate-950 font-bold transition-all duration-300"
          >
            <FaExternalLinkAlt aria-hidden="true" />
            Live Demo
          </button>
        </div>
      </div>
    </article>
  );
});

const Project = () => {
  return (
    <section className="min-h-screen bg-slate-950 py-20 text-white" aria-labelledby="project-heading">
      <Seo
        title="Portfolio Projects | Machine Learning & AI | Milan Bishwakarma"
        description="Explore a collection of AI and Machine Learning projects including NLP Spam Detection, Fake News prediction, and Regression models built with Python."
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading Section */}
        <header className="text-center mb-16">
          <h1 id="project-heading" className="text-5xl font-extrabold tracking-tight">
            My <span className="text-cyan-400">Projects</span>
          </h1>
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            A showcase of Artificial Intelligence, Machine Learning, and Python projects 
            built to solve real-world data challenges.
          </p>
        </header>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {PROJECT_DATA.map((project, index) => (
            <ProjectCard key={project.projectName} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <footer className="mt-24">
          <div className="rounded-3xl bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/5 border border-white/5 p-12 text-center backdrop-blur-sm">
            <FaCode className="text-5xl text-cyan-400 mx-auto mb-6 opacity-80" aria-hidden="true" />
            <h2 className="text-3xl font-bold mb-4">Building Intelligent Solutions</h2>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Every project reflects my passion for Artificial Intelligence and 
              Full Stack Development. I focus on transforming complex data into 
              practical, scalable, and impactful software solutions.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default memo(Project);   