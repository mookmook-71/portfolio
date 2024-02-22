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
import ThoughtProcesses from "../../../assets/challenges/thought-processes.png";
import FinalContent from "../../../assets/challenges/final-content.png";
import UserImg from "../../../assets/challenges/uxw-challenge-day-1.png";
import JourneyImg from "../../../assets/challenges/uxw-challenge-day-1-journey.png";
import AirlineOffersImg from "../../../assets/challenges/uxw-challenge-day-1-offers.png";
import Draft1Img from "../../../assets/challenges/uxw-challenge-day-1-draft1.png";
import Draft2Img from "../../../assets/challenges/uxw-challenge-day-1-draft2.png";
import Draft3Img from "../../../assets/challenges/uxw-challenge-day-1-draft3.png";
import ResultImg from "../../../assets/challenges/uxw-day-1.jpg";

function ChallengeDay1() {
  return (
    <>
      <div className="portfolio-header-bg" />
      <div className="portfolio portfolio-detail">
        <div className="card">
          <div className="project-topbar">
            <BackBtn redirectPath={PageRoute.Portfolio} />
            <ChallengesDropdown activeIndex={0} className="ml-auto" />
          </div>
          <div className="project-content">
            <div className="challenge-detail-title">
              <h3 className="challenge-detail-h3">UXW Challenge Day 1</h3>
              <ChallengeCard>
                <section>
                  <h6>Scenario</h6>
                  <p className="body-4">
                    A traveler is in an airport waiting for the last leg of a
                    flight home when their flight gets abruptly canceled due to
                    bad weather.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                    Write a message from the airline app notifying them of the
                    cancellation and what they need to do next.
                  </p>
                </section>

                <section className="challenge-constraint">
                  <p className="body-4">
                    Headline: 45 characters max
                    <br />
                    Body: 175 characters max
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
                <div className="challenge-topic">
                  <img
                    src={VoiceAndTone}
                    alt="voice and tone section"
                    className="challenge-topic"
                  />
                </div>
                <p className="body-4">
                  I’m writing this with my dedicated flight attendant friend in
                  mind (Hey Nanny! yes I’m thinking of you haha). I want the
                  airline’s voice to represent professionalism, reliability, and
                  a commitment to exceptional service. Considering the
                  significance of a flight cancellation, it is crucial that
                  content tone remains honest, informative, and helpful.
                </p>
              </section>

              <section>
                <div className="challenge-topic">
                  <img
                    src={Goals}
                    alt="goals section"
                    className="challenge-topic"
                  />
                </div>
                <p className="body-4">
                  <ul>
                    <li>
                      Provide clear and timely notification to passengers
                      regarding the cancellation of their upcoming flight
                    </li>
                    <li>
                      Maintain a positive relationship and support system
                      between the airline and passengers
                    </li>
                    <li>Mitigate address the emotional impact on passengers</li>
                  </ul>
                </p>
              </section>

              <section>
                <div className="challenge-topic">
                  <img
                    src={TargetUser}
                    alt="target user section"
                    className="challenge-topic"
                  />
                </div>
                <p className="body-4">
                  Passengers of a canceled flight due to bad weather. Some may
                  be okay with rescheduling, but many are likely to be unhappy.
                  They could be in different situations, like waiting to go
                  home, saying goodbye to a loved one, attending a friend's
                  wedding, taking an exam, or looking forward to a favorite
                  artist's concert.
                </p>
              </section>

              <section>
                <img src={JourneyImg} alt="user journey" width="100%" />

                <p className="project-sub-heading">
                  ☝ What happens if the message is unsuccessful?
                </p>
                <ul>
                  <li>Passengers feel lost and upset</li>
                  <li>
                    Airline risks losing customer loyalty due to perceived poor
                    management in unpredictable circumstances
                  </li>
                  <li>
                    Negative feedback from affected passengers could harm the
                    airline's reputation
                  </li>
                  <li>
                    The customer service team may become overwhelmed as everyone
                    turns to them for assistance
                  </li>
                </ul>
              </section>

              <section>
                <h6 className="project-details-content">
                  Information architecture
                </h6>
                <p className="body-4">
                  <b>Heading:</b> what happens + which flight is affected
                  <br />
                  <b>Body:</b> why it happens + what action(s) we take
                  <br />
                  <b>CTA:</b> what they can do
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
              <div className="challenge-topic">
                  <img
                    src={ThoughtProcesses}
                    alt="thought processes section"
                    className="challenge-topic"
                  />
                </div>

                <p className="body-4">
                  Given the lack of specific post-cancellation instructions, I
                  conducted research on common practices after flights are
                  canceled due to poor weather. Options typically include
                </p>

                <ol>
                  <li>ticket refunds</li>
                  <li>replacement flights with seating preferences</li>
                  <li>compensation</li>
                  <li>food</li>
                  <li>accommodation</li>
                  <li>discount vouchers for future travel</li>
                </ol>

                <img
                  src={AirlineOffersImg}
                  alt="benefits when flight cancelled"
                  width="100%"
                />

                <p>
                  Then, I drafted three prompts in both English and Thai, each
                  tailored to a different scenario. I intentionally avoided
                  using alarming language such as 'bad news' or 'we regret to…'
                  as it tends to unnecessarily emphasize the unfortunate
                  situation to the users. Similarly, I avoided an overly
                  exciting tone like 'good news! we’ve automatically rebooked
                  your flight' since the optimal solution varies for each
                  passenger. It's essential not to assume that every resolution
                  will bring happiness. The primary focus is on clearly
                  communicating that our decisions prioritize their safety
                </p>
                <br />
                <p>
                  While in UX writing it is a usual practice to avoid
                  apologizing for external factors beyond our control, howver, I
                  believe it is okay and maybe more appropriate to express that
                  'we're sorry' in this situation. This aims to demonstrate our
                  understanding and alleviate passengers' down emotions.
                </p>
                <br />
                <ol>
                  <li>
                    The airline reschedules the flight and arranges
                    accommodation, suitable for late-night flights where
                    passengers can fly the next day.
                    <div>
                      <img
                        className="inline-img"
                        src={Draft1Img}
                        alt="benefits when flight cancelled"
                        width="90%"
                      />
                    </div>
                  </li>

                  <li>
                    Passengers have the option to rebook or get a refund,
                    particularly if the flight is significantly delayed giving
                    them the choice not to fly and receive a refund.
                    <div>
                      <img
                        className="inline-img"
                        src={Draft2Img}
                        alt="benefits when flight cancelled"
                        width="90%"
                      />
                    </div>
                    <div className="dummy-img">{"<insert draft image>"}</div>
                  </li>
                  <li>
                    If the airline can't offer immediate solutions, passengers
                    are encouraged to contact support, though this isn't the
                    primary option in the CTA to avoid overwhelming customer
                    support.
                    <div>
                      <img
                        className="inline-img"
                        src={Draft3Img}
                        alt="benefits when flight cancelled"
                        width="90%"
                      />
                    </div>
                    <div className="dummy-img">{"<insert draft image>"}</div>
                  </li>
                </ol>
              </section>

              <section>
              <div className="challenge-topic">
                  <img
                    src={FinalContent}
                    alt="final content section"
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

export default ChallengeDay1;
