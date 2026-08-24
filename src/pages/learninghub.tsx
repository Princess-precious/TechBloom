import CourseCard from "../components/coursecard";
import Learningjourney from "../components/learningjourney";
import Externalplatforms from "../components/externalplatform"

function learningHub() {
  return (
    <main className="min-h-screen bg-[#06152D] px-5 py-10 text-white">

      
      <section className="mb-8">
        <h1 className="text-3xl font-bold">
          Learning Hub
        </h1>

        <p className="mt-2 max-w-xl text-sm text-center text-gray-400">
          Elevate your skills with curated courses designed
          for women in tech. Choose your path and track your
          progress in real-time.
        </p>
      </section>


      
      <section>

        <h2 className="mb-4 text-xl p-4 text-left  font-semibold">
          Course Selection
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

          <CourseCard
            title="Web Development"
            description="Learn how to build modern websites and web applications."
          />

          <CourseCard
            title="Data Science"
            description="Learn data analysis, statistics and machine learning."
          />

          <CourseCard
            title="UX Design"
            description="Learn user experience and interface design."
          />

          <CourseCard
            title="Cyber Security"
            description="Learn the fundamentals of protecting digital systems."
          />
            <CourseCard
            title="Mobile Development"
            description="Learn the fundamentals of protecting digital systems."
          />

           <CourseCard
            title="Project Management "
            description="Learn the fundamentals of protecting digital systems."
          />

        </div>

      </section>

      <br/>
            
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