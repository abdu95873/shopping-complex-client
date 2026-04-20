import React from 'react';

const Services = () => {
  const services = [
    { title: "Residential Construction", description: "We build dream homes with quality materials and expert craftsmanship." },
    { title: "Commercial Construction", description: "Office buildings, shopping complexes, and more with professional planning." },
    { title: "Industrial Projects", description: "Factories, warehouses, and industrial facilities built with precision." },
    { title: "Renovation & Remodeling", description: "Transforming existing spaces into functional and beautiful environments." },
    { title: "Project Management", description: "Expert planning, scheduling, and execution for smooth project delivery." },
  ];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Our Services</h2>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          We provide a complete range of construction services to match modern project needs.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-slate-200 bg-slate-50/40 p-5 transition hover:shadow-md">
            <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
