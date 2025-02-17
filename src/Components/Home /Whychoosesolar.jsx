import ContactUsButton from "../ContactUsButton";
const WhyChooseSolar = () => {
  return (
    <section className=" bg-gray-50 w-full">
      <div className="wrapper flex flex-col gap-4 md:my-20 md:flex-row md:px-10">
        {/* Heading Section */}
        <div className="px-5 py-4 font-semibold md:w-[40%] md:px-10 md:text-start">
          <h2 className="pt-3 font-poppins text-4xl uppercase md:pt-6">
            Solar Installation Services in Kenya
          </h2>
        </div>

        {/* Content Section */}
        <div className="px-5 pt-6 font-poppins md:w-[55%] md:px-10">
          <p className="font-rubik text-xl">
            SolarPoint Systems E.A. provides{" "}
            <strong>affordable and sustainable solar energy solutions </strong>
            to reduce electricity costs and promote{" "}
            <strong>clean energy</strong>. With nearly two decades of expertise,
            we are a trusted leader in Kenya&apos;s{" "}
            <strong>solar power industry</strong>, offering:
          </p>

          {/* Bullet Points for Readability */}
          <ul className="mt-4 list-disc pl-6 text-lg">
            <li>
              High-efficiency <strong>solar panel installations</strong>
            </li>
            <li>
              Reliable <strong>off-grid and hybrid solar systems</strong>
            </li>
            <li>
              Custom <strong>renewable energy solutions</strong> for homes &
              businesses
            </li>
            <li>Expert support for energy efficiency & sustainability</li>
          </ul>

          {/* Location-Based SEO */}
          <p className="mt-4 text-lg">
            Looking for the <strong> solar solutions in Kenya</strong>? We
            specialize in{" "}
            <strong>
              solar installations and other solar related solutions in Nairobi,
              Mombasa, Kisumu, and beyond{" "}
            </strong>
            .
          </p>

          {/* Call-to-Action (CTA) */}
          <div className="mt-2">
            <ContactUsButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSolar;
