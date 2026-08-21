import { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto -mt-10 relative z-20"
    >
      <div className="bg-white shadow-xl rounded-full p-3 flex items-center">

        <input
          type="text"
          placeholder="Search by location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-6 py-3 outline-none rounded-full"
        />

        <button
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full"
        >
          Search
        </button>

      </div>
    </form>
  );
}

export default SearchBar;