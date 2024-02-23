import { useNavigate } from "react-router-dom";
import ArrowRightImg from "../../assets/arrow-right.png";
import ProjectGrabImg from "../../assets/grab.jpg";
import ChatLocalization from "../../assets/chat-overhaul.png";
import ProjectPartner from "../../assets/partner-cover.png";
import ProjectThaiContentGuideImg from "../../assets/thai-content-style-guild.png";
import Footer from "../../components/footer/Footer";
import BackToTop from "../../components/backToTop/backToTop";
import { PortfolioRoutes } from "../../layout/Layout";

export const Projects = [
  {
    name: `GrabPay Wallet Powered by KBank`,
    shortDesc:
      "My first UX project: concept testing for a new e-wallet product in Thailand!",
    imageUrl: ProjectGrabImg,
    redirectPath: PortfolioRoutes.Grab,
  },
  {
    name: `Chat Localization Overhaul`,
    shortDesc:
      "How I improve chatbot interactions via strategic conversational design",
    imageUrl: ChatLocalization,
    redirectPath: PortfolioRoutes.ChatLocalization,
  },
  {
    name: `Partner Cover`,
    shortDesc: "What does “back-translation” have to do in content design?",
    imageUrl: ProjectPartner,
    redirectPath: PortfolioRoutes.Partner,
  },
  {
    name: `Localization Style Guide`,
    shortDesc: "Streamlining Thai language standards for Grab from ground zero",
    imageUrl: ProjectThaiContentGuideImg,
    redirectPath: PortfolioRoutes.StyleGuide,
  },
];

export const ChallengesRoutes = {
  ChallengeDay1: "/portfolio/uxw-challenge/day1",
  ChallengeDay2: "/portfolio/uxw-challenge/day2",
  ChallengeDay3: "/portfolio/uxw-challenge/day3",
  ChallengeDay4: "/portfolio/uxw-challenge/day4",
  ChallengeDay5: "/portfolio/uxw-challenge/day5",
  ChallengeDay6: "/portfolio/uxw-challenge/day6",
  ChallengeDay7: "/portfolio/uxw-challenge/day7",
  ChallengeDay8: "/portfolio/uxw-challenge/day8",
  ChallengeDay9: "/portfolio/uxw-challenge/day9",
  ChallengeDay10: "/portfolio/uxw-challenge/day10",
  ChallengeDay11: "/portfolio/uxw-challenge/day11",
  ChallengeDay12: "/portfolio/uxw-challenge/day12",
  ChallengeDay13: "/portfolio/uxw-challenge/day13",
  ChallengeDay14: "/portfolio/uxw-challenge/day14",
  ChallengeDay15: "/portfolio/uxw-challenge/day15",
};

export const Challenges = [
  {
    name: "Flight cancellation alert",
    redirectPath: ChallengesRoutes.ChallengeDay1,
  },
  {
    name: "Sports app promotion",
    redirectPath: ChallengesRoutes.ChallengeDay2,
  },
  {
    name: "Sign-in error",
    redirectPath: ChallengesRoutes.ChallengeDay3,
  },
  {
    name: "Grocery subscription",
    redirectPath: ChallengesRoutes.ChallengeDay4,
  },
  {
    name: "Post-shutdown message",
    redirectPath: ChallengesRoutes.ChallengeDay5,
  },
  {
    name: "Commute incident alert",
    redirectPath: ChallengesRoutes.ChallengeDay6,
  },
  {
    name: "Real-time sports notification",
    redirectPath: ChallengesRoutes.ChallengeDay7,
  },
  {
    name: "Concert alert on music app",
    redirectPath: ChallengesRoutes.ChallengeDay8,
  },
  {
    name: "Expired credit card error",
    redirectPath: ChallengesRoutes.ChallengeDay9,
  },
  {
    name: "User location permission",
    redirectPath: ChallengesRoutes.ChallengeDay10,
  },
  {
    name: "Google meta description",
    redirectPath: ChallengesRoutes.ChallengeDay11,
  },
  {
    name: "Fake name error",
    redirectPath: ChallengesRoutes.ChallengeDay12,
  },
  {
    name: "Truck delivery notification",
    redirectPath: ChallengesRoutes.ChallengeDay13,
  },
  {
    name: "App downtime",
    redirectPath: ChallengesRoutes.ChallengeDay14,
  },
  {
    name: "The finale",
    redirectPath: ChallengesRoutes.ChallengeDay15,
  },
];

function Portfolio() {
  const navigate = useNavigate();

  return (
    <>
      <div className="portfolio-header-bg" />
      <div className="portfolio">
        <div className="card">
          <div className="header">
            <h1 className="header-title">Selected Projects</h1>
            <div className="header-sub-title">
              Here are some past projects that I've contributed.
            </div>
          </div>
          <div className="project-list">
            {Projects.map((project, i) => (
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
                <div className="project-card">
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
              {Challenges.map((challenge, index) => (
                <li
                  key={`ux-writing-challenge-${index}`}
                  className="challenge"
                  onClick={() => navigate(challenge.redirectPath)}
                >{`Day ${index + 1}: ${challenge.name}`}</li>
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
