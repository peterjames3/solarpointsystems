import { useNavigate } from "react-router-dom";
import ProjectData from "../ProjectData";

function Projects() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    setTimeout(() => {
      navigate("/projects");
    }, 1000);
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="3000"
      className="max-w-8xl mx-auto my-2 min-h-[30rem]"
    >
      <div
        className="flex w-full flex-col items-center space-y-3"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h3 className="pt-9 text-center font-poppins text-3xl font-bold text-black">
          Some of our Projects
        </h3>
        <hr className="w-[10rem] rounded border-b-[3px] border-textColor" />
        <h4 className="text-center font-poppins text-4xl font-medium">
          Explore some of our projects Catalog
        </h4>
      </div>
      <div className="w-full bg-cardBg">
        <div className="wrapper grid grid-cols-1 gap-10 pt-10 sm:grid-cols-2 md:grid-cols-3">
          {ProjectData.map((project) => (
            <div
              key={project.id}
              className="flex h-[25rem] flex-col rounded-md bg-dimWhite shadow-md"
            >
              <div className="h-[20rem]">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="h-full w-full rounded-md object-cover"
                />
              </div>

              <div className="h-[5rem] px-2 text-black">
                <h5 className="font-poppins text-xl font-semibold text-brandC">
                  {project.client}
                </h5>
                <p className="">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto my-1 max-w-[400px] py-3">
          <button
            onClick={handleNavigate}
            aria-label='Read more about our projects'
            className="btn font-semibold transition-all delay-300 hover:text-white"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
