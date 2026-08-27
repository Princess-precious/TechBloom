/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 26/08/2026 - 16:27:47
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/08/2026
    * - Author          : HP
    * - Modification    : 
**/
import CourseCard from "../components/coursecard";
import Learningjourney from "../components/learningjourney";
import Externalplatforms from "../components/externalplatform";
import { courses } from "../Data/learningdata";

function learningHub() {
  return (
    <main className="min-h-screen bg-[#06152D] px-5 py-10 text-white">

      
      <section className="mb-8">
        <h1 className="text-3xl font-bold">
          Learning Hub
        </h1>

        <p className="mt-2 max-w-xl text-center text-sm text-gray-400">
          Elevate your skills with curated courses designed
          for women in tech. Choose your path and track your
          progress in real-time.
        </p>
      </section>


      
      <section>

        <h2 className="mb-4 p-4 text-left text-xl font-semibold">
          Course Selection
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

          {courses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              description={course.description}
              path={course.path}
            />
          ))}

        </div>

      </section>


      {/* Learning Journey + External Platforms */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <Learningjourney />
        </div>

        <Externalplatforms />

      </div>

    </main>
  );
}

export default learningHub;