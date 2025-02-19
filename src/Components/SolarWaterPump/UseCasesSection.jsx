import React from "react";
import {
  Sprout,
  Droplet,
  Home,
  Building,
  Users,
  Hotel,
  ArrowRight,
} from "lucide-react";
const UseCasesSection = () => {
  const useCases = [
    {
      title: "Farm Irrigation",
      icon: <Sprout className="h-8 w-8 text-amber-600" />,
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Transform your agricultural productivity with reliable irrigation systems.",
      benefits: [
        "Irrigate up to 5 acres of land",
        "Ideal for crop farming",
        "Consistent water supply",
        "Reduce operational costs",
      ],
    },
    {
      title: "Livestock Water Supply",
      icon: <Droplet className="h-8 w-8 text-amber-600" />,
      image:
        "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Ensure consistent water supply for your livestock throughout the year.",
      benefits: [
        "Reliable water for animals",
        "Multiple watering points",
        "Clean water supply",
        "Low maintenance",
      ],
    },
    {
      title: "Domestic Water Supply",
      icon: <Home className="h-8 w-8 text-amber-600" />,
      image:
        "https://images.unsplash.com/photo-1460602594182-8568137446ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Never worry about water shortages in your home again.",
      benefits: [
        "24/7 water availability",
        "Cost-effective solution",
        "Clean water storage",
        "Backup water supply",
      ],
    },
    {
      title: "Commercial Properties",
      icon: <Building className="h-8 w-8 text-amber-600" />,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Reliable water solutions for business premises and commercial buildings.",
      benefits: [
        "Consistent water supply",
        "Reduced utility costs",
        "Environmental friendly",
        "Low maintenance costs",
      ],
    },
    {
      title: "Community Projects",
      icon: <Users className="h-8 w-8 text-amber-600" />,
      image:
        "https://images.unsplash.com/photo-1541023574375-37451c7c4bd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Empower communities with sustainable water access solutions.",
      benefits: [
        "Serve multiple households",
        "Community management",
        "Sustainable solution",
        "Affordable water access",
      ],
    },
    {
      title: "Hotels & Resorts",
      icon: <Hotel className="h-8 w-8 text-amber-600" />,
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Keep your hospitality business running smoothly with reliable water supply.",
      benefits: [
        "Uninterrupted service",
        "Pool & garden maintenance",
        "Cost reduction",
        "Green certification",
      ],
    },
  ];
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Solar Water Pump Applications
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Discover how our solar water pump solutions are transforming water
            access across different sectors in Kenya. From small farms to large
            commercial projects, we have the perfect solution for every need.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-[#ecf4f0] transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  {useCase.icon}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {useCase.title}
                  </h3>
                </div>
                <p className="mb-4 text-gray-600">{useCase.description}</p>
                <ul className="mb-6 space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="mr-2 h-2 w-2 rounded-full bg-amber-600"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 font-semibold text-amber-600 transition-all duration-300 hover:gap-3">
                  Learn More <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="mb-6 text-lg text-gray-600">
            Not sure which solution fits your needs? Let our experts help you
            find the perfect match.
          </p>
          <button className="mx-auto flex items-center gap-2 rounded-lg bg-amber-600 px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-amber-700">
            Schedule a Consultation <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
