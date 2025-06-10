// src/components/Services.jsx
const services = [
  { title: 'Flooring', description: 'Installation and repair of hardwood, laminate, vinyl, and tile flooring.' },
  { title: 'Landscaping', description: 'Yard cleanup, sod installation, flower beds, trimming, and more.' },
  { title: 'Lawn Maintenance', description: 'Regular mowing, edging, and seasonal care to keep your lawn sharp.' },
  { title: 'Painting', description: 'Interior and exterior painting with attention to detail and quality.' },
  { title: 'Pressure Washing', description: 'Driveways, siding, decks, and patios cleaned to perfection.' },
  { title: 'General Repairs', description: 'Minor home repairs, maintenance, and improvements.' }
]

const Services = () => {
  return (
    <section className="bg-white py-16 px-4" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
