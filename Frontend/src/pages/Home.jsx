import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CategoryBar from "../components/CategoryBar";
import PropertyCard from "../components/PropertyCard";
import Footer from "../components/Footer";

import api from "../api";

function Home() {

  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {

      const res = await api.get("/properties");

      setProperties(res.data.properties);
      setFilteredProperties(res.data.properties);

    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (location) => {

    if (!location) {
      setFilteredProperties(properties);
      return;
    }

    const filtered = properties.filter((property) =>
      property.location
        .toLowerCase()
        .includes(location.toLowerCase())
    );

    setFilteredProperties(filtered);
  };

  return (
    <>
      <Navbar />

      <Hero />

      <SearchBar onSearch={handleSearch} />

      <CategoryBar />

      <div className="max-w-7xl mx-auto px-8 py-12">

        <h2 className="text-3xl font-bold mb-8">
          Featured Properties
        </h2>

        {filteredProperties.length === 0 ? (

          <div className="text-center py-20">

            <h2 className="text-3xl font-bold">
              No Properties Found
            </h2>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredProperties.map((property) => (

              <PropertyCard
                key={property._id}
                property={property}
              />

            ))}

          </div>

        )}

      </div>
      
      <Footer/>
    </>
  );
}

export default Home;