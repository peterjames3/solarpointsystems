import React from "react";
import {
  Award,
  BadgeCheck,
  HeartHandshake,
  Shield,
  Sun,
  Wrench,
} from "lucide-react";
import "aos/dist/aos.css";
const WhyUs = () => {
  const reasons = [
    {
      icon: <Award className="h-12 w-12 text-green-600" />,
      title: "Industry Expertise",
      description:
        "Leading solar provider in Kenya with over 10 years of experience and EPRA-certified professionals. We understand Kenya's unique energy needs.",
    },
    {
      icon: <BadgeCheck className="h-12 w-12 text-green-600" />,
      title: "Quality Products",
      description:
        "We supply tier-1 solar panels and equipment that withstand Kenya's climate and from renowned manufacturers.",
    },
    {
      icon: <Wrench className="h-12 w-12 text-green-600" />,
      title: "Professional Installation",
      description:
        "Expert installation team ensuring optimal system performance.",
    },
    {
      icon: <HeartHandshake className="h-12 w-12 text-green-600" />,
      title: "Dedicated Support",
      description:
        "24/7 customer service and maintenance support for peace of mind.",
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600" />,
      title: "Warranty Coverage",
      description:
        "Comprehensive warranty protection for all installations and products.",
    },
    {
      icon: <Sun className="h-12 w-12 text-green-600" />,
      title: "Complete Solutions",
      description:
        "From residential installations to commercial projects, we offer customized solar solutions perfect for Kenya climate.",
    },
  ];
  return (
    <section className="w-full bg-cardBg py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold">Why Choose Us</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            We're committed to delivering exceptional solar solutions with
            expertise, quality, and outstanding customer service.
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
