"react";
import HeroImg from "../assets/hero-2..webp";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ContactUsButton from "./ContactUsButton";
import AboutUsButton from "./AboutUsButton";

function Hero() {
  const [typeEffect] = useTypewriter({
    words: [
      "Solar Panels",
      "Inverters",
      "Hybrid Inverters",
      "Solar Batteries",
      "Charge Controllers",
      "Solar Lights",
      "Lithium Batteries",
      "Power Backups",
      "LEDs",
      "Off-grid Solar Systems",
      "Solar energy ",
    ],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 50,
    cursor: Cursor.ALL,
  });

  return (
    <section className="h-[100svh] w-full ss:h-[100dvh]">
      <div className="relative h-full w-full bg-gradient-to-r from-gray-900 to-gray-700">
        <img
          src={HeroImg}
          alt="Solar panels and renewable energy solutions"
          loading="lazy"
          className="h-full w-full flex-shrink-0 object-cover mix-blend-overlay"
        />

        <div className="absolute left-[1.5%] top-[20%] max-w-[1000px] space-y-4 py-4 pl-8 xs:left-[5%] ss:left-[3%] ss:top-[25%] sm:left-[12%] sm:space-y-5 xl:left-[11.5%] xl:pl-12">
          <div className="h-full w-full space-y-6 px-3 sm:space-y-9 sm:px-0">
            <h1 className="font-body py-2 font-semibold text-brandC xxs:text-3xl xs:text-5xl sm:text-5xl md:text-6xl">
              Power Your World with Clean, Reliable Solar Energy
            </h1>

            <h2 className="font-Rubik font-medium text-white xxs:text-xl xs:text-3xl">
              Discover reliable, eco-friendly solar energy systems designed to
              reduce energy costs and promote a sustainable lifestyle for homes
              and businesses.
            </h2>
            <p className="font-Rubik font-medium leading-tight text-dimWhite xxs:text-xl xs:text-3xl sm:text-3xl">
              Leading Provider of{" "}
              <span className="text-brandC">{typeEffect}</span> solutions for
              Homes and Businesses
            </p>
            <div className="flex justify-start gap-6">
              <AboutUsButton
                data-aos="fade-left"
                data-aos-delay="1200"
                data-aos-offset="50"
              />
              <ContactUsButton
                data-aos="fade-left"
                data-aos-delay="1200"
                data-aos-offset="50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
