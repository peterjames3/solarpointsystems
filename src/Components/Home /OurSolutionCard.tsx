import React from "react";
import { BoxIcon } from "lucide-react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const OurSolutionCard = ({
  title,
  description,
  icon: Icon,
  imageUrl,
  link,
}) => {
  return (
    <article
      data-aos="zoom-in"
      data-aos-delay="70"
      className="group relative h-[15rem] overflow-hidden rounded-xl bg-white transition-all duration-300 hover:shadow-lg"
    >
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 opacity-0 transition-opacity group-hover:opacity-100" /> */}
      <img
        src={imageUrl}
        alt={title}
        loading="lazy"
        className="h-[15.5rem] w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <section className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="translate-y-8 transform transition-transform duration-300 group-hover:translate-y-0">
          <header className="mb-2 flex items-center gap-2">
            <Icon className="h-6 w-6" />
            <h3 className="text-xl font-semibold">{title}</h3>
          </header>
          <p className="mb-4 transition-opacity duration-300 group-hover:opacity-100">
            {description}
          </p>
          <Link
            to={link}
            type="button"
            title="read more about the solution"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
          >
            Learn More
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>
    </article>
  );
};

export default OurSolutionCard;
