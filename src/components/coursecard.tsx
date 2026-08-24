type CourseCardProps = {
  title: string;
  description: string;
};

export default function CourseCard({ title, description }: CourseCardProps) {
  return (
    <div className="rounded-lg bg-[#142642] p-5">

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-400">
        {description}
      </p>

      <button className="mt-4 text-sm text-cyan-300">
        Explore →
      </button>
</div>
);
}