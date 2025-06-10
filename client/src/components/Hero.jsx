const Hero = () => {
  return (
    <section
      className="relative min-h-[90vh] bg-cover bg-center text-white flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/img/Background.png')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Professional Handyman Services You Can Trust
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow">
          Flooring • Landscaping • Painting • Lawn Maintenance • Pressure Washing & More
        </p>
        <a
          href="#contact"
          className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded shadow hover:bg-yellow-300 transition"
        >
          Get a Free Quote
        </a>
      </div>
    </section>
  );
};

export default Hero;
