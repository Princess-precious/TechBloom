import CourseCard from "../components/coursecard";
import LearningJourney from "../components/learningjourney";
import Externalplatforms from "../components/externalplatform";
import { courses } from "../Data/learningdata";
import Navbar from "../components/Navbar";

function learningHub() {
  return (
    <main className="min-h-screen bg-[#06152D] px-5 py-10 text-white">

        <Navbar/>
        <br/>
      <section className="mb-8 mt-[80px]">
        <h1 className="text-4xl font-bold text-center" >
          Learning Hub
        </h1>

        <p className="mt-2 max-w-xl text-center text-sm text-gray-400 ">
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



      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">

        <div className="lg:col-span-2">
      
<div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">

  <div className="lg:col-span-2">
    <LearningJourney modules={courses[0].modules} />
  </div>
</div>
</div>

        <Externalplatforms/>

      </div>

    </main>
  );
}

export default learningHub;