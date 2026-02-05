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
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                <p className="text-gray-700 text-lg md:text-xl">We provide a wide range of construction services to meet your project needs.</p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="p-6 bg-white shadow rounded hover:shadow-lg transition">
                        <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
