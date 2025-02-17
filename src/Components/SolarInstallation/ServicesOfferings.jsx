import React from "react";
import {
  Home,
  Building2,
  Battery,
  Wrench,
  SunMedium,
  BarChart3,
  ArrowRight,
  Clock,
} from "lucide-react";
import ResidentialSolar from "../../assets/residential solar installation in kenya.webp";
import CommercialSolar from "../../assets/commercial solar installation.webp";
import PowerStorage from "../../assets/power storage solution inkenya.webp";
import SolarMaintenance from "../../assets/solar panel maintenance on going.webp";
import Call from "./Call";
const ServiceCard = ({ title, description, icon: Icon, image, features }) => (
  <div className="overflow-hidden rounded-xl bg-white transition-all duration-300 hover:shadow-xl">
    <div className="relative h-48">
      <img src={image} alt={title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <div className="flex items-center gap-2">
          <Icon className="h-6 w-6" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </div>
    </div>
    <div className="p-6">
      <p className="mb-4 text-gray-600">{description}</p>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-700" />
            {feature}
          </li>
        ))}
      </ul>
      <Call />
    </div>
  </div>
);
export const ServiceOfferings = () => {
  const services = [
    {
      title: "Residential Solar Installation",
      description:
        "Complete solar solutions for homes, designed to maximize energy independence and savings.",
      icon: Home,
      image: ResidentialSolar,
      features: [
        "Custom system design",
        "Professional installation",
        "Smart monitoring setup",
        "Warranty coverage",
      ],
    },
    {
      title: "Commercial Solar Solutions",
      description:
        "Large-scale solar installations for businesses and industrial facilities.",
      icon: Building2,
      image: CommercialSolar,
      features: [
        "High-capacity systems",
        "Energy consumption analysis",
        "ROI optimization",
        "Business-specific solutions",
      ],
    },
    {
      title: "Solar Battery Storage",
      description:
        "Advanced energy storage solutions for continuous power supply.",
      icon: Battery,
      image: PowerStorage,
      features: [
        "Battery system integration",
        "Backup power solutions",
        "Smart power management",
        "Extended power storage",
      ],
    },
    {
      title: "Maintenance & Support",
      description:
        "Comprehensive maintenance services to ensure optimal system performance.",
      icon: Wrench,
      image: SolarMaintenance,
      features: [
        "Regular inspections",
        "Performance monitoring",
        "Repair services",
        "System upgrades",
      ],
    },
  ];
  return (
    <section className="bg-[#ecf4f0] py-16">
      <div className="wrapper mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Our Service Offerings</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Discover our comprehensive range of solar services designed to meet
            your energy needs. From initial consultation to ongoing maintenance,
            we provide end-to-end solar solutions.
          </p>
        </div>
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="rounded-xl bg-white p-8 text-center">
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 text-2xl font-bold">
              Why Choose Our Services?
            </h3>
            <div className="mb-8 grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center">
                <SunMedium className="mb-2 size-8 text-green-700" />
                <p className="text-gray-600">Expert Installation Teams</p>
              </div>
              <div className="flex flex-col items-center">
                <BarChart3 className="mb-2 size-8 text-green-700" />
                <p className="text-gray-600">Performance Guarantee</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="mb-2 size-8 text-green-700" />
                <p className="text-gray-600">Lifetime Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;
