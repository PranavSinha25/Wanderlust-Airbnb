function Hero() {
  return (
    <section className="bg-gradient-to-r from-red-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h1 className="text-6xl font-bold leading-tight">
          Find your
          <span className="text-red-500"> perfect stay</span>
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl">
          Discover villas, cottages, apartments and unique stays
          across India. Book your dream vacation today.
        </p>

        <button className="mt-10 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition">
          Explore Stays
        </button>

      </div>
    </section>
  );
}

export default Hero;