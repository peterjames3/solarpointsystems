import { useNavigate } from "react-router-dom";
import ProjectData from "../../ProjectData";

function Projects() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    setTimeout(() => {
      navigate("/projects");
    }, 1000);
  };

  return (
    <section className="my-16 w-full bg-cardBg">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="max-w-8xl mx-auto my-16 min-h-[30rem]"
      >
        <header
          className="mx-auto flex max-w-[950px] flex-col items-center space-y-3"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h3 className="pt-9 text-center font-poppins text-3xl font-bold text-black">
            Some of our solar Projects
          </h3>
          <hr className="w-[10rem] rounded border-b-[3px] border-textColor" />
          <h4 className="text-center font-poppins text-2xl font-medium">
            Powering Kenya through innovative solar solutions. From commercial
            complexes to community projects, we deliver sustainable energy
            solutions.
          </h4>
        </header>
        <div>
          <div className="wrapper grid grid-cols-1 gap-10 pt-10 sm:grid-cols-2 md:grid-cols-3">
            {ProjectData.map((project) => (
              <div
                key={project.id}
                className="group flex h-[25rem] flex-col overflow-hidden rounded-md bg-dimWhite shadow-md group-hover:shadow-xl"
              >
                <figure className="group relative h-[14rem]">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </figure>

                <figcaption className="h-full overflow-y-auto px-2 py-3 text-black">
                  <h5 className="text-xl font-medium text-gray-900">
                    {project.type}
                  </h5>
                  <p className="">{project.title}</p>
                  <p className="">{project.content}</p>
                </figcaption>
              </div>
            ))}
          </div>
          <div className="mx-auto my-1 max-w-[400px] py-3">
            <button
              onClick={handleNavigate}
              aria-label="Read more about our projects"
              className="btn font-semibold transition-all delay-300 hover:text-white"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
