const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    description: "Best for individuals trying TaskFlow AI.",
    features: [
      "3 projects",
      "Basic AI task planning",
      "Weekly progress summary",
      "Community support",
    ],
    buttonText: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    description: "Best for small teams that want to move faster.",
    features: [
      "Unlimited projects",
      "Advanced AI planning",
      "Team collaboration",
      "Timeline builder",
      "Priority support",
    ],
    buttonText: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Business",
    price: "$49",
    description: "Best for growing teams and serious workflows.",
    features: [
      "Everything in Pro",
      "Custom workflows",
      "Advanced analytics",
      "Admin controls",
      "Dedicated onboarding",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
          Pricing
        </p>

        <h2 className="text-4xl font-bold leading-tight md:text-5xl">
          Simple pricing for <span className="text-cyan-400">every team</span>
        </h2>

        <p className="mt-6 text-lg text-slate-400">
          Start free, upgrade when your team needs more power, automation, and
          collaboration.
        </p>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`group relative rounded-3xl border p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
              plan.popular
                ? "border-cyan-400/60 bg-slate-900 shadow-xl shadow-cyan-400/10"
                : "border-slate-800 bg-slate-900/60 hover:border-cyan-400/40 hover:bg-slate-900 hover:shadow-cyan-400/10"
            }`}
          >
            {plan.popular && (
              <div className="absolute right-6 top-6 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-950">
                Popular
              </div>
            )}

            <h3 className="text-2xl font-bold">{plan.name}</h3>

            <p className="mt-3 max-w-sm text-slate-400">{plan.description}</p>

            <div className="mt-8 flex items-end gap-1">
              <span className="text-5xl font-bold">{plan.price}</span>
              <span className="mb-2 text-slate-500">/month</span>
            </div>

            <button
              className={`group/button relative mt-8 w-full overflow-hidden rounded-full px-6 py-3 font-semibold transition duration-300 active:translate-y-0 ${
                plan.popular
                  ? "bg-cyan-400 text-slate-950 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/30"
                  : "border border-slate-700 text-white hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-800"
              }`}
            >
              <span className="relative z-10">{plan.buttonText}</span>
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition duration-500 group-hover/button:translate-x-full" />
            </button>

            <div className="mt-8 h-px bg-slate-800" />

            <ul className="mt-8 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-slate-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs text-cyan-300">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
