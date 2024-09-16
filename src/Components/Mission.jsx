import "aos/dist/aos.css";
import missionImg from "../assets/mission.webp";
function Mission() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" className="wrapper">
      <div className="flex w-full flex-col items-center justify-center gap-4 pb-10 pt-8 font-poppins text-3xl font-medium">
        <h3 className="py-2 text-center font-poppins font-bold  text-black">
          Our mission,vision and Milestone
        </h3>
        <hr className="w-[10rem] border-b-[3px] border-textColor" />
      </div>

      <div className="flex flex-col gap-6 rounded-md sm:flex-row-reverse">
        <div className="w-full sm:w-[40%]">
          <img
            src={missionImg}
            loading="lazy"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full sm:w-[60%]">
          <div className="flex-1 space-y-6 px-2 py-3">
            <h4 className="cursor-pointer font-poppins text-4xl font-semibold transition-all delay-300 hover:underline">
              Our Mission
            </h4>
            <p className="font-Rubik text-xl text-slate-800">
              We&apos;re committed to accelerating the Kenya transition to
              sustainable energy. We provide homeowners, businesses, and
              utilities with the most advanced solar technology and a seamless
              end-to-end experience, from design and installation to ongoing
              system monitoring and maintenance. Our goal is to make clean
              energy accessible and aesthetically pleasing.
            </p>
          </div>

          <div className="relative flex-1 space-y-6 px-3 py-3">
            <h4 className="cursor-pointer font-poppins text-4xl font-semibold transition-all delay-300 hover:underline">
              Our Vision
            </h4>
            <p className="font-Rubik text-xl text-slate-800">
              We imagine a future where every roof is a solar roof and every
              home, business, and car is powered by the sun. By harnessing the
              power of the world&apos;s most abundant resource, we can create a
              brighter, cleaner, more resilient energy grid for generations to
              come. We&apos;re not just building a better solar panel;
              we&apos;re building a better world.
            </p>
          </div>

          <div className="relative flex-1 space-y-6 px-3 py-3">
            <h4 className="cursor-pointer font-poppins text-4xl font-semibold transition-all delay-300 hover:underline">
              Milestone
            </h4>
            <p className="font-Rubik text-xl text-slate-800">
              Solarpoint Systems E.A started as a distributor of the Solar
              Energy components and devices in Nairobi, Kenya. These solar
              energy items and modules include; Solar Panels, Solar Inverters,
              solar charger controller, Lead acid and Lithium ion batteries,
              Over current protection devices, Automatic Voltage Switch, Solar
              pumps, Isolators, Automatic changeover switch, Solar monitoring
              devices, Solar solar lights, Hybrid inverters, and surge
              protection devices. Currently, We undertake projects in solar
              panel installation and design of solar systems. This include:
              Power consumption audit, solar On/Off grid solutions, Solar Hybrid
              residential solutions, Solar commercial/Industrial solutions,
              Solar Agriculture solutions, Solar street light solutions, Solar
              pumps and solar remote monitoring
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
