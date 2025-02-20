import { CircleDot, Sun, Cpu, Battery, Phone } from "lucide-react";
import Dc from "../../assets/dc1-water-pump.webp";
import surfacePump from "../../assets/solar-surface-pump-1.jpg";
import submersible from "../../assets/surfacepump.jpeg";
import hybrid from "../../assets/hybrid-water-pump.webp";

const SolutionsSection = () => {
  const pumpTypes = [
    {
      title: "Submersible Solar Water Pumps",
      description:
        "Perfect for deep boreholes & wells, these pumps are designed to operate underwater and can lift water from significant depths.",
      image: submersible,
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
      image: surfacePump,
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
      image: Dc,

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
      image: hybrid,
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
          <h3 className="mb-8 text-center text-2xl font-semibold text-gray-900 md:text-3xl">
            Solar Water Pump Types We Offer
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {pumpTypes.map((pump, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="h-[15rem] overflow-hidden">
                  <img
                    src={pump.image}
                    alt={pump.title}
                    className="object-fit h-full w-full transition-transform duration-300 hover:scale-105"
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
                        <CircleDot className="mr-2 size-4 text-green-600" />
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
                <div className="mb-4 text-green-700">{component.icon}</div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900">
                  {component.title}
                </h4>
                <p className="text-gray-600">{component.description}</p>
              </div>
            ))}
          </div>
          {/* Warranty Box */}
          <div className="mt-8 rounded-lg border-2 border-cardBg bg-white p-6 shadow-lg">
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
              
              <button className=" flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-green-700 transition-colors hover:bg-gray-100">
                <Phone className="size-5" />
                <a href="tel:+254 703704062"> +254 703704062 </a>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SolutionsSection;
