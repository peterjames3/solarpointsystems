import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaCheckDouble } from "react-icons/fa6";
import Hybrid from "../assets/hybrid..webp";
import OrderNow from "../Components/OrderNow";
import packages from "../Packages";
import "aos/dist/aos.css";

function Hybridmain() {
  return (
    <section className="my-5 w-full ">
          <div className="w-full">
        {/* Solar Hybrid Section */}
        <div className="wrapper flex flex-col items-center gap-8 rounded-lg p-10 shadow-lg lg:flex-row">
          {/* Text Section */}
          <div className="lg:w-1/2">
            <h3 className="mb-4 font-poppins text-4xl font-bold">
              Solar Hybrid
            </h3>
            <p className="font-rubik text-lg">
              A Hybrid Solar Solution integrates solar panels, battery storage,
              along with either utility or generator power, ensuring
              round-the-clock electricity supply to your devices. Tailoring to
              your long-term goals, we craft and deploy scalable solar hybrid
              power solutions to meet your specific demands. The battery serves
              as a reserve, storing energy produced by the solar panels for
              future consumption, thereby lowering your energy costs.
              Additionally, our systems offer the capability to feed excess
              power back into the utility grid, should you opt for it. We are
              committed to guiding you through the process of selecting and
              designing the ideal system that aligns with your needs and
              financial plan.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative h-[30rem] w-full overflow-hidden rounded-lg  shadow-md">
              <img
                src={Hybrid}
                alt="Man working"
                loading="lazy"
                className="h-full w-full object-cover"
              />
          
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 flex w-full flex-col px-2 py-3">
        <div className="space-y-2 py-6 text-center text-slate-900">
          <h3 className="text-3xl font-medium">Hybrid Packages</h3>
          <hr className="mx-auto w-[12rem] rounded-md border-2 border-blue-700" />
          <h4 className="text-4xl font-semibold">Customized Sizing Plan</h4>
        </div>
        <div className="wrapper grid grid-cols-1 gap-12 px-2 ss:grid-cols-2 md:grid-cols-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="flex transform flex-col overflow-hidden rounded-md shadow-xl shadow-black duration-300 hover:scale-105"
            >
              <nav className="h-[20rem] text-center">
                <h5 className="font-Inter bg-brandD px-7 font-poppins text-5xl font-medium leading-tight tracking-wider text-white ss:px-5 ss:py-12 sm:px-3 sm:py-9">
                  {pkg.name} {pkg.price}
                </h5>
              </nav>
              <nav className="flex h-full flex-col items-center justify-center space-y-10">
                <span className="text-8xl text-blue-700">{pkg.icon}</span>
                {pkg.features.map((features, index) => (
                  <nav
                    key={index}
                    className="flex flex-row items-center gap-5 text-xl text-slate-700"
                  >
                    <span className="text-brandC">
                      <FaCheckDouble />
                    </span>
                    {features}
                  </nav>
                ))}
                {/* Pass package details to OrderNow */}
                <OrderNow
                  name={pkg.name}
                  price={pkg.price}
                  features={pkg.features}
                />
              </nav>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hybridmain;
