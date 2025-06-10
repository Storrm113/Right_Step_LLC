// src/components/Hero.jsx
const Hero = () => {
  return (
    <section className="bg-gray-100 py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Professional Handyman Services You Can Trust
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Flooring, Landscaping, Painting, Lawn Maintenance & More – Done Right the First Time.
        </p>
        <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Get a Free Quote
        </a>
      </div>
    </section>
  )
}

export default Hero
