import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function AddProperty() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    category: "Villa",
    price: "",
    guests: "",
    bedrooms: "",
    bathrooms: "",
    beds: "",
    amenities: "",
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      images.forEach((image) => {
        data.append("images", image);
      });

      const token = localStorage.getItem("token");

      await api.post("/properties", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("✅ Property Added Successfully");

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to add property");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Become a Host 🏡
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          name="title"
          placeholder="Property Title"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
          required
        />

        <select
          name="category"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
        >
          <option>Villa</option>
          <option>Apartment</option>
          <option>Beach</option>
          <option>Mountain</option>
          <option>Farm House</option>
          <option>Luxury</option>
        </select>

        <div className="grid grid-cols-2 gap-4">

          <input
            type="number"
            name="price"
            placeholder="Price"
            className="border p-3 rounded-lg"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="guests"
            placeholder="Guests"
            className="border p-3 rounded-lg"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="bedrooms"
            placeholder="Bedrooms"
            className="border p-3 rounded-lg"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="bathrooms"
            placeholder="Bathrooms"
            className="border p-3 rounded-lg"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="beds"
            placeholder="Beds"
            className="border p-3 rounded-lg"
            onChange={handleChange}
            required
          />

        </div>

        <input
          type="text"
          name="amenities"
          placeholder="Amenities (WiFi, Pool, Parking)"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="file"
          multiple
          onChange={handleImageChange}
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-4 rounded-xl hover:bg-red-600 font-semibold text-lg"
        >
          Add Property
        </button>

      </form>
    </div>
  );
}

export default AddProperty;