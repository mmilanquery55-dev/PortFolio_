
import React, { lazy, Suspense, memo } from "react"; 
import Seo from "../components/Seo";  
import { motion } from "framer-motion"; 
import home2 from "../assets/home2.webp"; 
import Milan_Bishwakarma_Resume from "../assets/Milan_Bishwakarma_Resume.pdf";
import { Typewriter } from "react-simple-typewriter";

// PERFORMANCE: Lazy load non-critical sections (Code Splitting)
const Services = lazy(() => import("../components/Services"));
const TechStack = lazy(() => import("../components/TechStack"));
const FeaturedProjects = lazy(() => import("../components/FeaturedProjects"));
const CTA = lazy(() => import("../components/CTA")); 

// PRE-ALLOCATION: Move variants outside to prevent re-creation on every render
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
}      

const Home = () => {
  return (  
    <main>
      <Seo
        title="Home | Milan Bishwakarma - AI & Python Developer"
        description="Official portfolio of Milan Bishwakarma. Specialized in Machine Learning, Deep Learning, and building intelligent web applications."
      /> 

      {/* Hero Section */}
      <section 
        className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden flex items-center"
        aria-label="Hero Section"
      >
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 w-full">
          
          {/* Left Side - Animated Content */}
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-6 text-sm font-medium"
            >
              👋 Welcome to My Portfolio
            </motion.span> 
 
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Hi,<br />I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Milan Bishwakarma
              </span>
            </h1>

            <div className="mt-6 text-2xl font-semibold text-cyan-400 h-[40px]"> {/* Fixed height prevents CLS */}
              <Typewriter
                words={["IT Student", "Machine Learning Enthusiast", "Deep Learning Enthusiast", "Python Developer"]}
                loop={0}
                cursor
                cursorStyle="|"  
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </div>

            <p className="mt-8 text-gray-300 leading-relaxed text-lg max-w-xl">
              I build intelligent AI applications, machine learning models, and modern web applications 
              that solve real-world problems through innovation and clean code.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href={Milan_Bishwakarma_Resume}
                  download="Milan_Bishwakarma_Resume.pdf"
                  aria-label="Download Milan's Resume"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #3d6eff, #8b5cf6)",
                    boxShadow: "0 6px 24px rgba(61,110,255,0.3)",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </motion.a>
                
                {/* FIXED VIEW ONLINE SECTION */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href={Milan_Bishwakarma_Resume} // Use the import variable here
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Resume Online"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold border border-purple-500/30 text-purple-400 bg-purple-500/5"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  View Online
                </motion.a>
              </div>

              <motion.a
                whileHover={{ backgroundColor: "#06b6d4", color: "#000" }}
                href="/contact"
                aria-label="Hire Milan Bishwakarma"
                className="w-full sm:w-max text-center border border-cyan-500 px-12 py-3 rounded-xl font-bold text-cyan-400 active:scale-95"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Optimized LCP Image */}
          <motion.div 
            className="lg:w-1/2 flex justify-center relative group"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            <div className="absolute w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-cyan-500 blur-[120px] opacity-10 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none"></div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-cyan-500/20 animate-[spin_20s_linear_infinite] group-hover:border-cyan-500/50 transition-all duration-700 pointer-events-none will-change-transform"></div>

              <img 
                src={home2}
                alt="Milan Bishwakarma Profile"
                width="420"
                height="420"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="relative z-10 w-80 h-80 md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-cyan-400/80 shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] group-hover:border-blue-400 will-change-transform"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={<div className="h-20 bg-slate-950" />}>
        <Services />
        <TechStack />
        <FeaturedProjects />
        <CTA />
      </Suspense>
    </main>
  );
}; 
 
export default memo(Home); 
