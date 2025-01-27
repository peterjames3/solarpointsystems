"react";
import HeroImg from "../assets/hero-2..webp";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import Solutionsbtn from "./Solutionsbtn";
import AboutUsButton from "./AboutUsButton";

function Hero() {
  const [typeEffect] = useTypewriter({
    words: [
      "Solar installation",
      "Solar water pumps",
      "Solar backup",
      "Solar water heater",
      "Off-grid ",
      "On-grid",
      "Hybrid",
      "Solar maintenance",
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

        <div className="absolute left-[1.5%] top-[20%] max-w-[1200px] space-y-4 py-4 pl-8 xs:left-[5%] ss:left-[3%] ss:top-[25%] sm:left-[12%] sm:space-y-5 xl:left-[11.5%] xl:pl-12">
          <div className="h-full w-full space-y-6 px-3 sm:space-y-9 sm:px-0">
            <h1 className="font-body py-2 font-semibold text-brandC xxs:text-3xl xs:text-5xl sm:text-5xl md:text-6xl">
              Affordable Solar Installation & Solar Solutions in Kenya
            </h1>

            <h2 className="font-Rubik font-medium text-white xxs:text-xl xs:text-2xl">
              We empower homeowners and businesses with expert solar
              installation, reliable maintenance, and trusted consultancy.
              Together, we create sustainable energy solutions that save you
              money and deliver lasting value
            </h2>
            <p className="font-Rubik font-medium leading-tight text-dimWhite xxs:text-xl xs:text-2xl sm:text-2xl">
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
              <Solutionsbtn
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
