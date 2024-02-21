import { Link } from "react-router-dom";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";

import GrabImg from "../../../assets/portfolio/grab.jpg";
import GrabOutcome1 from "../../../assets/portfolio/outcome-grab.png";
import GrabOutcome2 from "../../../assets/portfolio/outcome-grab-2.png";
import GrabTesting1 from "../../../assets/portfolio/grab_testing1.JPG";
import GrabTesting2 from "../../../assets/portfolio/grab_testing2.JPG";

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
            <select name="projects" id="projects" className="ml-auto">
              <option value="GrabProject">GrabPay Wallet Powered by KBank</option>
              <option value="ChatLocalization">Chat localization</option>
              <option value="grab">Partner cover</option>
              <option value="grab">Localization style guide</option>
              <option value="grab">
                UX writing challenge day 1: flight cancellation alert
              </option>
              <option value="grab">
                UX writing challenge day 2: sports app promotion
              </option>
              <option value="grab">
                UX writing challenge day 3: sign-in error
              </option>
              <option value="grab">
                UX writing challenge day 4: Grocery subscription
              </option>
              <option value="grab">
                UX writing challenge day 5: Post-shutdown message
              </option>
              <option value="grab">
                UX writing challenge day 6: Commute incident alert
              </option>
              <option value="grab">
                UX writing challenge day 7: Real-time sports notification
              </option>
              <option value="grab">
                UX writing challenge day 8: Concert alert on music app
              </option>
              <option value="grab">
                UX writing challenge day 9: Expired credit card error
              </option>
              <option value="grab">
                UX writing challenge day 10: User location permission
              </option>
              <option value="grab">
                UX writing challenge day 11: Google meta description
              </option>
              <option value="grab">
                UX writing challenge day 12: Fake name error
              </option>
              <option value="grab">
                UX writing challenge day 13: Truck delivery notification
              </option>
              <option value="grab">
                UX writing challenge day 14: App downtime
              </option>
            </select>
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
                  KBank. This wallet allows users to easily top up and make
                  cashless payments for various Grab services in Thailand.
                  Signing up brings perks like lower fares, discounted bundles,
                  and extra reward points when using GrabPay Wallet. The
                  challenge is enticing users to explore and give this new
                  product a try.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Team I worked with</h6>
                <p>
                  In this project, I worked closely with the regional team in
                  Singapore, the local team in Thailand, and our external
                  partners from Kbank. My primary collaboration was with the
                  content designer who is responsible for drafting English
                  source content alongside the product designer and project
                  managers.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">How it started</h6>
                <p>
                  For this new product, the team decided to run a 2-day concept
                  testing session in Bangkok, Thailand. While the initial
                  content was crafted in English*, my involvement was crucial
                  for reviewing, suggesting improvements, and localizing the
                  user interface into Thai language for usability testing. Also,
                  I helped ensure that our outsourced Thai moderator had a solid
                  understanding of the product before the interviews. Later, I
                  worked on aligning the Thai content with our Kbank partners.
                </p>
                <br />
                <i>
                  *(We always get English content first. Localization comes
                  later regardless of the market because most stakeholders are
                  English speakers.)
                </i>
              </section>

              <section>
                <p className="body-4">
                  We used both digital and paper prototypes but here's a peek at
                  the paper version…
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
                  preferred one.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">What I learned</h6>
                <p>
                  There’re many interesting insights from the testing. Here’re
                  are some keys things I learned and used to improved the
                  content.
                  <ul className="project-details-list">
                    <li>
                      The participants initially thought it was just a Kbank
                      promotion on Grab app. We had to make it clear that it's a
                      new product. The message needed to be shorter, straight to
                      the point, with a clear action to take before diving into
                      the benefits.
                    </li>
                    <li>
                      Some had the perception that money paid with GrabPay was
                      going to be automatically deducted from their Kbank
                      account. This made them concerned about the money safety.
                    </li>
                    <li>
                      For the CTA button, “Register” performs best. “Link” makes
                      the users think their KBank balanced will be synced with
                      Grab. “Sign up” sounds formal and like a big deal.
                      “Activate” makes them feel that there’s already a
                      connection between Kbank account and Grab, and they need
                      to turn it on.
                    </li>
                  </ul>
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Outcome</h6>
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
