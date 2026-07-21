
import React, { memo } from "react"; // Removed unused useMemo
import milan from "../assets/milan.webp";
import Seo from "../components/Seo";
import { motion } from "framer-motion"; // Added missing import
import Milan_Bishwakarma_Resume from "../assets/Milan_Bishwakarma_Resume.pdf"; // Added missing import
import {
  FaGraduationCap, FaMapMarkerAlt, FaLanguage, FaBriefcase,
  FaDownload, FaEnvelope, FaPython, FaReact,
  FaGitAlt, FaGithub
} from "react-icons/fa";
import {
  SiJavascript, SiFastapi, SiMysql
} from "react-icons/si";

// --- Static Data Moved Outside to prevent re-allocation on render ---
const SKILLS = [
  { name: "Artificial Intelligence", icon: "AI" },
  { name: "Machine Learning", icon: "ML" },
  { name: "Deep Learning", icon: "DL" },
  { name: "Python", icon: <FaPython aria-hidden="true" /> },
  { name: "React.js", icon: <FaReact aria-hidden="true" /> },
  { name: "JavaScript", icon: <SiJavascript aria-hidden="true" /> },
  { name: "FastAPI", icon: <SiFastapi aria-hidden="true" /> },
  { name: "MySQL", icon: <SiMysql aria-hidden="true" /> },
  { name: "Git", icon: <FaGitAlt aria-hidden="true" /> },
  { name: "GitHub", icon: <FaGithub aria-hidden="true" /> },
];

const PERSONAL_INFO = [
  { title: "Education", value: "BCSIT\nPokhara University", icon: <FaGraduationCap aria-hidden="true" /> },
  { title: "Location", value: "Nepal", icon: <FaMapMarkerAlt aria-hidden="true" /> },
  { title: "Languages", value: "Nepali, English", icon: <FaLanguage aria-hidden="true" /> },
  { title: "Experience", value: "AI Projects\nReact Development", icon: <FaBriefcase aria-hidden="true" /> },
];

const STATS = [
  { number: "20+", label: "Projects" },
  { number: "5+", label: "Certificates" },
  { number: "1+", label: "Years Learning" },
  { number: "50+", label: "GitHub Commits" },
];

const EDUCATION = [
  { title: "Bachelor of Computer System & Information Technology", school: "Pokhara University", year: "2024 - Present" },
  { title: "+2 Science", school: "Pinnacle Academy College, Lagankhel, Lalitpur", year: "2022 - 2024" },
  { title: "SEE", school: "Shree Saraswati Secondary School, Salle, Rukum West", year: "Completed" },
];

// --- Memoized Sub-components for Performance ---

const InfoCard = memo(({ item }) => (
  <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 will-change-transform">
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition duration-300">
        {item.icon}
      </div>
      <div>
        <h3 className="font-semibold text-white">{item.title}</h3>
        <p className="mt-2 whitespace-pre-line text-gray-400 text-sm">{item.value}</p>
      </div>
    </div>
  </div>
));

const SkillCard = memo(({ skill }) => (
  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10 will-change-transform">
    <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-cyan-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
    <div className="relative w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-2xl shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
      {skill.icon}
    </div>
    <h3 className="relative mt-6 text-center font-semibold text-lg text-white transition group-hover:text-cyan-400">
      {skill.name}
    </h3>
    <div className="mt-6 h-1 w-0 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
  </div>
));

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-950 text-white py-24" aria-labelledby="about-heading">
      <Seo 
        title="About | Milan Bishwakarma - AI Engineer & Full Stack Developer" 
        description="Learn about Milan Bishwakarma, a BCSIT student specializing in AI, Machine Learning, and Full Stack Development."
      />

      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        <header className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 uppercase tracking-[5px] text-sm font-semibold">
            About Me
          </span>
          <h1 id="about-heading" className="mt-6 text-4xl md:text-6xl font-black leading-tight">
            Building <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Intelligent</span><br />Digital Experiences
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Passionate about Artificial Intelligence, Machine Learning, Deep Learning, and Full Stack Web Development.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <figure className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl"></div>
              <div className="relative rounded-full p-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                <img
                  src={milan}
                  alt="Milan Bishwakarma"
                  width="384"
                  height="384"
                  loading="eager"
                  fetchPriority="high" // Corrected syntax
                  decoding="async"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-slate-950 shadow-2xl"
                />
              </div>
              <div className="absolute bottom-6 right-0 bg-emerald-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Available for Work
              </div>
            </div>
          </figure>

          <article>
            <h2 className="text-4xl font-extrabold text-white">Milan Bishwakarma</h2>
            <p className="mt-8 text-gray-300 leading-8">
              I am a BCSIT student at Pokhara University with a strong passion for Artificial Intelligence, Machine Learning, Deep Learning, and modern Full Stack Web Development.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mt-14">
              {PERSONAL_INFO.map((item) => (
                <InfoCard key={item.title} item={item} />
              ))}
            </div>
          </article>
        </div>

        <div className="mt-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Technologies I <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Work With</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
            {SKILLS.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        <div className="mt-28 grid grid-cols-2 lg:grid-cols-4 gap-7">
          {STATS.map((item) => (
            <div key={item.label} className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-cyan-400/40 transition-all duration-500">
              <span className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">
                {item.number}
              </span>
              <p className="mt-4 text-gray-300 font-medium group-hover:text-white transition">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-32">
          <header className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white">Academic Journey</h2>
          </header>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30"></div>
            {EDUCATION.map((item, index) => (
              <div key={item.title} className="relative pl-20 pb-12 last:pb-0">
                <div className="absolute left-0 top-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-slate-950 flex items-center justify-center text-white font-bold z-10">
                  {index + 1}
                </div>
                <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400/40 transition-all duration-500">
                  <span className="text-cyan-400 text-sm font-semibold uppercase">{item.year}</span>
                  <h3 className="mt-3 text-2xl font-bold text-white group-hover:text-cyan-400 transition">{item.title}</h3>
                  <p className="mt-4 text-gray-400">{item.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/50 backdrop-blur-xl p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white">Ready to Build Something Amazing?</h2>
            
            <div className="mt-10 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                
                {/* Contact Me Button */}
                <motion.a 
                  href="/contact"
                  aria-label="Contact Me" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 shadow-lg shadow-cyan-500/20"
                >
                  <FaEnvelope /> Contact Me
                </motion.a>

                {/* Download Resume Button */}
                <motion.a 
                  href={Milan_Bishwakarma_Resume}
                  download="Milan_Bishwakarma_Resume.pdf"
                  aria-label="Download Resume" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <FaDownload /> Download Resume
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};   

export default memo(About);   
