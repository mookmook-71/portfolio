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

import UserImg from "../../../assets/challenges/uxw-challenge-day-9.png";
import JourneyImg from "../../../assets/challenges/uxw-challenge-day-9-journey.png";
import ResultImg from "../../../assets/challenges/uxw-day-9.jpg";

function ChallengeDay9() {
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
              <h3 className="challenge-detail-h3">UXW Challenge Day 9</h3>
              <ChallengeCard>
                <section>
                  <h6>Scenario</h6>
                  <p className="body-4">
                    The user is trying to rent a car using an application but
                    the credit card on file has expired.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                    Write them an error message so that they can correct the
                    problem.
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
                <div className="challenge-topic">
                  <img
                    src={VoiceAndTone}
                    alt="thought processes section"
                    className="challenge-topic"
                  />
                </div>
                <p className="body-4">
                  For this challenge, I'm adopting a considerate and simple
                  voice to empathize with users and guide them effectively. The
                  tone remains professional and not too casual since handling
                  users' payment information is a sensitive topic.
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
                      Guide users to correct their credit card information to
                      proceed with their booking
                    </li>
                    <li>Prevent users from dropping out at the last step</li>
                    <li>Improve the booking completion rate</li>
                  </ul>
                </p>
              </section>

              <section>
                <div className="challenge-topic">
                  <img
                    src={TargetUser}
                    alt="thought processes section"
                    className="challenge-topic"
                  />
                </div>
                <p className="body-4">
                  Adult who has planned to go on a trip for the upcoming holiday
                  and is a credit card holder
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
                  <li>Users might abandon the booking process</li>
                  <li>Booking is unsuccessful</li>
                  <li>
                    Users waste time attempting to book but ultimately fail
                  </li>
                  <li>
                    Users lack clarity on why their credit card couldn't go
                    through
                  </li>
                  <li>Users perceive the rental system as problematic</li>
                  <li>Users experience frustration</li>
                  <li>Users might contact customer support for assistance</li>
                </ul>
              </section>

              <section>
                <div className="challenge-topic">
                  <img
                    src={ThoughtProcesses}
                    alt="thought processes section"
                    className="challenge-topic"
                  />
                </div>
                <p className="body-4">
                  I avoid filler words like 'oops, whoops, uh-oh' to avoid
                  upsetting users who have gone through multiple steps. Instead,
                  the content focuses on being helpful by presenting users with
                  possible solutions.
                </p>
                <br />

                <p>
                  If users accidentally entered the wrong date, they can easily
                  update their card details and proceed. However, if the card
                  has really expired, I suggest they switch to a new card. While
                  it's possible that the bank could be causing the issue,
                  suggesting contacting the bank at this stage where users are
                  close to completing the booking might not be the most
                  practical solution so I don’t include that here.
                </p>
                <br />

                <p>
                  Before finalizing, I decide to modify 'Your card is expired'
                  to 'Your entered card is expired' to clarify that it might not
                  be their actual card expiring, but an issue with the entered
                  information.
                </p>
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

export default ChallengeDay9;
