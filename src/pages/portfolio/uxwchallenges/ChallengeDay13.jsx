import React from "react";
import ChallengeCard from "../../../components/card/challenge/ChallengeCard";
import BackBtn from "../../../components/button/BackBtn";
import { PageRoute } from "../../../App";
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
                <h6 className="project-details-content">Goal</h6>
                <p className="body-4">
                  <ul>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                  </ul>
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Target users</h6>
                <p className="body-4">??</p>
              </section>

              <section>
                <h6 className="project-details-content">User journey</h6>
                <p className="body-4">
                  ?? &gt; 
                  ?? &gt; 
                  ?? &gt; 
                  📍 <b>??</b> &gt; 
                  ?? &gt;
                  ?? &gt; 
                  ?? &gt; 
                  ?? &gt; 
                  ?? &gt; 
                  ?? &gt; 
                  ?? &gt; 
                  ?? &gt;
                </p>
                <br />
                <p className="project-sub-heading">
                  ☝ What happens if the message is unsuccessful?
                </p>
                <ul>
                  <li>??</li>
                  <li>??</li>
                  <li>??</li>
                  <li>??</li>
                  <li>??</li>
                  <li>??</li>
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
                <h6 className="project-details-content">
                  Information architecture
                </h6>
                <p className="body-4">
                  <b>Heading:</b> ??
                  <br />
                  <b>Body:</b> ??
                  <br />
                  <b>CTA:</b> ??
                </p>
                <br />
                <p>
                  For the heading, I prioritize communicating the most important
                  message to the passengers because this event immediately
                  affects them. To enhance clarity, especially for those with
                  multiple ongoing flights, I include the destination airport
                  code. For the body, I start with the reason for the flight
                  cancellation as it{"’"}s likely the first question people ask.
                  Subsequently, I give details on possible actions or offerings
                  from the airline.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Thought process</h6>
                <p className="body-4">??</p>
                <br />
                <p>??</p>
                <p>??</p>
                <p>??</p>
                <p>??</p>
                <br />
                <p>??</p>
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
