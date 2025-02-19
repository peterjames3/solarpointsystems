import HeroImg from "../../assets/ Image of a solar water pump on a Kenyan farm actively irrigating crops.webp";
import "aos/dist/aos.css";
function WaterPumpHero() {
  return (
    <section className="h-[35rem] w-full">
      <div className="relative h-full w-full bg-gradient-to-r from-gray-900 to-gray-700">
        <img
          src={HeroImg}
          alt="an iage depicting solar water pump in action"
          loading="lazy"
          className="h-full w-full flex-shrink-0 object-cover mix-blend-overlay"
        />
        <header className="absolute left-1/2 top-[60%] max-w-[1100px] -translate-x-1/2 -translate-y-1/2 space-y-4 text-center text-white transition">
          <h2 className="font-body py-2 font-semibold xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl">
            Efficient & Reliable{" "}
            <span className="text-dimWhite">Solar Water Pumps</span> for
            Agriculture, Boreholes, and Irrigation in Kenya.
          </h2>
          <p>Solution / Solar Water Pumps</p>
          <p className="mb-8 text-xl sm:text-3xl">
            We provide solar water pumping systems, from design to installation,
            ensuring sustainable water access for farms and businesses.
          </p>
        </header>
      </div>
    </section>
  );
}

export default WaterPumpHero;
