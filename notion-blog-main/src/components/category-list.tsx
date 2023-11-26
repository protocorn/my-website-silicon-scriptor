export default function CategoryList({ categories }: { categories: string[] }) {
  return (
    <div className="flex space-x-2 overflow-hidden w-full">
      <div className="marquee">
        {categories.map((category, index) => (
          <span
            key={index}
            className="bg-secondary rounded-full mr-8 px-4 py-2 text-sm inline-block"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}