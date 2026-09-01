import { useParams } from "react-router-dom";
import { courses } from "../Data/learningdata";

export default function CoursePage() {
  const { courseName } = useParams();

  const course = courses.find(
    (course) => course.path === `/learning/${courseName}`
  );

  if (!course) {
    return (
      <main className="min-h-screen bg-[#06152D] px-5 py-10 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold">
            Course Not Found
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#06152D] px-5 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Course Information */}
        <section>
          <p className="text-sm text-cyan-300">
            Learning Path
          </p>

          <div className="mt-2 flex items-center gap-3">
            <span className="text-3xl">
              {course.icon}
            </span>

            <h1 className="text-3xl font-bold">
              {course.title}
            </h1>
          </div>

          <p className="mt-3 max-w-2xl text-slate-400">
            {course.description}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Level: {course.level}
          </p>
        </section>

        {/* Course Modules */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">
            Course Modules
          </h2>

          <div className="mt-5 space-y-4">
            {course.modules.map((module, index) => (
              <div
                key={module.id}
                className="rounded-xl border border-slate-700 bg-[#10223D] p-5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">
                    Module {index + 1} — {module.title}
                  </h3>

                  <span className="text-sm text-cyan-300">
                    {module.status}
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-400">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      
        <section className="mt-10">
          <h2 className="text-xl font-semibold">
            Learning Resources
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {course.resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-700 bg-[#10223D] p-5 transition hover:-translate-y-1 hover:border-cyan-400"
              >
                <h3 className="font-semibold text-white">
                  {resource.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {resource.description}
                </p>

                <p className="mt-4 text-sm text-cyan-300">
                  Visit Resource →
                </p>
              </a>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}