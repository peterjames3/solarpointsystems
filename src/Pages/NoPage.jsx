import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
function NoPage() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <motion.section
      className=" h-screen w-full bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opcaity: 0 }}
    >
      <div className=" h-full flex flex-col items-center justify-center space-y-5">
        <h1 className="text-center text-3xl font-bold text-brandC">
          Error 404 :No Page Found
        </h1>
        <nav>
          <Link to="/" className="btn--primary">
            Go Back to Home
          </Link>
        </nav>
      </div>
    </motion.section>
  );
}

export default NoPage;
