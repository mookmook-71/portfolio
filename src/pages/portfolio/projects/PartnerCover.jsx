import React from "react";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";

import CoverImg from "../../../assets/partner-cover.png";
import { Link } from "react-router-dom";
import AppImage from "../../../assets/portfolio/partner-cover-app.png";
import StepImg from "../../../assets/portfolio/partner-cover-steps.png";

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
                  hospital income coverage. Thailand team didn't want to work on
                  English content althought it's the source language of all our
                  Grab microcopy. So, challenge is how to manage content that
                  doesn’t follow standard practice.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Team and roles</h6>
                <p>
                  Design and Product team (as usual) along with the Legal and
                  Compliance team in Thailand. I took on a crucial role in
                  bridging communications between Singapore and Thailand team ensuring Thai microcopy is
                  accurate, completely compliant and approved while keeping most
                  of the stakeholders who aren't Thai speakers aligned on the
                  content.
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
                  marketing and comms as well as our local partner, Chubbs. As a
                  resul, Thai content became the focal point of this project.
                </p>
                <br />

                <p>
                  Now, you might be curious about how to get this done with
                  English speaking stakeholders. Let me break down steps for
                  you.
                </p>
              </section>

              <section>
                <div>
                  <img src={StepImg} alt="steps in project" width="100%" />
                </div>
              </section>

              <section>
                <h6 className="project-details-content">Content strategy</h6>
                <h7 className="project-details-content">
                  ✤ Consider target users ✤
                </h7>
                <p>
                  We wrote with caring and supportive voice to show that we
                  genuinely care about our drivers and at the same time we kept in mind that
                  many of them are the main financial supporter for themselves
                  and their families. We use succinct language and try to avoid
                  legal jargons whenever possible to make it easy to understand.
                  The content is also encouraging. We made it clear that once
                  they’re protected by the partner cover, the claiming processes
                  are going to be hassle-free.
                </p>
                <br />
                <br />
                <h7 className="project-details-content">
                  ✤ Comply with legal requirements ✤
                </h7>
                <p>
                  When dealing with financial and insurance products,
                  collaboration with the legal and compliance team is crucial
                  and inevitable. There are specific terms we must adhere to,
                  terms to avoid, and legal jargon that may be uncommon in
                  everyday language but holds significance in the legal context.
                  For example, we couldn’t use purchase (ซื้อ) and policy
                  (กรมธรรม์).
                </p>
                <br />
                
                <p>
                  What I did and found very helpful is connecting with the legal
                  team as early as possible and introduced them to content
                  design and localization best practices. I didn’t go
                  through every detail how to write microcopy but I showed them
                  thinking processes, writing guideline references and user’s narrative.
                  Fortunately, I was working with the most open and
                  understanding people so everything went great. (Yay!)
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Deliverable</h6>
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
