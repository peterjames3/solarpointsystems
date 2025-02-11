import React from "react";
import { Star } from "lucide-react";
const Testimonials = () => {
  return (
    <section className="bg-[#ecf4f0] py-16">
      <div className="wrapper mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Mary Mwende",
              role: "Homeowner",
              comment:
                "The installation was quick and professional. We're seeing significant savings on our energy bills.",
              rating: 5,
            },
            {
              name: "Martin A",
              role: "Business Owner",
              comment:
                "Excellent service from start to finish. The team was knowledgeable and efficient.",
              rating: 5,
            },
            {
              name: "James Chege",
              role: "Property Manager",
              comment:
                "Great investment for our properties. The installation team was professional and thorough.",
              rating: 5,
            },
          ].map((testimonial, index) => (
            <div key={index} className="rounded-xl bg-white p-6">
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-400"
                  />
                ))}
              </div>
              <p className="mb-4 text-gray-600">"{testimonial.comment}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
