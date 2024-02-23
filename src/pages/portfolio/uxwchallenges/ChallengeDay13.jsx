import React from "react";
import ChallengeCard from "../../../components/card/challenge/ChallengeCard";
import BackBtn from "../../../components/button/BackBtn";
import { PageRoute } from "../../../App";

import UserImg from "../../../assets/challenges/uxw-challenge-day-13.png";
import ResultImg from "../../../assets/challenges/uxw-day-13.jpg";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";
import ChallengesDropdown from "../../../components/dropdown/ChallegesDropdown";

function ChallengeDay13() {
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
              <h3 className="challenge-detail-h3">UXW Challenge Day 13</h3>
              <ChallengeCard>
                <section>
                  <h6>Scenario</h6>
                  <p className="body-4">
                    A short-haul truck driver has a phone app that monitors his
                    route, schedule, fuel & deliveries. He has 6 more deliveries
                    before stopping for fuel and lunch. Due to unexpected
                    traffic, he’s behind schedule. He can choose to stay on his
                    planned route for a few more stops, but risk running low on
                    fuel and missing lunch, or he can get fuel and lunch now and
                    finish the deliveries later.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                    Write a push notification alerting him of this dilemma and
                    options.
                  </p>
                </section>

                <section className="challenge-constraint">
                  <p className="body-4">
                    Headline: 30 characters max
                    <br />
                    Body: 45 characters max
                    <br />
                    Button(s): 25 characters max
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
                  Let's use a supportive and liberating voice for today's
                  challenge as it focuses on schedule management. Since people
                  have unique ways of managing tasks, it's important to provide
                  support and flexibility to ensure their satisfaction. A calm
                  and sympathetic tone can also bring comfort to the tired
                  driver who might be feeling pressured to meet their deadline.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Goals</h6>
                <p className="body-4">
                  <ul>
                    <li>Let the driver know current situation</li>
                    <li>Provide available options to the driver</li>
                    <li>Get delivery job done without driver feeling abused</li>
                  </ul>
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Target users</h6>
                <p className="body-4">
                  Short-haul truck driver who has to check his phone for routes,
                  schedules, fuel and drop-off locations as he’s delivering the
                  customers’ items
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
                  <li>Driver sees the notification but finds it unhelpful</li>
                  <li>Driver risks running out of fuel</li>
                  <li>
                    Driver might miss lunch or a break due to time constraints
                  </li>
                  <li>
                    Driver feels added pressure and fatigue managing time while
                    trying to meet the schedule
                  </li>
                  <li>Customers aren't happy with delayed deliveries</li>
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
                  For the heading, I want to make sure the driver understands
                  what's going on. Besides external issues like traffic, we need
                  to also consider how the driver feels physically and mentally.
                  For instance, if the driver is feeling unwell or if there are
                  special circumstances at a delivery location like customer
                  needing extra help. These are factors to consider. So, I
                  decide to let the driver know how many deliveries are left for
                  the day and that the status of deliveries is currently behind
                  schedule, ensuring they have all the relevant information to
                  make informed decisions and adjustments to their plan.
                </p>
                <br />

                <p>
                  Now, I think about two types of drivers. Some want to finish
                  work quickly while others care about their well-being and
                  don't mind taking a break. Considering this, I create two
                  buttons: one to stay on route and the other to take a break.
                  Above these buttons, I include a gentle reminder to monitor
                  the fuel level, regardless of the choice they make. This is
                  crucial because if they run out of fuel, the delivery could be
                  further delayed and they might even miss their break due to a
                  new problem to solve.
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

export default ChallengeDay13;
