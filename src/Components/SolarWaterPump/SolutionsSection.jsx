import React, { Component } from "react";
import { CircleDot, Sun, Cpu, Battery } from "lucide-react";
const SolutionsSection = () => {
  const pumpTypes = [
    {
      title: "Submersible Solar Water Pumps",
      description:
        "Perfect for deep boreholes & wells, these pumps are designed to operate underwater and can lift water from significant depths.",
      image:
        "https://images.unsplash.com/photo-1626808642875-0aa545482acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "High lift capacity",
        "Efficient deep well operation",
        "Corrosion-resistant materials",
      ],
    },
    {
      title: "Surface Solar Water Pumps",
      description:
        "Ideal for shallow water sources like rivers, ponds, and tanks. These pumps are easy to maintain and perfect for irrigation.",
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Easy maintenance",
        "Suitable for surface water",
        "High flow rate",
      ],
    },
    {
      title: "DC Solar Pumps",
      description:
        "Directly powered by solar panels, these efficient pumps are perfect for remote locations with no grid access.",
      image:
        "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "No battery required",
        "Low maintenance",
        "Simple installation",
      ],
    },
    {
      title: "Hybrid Solar Pumps",
      description:
        "Versatile pumps that can switch between solar and grid power, ensuring continuous operation in all conditions.",
      image:
        "https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "24/7 operation",
        "Automatic power switching",
        "Backup power option",
      ],
    },
  ];
  const kitComponents = [
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Solar Panels",
      description:
        "High-efficiency photovoltaic panels designed for maximum power generation in Kenyan conditions.",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Pump Controller",
      description:
        "Smart controller that regulates power for optimal performance and protection.",
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Water Pump",
      description:
        "High-lift, durable, and efficient pump built for long-term reliability.",
    },
    {
      icon: <div className="h-8 w-8" />,
      title: "Mounting Structure",
      description:
        "Robust mounting system to secure solar panels with anti-theft features.",
    },
  ];
  return (
    <section className="w-full bg-[#ecf4f0] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-16 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Our Solar Water Pump Solutions
        </h2>
        {/* Pump Types */}
        <div className="mb-20">
          <h3 className="mb-8 text-2xl font-semibold text-gray-900 md:text-3xl">
            Solar Water Pump Types We Offer
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {pumpTypes.map((pump, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={pump.image}
                    alt={pump.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-3 text-xl font-semibold text-gray-900">
                    {pump.title}
                  </h4>
                  <p className="mb-4 text-gray-700">{pump.description}</p>
                  <ul className="space-y-2">
                    {pump.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CircleDot className="mr-2 h-4 w-4 text-amber-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Kit Components */}
        <div>
          <h3 className="mb-8 text-2xl font-semibold text-gray-900 md:text-3xl">
            What's Included in Our Solar Pump Kit?
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {kitComponents.map((component, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-4 text-amber-600">{component.icon}</div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900">
                  {component.title}
                </h4>
                <p className="text-gray-600">{component.description}</p>
              </div>
            ))}
          </div>
          {/* Warranty Box */}
          <div className="mt-8 rounded-lg border-2 border-amber-600 bg-white p-6 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">
                  Professional Installation & Warranty
                </h4>
                <p className="text-gray-600">
                  Expert installation by certified technicians with
                  comprehensive warranty coverage
                </p>
              </div>
              <button className="rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-amber-700">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SolutionsSection;
