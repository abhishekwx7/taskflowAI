const steps = [
  {
    number: "01",
    title: "Add your project idea",
    description:
      "Start with a rough goal, feature request, launch plan, or messy project idea.",
  },
  {
    number: "02",
    title: "Let AI create the workflow",
    description:
      "TaskFlow AI breaks it into tasks, priorities, timelines, and clear next actions.",
  },
  {
    number: "03",
    title: "Track progress with your team",
    description:
      "Assign work, monitor progress, remove blockers, and keep everyone aligned.",
  },
];

const HowItWorks = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            How it works
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            From messy ideas to{" "}
            <span className="text-cyan-400">finished work</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            TaskFlow AI helps your team move from confusion to clarity in three
            simple steps. No complex setup, no endless planning meetings.
          </p>

          <button className="group relative mt-8 overflow-hidden rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/30 active:translate-y-0">
            <span className="relative z-10">Try it now</span>
            <span className="absolute inset-0 -translate-x-full bg-white/30 transition duration-500 group-hover:translate-x-full" />
          </button>
        </div>

        <div className="space-y-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group flex gap-5 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-400/10"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-lg font-bold text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-400/20">
                {step.number}
              </div>

              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
