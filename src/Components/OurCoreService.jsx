import AboutUsImg from "../assets/solar-installation2.webp";
import { FaSearch } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { IoBulbSharp } from "react-icons/io5";
import { CgCommunity } from "react-icons/cg";
import "aos/dist/aos.css";

function OurCoreService() {
  return (
    <section className="my-10 w-full px-3">
      <nav className="my-3 flex w-full flex-col items-center justify-center">
        <h2 className="py-2 text-center font-poppins text-3xl font-bold uppercase text-black">
          Our core Values
        </h2>
        <hr className="w-[10rem] rounded border-b-[3px] border-blue-700" />
      </nav>
      <div className="w-full bg-cardBg py-6">
        <div className="wrapper my-5 flex min-h-[10rem] flex-col gap-4 p-3 md:flex-row">
          <div className="ss:full relative h-[30rem] w-full overflow-hidden rounded-md bg-gradient-to-r from-slate-600 to-gray-800 xs:w-full sm:w-1/2">
            <img
              src={AboutUsImg}
              alt="Aboutus img"
              loading="lazy"
              className="object-fit h-full w-full flex-shrink-0 mix-blend-overlay"
            />
            <div className="absolute left-0 top-0 grid h-full w-full grid-cols-2 grid-rows-2 place-content-center gap-10 px-4 py-4">
              {/* Core Values Icons */}
              <div className="flex h-32 flex-row items-center justify-evenly">
                <nav className="text-2xl text-orange-400">
                  <FaSearch />
                </nav>
                <nav className="text-white">
                  <h4 className="text-xl font-semibold">Efficiency </h4>
                  <p>Streamlined Effectiveness</p>
                </nav>
              </div>
              <div className="flex h-32 flex-row items-center justify-evenly text-white">
                <nav className="text-2xl text-orange-400">
                  <TbTargetArrow />
                </nav>
                <nav>
                  <h4 className="text-xl font-semibold">Productivity </h4>
                  <p>Optimized Output</p>
                </nav>
              </div>
              <div className="flex h-32 flex-row items-center justify-evenly">
                <nav className="text-2xl text-orange-400">
                  <IoBulbSharp />
                </nav>
                <nav className="text-white">
                  <h4 className="text-xl font-semibold">Synergy </h4>
                  <p>Dynamic Fusion</p>
                </nav>
              </div>
              <div className="flex h-32 flex-row items-center justify-evenly">
                <nav className="text-2xl text-orange-400">
                  <CgCommunity />
                </nav>
                <nav className="text-white">
                  <h4 className="text-xl font-semibold">Cohesion </h4>
                  <p>Collaboration Integration</p>
                </nav>
              </div>
            </div>
          </div>
          <div className="ss:full md:1/2 w-full space-y-9 px-3 pt-2 xs:w-full sm:w-1/2">
            <h3 className="font-poppins text-4xl font-semibold uppercase md:text-4xl">
              We are a one-stop shop solution for all your energy needs.
            </h3>
            <p className="font-Rubik text-xl">
              SolarPoint Systems E.A was founded on the principles of making
              solar energy affordable and accessible for everyone in Kenya.
              Being in the industry for over 2 decades, we have the knowledge,
              expertise, and the resources to come up with specially designed
              solar energy solutions for you. We the team at SolarPoint Systems
              E.A always strive to provide clean and green energy to all our
              clients. We always aim to deliver best service & quality Solar
              products at reasonable price.
            </p>
            {/* Download PDF Button */}
            <a
              href="/SolarpointSystemE.A.pdf"
              download="SolarpointSystemE.A.pdf"
              aria-label="Download the Solarpoint System Company Profile as a PDF"
              className="btn--primary inline-block"
            >
              Download Company Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurCoreService;