import {Link} from "react-router-dom"
type CourseCardProps = {
  title: string;
  description: string;
  path:string;
};

export default function CourseCard({ title, description, path }: CourseCardProps) {

  
  return (
    <div className="rounded-lg bg-[#142642] p-5">

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-400">
        {description}
      </p>

      <Link to="web-development"
      className="mt-4 text-sm text-cyan-300" >
              
               Explore →
      </Link>
</div>
);
}