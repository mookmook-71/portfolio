import { useNavigate } from "react-router-dom";

const projects = [
  {
    name: `Project's name`,
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia deleniti aperiam earum quae, officiis quibusdam ipsam hic voluptatibus tempora.",
    imageUrl: "https://images.unsplash.com/photo-1543499459-d1460946bdc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxkZWxpdmVyeSUyMGRyaXZlcnxlbnwxfHx8fDE2OTk2Mzk2MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: `Project's name`,
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia deleniti aperiam earum quae, officiis quibusdam ipsam hic voluptatibus tempora.",
    imageUrl: "https://images.unsplash.com/photo-1543499459-d1460946bdc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxkZWxpdmVyeSUyMGRyaXZlcnxlbnwxfHx8fDE2OTk2Mzk2MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: `Project's name`,
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia deleniti aperiam earum quae, officiis quibusdam ipsam hic voluptatibus tempora.",
    imageUrl: "https://images.unsplash.com/photo-1543499459-d1460946bdc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxkZWxpdmVyeSUyMGRyaXZlcnxlbnwxfHx8fDE2OTk2Mzk2MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: `Project's name`,
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia deleniti aperiam earum quae, officiis quibusdam ipsam hic voluptatibus tempora.",
    imageUrl: "https://images.unsplash.com/photo-1543499459-d1460946bdc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxkZWxpdmVyeSUyMGRyaXZlcnxlbnwxfHx8fDE2OTk2Mzk2MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: `Project's name`,
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia deleniti aperiam earum quae, officiis quibusdam ipsam hic voluptatibus tempora.",
    imageUrl: "https://images.unsplash.com/photo-1543499459-d1460946bdc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxkZWxpdmVyeSUyMGRyaXZlcnxlbnwxfHx8fDE2OTk2Mzk2MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

function Portfolio() {
  const navigate = useNavigate();

  return (
    <>
      <img src="https://assets.api.uizard.io/api/cdn/stream/f6ccfb77-809f-4f7d-aada-72e3891214e4.jpg" alt="brick wall" className="portfolio-header-img" />
      <div className="portfolio">
        <div className="card">
          <div className="header">
            <h1 className="header-title">Selected Projects</h1>
            <div className="header-sub-title">Here are some past projects that I've contributed.</div>
            <hr className="divider" />
          </div>
          <div className="project-list">
            {projects.map((project, i) => (
              <div key={`project-${project.name}-${i}`} className="project" onClick={() => navigate("/portfolio/detail")}>
                <img src={project.imageUrl} alt={`project image no.${i}`} className="project-img" />
                <h3 className="project-name">{project.name}</h3>
                <div className="project-sub">
                  <small className="project-desc">
                    <p>{project.shortDesc}</p>
                  </small>
                  <button className="btn btn-icon">
                    <svg viewBox="0 0 24 24" className="icon-arrow-right">
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                      <path d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-outline-light">Load more</button>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
