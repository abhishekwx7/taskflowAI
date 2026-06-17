const features = [
  {
    icon: "⚡",
    title: "AI Task Planning",
    description:
      "Turn rough ideas into clear tasks, deadlines, and action steps in seconds.",
  },
  {
    icon: "🎯",
    title: "Smart Priorities",
    description:
      "Automatically identify what matters most so your team always works on the right things.",
  },
  {
    icon: "👥",
    title: "Team Collaboration",
    description:
      "Assign tasks, share updates, and keep everyone aligned from one simple workspace.",
  },
  {
    icon: "📅",
    title: "Timeline Builder",
    description:
      "Create weekly plans, launch timelines, and project roadmaps without manual planning.",
  },
  {
    icon: "📊",
    title: "Progress Insights",
    description:
      "Track completed work, team velocity, blockers, and productivity trends in real time.",
  },
  {
    icon: "🔁",
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks like status updates, reminders, and project summaries.",
  },
];

const Features = () => {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
          Features
        </p>

        <h2 className="text-4xl font-bold leading-tight md:text-5xl">
          Everything your team needs to{" "}
          <span className="text-cyan-400">move faster</span>
        </h2>

        <p className="mt-6 text-lg text-slate-400">
          TaskFlow AI combines planning, collaboration, automation, and insights
          into one intelligent workspace.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-400/10"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl transition duration-300 group-hover:scale-110 group-hover:bg-cyan-400/20">
              {feature.icon}
            </div>

            <h3 className="text-xl font-semibold">{feature.title}</h3>

            <p className="mt-3 leading-7 text-slate-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
