import AboutPowerBackup from "../Components/AboutPowerBackup";
import BackupPlans from "../Components/BackupPlans";
import PowerBackupHero from "../Components/PowerBackupHero";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

function PowerBackup() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <motion.div
      className="h-auto w-full bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>SolarPoint - Power Backup Solutions</title>
        <meta
          name="description"
          content="Learn about our advanced power backup solutions tailored to meet your energy needs. Explore the benefits of having a reliable backup power source."
        />
        <meta
          name="keywords"
          content="Solar Power, Renewable Energy, Solar Solutions, Energy Efficiency, Sustainable Power, Power Backup, Energy Management"
        />
        <link
          rel="canonical"
          href="https://solarpointsystemsea.co.ke//powerbackup"
        />
        <meta
          property="og:title"
          content="SolarPoint - Power Backup Solutions"
        />
      </Helmet>
      <PowerBackupHero />
      <AboutPowerBackup />
      <BackupPlans />
    </motion.div>
  );
}

export default PowerBackup;
