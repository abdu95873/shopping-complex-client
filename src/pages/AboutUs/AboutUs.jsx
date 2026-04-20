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
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">About Us</h2>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          Rohaman Construction is a trusted construction company specializing in residential,
          commercial, and industrial projects with a strong focus on quality and timely delivery.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cardData.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/40">
            <figure className="h-36">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="space-y-2 p-4 text-center">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
