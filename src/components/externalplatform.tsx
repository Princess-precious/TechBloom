type Platform = {
  name: string;
  description: string;
};

const platforms: Platform[] = [
  {
    name: "Coursera",
    description: "Learn from universities and industry experts.",
  },
  {
    name: "freeCodeCamp",
    description: "Build projects and earn coding certifications.",
  },
  {
    name: "Figma",
    description: "Practice UI and UX design skills.",
  },
];

function ExternalPlatforms() {
  return (
    <section className="rounded-xl border border-slate-700 bg-[#10223D] p-6">

      <h2 className="text-xl font-semibold">
        External Platforms
      </h2>

      <p className="mt-1 text-sm text-slate-400">
        Continue your learning on these platforms.
      </p>

      <div className="mt-6 space-y-4">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className="flex items-center justify-between rounded-lg bg-[#0B1B33] p-4"
          >
            <div>
              <h3 className="text-sm font-medium">
                {platform.name}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                {platform.description}
              </p>
            </div>

            <button className="text-cyan-300">
              →
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default ExternalPlatforms;