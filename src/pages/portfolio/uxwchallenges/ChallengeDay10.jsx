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

import UserImg from "../../../assets/challenges/uxw-challenge-day-10.png";
import JourneyImg from "../../../assets/challenges/uxw-challenge-day-10-journey.png";
import ResultImg from "../../../assets/challenges/uxw-day-10-en.jpg";

function ChallengeDay10() {
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
              <h3 className="challenge-detail-h3">UXW Challenge Day 10</h3>
              <ChallengeCard>
                <section>
                  <h6>Scenario</h6>
                  <p className="body-4">
                    The user is trying to view a website to help them buy a car.
                    But, the content can’t load without the user’s location.
                    They need to enter their ZIP code and first name.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                    Ask them where they live and who they are without sounding
                    like you're unnecessarily mining their data.
                  </p>
                </section>

                <section className="challenge-constraint">
                  <p className="body-4">
                    Headline: 25 characters max
                    <br />
                    Body: 45 characters max
                    <br />
                    Button(s): 15 characters max
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
                  For this challenge, I create an imaginary car selling website
                  called BUYCARMAI (บายคาร์มั้ย บายคาร์ใหม่ – a playful Thai
                  pun, haha). I want those who visit the website to feel like
                  they have a personal assistant when deciding to buy a new car.
                  The voice I'm aiming for is knowledgeable and intimate.
                  Imagine having an assistant who's well-versed in a wide
                  variety of car models and has connections with numerous
                  showrooms. He knows the best ways to assist you but first, he
                  just needs to get to know you a bit better. The tone could be
                  warm and clear to make the users feel comfortable.
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
                      Get user consent for using certain personal information
                      without causing concern or pressure
                    </li>
                    <li>
                      Provide tailored and personalized search results for each
                      user
                    </li>
                    <li>
                      Prevent users from leaving the website as soon as they
                      enter
                    </li>
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
                  Tech-savvy person who prefers online exploration before
                  visiting a physical location thinking of buying a new car
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
                  <li>Users quickly exit the website</li>
                  <li>
                    Users are unsure about the purpose of the permission request
                  </li>
                  <li>
                    Users develop a negative perception that the website
                    infringes on their privacy or sells their information
                  </li>
                  <li>
                    Users find alternative websites where they aren't required
                    to share personal information
                  </li>
                  <li>Bounce rate increases</li>
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
                  For the heading, I use a question to create a more human-like
                  and approachable tone which can build trust and engagement.
                  “Near you” at the end subtly hints why we need their name and
                  zip code next.{" "}
                </p>
                <br />

                <p>
                  In the body, I emphasize that users are only required to
                  provide minimal details and there are subsequent steps which
                  will be handled by us to ensure precise matching. Ideally, I'd
                  like to convey that requesting this personal information is
                  solely for optimizing the search process and their data will
                  be securely stored but due to character limits, this is all I
                  can fit.{" "}
                </p>
                <br />

                <p>
                  Finally, the CTA button "Explore Now" is a simple and
                  action-oriented. It can encourage users to take the next step.
                  It also adds a sense of adventure and aligns with the theme of
                  discovering a dream car.
                </p>
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

export default ChallengeDay10;
