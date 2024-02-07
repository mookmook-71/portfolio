import React from "react";
import ChallengeCard from "../../../components/card/challenge/ChallengeCard";
import BackBtn from "../../../components/button/BackBtn";
import { PageRoute } from "../../../App";
import ResultImg from "../../../assets/challenges/uxw-day-10-en.jpg";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";
import ChallengesDropdown from "../../../components/dropdown/ChallegesDropdown";

function ChallengeDay10() {
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
              <h3 className="challenge-detail-h3">UXW Challenge Day 10</h3>
              <ChallengeCard>
                <section>
                  <h6>Scenario</h6>
                  <p className="body-4">
                  The user is trying to view a website to help them buy a car. But, the content can’t load without the user’s location. They need to enter their ZIP code and first name.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                  Ask them where they live and who they are without sounding like you're unnecessarily mining their data.
                  </p>
                </section>

                <section className="challenge-constraint">
                  <p className="body-4">
                    Headline: 25 characters max
                    <br />
                    Body: 45 characters max
                    <br />
                    Button(s): 15 characters max
                  </p>
                </section>
              </ChallengeCard>
            </div>

            <div className="challenge-details">
              <section>
                <h6 className="project-details-content">Voice and tone</h6>
                <p className="body-4">
                For this challenge, I create an imaginary car selling website called BUYCARMAI (บายคาร์มั้ย บายคาร์ใหม่ – a playful Thai pun, haha). I want those who visit the website to feel like they have a personal assistant when deciding to buy a new car. The voice I'm aiming for is knowledgeable and intimate. Imagine having an assistant who's well-versed in a wide variety of car models and has connections with numerous showrooms. He knows the best ways to assist you but first, he just needs to get to know you a bit better. The tone could be warm and clear to make the users feel comfortable.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Goal</h6>
                <p className="body-4">
                  <ul>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                  </ul>
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Target users</h6>
                <p className="body-4">
                  ??
                </p>
              </section>

              <section>
                <h6 className="project-details-content">User journey</h6>
                <p className="body-4">
                ?? &gt; 
                  ?? &gt; 
                  ?? &gt; 
                  📍 <b>??</b> &gt; 
                  ?? &gt;
                  ?? &gt; 
                  ?? &gt; 
                  ?? &gt; 
                  ?? &gt; 
                  ?? &gt; 
                  ?? &gt; 
                  ?? &gt;
                </p>
                <br />
                <p className="project-sub-heading">
                  ☝ What happens if the message is unsuccessful?
                </p>
                <ul>
                  <li>??</li>
                  <li>??</li>
                  <li>??</li>
                  <li>??</li>
                  <li>??</li>
                  <li>??</li>
                </ul>
              </section>
              <section>
                <h6 className="project-details-content">
                  User’s emotional state
                </h6>
                <p className="body-4">
                  <ul>
                    <li><b>??</b> — ??</li>
                    <li><b>??</b> — ??</li>
                    <li><b>??</b> — ??</li>
                    <li><b>??</b> — ??</li>
                    <li><b>??</b> — ??</li>
                    <li><b>??</b> — ??</li>
                  </ul>
                </p>
              </section>

              <section>
                <h6 className="project-details-content">
                  Information architecture
                </h6>
                <p className="body-4">
                  <b>Heading:</b> ??
                  <br />
                  <b>Body:</b> ??
                  <br />
                  <b>CTA:</b> ??
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
                  ??</p>
                <br />
                <p>
                  ??</p>
                  <p>
                  ??</p>
                  <p>
                  ??</p>
                  <p>
                  ??</p>
                <br />
                <p>
                  ??
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

export default ChallengeDay10;