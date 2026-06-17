const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at NovaLabs",
    quote:
      "TaskFlow AI helped our team turn scattered ideas into clear weekly plans. We cut planning time almost in half.",
    avatar: "SC",
  },
  {
    name: "Marcus Reed",
    role: "Founder at Launchly",
    quote:
      "The AI suggestions are surprisingly useful. It feels like having a project manager inside our workspace.",
    avatar: "MR",
  },
  {
    name: "Priya Shah",
    role: "Engineering Lead at CodeNest",
    quote:
      "Our sprint planning became much smoother. Everyone knows what to work on and what matters most.",
    avatar: "PS",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
          Testimonials
        </p>

        <h2 className="text-4xl font-bold leading-tight md:text-5xl">
          Loved by teams that want to{" "}
          <span className="text-cyan-400">move faster</span>
        </h2>

        <p className="mt-6 text-lg text-slate-400">
          Teams use TaskFlow AI to plan projects, reduce meetings, and keep
          everyone focused on execution.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-400/10"
          >
            <div className="mb-6 flex gap-1 text-cyan-400">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <p className="leading-7 text-slate-300">“{testimonial.quote}”</p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 font-bold text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-400/20">
                {testimonial.avatar}
              </div>

              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="mt-1 text-sm text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
