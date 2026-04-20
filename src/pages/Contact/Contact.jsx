import React from "react";

const Contact = () => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Contact Us</h2>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          Interested in buying an apartment or booking a site visit? Reach out to our team.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50/50 p-5 sm:p-6">
        <h3 className="text-center text-xl font-semibold text-slate-900">Inquiry</h3>
        <div className="mt-4 space-y-3 text-sm text-slate-700 sm:text-base">
          <p><strong>Address:</strong> Rohaman Shopping Complex, Dhaka, Bangladesh</p>
          <p><strong>Sales Phone:</strong> +880 1234 567890</p>
          <p><strong>Email:</strong> sales@rohmanconstruction.com</p>
          <p><strong>Available:</strong> Residential & Commercial Apartments</p>
          <p><strong>Office Hours:</strong> Sat - Thu (10:00 AM - 7:00 PM)</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
