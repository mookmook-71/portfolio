import React from "react";
import ChallengeCard from "../../../components/card/challenge/ChallengeCard";
import BackBtn from "../../../components/button/BackBtn";
import { PageRoute } from "../../../App";
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
                  It’s Monday. A user has just gotten into their car to drive to work. They plug their phone into the car and start driving.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                  How would you let the user know there’s a fire happening in a nearby town that is causing road closures? The effect on their commute is unknown, but there is a definite danger if the fire gets closer. How do you communicate this to them? When? Write it.
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

            <div className="challenge-details">
              <section>
                <h6 className="project-details-content">Voice and tone</h6>
                <p className="body-4">
                A safety-focused text like this demands a precise and reliable voice. The tone should be formal and firm to ensure that any drivers receiving this alert or warning perceive it as credible and trustworthy enough to follow.
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
                <p className="body-4">
                  ??
                </p>
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
                    <li><b>??</b> — ??</li>
                    <li><b>??</b> — ??</li>
                    <li><b>??</b> — ??</li>
                    <li><b>??</b> — ??</li>
                    <li><b>??</b> — ??</li>
                    <li><b>??</b> — ??</li>
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
                <p className="body-4">
                  ??</p>
                <br />
                <p>
                  ??</p>
                  <p>
                  ??</p>
                  <p>
                  ??</p>
                  <p>
                  ??</p>
                <br />
                <p>
                  ??
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