import { useState } from "react";
import type { Module } from "../Data/learningdata";

type LearningJourneyProps = {
  modules: Module[];
};

 export default function LearningJourney({ modules: initialModules, }: LearningJourneyProps) {
  const [modules, setModules] = useState<Module[]>(initialModules);

  const completedModules = modules.filter(
    (module) => module.status === "completed"
  ).length;

  const progress =
    modules.length === 0
      ? 0
      : Math.round((completedModules / modules.length) * 100);

  const completeModule = (index: number) => {
    setModules((currentModules) =>
      currentModules.map((module, moduleIndex) => {
        if (moduleIndex === index) {
          return {
            ...module,
            status: "completed",
          };
        }

        if (
          moduleIndex === index + 1 &&
          module.status === "locked"
        ) {
          return {
            ...module,
            status: "current",
          };
        }

        return module;
      })
    );
  };

  return (
    <section className="rounded-xl border border-slate-700 bg-[#10223D] p-6">

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            My Learning Journey
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Track your progress and continue learning.
          </p>
        </div>

        <span className="text-lg font-semibold text-cyan-300">
          {progress}%
        </span>
      </div>

      <div className="mt-6">
        <div className="h-2 w-full rounded-full bg-slate-700">
          <div
            className="h-2 rounded-full bg-cyan-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {modules.map((module, index) => (
          <div
            key={module.id}
            className="flex items-center justify-between rounded-lg bg-[#0B1B33] p-4"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-600">
                {module.status === "completed" && "✓"}
                {module.status === "current" && "→"}
                {module.status === "locked" && "🔒"}
              </div>

              <div>
                <p className="text-sm font-medium">
                  Module {index + 1}
                </p>

                <p className="text-sm text-slate-400">
                  {module.title}
                </p>
              </div>

            </div>

            {module.status === "current" && (
              <button
                onClick={() => completeModule(index)}
                className="rounded-md bg-cyan-400 px-3 py-2 text-xs font-medium text-slate-950 hover:bg-cyan-300"
              >
                Complete
              </button>
            )}

          </div>
        ))}
      </div>

    </section>
  );
}

