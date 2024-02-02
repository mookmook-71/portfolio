import React from "react";
import CoverImg from "../../../assets/thai-content-style-guild.png";
import { Link } from "react-router-dom";

function StyleGuide() {
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
              <h3>Localization Style Guide</h3>
              <img
                src={CoverImg}
                alt="grab ads"
                className="project-content-img"
              />
            </div>

            <div className="project-details">
              <section>
                <h6 className="project-details-content">Background</h6>
                <p>
                Years prior to this project (and before I joined Grab), there was neither an established localization style guide nor Thai writing rules. A lack of standard language guidelines for our external language service provider and internal reviewers resulted in inconsistency in brand voice and terminology used across different products. While there was an existing content style guide for English, it didn't apply to other languages.
                </p>

                <section>
                <h6 className="project-details-content">Solution</h6>
                <p>
                Create a style guide that specifically illustrates how to localize Grab’s microcopy from English source content into Thai emphasizing brand consistency, accuracy, and relevance.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">What I did</h6>
                <ul className="project-details-list">
                    <li>
                    Conducted a competitive analysis of content style guides.
                    </li>
                    <li>
                    Reviewed the existing brand content style guide for English.
                    </li>
                    <li>
                    Crafted a comprehensive style guide for the Thai language covering UX principles, Grab’s voice and tone, formatting standards, Thai-specific writing guidelines, localization considerations, and a quick glossary of frequently used terms (separated from the main glossary).
                    </li>
                    <li>Invited relevant colleagues for feedback.
                    </li>
                    <li>Published the style guide and shared it with the content design and localization team.
                    </li>
                    <li>Promoted it to a wider audience within the country team.</li>
                    <li>Maintained the style guide to ensure it stayed up-to-date.</li>
                    <li>Used it for onboarding new Thai linguists and external localization vendors.</li>
                  </ul>
              </section>

              <section>
                <h6 className="project-details-content">Team contribution</h6>
                <p>
                The style guide I that developed became a template for all other languages. I included sample topics for sections like grammars or language-specific standards even though they weren't applicable to Thai, to provide the localization team with ideas on how to fill the template
                </p><br></br>
                <p>These are screenshots of the Thai style guide I created for Grab.</p>
              </section>

              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StyleGuide;
