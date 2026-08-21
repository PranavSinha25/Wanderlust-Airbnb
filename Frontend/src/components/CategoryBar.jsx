function CategoryBar() {
  const categories = [
    "🏖 Beach",
    "🏔 Mountain",
    "🏡 Villa",
    "🌲 Forest",
    "☕ Farm",
    "🌊 Lake",
    "🏕 Camping",
    "✨ Luxury",
  ];

  return (
    <div className="border-y bg-white">
      <div className="max-w-7xl mx-auto flex gap-8 overflow-x-auto px-8 py-5">
        {categories.map((category) => (
          <button
            key={category}
            className="hover:text-red-500 whitespace-nowrap font-medium"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryBar;