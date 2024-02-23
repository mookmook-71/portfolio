import React from "react";
import ChallengeCard from "../../../components/card/challenge/ChallengeCard";
import BackBtn from "../../../components/button/BackBtn";
import { PageRoute } from "../../../App";

import UserImg from "../../../assets/challenges/uxw-challenge-day-11.png";
import ResultImg from "../../../assets/challenges/uxw-day-11.jpg";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";
import ChallengesDropdown from "../../../components/dropdown/ChallegesDropdown";

function ChallengeDay11() {
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
              <h3 className="challenge-detail-h3">UXW Challenge Day 11</h3>
              <ChallengeCard>
                <section>
                  <h6>Scenario</h6>
                  <p className="body-4">
                    An elderly user is doing a Google search to find an easy way
                    to buy contact lenses online.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                    Write a title and meta description for a website that sells
                    subscription contact lenses delivered to a user every 30
                    days—convince them to try it.
                  </p>
                </section>

                <section className="challenge-constraint">
                  <p className="body-4">
                    Title: 60 characters max
                    <br />
                    Meta description: 145 characters max
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
                  Optique, the brand I just created haha, is like a friendly
                  neighborhood pharmacy—reliable, easy to access, and simple.
                  I'll use a clear and reassuring tone to encourage customers to
                  try our new product.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Goals</h6>
                <p className="body-4">
                  <ul>
                    <li>
                      Persuade users to consider subscribing to contact lenses
                      services
                    </li>
                    <li>Stand out among other results on the search page</li>
                    <li>Build brand awareness</li>
                    <li>Boost conversion rates</li>
                  </ul>
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Target users</h6>
                <p className="body-4">
                  Elderly with a moderate level of familiarity with internet
                  search and online shopping
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
                  <li>Users scroll away</li>
                  <li>Users choose another brand</li>
                  <li>
                    Brand misses potential customers and valuable user data
                  </li>
                  <li>Brand's SEO ranking declines</li>
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
                <p className="body-4">??</p>
                <br />
                <p>
                  When users perform a Google search, they encounter two
                  important elements: the title tag and the meta description.
                  The title tag is a clickable heading limited to 60 characters
                  which should be concise and unique to effectively represent
                  the page's main idea or selling point. Directly beneath it,
                  the meta description provides a brief supplementary context.
                  It's essential to incorporate relevant keywords naturally,
                  avoid excessive use, and present a clear call-to-action.
                </p>
                <br />
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

export default ChallengeDay11;
