import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ProjectsDetailsPage = () => {
  const location = useLocation();
  const {
    title,
    image,
    content,
    client,
    year,
    type,
    otherImage1,
    otherImage2,
    filter, // Add filter to location.state
  } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={content} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={content} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={content} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <article className="min-h-[15rem] w-full px-5">
        <header className="wrapper space-y-10 pt-[10rem]">
          <h3 className="text-4xl font-semibold text-black">{title}</h3>
          <div className="items-center gap-16 space-y-4 sm:flex sm:space-y-0">
            <p>
              {" "}
              <strong>Client:</strong> {client} / <strong> Year: </strong>{" "}
              {year} / <strong>Type: </strong>
              {type}
            </p>
            <nav>
              <Link
                to={`/projects?filter=${filter}`} // Use the filter value in the query string
                className="btn--primary"
                aria-label="Go back to previous page"
              >
                Go Back
              </Link>
            </nav>
          </div>
          <section className="h-[40rem] w-full overflow-hidden rounded-xl">
            <figure className="h-full">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
          </section>

          <section className="w-full gap-5 sm:flex md:gap-10">
            <div className="w-full pt-5 sm:w-1/2">
              <p className="text-xl leading-10">{content}</p>
            </div>
            <div className="w-full gap-3 sm:w-1/2 md:flex">
              <figure>
                <img
                  src={otherImage1}
                  alt={title}
                  loading="lazy"
                  className="size-[15rem]"
                />
              </figure>
              <figure>
                <img
                  src={otherImage2}
                  alt={title}
                  loading="lazy"
                  className="size-[15rem]"
                />
              </figure>
            </div>
          </section>
        </header>
      </article>
    </>
  );
};

export default ProjectsDetailsPage;
