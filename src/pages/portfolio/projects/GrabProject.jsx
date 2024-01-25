import { Link } from "react-router-dom";
import GrabImg from "../../../assets/portfolio/grab.jpg";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";

function GrabProject() {
  return (
    <>
      <img
        src="https://assets.api.uizard.io/api/cdn/stream/f6ccfb77-809f-4f7d-aada-72e3891214e4.jpg"
        alt="brick wall"
        className="portfolio-header-img"
      />
      <div className="portfolio portfolio-detail">
        <div className="card">
          <div className="project-topbar">
            <button className="btn btn-icon back-btn">
              <Link to="/portfolio">{"<"} Back</Link>
            </button>
            <select name="projects" id="projects" className="ml-auto">
              <option value="grab">GrabPay Wallet Powered by KBank</option>
            </select>
          </div>

          <div className="project-title">
            <h3>GrabPay Wallet Powered by KBank</h3>
            <img src={GrabImg} alt="grab ads" className="project-content-img" />
          </div>

          <div className="project-details">
            <section>
              <h6 className="project-details-content">Project overview</h6>
              <body4>
                Grab is introducing a new e-wallet in collaboration with KBank.
                This wallet allows users to easily top up and make cashless
                payments for various Grab services in Thailand. Signing up
                brings perks like lower fares, discounted bundles, and extra
                reward points when using GrabPay Wallet. The challenge is
                enticing users to explore and give this new product a try.
              </body4>
            </section>

            <section>
              <h6 className="project-details-content">Team I worked with</h6>
              <p>
                In this project, I worked closely with the regional team in
                Singapore, the local team in Thailand, and our external partners
                from Kbank. My primary collaboration was with the content
                designer who is responsible for drafting English source content
                alongside the product designer and project managers.
              </p>
            </section>

            <section>
              <h6 className="project-details-content">How it started</h6>
              <p>
                For this new product, the team decided to run a 2-day concept
                testing session in Bangkok, Thailand. While the initial content
                was crafted in English*, my involvement was crucial for
                reviewing, suggesting improvements, and localizing the user
                interface into Thai language for usability testing. Also, I
                helped ensure that our outsourced Thai moderator had a solid
                understanding of the product before the interviews. Later, I
                worked on aligning the Thai content with our Kbank partners.
              </p>
              <br />
              <i>
                *(We always get English content first. Localization comes later
                regardless of the market because most stakeholders are English
                speakers.)
              </i>
            </section>

            <p className="body-4">
              We used both digital and paper prototypes but here's a peek at the
              paper version…
            </p>
            <div>something gray</div>

            <p className="body-4">
              We experimented with two screen variations of the product value
              proposition.
            </p>
            <div>something gray</div>

            <p className="body-4">
              <b>
                Then, we tested different CTA buttons to find the most preferred
                one.
              </b>
            </p>

            <section>
              <h6 className="project-details-content">What I learned</h6>
              <p>
                There’re many interesting insights from the testing. Here’re are
                some keys things I learned and used to improved the content.
                <ul>
                  <li>
                    The participants initially thought it was just a Kbank
                    promotion on Grab app. We had to make it clear that it's a
                    new product. The message needed to be shorter, straight to
                    the point, with a clear action to take before diving into
                    the benefits.
                  </li>
                  <li>
                    Some had the perception that money paid with GrabPay was
                    going to be automatically deducted from their Kbank account.
                    This made them concerned about the money safety.
                  </li>
                  <li>
                    For the CTA button, “Register” performs best. “Link” makes
                    the users think their KBank balanced will be synced with
                    Grab. “Sign up” sounds formal and like a big deal.
                    “Activate” makes them feel that there’s already a connection
                    between Kbank account and Grab, and they need to turn it on.
                  </li>
                </ul>
                <div>something-gray</div>
              </p>
            </section>

            <section>
              <h6 className="project-details-content">Outcome</h6>
              <div className="project-deliverable-img">
                <img
                  src={GrabImg}
                  alt="outcome-1"
                  className="project-deliverable-img"
                />
              </div>
            </section>

            <BackToTop />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default GrabProject;
