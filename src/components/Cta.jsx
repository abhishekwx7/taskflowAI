const Cta = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 px-6 py-16 text-center shadow-2xl md:px-12">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Get started today
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Ready to turn messy work into{" "}
            <span className="text-cyan-400">clear execution?</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Join modern teams using TaskFlow AI to plan faster, automate
            workflows, and stay focused on what matters.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="group relative overflow-hidden rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/30 active:translate-y-0">
              <span className="relative z-10">Start Free Trial</span>
              <span className="absolute inset-0 -translate-x-full bg-white/30 transition duration-500 group-hover:translate-x-full" />
            </button>

            <button className="group relative overflow-hidden rounded-full border border-slate-700 px-8 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-800 hover:shadow-xl hover:shadow-cyan-400/10 active:translate-y-0">
              <span className="relative z-10">Book a Demo</span>
              <span className="absolute inset-0 -translate-x-full bg-cyan-400/10 transition duration-500 group-hover:translate-x-full" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
