import { useNavigate } from "react-router-dom";
import ArrowRightImg from "../../assets/arrow-right.png";
import ProjectGrabImg from "../../assets/grab.jpg";
import ChatLocalization from "../../assets/overhaul.png";
import ProjectPartner from "../../assets/partner.png";
import ProjectThaiContentGuideImg from "../../assets/thai-content-style-guild.png";
import Footer from "../../components/footer/Footer";
import BackToTop from "../../components/backToTop/backToTop";
import { PortfolioRoutes } from "../../App";

const projects = [
  {
    name: `GrabPay Wallet Powered by KBank`,
    shortDesc:
      "My first UX project: concept testing for a new e-wallet product in Thailand!",
    imageUrl: ProjectGrabImg,
    redirectPath: PortfolioRoutes.Grab
  },
  {
    name: `Chat Localization Overhaul`,
    shortDesc:
      "How I improve chatbot interactions via strategic conversational design",
    imageUrl: ChatLocalization,
    redirectPath: PortfolioRoutes.ChatLocalization
  },
  {
    name: `Partner Cover`,
    shortDesc: "What does “back-translation” have to do in content design?",
    imageUrl: ProjectPartner,
  },
  {
    name: `Localization Style Guide`,
    shortDesc: "Streamlining Thai language standards for Grab from ground zero",
    imageUrl: ProjectThaiContentGuideImg,
  },
];

const challenges = [
  {
    name: "Flight cancellation alert",
  },
  {
    name: "Sports app promo",
  },
  {
    name: "Sign-in error",
  },
  {
    name: "Grocery subscription",
  },
  {
    name: "Post-shutdown message",
  },
  {
    name: "Commute incident alert",
  },
  {
    name: "Real-time sports notification",
  },
  {
    name: "Concert alert on music app",
  },
  {
    name: "Expired credit card error",
  },
  {
    name: "User location permission",
  },
  {
    name: "Google meta description",
  },
  {
    name: "Fake name error",
  },
  {
    name: "Truck delivery notification",
  },
  {
    name: "App downtime",
  },
  {
    name: "The finale",
  },
];

function Portfolio() {
  const navigate = useNavigate();

  return (
    <>
      <img
        src="https://assets.api.uizard.io/api/cdn/stream/f6ccfb77-809f-4f7d-aada-72e3891214e4.jpg"
        alt="brick wall"
        className="portfolio-header-img"
      />
      <div className="portfolio">
        <div className="card">
          <div className="header">
            <h1 className="header-title">Selected Projects</h1>
            <div className="header-sub-title">
              Here are some past projects that I've contributed.
            </div>
          </div>
          <div className="project-list">
            {projects.map((project, i) => (
              <div
                key={`project-${project.name}-${i}`}
                className="project"
                onClick={() => navigate(project.redirectPath)}
              >
                <img
                  src={project.imageUrl}
                  alt={`project image no.${i}`}
                  className="project-img"
                />
                <div className="project-content">
                  <h6 className="project-name">{project.name}</h6>
                  <div className="project-sub">
                    <small className="project-desc">{project.shortDesc}</small>
                    <button className="btn btn-icon">
                      <img
                        className="arrow-forward"
                        src={ArrowRightImg}
                        alt="arrow right"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="challenges">
            <div className="challenge-title">Daily UX Writing Challenge</div>
            <ul className="challenge-list">
              {challenges.map((challenge, index) => (
                <li className="challenge">{`Day ${index + 1}: ${
                  challenge.name
                }`}</li>
              ))}
            </ul>
          </div>

          <BackToTop />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
