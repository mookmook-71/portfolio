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

import UserImg from "../../../assets/challenges/uxw-challenge-day-8.png";
import ResultImg from "../../../assets/challenges/uxw-day-9.jpg";

function ChallengeDay8() {
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
              <h3 className="challenge-detail-h3">UXW Challenge Day 8</h3>
              <ChallengeCard>
                <section>
                  <h6>Scenario</h6>
                  <p className="body-4">
                    The user is a casual music fan and (on occasion) goes to
                    live concerts. They have a music player app on their phone.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                    Tell the user that one of their favorite bands is playing
                    live in their town. How would you compel them to want to go?
                  </p>
                </section>

                <section className="challenge-constraint">
                  <p className="body-4">
                    Headline: 30 characters max
                    <br />
                    Body: 45 characters max
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
                    alt="thought processes section"
                    className="challenge-topic"
                  />
                </div>
                <p className="body-4">
                  Myoosik, a music app that I try to incorporate with my
                  nickname Mook, is vibrant and personalized. When notifying
                  users about an upcoming concert featuring their favorite band
                  or artist, the tone is designed to be exciting and engaging.
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
                      Evoke the user’s sense of anticipation and excitement
                      about the event
                    </li>
                    <li>Act as a music promoter</li>
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
                  Casual music fan who attends live concerts occasionally and
                  has general interest in music as shown by a music player app
                  on their phone
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
                  ?? &gt; ?? &gt; ?? &gt; 📍 <b>??</b> &gt; ?? &gt; ?? &gt; ??
                  &gt; ?? &gt; ?? &gt; ?? &gt; ?? &gt; ?? &gt;
                </p>
                <br />
                <p className="project-sub-heading">
                  ☝ What happens if the message is unsuccessful?
                </p>
                <ul>
                  <li>User discards the message</li>
                  <li>User misses the concert of their favourite band</li>
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
                  Because of the limited character space, the heading only
                  includes crucial details such as the artist or band's name and
                  the city. I also incorporate "Live" to emphasize that this
                  experience is distinct from recorded shows typically watched
                  or listened to online via the music app.
                </p>
                <br />

                <p>
                  Moving on to the next section, I include the date, a crucial
                  piece of information for fans to plan their schedules, invite
                  friends, and make necessary arrangements. The inspiration for
                  the magical vibe comes from the UI herself where her shows
                  usually feel enchanting and her voice is angelic. Actually I
                  personally think this part of the message should be
                  personalized to match the unique characteristics of the artist
                  instead of writing a generic one. For example, considering
                  that pop music might evoke a different vibe than rock music.
                </p>
                <br />

                <p>
                  For the CTA, I selected "See Tickets" over "Buy Ticket"
                  because it allows users to explore different pricing options
                  based on seating zones. Additionally, the term "See Tickets"
                  implies that users can gather more information before making a
                  purchase decision.
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

export default ChallengeDay8;
