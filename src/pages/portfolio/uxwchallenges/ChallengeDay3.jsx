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

import UserImg from "../../../assets/challenges/uxw-challenge-day-3.png";
import JourneyImg from "../../../assets/challenges/uxw-challenge-day-3-journey.png";
import ResultImg from "../../../assets/challenges/uxw-day-3.jpg";

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
                    The user entered the wrong email address to sign in to their
                    account.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                    Tell the user to enter the right email.
                  </p>
                </section>

                <section className="challenge-constraint">
                  <p className="body-4">40 characters max</p>
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
                  While we don’t know anything about the product here, I’m
                  imagining a casual and helpful brand voice like a friend who’s
                  always ready to lend a hand and simplify things for others.
                  Instead of giving technical jargon like 'Error 400 malformed
                  data!,' the explanation is broken down into simpler terms. In
                  this case, the tone is conversational and straightforward as
                  users only need to address a minor error.
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
                      Provide a solution to the problem to guide users on what
                      went wrong and prompt them to fix their email input for a
                      successful sign-in to their account
                    </li>
                    <li>Prevent bounce rate on the sign-in flow</li>
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
                  Users with previously registered accounts, potentially having
                  multiple emails and might have forgotten the email address
                  they used for this particular site
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
                  <li>Users don’t understand why they can’t sign in</li>
                  <li>Users complain and leave the app</li>
                  <li>
                    Brand loses users just because of an error message when they
                    can simply fix the email
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
                  I brainstormed potential reasons for incorrect email input and
                  found that they could be any in the following
                </p>

                <ol>
                  <li>misspelling or typographical error</li>
                  <li>forgetting the email used</li>
                  <li>accidentally using a secondary email</li>
                  <li>error from auto-fill</li>
                  <li>
                    confusion with similar-looking characters (e.g., 'l' and
                    '1', 'o' and '0')
                  </li>
                  <li>copy-pasting mistake</li>
                  <li>change of email since the last login</li>
                </ol>
                <br />

                <p>
                  After that, I had a conversation with my friend to identify
                  the primary reasons and he leaned towards numbers 1 and 2. So,
                  these are the ones we're focusing on for content design. To
                  keep it humble and consider other possibilities, I threw in a
                  “maybe” before “typo or another email.” Ideally, I'd spell it
                  out as 'there’s a typo or you’ve used another email to
                  register' but space is a bit limited.
                </p>
                <br />

                <p>
                  I choose to start with a feeler word like “Mmm...” to infuse a
                  conversational tone simulating the moment when you ask a
                  friend a question and there's a pause as they consider their
                  response (like this emoji 🤔). It adds a touch of casual and
                  approachable vibes to the interaction.
                </p>
                <br />

                <p>
                  This is a one-liner error message highlighted in red so it
                  stands out from the other parts of the sign-in form,
                  positioned right under the placeholder so that the users are
                  clear on which information requires fixing. I intentionally
                  omit the password placeholder in the design to handle this
                  email-specific errors because there’ll be a separate strategy
                  for scenarios that requires both ID and password on a single
                  screen like "invalid username and password combination.
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

export default ChallengeDay3;
