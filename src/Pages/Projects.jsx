import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import ProjectFiltering from "../Components/ProjectsFiltering";

const Projects = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <motion.section
      className="mx-auto min-h-[10rem] w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Projects | Solar Point System</title>
        <meta
          name="description"
          content="Experience our diverse range of solar projects, from residential to commercial, with Solar Point System."
        />
      </Helmet>
      <div className="wrapper">
        <div className="flex flex-col space-y-10 pt-[12rem] text-center text-black">
          <h3 className="font-poppins text-4xl font-bold">
            SolarPoint Systems E.A Projects
          </h3>
          <p className="font-Rubik text-2xl">
            We have completed & have on-going projects in Sub-saharan Africa.
          </p>
        </div>
        <ProjectFiltering />
     
      </div>
    </motion.section>
  );
};

export default Projects;
