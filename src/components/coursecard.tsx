import { Link } from "react-router-dom";
import type { Course } from "../Data/learningdata";

type CourseCardProps = {
  course: Course;
};

function CourseCard({ course }: CourseCardProps) {
  return (
    <Link to={course.path}>
      <div className="cursor-pointer rounded-xl bg-[#10284A] p-6 transition hover:scale-105">
        <h2 className="text-xl font-bold">
          {course.title}
        </h2>

        <p className="mt-2 text-gray-300">
          {course.description}
        </p>

        <p className="mt-4 text-sm text-blue-400">
          {course.level}
        </p>

        <div className="mt-4 inline-block rounded-lg text-[#64ffda] px-4 py-2">
          Explore Course
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;