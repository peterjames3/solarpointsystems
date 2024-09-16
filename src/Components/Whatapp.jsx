import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatapp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-10 left-10">
      {isVisible && (
        <a
          href="https://wa.me/254703704062"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Whatsapp"
          data-tooltip="Whatsapp"
          className="text-green-600 text-6xl hover:cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300 "
        >
          <FaWhatsapp />
        </a>
      )}
    </div>
  );
};

export default Whatapp;
