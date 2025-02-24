import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Sun,
  Battery,
  Cpu,
  Cable,
  Droplet,
  LineChart,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
const SolarWaterPumps = () => {
  const [expandedService, setExpandedService] = useState("");
  //(useState < number) | (null > null);

  const services = [
    {
      icon: <Droplet className="size-8 text-green-700" />,
      title: "Pump Performance Assessment",
      description:
        "Ensure your solar water pump operates at peak efficiency with a detailed performance check, covering flow rate, pressure, and energy consumption.",
      details: [
        "Flow rate and pressure measurement",
        "Solar power input vs. water output analysis",
        "Pump motor efficiency check",
        "Detection of blockages or leaks",
      ],
    },
    {
      icon: <Battery className="size-8 text-green-700" />,
      title: "Battery & Backup Power Management",
      description:
        "Maintain reliable water pumping with battery health monitoring and backup solutions to ensure continuous operation during low sunlight hours.",
      details: [
        "Battery charge-discharge cycle monitoring",
        "Backup power solutions for night-time or cloudy days",
        "Preventive maintenance for long battery life",
        "Replacement recommendations based on performance",
      ],
    },
    {
      icon: <Cpu className="size-8 text-green-700" />,
      title: "Controller & Inverter Optimization",
      description:
        "Optimize the performance of your solar pump controller and inverter to prevent inefficiencies and extend system lifespan.",
      details: [
        "Controller firmware updates and recalibration",
        "Inverter efficiency testing",
        "Thermal imaging for overheating detection",
        "Voltage and frequency stabilization",
      ],
    },
    {
      icon: <Cable className="size-8 text-green-700" />,
      title: "Wiring & Connection Inspection",
      description:
        "Regular checks of wiring and electrical connections to ensure maximum energy transfer and system safety, minimizing energy loss.",
      details: [
        "Voltage drop analysis",
        "Corrosion and wear inspection",
        "Secure connection tightening",
        "Safety compliance verification",
      ],
    },
    {
      icon: <LineChart className="size-8 text-green-700" />,
      title: "Water Output & System Efficiency Optimization",
      description:
        "Fine-tune your solar pump system for maximum efficiency, adjusting for seasonal variations and water demand.",
      details: [
        "Shading and sunlight exposure analysis",
        "Seasonal water output adjustments",
        "Pump speed and power consumption optimization",
        "Real-time monitoring and reporting",
      ],
    },
    {
      icon: <Sun className="size-8 text-green-700" />,
      title: "System Expansion & Upgrades",
      description:
        "Upgrade your solar water pumping system to meet increased water demand. We assess your current setup and recommend scalable solutions.",
      details: [
        "Assessment of current water needs vs. system capacity",
        "Integration of additional solar panels",
        "Upgrade to higher capacity pumps",
        "Smart automation for water distribution",
      ],
    },
  ];

  const generateSchema = (service) => ({
    "@context": "https://schema.org/",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: "Solar Pump installation and Maintenance",
    provider: {
      "@type": "LocalBusiness",
      name: "SolarPointSystemsE.A",
      url: "https://solarpointsystemsea.co.ke/solarwaterpump",
    },
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Solar Pump Maintenance Services",
      itemListElement: service.details.map((detail) => ({
        "@type": "Offer",
        name: detail,
      })),
    },
  });
  return (
    <section className="w-full">
      <Helmet>
        {services.map((service, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(generateSchema(service))}
          </script>
        ))}
      </Helmet>
      <div className="bg-[#ecf4f0] px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Ensure Reliable Water Supply with Expert Solar Pump Maintenance
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700">
              Regular maintenance is essential for the efficiency and durability
              of your solar water pump. In Kenya's varying climate, proper
              upkeep can improve water output by up to 30%, prevent costly
              repairs, and extend the system's lifespan. Our specialized
              maintenance services keep your solar pump running smoothly,
              ensuring consistent water supply throughout the year.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-lg border border-transparent bg-[#ecf4f0] p-6 transition-all duration-300 hover:border-green-200 hover:shadow-xl"
                onClick={() =>
                  setExpandedService(expandedService === index ? null : index)
                }
              >
                <div className="flex items-start justify-between">
                  <div className="mb-4">{service.icon}</div>
                  {expandedService === index ? (
                    <ChevronUp className="size-5 text-green-600" />
                  ) : (
                    <ChevronDown className="size-5 text-green-600" />
                  )}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-4 text-gray-700">{service.description}</p>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedService === index
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="mt-4 space-y-2 border-t pt-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="mr-2 h-2 w-2 rounded-full bg-green-600"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center"></div>
        </div>
      </div>
    </section>
  );
};

export default SolarWaterPumps;
