import OurSolutions from "../Components/OurSolutions";
import SolarLedsHero from "../Components/SolarLedsHero";
import LedsData from "../LedsData";
import LedsProducts from "../Components/LedsProducts";
import { motion } from "framer-motion"
function Solutions() {
  return (
    <motion.section className="h-auto w-full"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <SolarLedsHero />
      <OurSolutions />

      <h4 className="text-center text-4xl font-poppins pt-10 textblack  font-semibold font-Inter">Some of Our Solar Lights</h4>
      <div className="wrapper grid grid-cols-1 ss:grid-cols-2 md:grid-rows-2 md:grid-cols-4 gap-5 min-h-[10rem]">
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
