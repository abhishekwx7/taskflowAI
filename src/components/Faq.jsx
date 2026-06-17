import { useState } from "react";

const faqs = [
  {
    question: "Can I use TaskFlow AI for free?",
    answer:
      "Yes. The Starter plan lets you create up to 3 projects and use basic AI task planning without paying.",
  },
  {
    question: "Do I need a credit card to start?",
    answer:
      "No. You can start with the free plan and upgrade only when your team needs more projects, collaboration, and automation.",
  },
  {
    question: "Can my whole team collaborate?",
    answer:
      "Yes. The Pro and Business plans include team collaboration, shared projects, task assignment, and progress tracking.",
  },
  {
    question: "Is TaskFlow AI only for software teams?",
    answer:
      "No. It works for product teams, marketing teams, founders, agencies, students, and anyone who needs to plan and execute work faster.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can cancel your paid plan anytime. Your workspace will remain available based on your current billing period.",
  },
  {
    question: "Is my project data secure?",
    answer:
      "TaskFlow AI is designed with secure workspaces, protected access, and privacy-focused workflows for modern teams.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
          FAQ
        </p>

        <h2 className="text-4xl font-bold leading-tight md:text-5xl">
          Questions before you{" "}
          <span className="text-cyan-400">get started?</span>
        </h2>

        <p className="mt-6 text-lg text-slate-400">
          Here are the most common things teams ask before using TaskFlow AI.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-4 md:grid-cols-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              onClick={() => handleToggleFAQ(index)}
              className="group cursor-pointer rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-400/10"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{faq.question}</h3>

                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300 transition duration-300 ${
                    isOpen
                      ? "rotate-45 bg-cyan-400/20"
                      : "group-hover:rotate-45"
                  }`}
                >
                  +
                </span>
              </div>

              {isOpen && (
                <p className="mt-4 leading-7 text-slate-400">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
