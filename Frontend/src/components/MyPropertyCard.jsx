import { Link } from "react-router-dom";

function MyPropertyCard({ property, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">

      <img
        src={
          property.images?.length
            ? property.images[0]
            : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800"
        }
        alt={property.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold">
          {property.title}
        </h2>

        <p className="text-gray-500 mt-2">
          📍 {property.location}
        </p>

        <p className="text-red-500 font-bold text-xl mt-3">
          ₹{property.price} / night
        </p>

        <div className="flex gap-3 mt-6">

          <Link
            to={`/edit-property/${property._id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Edit
          </Link>

          <button
            onClick={() => onDelete(property._id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default MyPropertyCard;