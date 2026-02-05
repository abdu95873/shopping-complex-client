import React from "react";

const cardData = [
    {
        title: "Our Mission",
        description:
            "To build sustainable and innovative structures that enrich lives.",
        image:
            "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        title: "Our Vision",
        description:
            "To be a leading construction company known for quality and integrity.",
        image:
            "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
    {
        title: "Our Values",
        description:
            "Safety, transparency, commitment, and excellence in every project.",
        image:
            "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
];

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">

            {/* ABOUT TEXT */}
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                <p className="text-gray-700 text-lg md:text-xl">
                    Rohaman Construction is a trusted construction company specializing in
                    residential, commercial, and industrial projects. We focus on quality,
                    safety, and timely delivery.
                </p>
            </div>

            {/* SMALL CARDS (MAP) */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
                {cardData.map((item, index) => (
                    <div key={index} className="card bg-base-100 shadow-sm">
                        <figure className="h-36">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                        </figure>

                        <div className="card-body p-4 text-center">
                            <h2 className="card-title text-lg justify-center">
                                {item.title}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default AboutUs;
