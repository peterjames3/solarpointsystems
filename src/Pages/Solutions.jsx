// import OurSolutions from "../Components/Home/OurSolutions";
//import OurSolutions from "../Components/Home/OurSolutions ";
import SolarLedsHero from "../Components/Solutions/SolarLedsHero";
import LedsData from "../LedsData";
import LedsProducts from "../Components/LedsProducts";
import { motion } from "framer-motion";
function Solutions() {
  return (
    <motion.section
      className="h-auto w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SolarLedsHero />
      {/* <OurSolutions /> */}

      <h4 className="textblack font-Inter pt-10 text-center font-poppins text-4xl font-semibold">
        Some of Our Solar Lights
      </h4>
      <div className="wrapper grid min-h-[10rem] grid-cols-1 gap-5 ss:grid-cols-2 md:grid-cols-4 md:grid-rows-2">
        {LedsData.map((item) => (
          <LedsProducts
            key={item.id}
            id={item.id}
            name={item.name}
            desc={item.desc}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default Solutions;
