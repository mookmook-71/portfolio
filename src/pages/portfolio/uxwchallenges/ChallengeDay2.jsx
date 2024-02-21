import React from "react";
import ChallengeCard from "../../../components/card/challenge/ChallengeCard";
import BackBtn from "../../../components/button/BackBtn";
import { PageRoute } from "../../../App";
import UserImg from "../../../assets/challenges/uxw-challenge-day-2.png";
import ResultImg from "../../../assets/challenges/uxw-day-2.jpg";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";
import ChallengesDropdown from "../../../components/dropdown/ChallegesDropdown";

function ChallengeDay2() {
  return (
    <>
      <div className="portfolio-header-bg" />
      <div className="portfolio portfolio-detail">
        <div className="card">
          <div className="project-topbar">
            <BackBtn redirectPath={PageRoute.Portfolio} />
            <ChallengesDropdown activeIndex={1} className="ml-auto" />
          </div>
          <div className="project-content">
            <div className="challenge-detail-title">
              <h3 className="challenge-detail-h3">UXW Challenge Day 2</h3>
              <ChallengeCard>
                <section>
                  <h6>Scenario</h6>
                  <p className="body-4">
                    A user is a working parent, and a big sports fan, in the
                    midst of their favorite sports season who can no longer
                    attend games.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                    Write a promotional screen for an app that lets a user
                    choose teams, sends game reminders, real-time score updates
                    and highlight videos.
                  </p>
                </section>

                <section className="challenge-constraint">
                  <p className="body-4">
                    Headline: 40 characters max
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
                <h6 className="project-details-content">Voice and tone</h6>
                <p className="body-4">
                  I created an app called Stadium Stream with a sporty,
                  up-to-date and reliable brand voice. This app is the top
                  choice for sports fans who want the latest updates on their
                  favorite teams. In this promotional screen, the tone is
                  crafted to be exciting, clear and persuasive aiming to get
                  people interested and leave a positive impression.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Goals</h6>
                <p className="body-4">
                  <ul>
                    <li>
                      Persuade busy sports lovers to download the app to stay
                      tuned to their interests while managing other
                      responsibilities
                    </li>
                    <li>
                      Intrigue sports fans' curiosity to learn more about the
                      product
                    </li>
                  </ul>
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Target users</h6>
                <p className="body-4">
                  Working parents who want to balance childcare duties and a
                  passion for sports updates during the current sports season
                </p>
              </section>

              <section>
                <h6 className="project-details-content">User journey</h6>
                <p className="body-4">
                  User takes care of their child &gt; takes a break &gt; scrolls
                  through social media feed &gt; 📍
                  <b>sees a promotional screen</b> &gt; downloads the app
                  &gt;signs up for an account &gt; sets their favorite team &gt;
                  uses the app to receive updates
                </p>
                <br />
                <p className="project-sub-heading">
                  ☝ What happens if the message is unsuccessful?
                </p>
                <ul>
                  <li>Users are not interested and scroll away</li>
                  <li>
                    Brand invests in promotional efforts but misses
                    opportunities to gain potential customers, build brand
                    awareness and foster loyalty among the target audience
                  </li>
                </ul>
              </section>
              <section>
                <h6 className="project-details-content">
                  User’s emotional state
                </h6>
                <p className="body-4">
                  <ul>
                    <li>
                      <b>Tired</b> — from taking care of their children
                    </li>
                    <li>
                      <b>Interested</b> — about consequences and uncertaintiesin
                      what the app can offer
                    </li>
                    <li>
                      <b>Hopeful</b> — to stay connected to their favorite teams
                      during busy schedules
                    </li>
                    <li>
                      <b>Reluctant</b> — to try a new app despite interest steps
                    </li>
                  </ul>
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Thought processes</h6>
                <p className="body-4">
                  Explain what and how - Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
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

export default ChallengeDay2;
