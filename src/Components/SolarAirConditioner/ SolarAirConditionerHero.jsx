import hybridAcImage from "../../assets/HybridAirconditioner.webp";
import offGridAcImage from "../../assets/OffgridAirconditioner.webp";
import solarAcIntroImage from "../../assets/AirconditionerIntro.webp";
const airConditioners = [
  {
    id: 1,
    name: "Hybrid Type AC/DC Solar Air Conditioner",
    description:
      "The Hybrid AC/DC air conditioner operates on solar power during the day, reducing electricity bills. It automatically switches to grid power when solar energy is not sufficient, ensuring continuous operation.",
    features: [
      "Full DC (SDD) operation without an inverter",
      "On-grid installation using solar panels",
      "Automatic switch to grid power at night or when sunlight is weak",
    ],
    image: hybridAcImage,
  },
  {
    id: 2,
    name: "Off-grid Solar Air Conditioner",
    description:
      "This off-grid air conditioner utilizes solar panels, battery banks, and an IPS controller to provide continuous cooling, even at night. It's perfect for remote areas where grid power may be unreliable.",
    features: [
      "Off-grid installation with solar panels and battery banks",
      "IPS controller for smooth operation",
      "Continuous operation even at night using stored solar energy",
    ],
    image: offGridAcImage,
  },
];
const SolarAirConditionerHero = () => {
  return (
    <div className="w-full bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">
        {/* Creative Introduction Section */}
        <section className="mb-12 flex flex-col items-center gap-8 rounded-lg p-10 text-black shadow-lg sm:flex-row">
          <div className="sm:w-1/2">
            <h2 className="mb-4 font-poppins text-4xl font-extrabold">
              What is a Solar Air Conditioner?
            </h2>
            <p className="font-Rubik text-lg">
              A solar air conditioner is an energy-efficient system that uses
              solar power to heat or cool homes and businesses. By harnessing
              the sun&apos;s free energy, these systems significantly reduce
              electricity bills and environmental impact. Solar air conditioners
              are available in hybrid and off-grid models, ensuring continuous
              operation regardless of sunlight conditions.
            </p>
          </div>
          <div className="sm:w-1/2">
            <img
              src={solarAcIntroImage}
              alt="Solar Air Conditioner"
              loading="lazy"
              className="h-64 w-full rounded-lg object-fill shadow-md"
            />
          </div>
        </section>

        {/* Grid Layout for the Air Conditioners */}
        <h1 className="mb-12 text-center text-4xl font-bold text-brandC">
          Our Solar Air Conditioners
        </h1>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          {airConditioners.map((ac) => (
            <div
              key={ac.id}
              className="overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <div className="group relative">
                <img
                  src={ac.image}
                  alt={ac.name}
                  loading="lazy"
                  className="h-64 w-full object-contain transition-opacity duration-300 group-hover:opacity-75"
                />
              </div>
              <div className="p-6">
                <h2 className="mb-3 font-poppins text-2xl font-semibold text-gray-900">
                  {ac.name}
                </h2>
                <p className="mb-4 font-Rubik text-gray-700">
                  {ac.description}
                </p>
                <ul className="list-disc space-y-2 pl-5 font-Rubik text-gray-600">
                  {ac.features.map((feature, index) => (
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

export default SolarAirConditionerHero;
