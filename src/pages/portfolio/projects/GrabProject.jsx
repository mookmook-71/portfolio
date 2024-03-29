import { Link } from "react-router-dom";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";

import GrabImg from "../../../assets/portfolio/grab.jpg";
import GrabOutcome1 from "../../../assets/portfolio/outcome-grab.png";
import GrabOutcome2 from "../../../assets/portfolio/outcome-grab-2.png";
import GrabTesting1 from "../../../assets/portfolio/grab_testing1.JPG";
import GrabTesting2 from "../../../assets/portfolio/grab_testing2.JPG";
import ProjectDropdown from "../../../components/dropdown/ProjectDropdown";
import { PortfolioRoutes } from "../../../layout/Layout";

function GrabProject() {
  return (
    <>
      <div className="portfolio-header-bg" />
      <div className="portfolio portfolio-detail">
        <div className="card">
          <div className="project-topbar">
            <button className="btn btn-icon back-btn">
              <Link to="/portfolio">{"<"} Back</Link>
            </button>
            <ProjectDropdown
              className="ml-auto"
              activeIndex={PortfolioRoutes.Grab}
            />
          </div>

          <div className="project-content">
            <div className="project-title">
              <h3>GrabPay Wallet Powered by KBank</h3>
              <img
                src={GrabImg}
                alt="thumbnail photo of GrabPay Wallet Powered by KBank"
                className="project-content-img"
              />
            </div>

            <div className="project-details">
              <section>
                <h6 className="project-details-content">Project overview</h6>
                <p>
                  Grab is introducing a new e-wallet in collaboration with
                  Kasikornbank (KBank). This wallet allows users to easily top
                  up and make cashless payments for various Grab services in
                  Thailand. Signing up brings perks like lower fares, discounted
                  bundles and extra reward points when using GrabPay Wallet.
                  Challenge is enticing users to explore and give this
                  product a try.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Team I worked with</h6>
                <p>
                  In this project, I worked closely with the regional team in
                  Singapore, local team and bank partner in
                  Thailand. My primary collaboration was with the content
                  designer who is responsible for writing English source content
                  alongside the product designer and product manager.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">How it started</h6>
                <p>
                  Since this was a new product, the team decided to run a 2-day
                  concept testing in Bangkok, Thailand. While the initial
                  content was crafted in English*, my involvement was crucial
                  for reviewing, suggesting improvements and localizing the user
                  interface into Thai for the testing. Also, I helped ensure
                  that our outsourced Thai research moderator had a solid
                  understanding of the product before the interviews. Later, I
                  worked on aligning Thai content with the bank partner.
                </p>
                <br />
                <i>
                  *Note: We always get English content first. Localization comes
                  later regardless of the market because most stakeholders are
                  English speakers.
                </i>
              </section>

              <section>
                <p className="body-4">
                  We used both digital and paper prototypes and here's a sneak
                  peek at the paper version…
                </p>
              </section>
              <div className="project-paragraph-img">
                <img
                  src={GrabTesting1}
                  alt="paper prototype for content testing"
                  className="project-outcome-img"
                />
              </div>

              <section>
                <p className="body-4">
                  We experimented with two screen variations of the product
                  value proposition.
                </p>
              </section>
              <div className="project-paragraph-img">
                <img
                  src={GrabTesting2}
                  alt="content variants for usability testing"
                  className="project-outcome-img"
                />
              </div>

              <section>
                <p className="body-4">
                  Then, we tested different CTA buttons to find the most
                  preferred Thai wording.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">What I learned</h6>
                <p>
                  There’re many interesting insights from the testing. Here’re
                  are some key things I learned and used to improved the
                  content.
                </p>
                <ul className="project-details-list">
                  <li>
                    Participants initially thought it was just Kbank
                    promotion on Grab app so we had to make it clearer that this was a
                    new product. The message needed to be shorter and straight to
                    the point with a clear CTA to take before diving into
                    the benefits.
                  </li>
                  <li>
                    Some had perception that money paid with GrabPay was
                    going to be automatically deducted from their Kbank account.
                    This made them concerned about the money safety.
                  </li>
                  <li>
                    For the CTA button, “Register” performs best. “Link” makes
                    the users think their KBank balance will be synced with
                    Grab. “Sign up” sounds like a big deal and too formal.
                    “Activate” makes them feel that there’s already a connection
                    between Kbank account and Grab which they need to turn on.
                  </li>
                </ul>
              </section>

              <section>
                <h6 className="project-details-content">Sample outcome</h6>
                <div className="project-deliverable-img">
                  <img
                    src={GrabOutcome1}
                    alt="value proposition screen of GrabPay Wallet Powered by KBank"
                    className="project-outcome-img"
                  />
                  <img
                    src={GrabOutcome2}
                    alt="landing point of GrabPay Wallet Powered by Kbank"
                    className="project-outcome-img"
                  />
                </div>
              </section>
            </div>
          </div>

          <BackToTop />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default GrabProject;
