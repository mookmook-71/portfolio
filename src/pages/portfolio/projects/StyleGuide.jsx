import React from "react";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";

import CoverImg from "../../../assets/thai-content-style-guild.png";
import { Link } from "react-router-dom";
import StyleGuide1 from "../../../assets/portfolio/styleguide-1.png";
import StyleGuide2 from "../../../assets/portfolio/styleguide-2.png";
import StyleGuide3 from "../../../assets/portfolio/styleguide-3.png";
import StyleGuide4 from "../../../assets/portfolio/styleguide-4.png";

function StyleGuide() {
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
              <option value="grab">GrabPay Wallet Powered by KBank</option>
              <option value="grab">Chat localization</option>
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
              <h3>Localization Style Guide</h3>
              <img
                src={CoverImg}
                alt="grab ads"
                className="project-content-img"
              />
            </div>

            <div className="project-details">
              <section>
                <h6 className="project-details-content">Background</h6>
                <p>
                  Years prior to this project (and before I joined Grab), there
                  was neither an established localization style guide nor Thai
                  writing rules. A lack of standard language guidelines for our
                  external language service provider and internal reviewers
                  resulted in inconsistency in brand voice and terminology used
                  across different products. While there was an existing content
                  style guide for English, it didn't apply to other languages.
                </p>

                <section>
                  <h6 className="project-details-content">Solution</h6>
                  <p>
                    Create a style guide that specifically illustrates how to
                    localize Grab’s microcopy from English source content into
                    Thai emphasizing brand consistency, accuracy, and relevance.
                  </p>
                </section>

                <section>
                  <h6 className="project-details-content">What I did</h6>
                  <ul className="project-details-list">
                    <li>
                      Conducted competitive analysis of localization style
                      guides.
                    </li>
                    <li>
                      Reviewed the existing Grab's English content style guide
                      to see what can be adopted to the localization guide.
                    </li>
                    <li>
                      Crafted a comprehensive style guide for Thai language
                      covering UX principles, Grab’s voice and tone, formatting
                      standards, Thai-specific writing guidelines, localization
                      considerations, and a quick glossary of frequently used
                      terms (separated from the main glossary).
                    </li>
                    <li>
                      Invited relevant stakeholders to review and collected
                      feedback.
                    </li>
                    <li>
                      Published the style guide and shared it with the content
                      design and localization team.
                    </li>
                    <li>
                      Promoted it to a wider audience within Thailand country
                      team.
                    </li>
                    <li>
                      Maintained the style guide to ensure it's always
                      up-to-date.
                    </li>
                    <li>
                      Used it for onboarding new Thai linguists and external
                      localization vendors.
                    </li>
                  </ul>
                </section>

                <section>
                  <h6 className="project-details-content">Team contribution</h6>
                  <p>
                    Style guide that I developed became a template for all other
                    languages.
                  </p>

                  <section>
                    <h6 className="project-details-content">Sample</h6>
                    <p>Check out some screenshots below.</p>
                  </section>

                  <div className="project-paragraph-img">
                    <img
                      src={StyleGuide1}
                      alt="project grab outcome 1"
                      className="project-outcome-img"
                    />
                  </div>
                  <br />

                  <div className="project-paragraph-img">
                    <img
                      src={StyleGuide2}
                      alt="project grab outcome 1"
                      className="project-outcome-img"
                    />
                  </div>
                  <br />

                  <div className="project-paragraph-img">
                    <img
                      src={StyleGuide3}
                      alt="project grab outcome 1"
                      className="project-outcome-img"
                    />
                  </div>
                  <br />

                  <div className="project-paragraph-img">
                    <img
                      src={StyleGuide4}
                      alt="project grab outcome 1"
                      className="project-outcome-img"
                    />
                  </div>
                  <br />
                </section>
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

export default StyleGuide;
