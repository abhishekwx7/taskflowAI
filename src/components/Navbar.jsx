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
        <a href="#testinomials" className="hover:text-white">
          Testinomials
        </a>
      </nav>

      <button className="rounded-full bg-cyan-400 px-5 py-2 text-m font-semibold text-slate-950 hover:bg-cyan-300">
        Get Started
      </button>
    </header>
  );
};

export default Navbar;
