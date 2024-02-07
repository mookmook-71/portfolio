import React from "react";
import ChallengeCard from "../../../components/card/challenge/ChallengeCard";
import BackBtn from "../../../components/button/BackBtn";
import { PageRoute } from "../../../App";
import ResultImg from "../../../assets/challenges/uxw-day-3.jpg";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";
import ChallengesDropdown from "../../../components/dropdown/ChallegesDropdown";

function ChallengeDay3() {
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
              <h3 className="challenge-detail-h3">UXW Challenge Day 3</h3>
              <ChallengeCard>
                <section>
                  <h6>Scenario</h6>
                  <p className="body-4">
                  The user entered the wrong email address to sign in to their account.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                  Tell the user to enter the right email.
                  </p>
                </section>

                <section className="challenge-constraint">
                  <p className="body-4">
                    40 characters max
                  </p>
                </section>
              </ChallengeCard>
            </div>

            <div className="challenge-details">
              <section>
                <h6 className="project-details-content">Voice and tone</h6>
                <p className="body-4">
                While we don’t know anything about the product here, I’m imagining a casual and helpful brand voice like a friend who’s always ready to lend a hand and simplify things for others. Instead of giving technical jargon like 'Error 400 malformed data!,' the explanation is broken down into simpler terms. In this case, the tone is conversational and straightforward as users only need to address a minor error.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Goal</h6>
                <p className="body-4">
                  <ul>
                    <li>Provide a solution to the problem to guide users on what went wrong and prompt them to fix their email input for a successful sign-in to their account</li>
                    <li>Prevent bounce rate on the sign-in flow</li>
                  </ul>
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Target users</h6>
                <p className="body-4">
                Users with previously registered accounts, potentially having multiple emails and might have forgotten the email address they used for this particular site
                </p>
              </section>

              <section>
                <h6 className="project-details-content">User journey</h6>
                <p className="body-4">
                User enters the app &gt; 
                navigates to the sign-in page &gt; 
                enters their email &gt; 
                  📍 <b>encounters an error message</b> &gt; 
                  corrects the email &gt;
                  successfully signs in &gt; 
                  continues using the app
                </p>
                <br />
                <p className="project-sub-heading">
                  ☝ What happens if the message is unsuccessful?
                </p>
                <ul>
                  <li>Users don’t understand why they can’t sign in</li>
                  <li>Users complain and leave the app</li>
                  <li>Brand loses users just because of an error message when they can simply fix the email</li>
                </ul>
              </section>
              <section>
                <h6 className="project-details-content">
                  User’s emotional state
                </h6>
                <p className="body-4">
                  <ul>
                    <li><b>Confused</b> — about the sign-in issue</li>
                    <li><b>Surprised</b> — caught off guard by the error</li>
                    <li><b>Upset</b> — with the disrupted experience</li>
                    <li><b>Helpless</b> — feeling powerless to resolve the issue</li>
                    <li><b>Impatient</b> — seeking quick access and annoyed by delay</li>
                    <li><b>Skeptical</b> — skepticism toward app reliability</li>
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

export default ChallengeDay3;
