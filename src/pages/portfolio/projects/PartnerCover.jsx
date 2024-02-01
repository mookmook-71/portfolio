import React from "react";
import CoverImg from "../../../assets/portfolio/partner-cover.png";
import { Link } from "react-router-dom";

function PartnerCover() {
  return (
    <>
      <div className="portfolio-header-bg" />
      <div className="portfolio portfolio-detail">
        <div className="card">
          <div className="project-topbar">
            <button className="btn btn-icon back-btn">
              <Link to="/portfolio">{"<"} Back</Link>
            </button>
            <select name="projects" id="projects" className="ml-auto">
              <option value="grab">GrabPay Wallet Powered by KBank</option>
              <option value="grab">GrabPay Wallet Powered by KBank</option>
              <option value="grab">GrabPay Wallet Powered by KBank</option>
              <option value="grab">GrabPay Wallet Powered by KBank</option>
              <option value="grab">GrabPay Wallet Powered by KBank</option>
            </select>
          </div>

          <div className="project-content">
            <div className="project-title">
              <h3>Partner Cover</h3>
              <img
                src={CoverImg}
                alt="grab ads"
                className="project-content-img"
              />
            </div>

            <div className="project-details">
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

export default PartnerCover;
