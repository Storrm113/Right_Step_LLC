import React from "react";

const services = [
  "Flooring",
  "Landscaping",
  "Lawn Maintenance",
  "Painting",
  "Pressure Washing",
];

function ServicesSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((service, idx) => (
        <div key={idx} className="p-4 border rounded shadow dark:border-gray-700">
          <h3 className="text-lg font-medium">{service}</h3>
        </div>
      ))}
    </section>
  );
}

export default ServicesSection;