import HeroImg from "../../assets/Professional Solar Installation Services.webp";
import "aos/dist/aos.css";
const InstallationHero = () => {
  return (
    <section className="h-[35rem] w-full">
      <div className="relative h-full w-full bg-gradient-to-r from-gray-900 to-gray-700">
        <img
          src={HeroImg}
          alt="an image  depicting Professional Solar Installation Services – Reliable, Efficient, and Sustainable Energy Solutions for Homes and Businesses"
          loading="lazy"
          className="h-full w-full flex-shrink-0 object-cover mix-blend-overlay"
        />

        <header className="absolute left-1/2 top-[60%] max-w-[1100px] -translate-x-1/2 -translate-y-1/2 space-y-4 text-center text-white transition">
          <h2 className="font-body py-2 font-semibold xxs:text-2xl xs:text-3xl sm:text-5xl">
            {" "}
            Get Professional  & Affordable Solar Installation & Maintenance services in Kenya 
          </h2>
          <p>Solution / Solar Installation and maintenance</p>
          <p className="mb-8 text-xl sm:text-3xl">
            We design, supply, maintain,  and install solar energy systems for homes,
            businesses Ngos and Government institutions.
          </p>
        </header>
      </div>
    </section>
  );
};
export default InstallationHero;
