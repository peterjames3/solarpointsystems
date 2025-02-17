import React, { useState, cloneElement } from "react";
import {
  Sun,
  Zap,
  Battery,
  Smartphone,
  Cable,
  Shield,
  Activity,
  Info,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import monocrystalline from "../../assets/410w-mono-Jinko-Tiger..webp";
import Inverter from "../../assets/must2-pv1800..webp";
import Product1 from "../../assets/Lifetime _ Built-in BMS..webp";
import Monitor from "../../assets/solar monitoring dashboard.webp";
import wiringConnectors from "../../assets/wiring and connectors.webp";
import safety from "../../assets/safety equipment.webp";

export const DevicesAndGadgets = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = [
    {
      title: "Solar Panels",
      description:
        "High-efficiency photovoltaic (PV) panels that convert sunlight into electricity.",
      types: [
        "Monocrystalline (Highest Efficiency)",
        "Polycrystalline (Cost-Effective)",
        "Thin-Film (Flexible Installation)",
      ],
      importance:
        "The core component of the system, responsible for energy generation.",
      icon: <Sun className="h-6 w-6" />,
      image: monocrystalline,
    },
    {
      title: "Inverters",
      description:
        "Devices that convert the direct current (DC) produced by solar panels into alternating current (AC) for home use.",
      types: ["String Inverters", "Microinverters", "Power Optimizers"],
      importance: "Ensures compatibility with your home's electrical system.",
      icon: <Zap className="h-6 w-6" />,
      image: Inverter,
    },
    {
      title: "Solar Batteries",
      description:
        "Energy storage systems that store excess energy for use during nighttime or power outages.",
      types: ["Lithium-ion", "Lead-acid", "Saltwater batteries"],
      importance: "Enhances energy independence and provides backup power.",
      icon: <Battery className="h-6 w-6" />,
      image: Product1,
    },
    {
      title: "Monitoring Systems",
      description:
        "Devices and software that track energy production and consumption in real-time.",
      types: ["Smartphone apps", "Web portals", "In-home displays"],
      importance:
        "Allows homeowners to monitor system performance and savings.",
      icon: <Smartphone className="h-6 w-6" />,
      image: Monitor,
    },
    {
      title: "Wiring and Connectors",
      description:
        "High-quality cables, connectors, and conduits used to link solar panels, inverters, and the electrical grid.",
      importance: "Ensures safe and efficient energy transfer.",
      icon: <Cable className="h-6 w-6" />,
      image: wiringConnectors,
    },
    {
      title: "Safety Equipment",
      description: "Tools and gear used to ensure a safe installation process.",
      examples: ["Harnesses", "Gloves", "Helmets", "Insulated tools"],
      importance:
        "Protects both the installers and your property during installation.",
      icon: <Shield className="h-6 w-6" />,
      image: safety,
    },
  ];
  return (
    <section className="bg-white py-16">
      <div className="wrapper mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Some Essential Devices and Equipment required in solar Installation
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Discover the high-quality devices and equipment we use to ensure
            reliable and efficient solar installations.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2 md:col-span-1">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex w-full items-center gap-3 rounded-lg p-4 text-left transition-all duration-200 ${activeCategory === index ? "bg-green-700 text-white shadow-lg" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}
              >
                {cloneElement(category.icon, {
                  className: `w-5 h-5 ${activeCategory === index ? "text-white" : "text-green-700"}`,
                })}
                <span className="font-medium">{category.title}</span>
                <ChevronRight
                  className={`ml-auto h-5 w-5 ${activeCategory === index ? "text-white" : "text-gray-400"}`}
                />
              </button>
            ))}
          </div>
          <div className="rounded-2xl bg-gray-50 p-6 md:col-span-2">
            <div className="relative mb-6 h-[22rem] overflow-hidden rounded-xl">
              <img
                src={categories[activeCategory].image}
                alt={categories[activeCategory].title}
                className="object-fit h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2">
                  {categories[activeCategory].icon}
                  <h3 className="text-2xl font-bold">
                    {categories[activeCategory].title}
                  </h3>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 font-semibold">Description</h4>
                <p className="text-gray-600">
                  {categories[activeCategory].description}
                </p>
              </div>
              {categories[activeCategory].types && (
                <div>
                  <h4 className="mb-2 font-semibold">Types</h4>
                  <ul className="grid gap-2 md:grid-cols-2">
                    {categories[activeCategory].types.map((type, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-green-700" />
                        {type}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {categories[activeCategory].examples && (
                <div>
                  <h4 className="mb-2 font-semibold">Examples</h4>
                  <ul className="grid gap-2 md:grid-cols-2">
                    {categories[activeCategory].examples.map(
                      (example, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-green-700" />
                          {example}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}
              <div className="flex items-start gap-2 rounded-lg bg-green-50 p-4">
                <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-700" />
                <div>
                  <h4 className="mb-1 font-semibold">Why It's Important</h4>
                  <p className="text-gray-600">
                    {categories[activeCategory].importance}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevicesAndGadgets;
