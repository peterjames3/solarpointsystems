// Import Swiper React components
import Carousel3 from "../assets/solar-installation1.webp";

const AboutUsHero = () => {
  return (
    <section className="w-full">
      <div className="relative h-[35rem] w-full bg-gradient-to-r from-slate-700 to-gray-800">
        <img
          src={Carousel3}
          alt="about us image"
          loading="lazy"
          className="aspect-video h-full w-full flex-shrink-0 object-fill mix-blend-overlay"
        />
        <div className="absolute left-1/2 top-[60%] flex w-full -translate-x-1/2 -translate-y-1/2 flex-col justify-between transition ss:flex-row sm:w-[65%]">
          <div className="w-full sm:w-1/2">
            <h2 className="text-center text-4xl font-semibold text-green-500 md:text-5xl">
              Who We Are
            </h2>
          </div>

          <div className="sm:w-1/2 font-Rubik">
            <h3 className="line-clamp-3 hidden text-start text-2xl font-semibold text-slate-300 sm:flex">
              We are the leading solar company in Kenya that thrives in quality
              solar services. We have a team of solar energy experts which
              positions SolarPoint systems E.A as a trusted solar company in the
              region. We guide customers into taking the right decision that
              will address their solar energy needs and reduce their electricity
              bill through installing reliable solar solutions.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
