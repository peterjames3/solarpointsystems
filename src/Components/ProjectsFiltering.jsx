import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import projectData from "../ProjectData";
import ProjectsListing from "./ProjectsListing";

const ProjectsFiltering = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the filter value from the query param (default is "All")
  const initialFilter = searchParams.get("filter") || "All";

  // State to manage the current filter type
  const [filter, setFilter] = useState(initialFilter);

  // Effect to update the filter when searchParams change
  useEffect(() => {
    setFilter(searchParams.get("filter") || "All");
  }, [searchParams]);

  // Function to handle filtering logic
  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((project) => project.type === filter);

  // Handle filter change and update query parameter
  const handleFilterChange = (type) => {
    setFilter(type);
    setSearchParams({ filter: type });
  };

const handleViewDetails = (project) => {
  navigate(`/projects/${project.id}`, { state: { ...project, filter } });
};


  return (
    <section className="wrapper min-h-[10rem] px-5 py-10">
      <div className="mx-auto mt-1 grid max-w-[1300px] grid-cols-2 place-content-center gap-2 text-xl font-medium text-black ss:grid-cols-3 sm:grid-cols-4 md:grid-cols-5">
        {/* Filter Buttons */}
        {[
          "All",
          "Water Heater Installation",
          "Borehole Solarization",
          "Solar Installation",
          "Solar Repair and Upgrade",
        ].map((type) => (
          <button
            key={type}
            style={filter === type ? { color: "#16a34a" } : null}
            className="hover:text-brandD"
            onClick={() => handleFilterChange(type)}
            aria-label={`${type}`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Display filtered projects */}
      <div className="my-12 grid grid-cols-1 gap-5 ss:grid-cols-2 md:grid-cols-4">
        {filteredProjects.map((project) => (
          <ProjectsListing
            key={project.id}
            project={project}
            onClick={() => handleViewDetails(project)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsFiltering;
