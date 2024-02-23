import React from "react";
import ChallengeCard from "../../../components/card/challenge/ChallengeCard";
import BackBtn from "../../../components/button/BackBtn";
import { PageRoute } from "../../../App";
import ResultImg from "../../../assets/challenges/uxw-day-14.jpg";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";
import ChallengesDropdown from "../../../components/dropdown/ChallegesDropdown";

function ChallengeDay15() {
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
              <h3 className="challenge-detail-h3">UXW Challenge Day 15</h3>
            </div>
          </div>
          <section>
            <p>Challenge day 15 is coming, stay tune!</p>
          </section>
          <img
            src="https://placekitten.com/240/240"
            className="hero-profile-img"
            alt="profile"
          />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ChallengeDay15;
