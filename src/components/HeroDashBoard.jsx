import React from "react";

const HeroDashBoard = () => {
  return (
    <div className="relative mt-20 w-full max-w-5xl">
      <div className="absolute -inset-1 rounded-3xl bg-cyan-400/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
        <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-red-400 transition duration-300 hover:scale-125 hover:shadow-lg hover:shadow-red-400/40" />
          <span className="h-3 w-3 rounded-full bg-yellow-400 transition duration-300 hover:scale-125 hover:shadow-lg hover:shadow-yellow-400/40" />
          <span className="h-3 w-3 rounded-full bg-green-400 transition duration-300 hover:scale-125 hover:shadow-lg hover:shadow-green-400/40" />

          <div className="ml-4 flex h-6 flex-1 items-center rounded-full bg-slate-800 px-3 transition duration-300 hover:bg-slate-700 hover:shadow-lg hover:shadow-cyan-400/10">
            <div className="h-2 w-24 rounded-full bg-slate-600 transition duration-300 hover:w-36 hover:bg-cyan-400/40" />
          </div>
        </div>

        <div className="grid gap-6 p-6 text-left md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-400/10">
            <p className="text-sm text-slate-400">Tasks Completed</p>
            <h3 className="mt-3 text-3xl font-bold">2,481</h3>
            <p className="mt-2 text-sm text-cyan-400">+32% this month</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-400/10">
            <p className="text-sm text-slate-400">AI Suggestions</p>
            <h3 className="mt-3 text-3xl font-bold">847</h3>
            <p className="mt-2 text-sm text-cyan-400">Generated instantly</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-400/10">
            <p className="text-sm text-slate-400">Time Saved</p>
            <h3 className="mt-3 text-3xl font-bold">126h</h3>
            <p className="mt-2 text-sm text-cyan-400">Across your team</p>
          </div>
        </div>

        <div className="grid gap-6 p-6 pt-0 text-left lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-400/10">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-semibold">Project Timeline</h3>
              <p className="text-sm text-slate-500">This week</p>
            </div>

            <div className="space-y-4">
              <div className="h-4 w-full rounded-full bg-slate-800">
                <div className="h-4 w-[75%] rounded-full bg-cyan-400" />
              </div>

              <div className="h-4 w-full rounded-full bg-slate-800">
                <div className="h-4 w-[55%] rounded-full bg-cyan-400" />
              </div>

              <div className="h-4 w-full rounded-full bg-slate-800">
                <div className="h-4 w-[90%] rounded-full bg-cyan-400" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-400/10">
            <h3 className="font-semibold">AI Assistant</h3>

            <div className="mt-5 space-y-3">
              <div className="rounded-xl bg-slate-900 p-3 text-sm text-slate-300 transition duration-300 hover:bg-slate-800">
                Create a launch plan for Friday.
              </div>

              <div className="rounded-xl bg-cyan-400/10 p-3 text-sm text-cyan-300 transition duration-300 hover:bg-cyan-400/20">
                Done. I created 8 tasks and assigned priorities.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDashBoard;
