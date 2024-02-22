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

import UserImg from "../../../assets/challenges/uxw-challenge-day-7.png";
import JourneyImg from "../../../assets/challenges/uxw-challenge-day-7-journey.png";
import ResultImg from "../../../assets/challenges/uxw-day-7.jpg";

function ChallengeDay7() {
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
              <h3 className="challenge-detail-h3">UXW Challenge Day 7</h3>
              <ChallengeCard>
                <section>
                  <h6>Scenario</h6>
                  <p className="body-4">
                    A sports fan is at a wedding while their favorite team is
                    playing against their arch-rivals. Their team scores.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                    How would you, quickly, let the sports fan know about the
                    latest play, the current score, and the key players? Write
                    it.
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
                    alt="voice and tone section"
                    className="challenge-topic"
                  />
                </div>
                <p className="body-4">
                  The voice is sporty, up-to-date, and reliable with an
                  enthusiastic tone keeping it short for speedy updates.
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
                      Swiftly inform users about the latest updates on their
                      favorite sports team with relevant information
                    </li>
                    <li>Share enjoyable moment with the user</li>
                    <li>List</li>
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
                  Sports fan who wants to catch their favorite team's live
                  action but is occupied with another commitment at a wedding
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
                  <li>User misses updates on their favorite team</li>
                  <li>
                    User becomes distracted during the wedding thinking only
                    about the game
                  </li>
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
                  I think this is a continuation of challenge day 2. Imagine
                  someone downloads the app after seeing a promotional screen
                  and sets their favorite team. On an important game day, they
                  can't watch it live.
                </p>
                <br />

                <p>
                  We know their favorite team is scoring so we want to send a
                  quick congratulatory or cheering message via a push
                  notification. After checking sports websites, I found that
                  there are many possible updates within one game like
                  goalkeeper saves, corner kicks, player receives a yellow card,
                  etc. so I want to keep the message as brief as possible
                  considering there might be many other notifications.
                </p>
                <br />

                <p>
                  Now the challenge is, I don't know the specific sport in this
                  scenario. I've created a mockup using football to illustrate
                  the process, but it's important to note that in reality, it
                  could be any other sport like baseball, basketball, etc. The
                  specific sport may vary based on project requirements and
                  details provided by a project manager.
                </p>
                <br />

                <p>
                  The content begins with the impactful action, 'It's a GOAL!
                  We're on 2 - 1.' Below, I include the key player's name and
                  the time of the goal. To check if the content actually works,
                  I conducted a brief survey asking both sports enthusiasts and
                  non-enthusiasts about their understanding of the content
                  particularly focusing on [2] - 1 and '55.’
                </p>
                <br />

                <p>
                  Surprisingly, the responses varied. While everyone recognized
                  '55' as the minute of scoring, interpretations of [2] were
                  different. Some believed it indicated the leading team, others
                  thought it highlighted their favorite team. One person
                  perceived it as the team's ranking. Since people got it
                  differently, I decided to remove the brackets. The final copy
                  simply displays the live scores and teams, ensuring users get
                  the recent event without unnecessary details.”
                </p>
                <br />
                <p>
                  Regarding the team's name, I've opted to use abbreviations due
                  to limited space, assuming that sports fans are likely
                  familiar with them
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

export default ChallengeDay7;
