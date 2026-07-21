



import React, { memo } from 'react';

const CTA = () => {
  return (
    <section 
      className="bg-gradient-to-r from-cyan-500 to-blue-600 py-24" 
      aria-labelledby="cta-title"
    >
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 
          id="cta-title" 
          className="text-4xl md:text-5xl font-bold text-white tracking-tight"
        >
          Let's Build Something Amazing Together
        </h2>

        <p className="text-white/90 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
          Looking for an AI Engineer or Full Stack Developer? 
          Let's connect and create impactful solutions.
        </p>

        <a
          href="/contact"
          className="inline-block mt-10 bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold transition-transform duration-300 hover:scale-105 active:scale-95 will-change-transform focus:outline-none focus:ring-4 focus:ring-white/40 shadow-lg"
          aria-label="Contact Milan to discuss your next project"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};


export default memo(CTA);  