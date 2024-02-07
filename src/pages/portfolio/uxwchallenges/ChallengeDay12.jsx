import React from "react";
import ChallengeCard from "../../../components/card/challenge/ChallengeCard";
import BackBtn from "../../../components/button/BackBtn";
import { PageRoute } from "../../../App";
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
                  A user is creating an account. When they come to the step where they are asked to enter their name, they get an error message. A fraud detection software thinks their name is fake—but it’s wrong 5% of the time.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                  Write an error message that prompts them to fix the error without shaming them for having a fake-sounding name.
                  </p>
                </section>

                <section className="challenge-constraint">
                  <p className="body-4">
                    45 characters max
                  </p>
                </section>
              </ChallengeCard>
            </div>

            <div className="challenge-details">
              <section>
                <h6 className="project-details-content">Voice and tone</h6>
                <p className="body-4">
                I'm crafting a brand voice inspired by personalities I like — authentic and chill. The tone will be respectful and casual. Picture a friendly florist with extensive knowledge of flowers suggesting options for a special occasion without pressuring you to choose a specific one. That's the vibe.
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

export default ChallengeDay12;