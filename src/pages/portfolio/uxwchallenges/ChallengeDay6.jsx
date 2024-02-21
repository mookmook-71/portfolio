import React from "react";
import ChallengeCard from "../../../components/card/challenge/ChallengeCard";
import BackBtn from "../../../components/button/BackBtn";
import { PageRoute } from "../../../App";

import UserImg from "../../../assets/challenges/uxw-challenge-day-6.png";
import ResultImg from "../../../assets/challenges/uxw-day-6.jpg";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";
import ChallengesDropdown from "../../../components/dropdown/ChallegesDropdown";

function ChallengeDay6() {
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
              <h3 className="challenge-detail-h3">UXW Challenge Day 6</h3>
              <ChallengeCard>
                <section>
                  <h6>Scenario</h6>
                  <p className="body-4">
                    It’s Monday. A user has just gotten into their car to drive
                    to work. They plug their phone into the car and start
                    driving.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                    How would you let the user know there’s a fire happening in
                    a nearby town that is causing road closures? The effect on
                    their commute is unknown, but there is a definite danger if
                    the fire gets closer. How do you communicate this to them?
                    When? Write it.
                  </p>
                </section>

                <section className="challenge-constraint">
                  <p className="body-4">
                    Headline: 30 characters max
                    <br />
                    Body: 45 characters max
                  </p>
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
                  A safety-focused text like this demands a precise and reliable
                  voice. The tone should be formal and firm to ensure that any
                  drivers receiving this alert or warning perceive it as
                  credible and trustworthy enough to follow.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Goals</h6>
                <p className="body-4">
                  <ul>
                    <li>
                      Alert user to a situation that requires immediate
                      attention or action for their own safety
                    </li>
                    <li>
                      Enhance safety measures for residents near the fire
                      incident as messaging this can prevent more people from
                      entering the area
                    </li>
                  </ul>
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Target users</h6>
                <p className="body-4">
                  Working adult who’s driving their car to the office and is
                  likely to encounter an unsafe incident on the way
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
                  <li>Users risk driving into a dangerous area</li>
                  <li>Users may ignore the message</li>
                  <li>Traffic congestion occurs</li>
                  <li>Evacuation efforts are slowed down</li>
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
                  Initially, I thought the scenario is about a navigation app’s
                  notification. However, when I thought about it again, it
                  seemed less fitting because the user is a regular commuter to
                  their office and wouldn't typically rely on GPS for their
                  routine drive, right? After that, I recalled a situation
                  during my visit to South Korea where emergency alerts were
                  sent to everyone in affected areas regardless of whether they
                  were locals or tourists. I assume that it’s more similar to
                  this case.
                </p>
                <br />

                <p>
                  The content begins by emphasizing “Fire” in brackets to
                  quickly grab attention ensuring that even a brief glance at
                  the phone can alert the user to the critical term. After this
                  is the affected area's name, something also very important.
                  The Thai localization differs slightly from the English
                  version; in Thai, it's actually 'Be careful of fire,' as it
                  sounds more natural than a direct translation (คำเตือนไฟไหม้)
                </p>
                <br />

                <p>
                  As for the body, I consider two user groups: those nearby and
                  others farther away. Therefore, I come up with two advisories.
                  The first advises users like our driver on the way to work to
                  stay clear of the fire zone. Next, an emergency contact number
                  is provided for those near the fire who may need help.{" "}
                </p>
                <br />

                <p>
                  Recognizing that there may be people more directly impacted by
                  an incident and understanding the importance of providing
                  support contact information, is a concept inspired by my
                  observations of online articles dealing with challenging
                  situations like suicides or depression. While the emergency in
                  today's challenge is different, I believe the same approach
                  can be applied.
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

export default ChallengeDay6;
