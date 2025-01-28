import Renewable from "../../assets/blog3.webp";

function ContactHero() {
  return (
    <section className="w-full">
      <div className="relative h-[35rem] w-full bg-gradient-to-r from-slate-700 to-gray-800">
        <img
          src={Renewable}
          alt="renewable"
          loading="lazy"
          className="h-full w-full flex-shrink-0 object-fill mix-blend-overlay"
        />
        <div className="absolute left-1/2 top-[50%] flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-between px-5 text-white transition md:max-w-[1400px]">
          <div className="">
            <h1 className="text-center text-4xl font-semibold uppercase text-green-500 md:text-5xl">
              Contact Us
            </h1>
          </div>

          <div className="w-1/2">
            <h2 className="hidden text-center text-2xl font-medium text-slate-400 sm:flex">
              Reach out for inquiries, or to learn more about our services. Our
              team is ready to support your journey towards sustainability and
              innovation.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
