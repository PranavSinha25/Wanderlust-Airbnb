import Navbar from "../components/Navbar";
import MyPropertyCard from "../components/MyPropertyCard";

function Dashboard() {

  const properties = [
    {
      _id: 1,
      title: "Luxury Beach Villa",
      location: "Goa",
      price: 6500,
      images: [],
    },
    {
      _id: 2,
      title: "Coorg Hill Cottage",
      location: "Coorg",
      price: 4800,
      images: [],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-10">

        <h1 className="text-5xl font-bold">
          Host Dashboard
        </h1>

        <p className="text-gray-500 mt-3">
          Manage your listings
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {properties.map((property) => (
            <MyPropertyCard
              key={property._id}
              property={property}
            />
          ))}

        </div>

      </div>

    </>
  );
}

export default Dashboard;