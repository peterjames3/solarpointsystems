import AboutUsImg from "../assets/EF_ECO..webp";
import "aos/dist/aos.css";

function AboutPowerBackup() {
  return (
    <section className="w-full px-3 pt-8">
    
      <div className=" wrapper bg-white rounded-lg  shadow-lg">
        <div className="wrapper flex flex-col gap-8 p-10 sm:flex-row">
          {/* Image Section */}
          <div className=" w-full overflow-hidden rounded-lg  sm:w-1/2">
            <img
              src={AboutUsImg}
              alt="Power Backup"
              loading="lazy"
              className="h-full w-full md:object-contain "
            />
          </div>

          {/* Text Section */}
          <div className="w-full space-y-6 px-3 pt-3 sm:w-1/2">
            <h3 className="text-3xl font-semibold uppercase text-black font-poppins md:text-4xl">
              What is a power backup?
            </h3>
            <p className="font-Rubik text-xl text-gray-900">
              A backup power system utilizes an inverter charger and a battery
              bank to store energy, which can then be used in the event of a
              power outage. This system is distinct from conventional backup
              generators that run on diesel or petrol. When the power grid is
              functioning, it charges the battery bank, allowing the stored
              energy to be used during power failures. The operation of this
              system is fully automatic, eliminating the need for manual
              intervention. Power Backup offers a comprehensive solution that
              combines the capabilities of an uninterruptible power source
              (UPS), a pure sine wave inverter, an advanced solar battery charge
              controller, and a maximum power point tracker into one compact,
              cutting-edge device capable of harnessing energy from various
              sources. This harvested energy is ready for immediate use or can
              be stored in batteries for later use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPowerBackup;
