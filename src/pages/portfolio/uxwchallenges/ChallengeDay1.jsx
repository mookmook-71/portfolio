import React from "react";
import ChallengeCard from "../../../components/card/challenge/ChallengeCard";
import BackBtn from "../../../components/button/BackBtn";
import { PageRoute } from "../../../App";

function ChallengeDay1() {
  return (
    <>
      <div className="portfolio-header-bg" />
      <div className="portfolio portfolio-detail">
        <div className="card">
          <div className="project-topbar">
           <BackBtn redirectPath={PageRoute.Portfolio} />
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

            <div className="challenge-details">
              <section>
                <h6 className="project-details-content">Project overview</h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                  quidem consectetur, quasi id doloribus voluptates explicabo
                  perspiciatis ad tempore distinctio alias saepe, doloremque
                  dolor, vero neque laboriosam sequi. Et, autem.
                </p>

                <ol>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla reprehenderit laborum accusamus quasi corporis itaque
                    iste, nihil obcaecati nisi fugit error recusandae quisquam
                    beatae! Eius aut molestiae totam odit quisquam!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla reprehenderit laborum accusamus quasi corporis itaque
                    iste, nihil obcaecati nisi fugit error recusandae quisquam
                    beatae! Eius aut molestiae totam odit quisquam!
                  </li>
                </ol>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChallengeDay1;
