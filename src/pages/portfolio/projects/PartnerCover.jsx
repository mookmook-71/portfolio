import React from "react";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";

import CoverImg from "../../../assets/partner-cover.png";
import { Link } from "react-router-dom";
import AppImage from "../../../assets/portfolio/partner-cover-app.png";
import ProjectDropdown from "../../../components/dropdown/ProjectDropdown";
import { PortfolioRoutes } from "../../../layout/Layout";

function PartnerCover() {
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
              activeIndex={PortfolioRoutes.Partner}
            />
          </div>

          <div className="project-content">
            <div className="project-title">
              <h3>Partner Cover</h3>
              <img
                src={CoverImg}
                alt="grab ads"
                className="project-content-img"
              />
            </div>

            <div className="project-details">
              <section>
                <h6 className="project-details-content">Project overview</h6>
                <p>
                  Partner Cover is an insurance product specially designed for
                  Grab driver-partners offering personalized accident and
                  hospital income coverage. Challenge is how to manage content
                  that doesn’t follow standard practice.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Team and roles</h6>
                <p>
                  Design and product team as usual plus legal and compliance
                  team in Thailand. I took on a crucial role in bridging
                  communications between the regional team in Singapore and the
                  local teams in Thailand ensuring Thai content is accurate and
                  approved while keeping most of the stakeholders who aren't
                  Thai speakers aligned on the content.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">
                  Problems and approaches
                </h6>
                <p>
                  While our company typically drafts all products in English
                  first, this particular project took a different approach. The
                  country team opted for a full Thai language launch since our
                  end-users are drivers who are all Thai citizens. This aimed to
                  streamline communication and reduce unnecessary discussions on
                  English content within our local internal teams such as
                  marketing and comms and our local partner, Chubbs. As a resul,
                  Thai content became the focal point of this project.
                </p>

                <p>
                  Now, you might be curious about working with internal team
                  members who don't speak Thai. Let me break down the steps for
                  you.
                </p>
              </section>

              <ol>
                <li>I synced up with the local team on the Thai content.</li>
                <li>
                  Back-Translation: I localized everything into English for the
                  rest of the team's understanding.
                </li>
                <li>
                  Content Check: The content designer stepped in, ensuring the
                  copy aligns with Grab's brand voice, tone, and the writing
                  style of our other insurance products.
                </li>
                <li>
                  Team Walkthrough: The internal team collectively reviewed
                  everything to ensure everyone was on the same page.
                </li>
                <li>
                  Partner Approval: The local team worked on securing the green
                  light from our external partner.
                </li>
                <li>
                  Feedback Loop: I awaited comments and feedback from the local
                  team, making adjustments along the way while keeping the
                  entire team informed.
                </li>
                <li>
                  Finalization: I finalized the content and handed it over to
                  the engineering team.
                </li>
                <li>
                  QA Check: Pre-release QA was conducted to ensure everything
                  met our standards.
                </li>
              </ol>

              <section>
                <p>
                  There’re more things between each step but this should be
                  enough to give you an idea how it was developed and how I
                  contributed.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">
                  Content strategy and output
                </h6>
                <h6 className="project-details-content">
                  Consider target users
                </h6>
                <p>
                  We wrote with caring and supportive voice to show that we
                  genuinely care about our drivers considering many of them are
                  the main financial supporter for themselves and their
                  families. We use succinct language and try to avoid legal
                  jargons whenever possible to make it easy to understand. The
                  content is also encouraging. We made it clear that once
                  they’re protected by the partner cover, the claiming processes
                  are going to be hassle-free.
                </p>
                <br />
                <h6 className="project-details-content">
                  Comply with legal requirements
                </h6>
                <p>
                  When it comes to financial and insurance products, working
                  with the legal and compliance team is inevitable. When dealing
                  with financial and insurance products, collaboration with the
                  legal and compliance team is crucial and inevitable. There are
                  specific terms we must adhere to, terms to avoid, and legal
                  jargon that may be uncommon in everyday language but holds
                  significance in the legal context. For example, we couldn’t
                  use purchase (ซื้อ) and policy (กรมธรรม์).
                </p>
                <br />
                <p>
                  What I did and found very helpful is connecting with the legal
                  team as early as possible and introduced them to content
                  design and localization practices. Obviously I didn’t go
                  through every detail how to write microcopy but I showed them
                  thinking processes, writing guidelines and user’s narrative.
                  Fortunately, I was working with the most open and
                  understanding people so things went great.
                </p>
              </section>

              <section>
                <p>Samples from onboarding</p>
              </section>

              <section>
                <div className="project-paragraph-img">
                  <img
                    src={AppImage}
                    alt="project grab outcome 1"
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

export default PartnerCover;
