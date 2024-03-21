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

import UserImg from "../../../assets/challenges/uxw-challenge-day-12.png";
import JourneyImg from "../../../assets/challenges/uxw-challenge-day-12-journey.png";
import ResultImg from "../../../assets/challenges/uxw-day-12.jpg";

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
                    A user is creating an account. When they come to the step
                    where they are asked to enter their name, they get an error
                    message. A fraud detection software thinks their name is
                    fake—but it’s wrong 5% of the time.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                    Write an error message that prompts them to fix the error
                    without shaming them for having a fake-sounding name.
                  </p>
                </section>

                <section className="challenge-constraint">
                  <p className="body-4">45 characters max</p>
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
                  I'm crafting a brand voice inspired by personalities I like —
                  authentic and chill. The tone will be respectful and casual.
                  Picture a friendly florist with extensive knowledge of flowers
                  suggesting options for a special occasion without pressuring
                  you to choose a specific one. That's the vibe.
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
                      Let user know their name doesn’t work without shaming or
                      offending them
                    </li>
                    <li>Help users finish their account setup</li>
                    <li>Avoid users abandoning the process</li>
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
                  Potentially user with an uncommon or foreign name, or user who
                  intentionally enters a fake name during account creation
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
                  <li>Users feel upset and offended</li>
                  <li>Users give up on creating an account</li>
                  <li>Brand gains disrespectful impression</li>
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
                  THIS! I've faced a similar issue many times in my life. It is
                  not because of a fake name but due to the system mistaking a
                  part of my name for an inappropriate word. In Thai,
                  "porn" means blessings but in English, it's an abbreviation of
                  pornography. Luckily, there are a few alternative ways of
                  spelling my name though they won't match the one on my ID. If
                  the platform insists on using the legal name, it becomes impossible
                  for me to register. Then, I don't even bother to continue with
                  that platform. I usually avoid contacting customer support or
                  doing additional verification steps because I find it
                  disrespectful that they pass judgment on the name that my
                  parents gave me. Therefore, in this scenario, I just gently ask the user to
                  try a different spelling of their name as a workaround.
                  Instead of pointing out that it's a fake name, I frame it as
                  the system having difficulty recognizing their name.
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

export default ChallengeDay12;
