import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

function PropertyDetails() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);

  const [booking, setBooking] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    try {
      const res = await api.get(`/properties/${id}`);
      setProperty(res.data.property);
    } catch (error) {
      console.log(error);
      alert("Failed to load property.");
    }
  };

  const handleBooking = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/bookings",
        {
          propertyId: property._id,
          checkIn: booking.checkIn,
          checkOut: booking.checkOut,
          guests: booking.guests,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("🎉 Booking Confirmed!");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Booking failed.");
    }
  };

  if (!property) {
    return (
      <div className="text-center mt-20 text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-5xl font-bold">
        {property.title}
      </h1>

      <p className="text-gray-500 mt-3">
        📍 {property.location}
      </p>

      <img
        src={
          property.images?.length
            ? property.images[0]
            : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200"
        }
        alt={property.title}
        className="w-full h-[500px] object-cover rounded-3xl mt-8"
      />

      <div className="mt-10">
        <h2 className="text-3xl font-bold">
          Hosted by {property.owner?.name || "StayNest"}
        </h2>

        <p className="mt-3 text-lg">
          👥 {property.guests} Guests · 🛏 {property.bedrooms} Bedrooms · 🛁 {property.bathrooms} Bathrooms
        </p>
      </div>

      <hr className="my-10" />

      <h2 className="text-3xl font-bold">
        Description
      </h2>

      <p className="text-gray-600 mt-5 text-lg leading-8">
        {property.description}
      </p>

      <hr className="my-10" />

      <h2 className="text-3xl font-bold">
        Amenities
      </h2>

      <div className="grid grid-cols-2 gap-4 mt-5">
        {property.amenities?.map((item, index) => (
          <div key={index}>✅ {item}</div>
        ))}
      </div>

      <hr className="my-10" />

      <h2 className="text-3xl font-bold mb-6">
        Book This Stay
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        <input
          type="date"
          value={booking.checkIn}
          onChange={(e) =>
            setBooking({
              ...booking,
              checkIn: e.target.value,
            })
          }
          className="border rounded-lg p-3"
        />

        <input
          type="date"
          value={booking.checkOut}
          onChange={(e) =>
            setBooking({
              ...booking,
              checkOut: e.target.value,
            })
          }
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          min="1"
          value={booking.guests}
          onChange={(e) =>
            setBooking({
              ...booking,
              guests: Number(e.target.value),
            })
          }
          className="border rounded-lg p-3"
        />

      </div>

      <div className="mt-10 flex justify-between items-center bg-white shadow-xl rounded-2xl p-8">

        <div>
          <h2 className="text-4xl font-bold text-red-500">
            ₹{property.price}
          </h2>

          <p>per night</p>
        </div>

        <button
          onClick={handleBooking}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl"
        >
          Reserve Now
        </button>

      </div>

    </div>
  );
}

export default PropertyDetails;