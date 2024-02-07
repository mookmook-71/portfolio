import React from "react";
import ChallengeCard from "../../../components/card/challenge/ChallengeCard";
import BackBtn from "../../../components/button/BackBtn";
import { PageRoute } from "../../../App";
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
            <ChallengesDropdown className="ml-auto" />
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
                <h6 className="project-details-content">Goal</h6>
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
                  through social media feed &gt; 📍{" "}
                  <b>sees a promotional screen</b> &gt; downloads the app &gt;
                  signs up for an account &gt; sets their favorite team &gt;
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
                      <b>Interested</b> — in what the app can offer
                    </li>
                    <li>
                      <b>Hopeful</b> — to stay connected to their favorite teams
                      during busy schedules
                    </li>
                    <li>
                      <b>Confused</b> — uncertainty about reasons and next steps
                    </li>
                    <li>
                      <b>Reluctant</b> — to try a new app despite interest
                    </li>
                  </ul>
                </p>
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
                <h6 className="project-details-content">Thought process</h6>
                <p className="body-4">
                  Given the lack of specific post-cancellation instructions, I
                  conducted research on common practices after flights are
                  canceled due to poor weather. Options typically include
                </p>
                <br />
                <ol>
                  <li>ticket refunds</li>
                  <li>replacement flights with seating preferences</li>
                  <li>compensation</li>
                  <li>food</li>
                  <li>accommodation</li>
                  <li>discount vouchers for future travel</li>
                </ol>
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
                    <div className="dummy-img">{"<insert draft image>"}</div>
                  </li>
                  <li>
                    Passengers have the option to rebook or get a refund,
                    particularly if the flight is significantly delayed giving
                    them the choice not to fly and receive a refund.
                    <div className="dummy-img">{"<insert draft image>"}</div>
                  </li>
                  <li>
                    If the airline can't offer immediate solutions, passengers
                    are encouraged to contact support, though this isn't the
                    primary option in the CTA to avoid overwhelming customer
                    support.
                    <div className="dummy-img">{"<insert draft image>"}</div>
                  </li>
                </ol>
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
