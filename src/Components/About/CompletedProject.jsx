import { GrCompliance } from "react-icons/gr";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { CiStar } from "react-icons/ci";
import CountUp from "react-countup";
import "aos/dist/aos.css";

function CompletedProject() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="3000"
      className="wrapper flex flex-wrap justify-around gap-4 py-6 font-Rubik md:flex-row"
    >
      <div className="flex flex-col items-center space-y-4">
        <nav className="cursor-pointer text-8xl text-yellow-950 transition-all delay-300 hover:text-yellow-800">
          <GrCompliance />
        </nav>
        <h5 className="text-5xl font-medium text-black">
          <CountUp start={0} end={20} duration={4.75} />
        </h5>
        <p className="font-Rubik text-2xl">complete projects</p>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <nav className="cursor-pointer text-8xl text-yellow-950 transition-all delay-300 hover:text-yellow-800">
          <GiEarthAfricaEurope />
        </nav>
        <h5 className="text-5xl font-medium text-black">
          <CountUp start={0} end={3} duration={4.75} />
        </h5>
        <p className="text-2xl">African countries</p>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <nav className="cursor-pointer text-8xl text-yellow-950 transition-all delay-300 hover:text-yellow-800">
          <CiStar />
        </nav>
        <h5 className="text-5xl font-medium text-black">
          <CountUp start={0} end={2} duration={4.75} />
        </h5>
        <p className="text-2xl">Decade of experience</p>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <nav className="cursor-pointer text-8xl text-yellow-950 transition-all delay-300 hover:text-green-800">
          <GrUserExpert />
        </nav>
        <h5 className="text-5xl font-medium text-black">
          <CountUp start={0} end={10} duration={4.75} />
        </h5>
        <p className="text-2xl">Employees</p>
      </div>
    </section>
  );
}

export default CompletedProject;
