
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// 1. Use Lazy Loading for all Page components
// This creates separate small chunks instead of one giant file
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Project = lazy(() => import("./pages/Project"));
const Contact = lazy(() => import("./pages/Contact"));

// 2. Create a lightweight loading fallback 
// This prevents layout shift during navigation
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-slate-950">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>
  </div>
);

const AppRoute = () => {
  return (
    <div className="bg-slate-950">
      {/* 3. Wrap Routes in Suspense */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRoute;   