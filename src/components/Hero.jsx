import React from "react";
import HeroDashBoard from "./HeroDashBoard";

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
      <p className="mb-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
        AI-powered productivity for modern teams
      </p>

      <h2 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
        Plan, track, and finish work{" "}
        <span className="text-cyan-400">10x faster</span>
      </h2>

      <p className="mt-6 max-w-2xl text-lg text-slate-400">
        TaskFlow AI helps teams turn messy ideas into clear tasks, timelines,
        and workflows using intelligent automation.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <button className="group relative overflow-hidden rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/30 active:translate-y-0">
          <span className="relative z-10">Start Free Trial</span>

          <span className="absolute inset-0 -translate-x-full bg-white/30 transition duration-500 group-hover:translate-x-full" />
        </button>

        <button className="group relative overflow-hidden rounded-full border border-slate-700 px-8 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-400/10 active:translate-y-0">
          <span className="relative z-10">Watch Demo</span>

          <span className="absolute inset-0 -translate-x-full bg-cyan-400/10 transition duration-500 group-hover:translate-x-full" />
        </button>
      </div>
      <HeroDashBoard />
    </section>
  );
};

export default Hero;
