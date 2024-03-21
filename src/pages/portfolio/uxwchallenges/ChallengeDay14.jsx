import React from "react";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";

import ChallengeCard from "../../../components/card/challenge/ChallengeCard";
import BackBtn from "../../../components/button/BackBtn";
import ChallengesDropdown from "../../../components/dropdown/ChallegesDropdown";
import { PageRoute } from "../../../App";

import VoiceAndTone from "../../../assets/challenges/voice-and-tone.png";
import Goals from "../../../assets/challenges/goals.png";
import TargetUser from "../../../assets/challenges/target-user.png";
import UserJourney from "../../../assets/challenges/user-journey.png";
import ThoughtProcesses from "../../../assets/challenges/thought-processes.png";
import FinalContent from "../../../assets/challenges/final-content.png";

import UserImg from "../../../assets/challenges/uxw-challenge-day-13.png";
import JourneyImg from "../../../assets/challenges/uxw-challenge-day-13-journey.png";
import ResultImg from "../../../assets/challenges/uxw-day-13.jpg";

function ChallengeDay14() {
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
              <h3 className="challenge-detail-h3">UXW Challenge Day 14</h3>
              <ChallengeCard>
                <section>
                  <h6>Scenario</h6>
                  <p className="body-4">
                    a user is shopping using a price comparison app that boasts
                    “real-time” pricing on items. As they are checking the price
                    of an item, something goes wrong. The problem is unknown.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                    write a message that informs the user that they cannot
                    access the app right now. You cannot specify "why" the app
                    doesn't work, you also want them to continue using the app.
                  </p>
                </section>

                <section className="challenge-constraint">
                  <p className="body-4">
                    Headline: 30 characters max
                    <br />
                    Body: 120 characters max
                    <br />
                    Button(s): 15 characters max
                  </p>
                </section>
              </ChallengeCard>
            </div>

            <div className="challenge-details">
              <section>
                <div className="challenge-topic">
                  <img
                    src={VoiceAndTone}
                    alt="thought processes section"
                    className="challenge-topic"
                  />
                </div>
                <p className="body-4">
                  When I read today's challenge, I think of a persona that's
                  cool, friendly, and a bit humorous. The idea is to connect
                  with users even when things go wrong. While we can't pinpoint
                  the exact issue, being brutally honest may not sit well. Users
                  might not like a message saying, “Hey, we're as clueless as
                  you but come back, okay?” even if it's true in this case. So,
                  I'm going for a calm and helpful tone assuring them we're
                  working to fix the problem. This aims to give them confidence
                  to return later with peace of mind.
                </p>
              </section>

              <section>
                <div className="challenge-topic">
                  <img
                    src={Goals}
                    alt="thought processes section"
                    className="challenge-topic"
                  />
                </div>
                <p className="body-4">
                  <ul>
                    <li>
                      Let users know about the current issue preventing app
                      access
                    </li>
                    <li>Provide guidance on available actions for users</li>
                    <li>Uphold a positive relationship with users</li>
                    <li>Maintain user retention rate</li>
                  </ul>
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Target users</h6>
                <p className="body-4">
                  Smart shopper who values prices and technology often comparing
                  options from various stores before making a purchase decision,
                  and prefers the convenience of using their phone for various
                  tasks
                </p>
              </section>

              <section>
                <div className="challenge-topic">
                  <img
                    src={UserJourney}
                    alt="user journey and emotional state section"
                    className="challenge-topic"
                  />
                </div>
                <img src={JourneyImg} alt="user journey" width="100%" />

                <p className="project-sub-heading">
                  ☝ What happens if the message is unsuccessful?
                </p>
                <ul>
                  <li>
                    User persists in trying to use the app when it won't work
                  </li>
                  <li>User is uncertain about what they can or should do</li>
                  <li>User complaints about the app</li>
                  <li>User changes to another price comparison app</li>
                  <li>The app receives low ratings and negative feedback</li>
                </ul>
              </section>

              <section>
                <h6 className="project-details-content">
                  Information architecture
                </h6>
                <p className="body-4">
                  <b>Heading:</b> what happens
                  <br />
                  <b>Body:</b> what we do to help + what they can do now or
                  later
                  <br />
                  <b>CTA:</b> what they can try right now
                </p>
                <br />
                <p>
                  In this situation, the way to help the users is answering
                  these questions
                </p>
              </section>

              <section>
                <div className="challenge-topic">
                  <img
                    src={ThoughtProcesses}
                    alt="thought processes section"
                    className="challenge-topic"
                  />
                </div>
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
                <div className="challenge-topic">
                  <img
                    src={FinalContent}
                    alt="thought processes section"
                    className="challenge-topic"
                  />
                </div>
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

export default ChallengeDay14;
