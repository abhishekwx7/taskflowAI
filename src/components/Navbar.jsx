import React from "react";

const Navbar = () => {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <h1 className="text-3xl font-bold">
        TaskFlow <span className="text-cyan-400">AI</span>
      </h1>

      <nav className="hidden items-center gap-8 text-m text-slate-300 md:flex">
        <a href="#features" className="hover:text-white">
          Features
        </a>
        <a href="#pricing" className="hover:text-white">
          Pricing
        </a>
        <a href="#testimonials" className="hover:text-white">
          Testinomials
        </a>
      </nav>

      <button className="group relative overflow-hidden rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/30 active:translate-y-0">
        <span className="relative z-10">Get Started</span>

        <span className="absolute inset-0 -translate-x-full bg-white/30 transition duration-500 group-hover:translate-x-full" />
      </button>
    </header>
  );
};

export default Navbar;
