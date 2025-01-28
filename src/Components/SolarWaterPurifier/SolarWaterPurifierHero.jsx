//import purifierImg1 from "../assets/Purifier1.webp"; // Add appropriate image paths
import purifierImg1 from "../../assets/Purifier1.webp";
import purifierImg2 from "../../assets/Purifier2.webp";
import purifierImg3 from "../../assets/syagewaterpurifier.webp";

const purifiers = [
  {
    id: 1,
    name: "Dayliff Triple Filter UV Purifier",
    price: "KSH 25,000",
    description:
      "A premium water purifier system that uses 5 stages of purification, including UV sterilization, to ensure clean, safe drinking water. Suitable for residential, industrial, and commercial settings.",
    features: [
      "Triple purification system",
      "UV technology for sterilization",
      "High-quality materials ensuring longevity",
      "Effective for multiple water sources",
    ],
    image: purifierImg1,
  },
  {
    id: 2,
    name: "7 Stage Reverse Osmosis Water Purifier",
    price: "KSH 26,000",
    description:
      "An ideal purifier for borehole water, featuring 7 stages of purification, including reverse osmosis and UV disinfection. It produces up to 300 liters of purified water daily.",
    features: [
      "7 stages purification system",
      "Removes all contaminants",
      "Reintroduces essential minerals",
      "Free delivery within Nairobi",
    ],
    image: purifierImg2,
  },
  {
    id: 3,
    name: "3 Stage Water Purifier",
    price: "KSH 13,000",
    description:
      "This purifier is perfect for municipal water, using a 3-stage process to ensure safe and clean water for drinking and cleaning purposes.",
    features: [
      "Removes debris and chlorine",
      "Eliminates pesticides and unpleasant odors",
      "UV disinfection for bacteria and viruses",
    ],
    image: purifierImg3,
  },
];
const SolarWaterPurifierHero = () => {
  return (
    <div className="w-full p-8">
      <div className="wrapper mx-auto">
        <div className="space-y-2 py-4 text-center font-poppins text-slate-900">
          <h3 className="text-3xl font-medium">Solar Water Purifiers</h3>
          <hr className="mx-auto w-[12rem] rounded-md border-2 border-blue-700" />
          <h4 className="text-4xl font-semibold">A System For Every Need</h4>
        </div>

        {/* Grid Layout for the Purifiers */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {purifiers.map((purifier) => (
            <div
              key={purifier.id}
              className="overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <div className="group relative">
                <img
                  src={purifier.image}
                  alt={purifier.name}
                  loading="lazy"
                  className="h-[20rem] w-full object-contain transition-opacity duration-300 group-hover:opacity-75"
                />
              </div>
              <div className="p-9">
                <h2 className="mb-3 font-poppins text-2xl font-semibold text-gray-900">
                  {purifier.name}
                </h2>
                <p className="mb-2 font-poppins text-lg font-bold text-brandC">
                  {purifier.price}
                </p>
                <p className="mb-4 font-Rubik text-gray-700">
                  {purifier.description}
                </p>
                <ul className="list-disc space-y-2 pl-5 font-Rubik text-gray-600">
                  {purifier.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolarWaterPurifierHero;
