import purifierImg3 from "../../assets/syagewaterpurifier.webp";
const SolarWaterPurifierMain = () => {
  return (
    <section className="w-full">
      {/* Creative Introduction Section */}
      <div className="wrapper flex flex-col items-center gap-8 rounded-lg p-10 shadow-lg lg:flex-row">
        <div className="lg:w-1/2">
          <h3 className="mb-4 font-poppins text-4xl font-bold">
            What is a Solar Water Purifier?
          </h3>
          <p className="font-Rubik text-lg">
            A solar water purifier is an advanced water filtration system that
            uses solar energy to remove objectionable elements from raw water.
            Unlike traditional purifiers that rely on fossil fuels or grid
            electricity, these purifiers harness solar power, making them
            environmentally friendly and cost-effective. The purification
            process varies depending on the model, and each system achieves
            different grades of purified water, ensuring clean, safe drinking
            water for households, businesses, and industries.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src={purifierImg3}
            alt="Solar Water Purifier"
            loading="lazy"
            className="h-[30rem] w-full rounded-lg object-contain shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default SolarWaterPurifierMain;
