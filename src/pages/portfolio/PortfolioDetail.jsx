import { Fragment, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

const props = {
  name: `Project's name`,
  intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quo suscipit corrupti commodi! Minima laudantium, tenetur voluptas totam cumque consectetur quae eius fugit. Voluptate quia voluptates qui laboriosam fuga! Vel!",
  paragraphs: [
    {
      header: "Introduction",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus omnis nostrum beatae cupiditate doloremque, officia architecto impedit veniam tenetur. Voluptatibus, quisquam! Placeat alias ullam facere cum nemo adipisci voluptatibus atque?",
    },
    {
      header: "Challenges",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus omnis nostrum beatae cupiditate doloremque, officia architecto impedit veniam tenetur. Voluptatibus, quisquam! Placeat alias ullam facere cum nemo adipisci voluptatibus atque?",
    },
    {
      header: "Outcome",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus omnis nostrum beatae cupiditate doloremque, officia architecto impedit veniam tenetur. Voluptatibus, quisquam! Placeat alias ullam facere cum nemo adipisci voluptatibus atque?",
    },
  ],
};

const pics = [
  {
    src: "https://images.unsplash.com/photo-1579948889900-cebe5135e34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwzNnx8c2xvdmFraWF8ZW58MXx8fHwxNjY5MDU0MTQ0&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "Lorem, ipsum.",
    isActive: true,
  },
  {
    src: "https://images.unsplash.com/photo-1608853826477-69a6d92bad7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMXx8c2xvdmFraWF8ZW58MXx8fHwxNjY5MDQ0MTEy&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "Lorem, ipsum.",
    isActive: false,
  },
  {
    src: "https://images.unsplash.com/photo-1553380470-a3333c37afd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwzN3x8c2xvdmFraWF8ZW58MXx8fHwxNjY5MDU0MTQ0&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "side project",
  },
  {
    src: "https://images.unsplash.com/photo-1608853826477-69a6d92bad7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMXx8c2xvdmFraWF8ZW58MXx8fHwxNjY5MDQ0MTEy&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "Lorem, ipsum.",
    isActive: false,
  },
  {
    src: "https://images.unsplash.com/photo-1553380470-a3333c37afd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwzN3x8c2xvdmFraWF8ZW58MXx8fHwxNjY5MDU0MTQ0&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "side project",
    isActive: false,
  },
];

function PortfolioDetail() {
  const { name, intro, paragraphs } = props;
  const mainCarouselPic = useMemo(() => pics.filter((p) => p.isActive)[0], []);
  const carouselItemPic = useMemo(() => pics.filter((p) => !p.isActive), []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <img src="https://assets.api.uizard.io/api/cdn/stream/f6ccfb77-809f-4f7d-aada-72e3891214e4.jpg" alt="brick wall" className="portfolio-header-img" />
      <div className="portfolio portfolio-detail">
        <div className="card">
          <div className="header">
            <button className="btn btn-icon back-btn">
              <Link to="/portfolio">{"<"} Back</Link>
            </button>
          </div>
          <div className="content">
            <div className="carousel">
              <img src={mainCarouselPic.src} alt={mainCarouselPic.alt} className="carousel-main" />
              <div className="carousel-item">
                {carouselItemPic.map((p, i) => (
                  <img src={p.src} alt={p.alt} key={`carousel-img-${p.alt}-${i}`} className="carousel-item-img" />
                ))}
              </div>
            </div>
            <div className="content-text">
              <h1 className="content-text-header">{name}</h1>
              <p>{intro}</p>
              {paragraphs.map((p) => (
                <Fragment key={`paragraph-${p.header}`}>
                  <h2>{p.header}</h2>
                  <p>{p.text}</p>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioDetail;
