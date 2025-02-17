import React, { useState, Component } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sun,
  Battery,
  Zap,
  Settings,
  Cable,
  Wifi,
} from "lucide-react";
import Hybrid from "../../assets/hybrid.jpg";
import Custom from "../../assets/hybrid1.jpg";
import onGrid from "../../assets/on-grid.jpg";
import offGrid from "../../assets/on-grid.jpg";

export const SolarSolutionCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const solutions = [
    {
      title: "Hybrid Solar System",
      description:
        "Combine solar power with grid electricity for optimal reliability",
      benefits: [
        "Seamless power backup",
        "Reduced electricity bills",
        "Grid independence option",
        "Maximum energy efficiency",
      ],
      components: [
        "Solar panels",
        "Hybrid inverter",
        "Battery bank",
        "Grid connection",
        "Smart controller",
      ],
      icon: <Battery className="size-8 text-green-700" />,
      imageUrl: Hybrid,
    },
    {
      title: "Off-Grid System",
      description:
        "Complete energy independence with standalone solar power system",
      benefits: [
        "Total energy independence",
        "Ideal for remote locations",
        "No electricity bills",
        "Sustainable living",
      ],
      components: [
        "High-capacity solar panels",
        "Off-grid inverter",
        "Large battery storage",
        "Charge controller",
        "Backup generator (optional)",
      ],
      icon: <Sun className="size-8 text-yellow-600" />,
      imageUrl: offGrid,
    },
    {
      title: "On-Grid System",
      description: "Connect your solar system to the main power grid",
      benefits: [
        "Lower initial cost",
        "Sell excess power",
        "Simple installation",
        "Grid reliability",
      ],
      components: [
        "Solar panels",
        "Grid-tie inverter",
        "Net meter",
        "Safety switches",
        "Monitoring system",
      ],
      icon: <Cable className="h-8 w-8 text-blue-600" />,
      imageUrl: onGrid,
    },
    {
      title: "Custom Solution",
      description: "Tailored solar system designed for your specific needs",
      benefits: [
        "Optimized for your usage",
        "Scalable system",
        "Cost-effective design",
        "Maximum efficiency",
      ],
      components: [
        "Custom panel configuration",
        "Flexible inverter options",
        "Scalable battery storage",
        "Smart monitoring",
        "Expandable system",
      ],
      icon: <Settings className="size-8 text-purple-600" />,
      imageUrl: Custom,
    },
  ];
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % solutions.length);
  };
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + solutions.length) % solutions.length);
  };
  return (
    <div className="mb-12 rounded-xl bg-white p-6">
      <div className="relative">
        <div className="flex items-center">
          <button
            onClick={prevSlide}
            className="z-4 absolute left-0 rounded-full bg-green-700 p-2 text-white transition-colors hover:bg-green-800"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="w-full px-12">
            <div className="relative mb-6 h-64 overflow-hidden rounded-xl">
              <img
                src={solutions[activeSlide].imageUrl}
                alt={solutions[activeSlide].title}
                className="h-full w-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-4">
                  {solutions[activeSlide].icon}
                  <h3 className="text-2xl font-bold">
                    {solutions[activeSlide].title}
                  </h3>
                </div>
              </div>
            </div>
            <p className="mb-6 text-gray-600">
              {solutions[activeSlide].description}
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <Zap className="h-5 w-5 text-green-700" />
                  Benefits
                </h4>
                <ul className="space-y-2">
                  {solutions[activeSlide].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-700" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <Settings className="h-5 w-5 text-green-700" />
                  Components
                </h4>
                <ul className="space-y-2">
                  {solutions[activeSlide].components.map((component, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-700" />
                      <span className="text-gray-600">{component}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="z-4 absolute right-0 rounded-full bg-green-700 p-2 text-white transition-colors hover:bg-green-800"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {solutions.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2 w-2 rounded-full transition-colors ${index === activeSlide ? "bg-green-700" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
