import { useNavigate } from "react-router-dom";
import { Projects } from "../../pages/portfolio/Portfolio";

function ProjectDropdown({ activeIndex, className }) {
  const navigate = useNavigate();

  return (
    <select
      className={className}
      value={activeIndex}
      onChange={(e) => {
        navigate(e.target.value);
      }}
    >
      {Projects.map((project) => (
        <option
          value={project.redirectPath}
          key={`project-dropdown-${project.redirectPath}`}
        >
          {project.name}
        </option>
      ))}
    </select>
  );
}

export default ProjectDropdown;
