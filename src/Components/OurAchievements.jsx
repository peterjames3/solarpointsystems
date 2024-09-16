import { FaGoogleWallet } from "react-icons/fa6";
import { GrInstallOption } from "react-icons/gr";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdOutlineCo2 } from "react-icons/md";
import "aos/dist/aos.css";
function OurAchievements() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="3000"
      className="w-full px-10 py-7"
    >
      <div className="flex w-full flex-col items-center space-y-3 pb-4 font-poppins">
        <h3 className="pt-9 text-center font-poppins text-3xl font-bold text-black">
          Our Achievements
        </h3>
        <hr className="w-[10rem] rounded border-b-[3px] border-textColor" />
        <h4 className="text-center text-4xl font-medium">
          Illuminating a Greener Future with Over 1 Gigawatt of Solar Energy
          Deployed
        </h4>
      </div>

      <div className="wrapper xs:grid-col-2 grid grid-cols-1 grid-rows-4 gap-3 bg-cardBg xs:grid-rows-2 ss:grid-cols-2 ss:grid-rows-2 md:grid-cols-4 md:grid-rows-1">
        <div className="flex flex-col items-center overflow-y-auto rounded-sm bg-white px-2 py-5 text-center shadow-md shadow-slate-800 sm:min-h-[30rem]">
          <div className="flex h-[40%] w-full items-center justify-center">
            <FaGoogleWallet className="text-9xl text-brandD" />
          </div>
          <div className="h-[60%] w-full space-y-2 text-center">
            <h5 className="text-2xl font-medium text-black">
              Over $20,000 Saved Annually
            </h5>
            <p className="font-Rubik text-xl">
              Our clients save an average of $20,000 annually on energy costs,
              contributing to both their financial and environmental goals.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center overflow-y-auto rounded-sm bg-white px-2 text-center shadow-md shadow-slate-800">
          <div className="flex h-[40%] w-full items-center justify-center">
            <GrInstallOption className="text-9xl text-brandD" />
          </div>
          <div className="h-[60%] w-full space-y-2 text-center">
            <h5 className="text-2xl font-medium">20+ Systems Installed</h5>
            <p className="font-Rubik text-xl">
              With over 5,000 solar systems installed, we&apos;re leading the
              charge towards a more sustainable future, one installation at a
              time.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center overflow-y-auto rounded-sm bg-white px-2 text-center shadow-md shadow-slate-800">
          <div className="flex h-[40%] w-full items-center justify-center">
            <TbBrandGoogleAnalytics className="text-9xl text-brandD" />
          </div>
          <div className="h-[60%] w-full space-y-2 text-center">
            <h5 className="text-2xl font-medium">Expert Analytical Services</h5>
            <p className="font-Rubik text-xl">
              Our cutting-edge analytical services ensure your solar investment
              is optimized for efficiency and long-term gains.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center overflow-y-auto rounded-sm bg-white px-2 text-center shadow-md shadow-slate-800">
          <div className="flex h-[40%] w-full items-center justify-center">
            <MdOutlineCo2 className="text-9xl text-brandD" />
          </div>
          <div className="h-[60%] w-full space-y-2 text-center">
            <h5 className="text-2xl font-medium">100,000 Tons of CO2 Saved</h5>
            <p className="font-Rubik text-xl">
              Our solar installations have collectively saved the planet from
              over 100,000 tons of CO2 emissions, helping to combat climate
              change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurAchievements;
