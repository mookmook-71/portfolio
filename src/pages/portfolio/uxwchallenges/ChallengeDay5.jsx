import React from "react";
import ChallengeCard from "../../../components/card/challenge/ChallengeCard";
import BackBtn from "../../../components/button/BackBtn";
import { PageRoute } from "../../../App";

import UserImg from "../../../assets/challenges/uxw-challenge-day-5.png";
import ResultImg from "../../../assets/challenges/uxw-day-5-en.jpg";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";
import ChallengesDropdown from "../../../components/dropdown/ChallegesDropdown";

function ChallengeDay5() {
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
              <h3 className="challenge-detail-h3">UXW Challenge Day 5</h3>
              <ChallengeCard>
                <section>
                  <h6>Scenario</h6>
                  <p className="body-4">
                    The user works in graphic design. While critiquing a design
                    in a mobile app, their phone abruptly turns off. When they
                    restart the phone, they reopen the app.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                    Write a message that the user will read immediately upon
                    opening the app. What do they need to know? What steps (if
                    any) do they need to take to recover their content? What if
                    they can't recover the content?
                  </p>
                </section>

                <section className="challenge-constraint">
                  <p className="body-4">
                    Headline: 40 characters max
                    <br />
                    Body: 140 characters max
                    <br />
                    Button(s): 20 characters max
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
                <h6 className="project-details-content">Voice and tone</h6>
                <p className="body-4">
                  A friendly and straightforward graphic design app that's
                  easily accessible from anywhere without the need for desktop
                  access. In the happy path where data has been saved
                  successfully, the tone is calm and reassuring. However, if
                  users lose some or all their changes due to an unexpected
                  phone shutdown, the message is designed to be honest and
                  clear. It's not overly apologetic since the app closure is
                  also beyond our control as it occurs when the user's phone
                  unexpectedly turns off. Nevertheless, we express regret for
                  any inconvenience caused by the loss of time and effort spent
                  in the app.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Goals</h6>
                <p className="body-4">
                  <ul>
                    <li>Manage user's expectation after re-opening the app</li>
                    <li>Mitigate user's worry or frustration with words</li>
                  </ul>
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Target users</h6>
                <p className="body-4">
                  A graphic designer who’s critiquing a design on a mobile app
                  before finalizing it
                </p>
              </section>

              <section>
                <h6 className="project-details-content">User journey</h6>
                <p className="body-4">
                  ?? &gt; ?? &gt; ?? &gt; 📍 <b>??</b> &gt; ?? &gt; ?? &gt; ??
                  &gt; ?? &gt; ?? &gt; ?? &gt; ?? &gt; ?? &gt;
                </p>
                <br />
                <p className="project-sub-heading">
                  ☝ What happens if the message is unsuccessful?
                </p>
                <ul>
                  <li>
                    Users need to track down how much progress has been lost by
                    themselves
                  </li>
                  <li>Users feel lost and upset</li>
                  <li>Users feel like they wasted time on the app</li>
                  <li>Users miss their deadline</li>
                </ul>
              </section>
              <section>
                <h6 className="project-details-content">
                  User’s emotional state
                </h6>
                <p className="body-4">
                  <ul>
                    <li>
                      <b>??</b> — ??
                    </li>
                    <li>
                      <b>??</b> — ??
                    </li>
                    <li>
                      <b>??</b> — ??
                    </li>
                    <li>
                      <b>??</b> — ??
                    </li>
                    <li>
                      <b>??</b> — ??
                    </li>
                    <li>
                      <b>??</b> — ??
                    </li>
                  </ul>
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Thought processes</h6>
                <p className="body-4">
                  As I read through the scenario, I immediately wondered if
                  there's an autosave feature… Well, it’s a concern based on my
                  past experiences. Without specific details, I think it's
                  useful to imagine potential scenarios and create content for
                  each as a practice. In reality, engineering team should be
                  able to give us the answer about the presence or absence of
                  autosave. Now, let's consider the possible cases:
                </p>
                <ol>
                  <li>Autosave saves the day (most ideal)</li>
                  <li>
                    Partial data preservation (seen in softwares like Microsoft
                    Word, I think this is not a bad idea at all as it allows
                    users to choose resume version)
                  </li>
                  <li>
                    Total data loss (least ideal but a possible situation)
                  </li>
                </ol>

                <p>
                  At this point, I have three scenarios but two information
                  architectures. I decided to group scenarios 2 and 3 together
                  since the main idea is the same — users losing their data.
                  While the content may vary slightly, the fundamental approach
                  to conveying information remains consistent.
                </p>
                <br />
                <p>
                  The structure difference between the data saved and not saved
                  version is due to the distinct emphasis on the happy and
                  unhappy paths. In the secured data scenario or copy version 1,
                  the content aims to be a hero, coming to the user's rescue.
                  Therefore, the heading is more straightforward, prioritizing
                  reassurance over an elaborate explanation. Conversely, in the
                  event of unexpected issues, I prefer a less direct approach by
                  using “Looking like app closed unexpectedly…” because we also
                  didn’t know that the phone would turn off forcing the app to
                  close too.{" "}
                </p>
                <br />

                <p>
                  When do we begin a conversation by being indirect? Imagine a
                  student submitting a late assignment to their teacher. Instead
                  of immediately acknowledging the lateness, the student might
                  approach the teacher, expressing that they faced unexpected
                  challenges or technical difficulties while working on the
                  assignment. This initial explanation, without directly stating
                  the lateness, allows for a more nuanced and less
                  confrontational conversation. It's a strategy to soften the
                  impact of the situation before delving into a detailed
                  explanation.
                </p>
                <br />

                <p>
                  In copy version 2, I include the last change time to help
                  users estimate the extent of changes that might be lost when
                  viewing the saved file. While the app may not display all
                  saved versions like desktop software does, this addition
                  should provide users with valuable information. As for copy
                  version 3, I honestly inform the users that 'We’re unable to
                  recover your recent changes.' and what they can do it
                  reopening the file.
                </p>
                <br />

                <p>
                  (I enjoyed searching for matching illustrations for the
                  content. Hope you like them too!)
                </p>
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

export default ChallengeDay5;
