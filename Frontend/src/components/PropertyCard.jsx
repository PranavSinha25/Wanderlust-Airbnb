import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <Link
      to={`/property/${property._id}`}
      className="group"
    >
      <div className="bg-white rounded-3xl overflow-hidden hover:shadow-xl transition duration-300">

        <img
          src={
            property.images?.length > 0
              ? property.images[0]
              : "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
          }
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="p-5">

          <div className="flex justify-between">

            <h2 className="font-bold text-xl">
              {property.title}
            </h2>

            <span>⭐ 4.9</span>

          </div>

          <p className="text-gray-500 mt-2">
            📍 {property.location}
          </p>

          <p className="mt-2 text-gray-600">
            {property.guests} Guests · {property.bedrooms} Bedrooms
          </p>

          <p className="mt-4 text-red-500 font-bold text-xl">
            ₹{property.price}
            <span className="text-gray-500 font-normal">
              {" "} / night
            </span>
          </p>

        </div>

      </div>
    </Link>
  );
}

export default PropertyCard;