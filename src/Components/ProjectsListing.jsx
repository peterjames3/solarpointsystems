import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProjectsListing = ({ project, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { image, title, imageAlt } = project;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <article
      onClick={onClick}
      role="button"
      aria-label={`View details of ${title}`}
    >
      {isLoading ? (
        <div>
          <Skeleton height={212} />
          <Skeleton count={1} />
        </div>
      ) : (
        <div className="cursor-pointer text-white">
          <figure className="h-[15rem]">
            <img
              src={image}
              alt={imageAlt || title} // Fallback to title if imageAlt is not provided
              loading="lazy"
              className="h-full w-full object-cover"
              aria-hidden={false}
            />
            <figcaption className="text-sm text-black">{title}</figcaption>
          </figure>
        </div>
      )}
    </article>
  );
};

ProjectsListing.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageAlt: PropTypes.string, // Optional alt text for the image
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectsListing;
