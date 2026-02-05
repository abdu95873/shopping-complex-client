import React from "react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">

            {/* HEADER */}
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-gray-700 text-lg">
                    Interested in buying an apartment or booking a site visit?
                    Get in touch with Rohaman Construction today.
                </p>
            </div>

            {/* CONTACT INFO CARD */}
            <div className="max-w-3xl mx-auto bg-white p-8 shadow rounded">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                    AInquiry
                </h2>

                <div className="space-y-3 text-gray-700 text-lg">
                    <p>
                        <strong>📍 Address:</strong> Rohaman Shopping Complex, Dhaka, Bangladesh
                    </p>
                    <p>
                        <strong>📞 Sales Phone:</strong> +880 1234 567890
                    </p>
                    <p>
                        <strong>📧 Email:</strong> sales@rohmanconstruction.com
                    </p>
                    <p>
                        <strong>🏢 Available:</strong> Residential & Commercial Apartments
                    </p>
                    <p>
                        <strong>🕒 Office Hours:</strong> Sat – Thu (10:00 AM – 7:00 PM)
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Contact;
