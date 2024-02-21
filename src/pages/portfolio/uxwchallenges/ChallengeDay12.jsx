import React from "react";
import ChallengeCard from "../../../components/card/challenge/ChallengeCard";
import BackBtn from "../../../components/button/BackBtn";
import { PageRoute } from "../../../App";

import UserImg from "../../../assets/challenges/uxw-challenge-day-12.png";
import ResultImg from "../../../assets/challenges/uxw-day-12.jpg";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";
import ChallengesDropdown from "../../../components/dropdown/ChallegesDropdown";

function ChallengeDay12() {
  return (
    <>
      <div className="portfolio-header-bg" />
      <div className="portfolio portfolio-detail">
        <div className="card">
          <div className="project-topbar">
            <BackBtn redirectPath={PageRoute.Portfolio} />
            <ChallengesDropdown className="ml-auto" />
          </div>
          <div className="project-content">
            <div className="challenge-detail-title">
              <h3 className="challenge-detail-h3">UXW Challenge Day 12</h3>
              <ChallengeCard>
                <section>
                  <h6>Scenario</h6>
                  <p className="body-4">
                    A user is creating an account. When they come to the step
                    where they are asked to enter their name, they get an error
                    message. A fraud detection software thinks their name is
                    fake—but it’s wrong 5% of the time.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                    Write an error message that prompts them to fix the error
                    without shaming them for having a fake-sounding name.
                  </p>
                </section>

                <section className="challenge-constraint">
                  <p className="body-4">45 characters max</p>
                </section>
              </ChallengeCard>
            </div>

            <div className="project-supporting-img">
              <img
                src={UserImg}
                alt="upset user waiting at the airport"
                className="project-supporting-img"
              />
            </div>

            <div className="challenge-details">
              <section>
                <h6 className="project-details-content">Voice and tone</h6>
                <p className="body-4">
                  I'm crafting a brand voice inspired by personalities I like —
                  authentic and chill. The tone will be respectful and casual.
                  Picture a friendly florist with extensive knowledge of flowers
                  suggesting options for a special occasion without pressuring
                  you to choose a specific one. That's the vibe.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Goals</h6>
                <p className="body-4">
                  <ul>
                    <li>
                      Let user know their name doesn’t work without shaming or
                      offending them
                    </li>
                    <li>Help users finish their account setup</li>
                    <li>Avoid users abandoning the process</li>
                  </ul>
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Target users</h6>
                <p className="body-4">
                  Potentially user with an uncommon or foreign name, or user who
                  intentionally enters a fake name during account creation
                </p>
              </section>

              <section>
                <h6 className="project-details-content">User journey</h6>
                <p className="body-4">
                  ?? &gt; ?? &gt; ?? &gt; 📍 <b>??</b> &gt; ?? &gt; ?? &gt; ??
                  &gt; ?? &gt; ?? &gt; ?? &gt; ?? &gt; ?? &gt;
                </p>
                <br />
                <p className="project-sub-heading">
                  ☝ What happens if the message is unsuccessful?
                </p>
                <ul>
                  <li>Users feel upset and offended</li>
                  <li>Users give up on creating an account</li>
                  <li>Brand gains disrespectful impression</li>
                </ul>
              </section>
              <section>
                <h6 className="project-details-content">
                  User’s emotional state
                </h6>
                <p className="body-4">
                  <ul>
                    <li>
                      <b>??</b> — ??
                    </li>
                    <li>
                      <b>??</b> — ??
                    </li>
                    <li>
                      <b>??</b> — ??
                    </li>
                    <li>
                      <b>??</b> — ??
                    </li>
                    <li>
                      <b>??</b> — ??
                    </li>
                    <li>
                      <b>??</b> — ??
                    </li>
                  </ul>
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Thought processes</h6>
                <p className="body-4">
                  THIS! I've faced a similar issue multiple times before, not
                  because of a fake name but due to the system mistaking a part
                  of my name for an inappropriate word, "porn." In Thai, "porn"
                  means blessings, but in English, it has a different meaning.
                  Luckily, there are alternative spellings for my name, even
                  though they don't match the one on my ID card. If the platform
                  insists on a legal name, it becomes impossible for me to
                  register. I usually avoid contacting customer support or doing
                  additional verification steps because I find it disrespectful
                  that they pass judgment on the name that my parents gave me.
                  Therefore, here I just gently ask the user to try a different
                  spelling of their name as a workaround. Instead of directly
                  stating it's a fake name, I frame it as the system having
                  difficulty recognizing their name (as a real one.)
                </p>
                <br />
              </section>

              <section>
                <h6 className="project-details-content">Final content</h6>
                <div className="project-deliverable-img">
                  <img
                    src={ResultImg}
                    alt="something"
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

export default ChallengeDay12;
