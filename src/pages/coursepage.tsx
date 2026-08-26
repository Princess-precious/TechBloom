 export default function CoursePage() {
  return (
    <main className="min-h-screen bg-[#06152D] px-5 py-10 text-white">

      <div className="mx-auto max-w-6xl">

        
        <section>
          <p className="text-sm text-cyan-300">
            Learning Path
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Web Development
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Learn how to build modern websites and web applications
            from the fundamentals to real-world projects.
          </p>
        </section>

        <section className="mt-10">

          <h2 className="text-xl font-semibold">
            Course Modules
          </h2>

          <div className="mt-5 space-y-4">

            <div className="rounded-xl border border-slate-700 bg-[#10223D] p-5">
              <h3 className="font-semibold">
                Module 1 — HTML & CSS
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Learn the fundamentals of creating and styling websites.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-[#10223D] p-5">
              <h3 className="font-semibold">
                Module 2 — JavaScript
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Learn programming fundamentals and make websites interactive.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-[#10223D] p-5">
              <h3 className="font-semibold">
                Module 3 — React
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Learn how to build modern interfaces with React.
              </p>
            </div>

          </div>

        </section>

      </div>

    </main>
  );
}
