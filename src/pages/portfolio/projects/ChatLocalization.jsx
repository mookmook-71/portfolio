import { Link } from "react-router-dom";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";

import SideImg from "../../../assets/chat-overhaul.png";
import OutcomeImg from "../../../assets/portfolio/chat-localization-outcome.png";
import TableImg1 from "../../../assets/portfolio/chat-localization-table1.png";
import TableImg2 from "../../../assets/portfolio/chat-localization-table2.png";
import TableImg3 from "../../../assets/portfolio/chat-localization-table3.png";

function ChatLocalization() {
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
              <option value="grab">Chat localization</option>
              <option value="grab">Partner cover</option>
              <option value="grab">Localization style guide</option>
              <option value="grab">
                UX writing challenge day 1: flight cancellation alert
              </option>
              <option value="grab">
                UX writing challenge day 2: sports app promotion
              </option>
              <option value="grab">
                UX writing challenge day 3: sign-in error
              </option>
              <option value="grab">
                UX writing challenge day 4: Grocery subscription
              </option>
              <option value="grab">
                UX writing challenge day 5: Post-shutdown message
              </option>
              <option value="grab">
                UX writing challenge day 6: Commute incident alert
              </option>
              <option value="grab">
                UX writing challenge day 7: Real-time sports notification
              </option>
              <option value="grab">
                UX writing challenge day 8: Concert alert on music app
              </option>
              <option value="grab">
                UX writing challenge day 9: Expired credit card error
              </option>
              <option value="grab">
                UX writing challenge day 10: User location permission
              </option>
              <option value="grab">
                UX writing challenge day 11: Google meta description
              </option>
              <option value="grab">
                UX writing challenge day 12: Fake name error
              </option>
              <option value="grab">
                UX writing challenge day 13: Truck delivery notification
              </option>
              <option value="grab">
                UX writing challenge day 14: App downtime
              </option>
            </select>
          </div>

          <div className="project-content">
            <div className="project-title">
              <h3>Chat Localization Overhaul</h3>
              <img
                src={SideImg}
                alt="grab ads"
                className="project-content-img"
              />
            </div>

            <div className="project-details">
              <section>
                <h6 className="project-details-content">Project overview</h6>
                <p>
                  Revamp Thai localization of chatbot scripts for Grab customer
                  and driver apps
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Team</h6>
                <p>Content Design, Localization, Customer Experience (CE)</p>
              </section>

              <section>
                <h6 className="project-details-content">Background</h6>
                <p>
                  The initial strategy for GrabChat explicitly informed users
                  that they were interacting with a bot to manage their
                  expectations and prevent frustration in case their concerns
                  couldn't be fully addressed. We were cautious about using
                  overly human-like language as it could lead to
                  misunderstanding and potentially erode user's trust and
                  loyalty. Additionally, our aim was to apply a consistent
                  content style across all products including chatbot.
                </p>
                <br />
                <p>
                  However, I later discovered that writing for microcopy differs
                  from writing for chatbots. It was actually "Conversation
                  Design". Conversations with the CE team revealed a preference
                  for making GrabChat sound as humanly as possible. Users
                  appeared more comfortable when unaware they are conversing
                  with a bot. CE frontliners also have their own distinct
                  language style when communicating directly with customers which is
                  different from our in-app style. Then, I discussed unique
                  challenges of Thai language with the conversation designer.
                </p>
              </section>

              <section>
                <table>
                  <thead>
                    <th></th>
                    <th>Challenge</th>
                    <th>Solution</th>
                    <th>Example</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        Gender neutral doesn’t work if you want to sound natural
                        in Thai as in real life we would have to end the
                        sentences with gender particles like kha (ค่ะ) and krab
                        (ครับ).
                      </td>
                      <td>
                        Align with the CE team whether we’ll use a feminine or
                        masculine tone and stick to it. Inform the content
                        designers so they’re aware of the gender aspect. If
                        we’ll ever create a persona in the future, they know
                        Thai should be female.
                      </td>
                      <td>
                        <img
                          src={TableImg1}
                          alt="project grab outcome 1"
                          className="project-outcome-img"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        Due to different cultural nuances, some messages are
                        going to be different from English source.
                      </td>
                      <td>
                        Inform the content designers that machine translation
                        should be avoided at all cost and back-translation won’t
                        return the same message they write in English. If they
                        have to review the localization, do ask the professional
                        linguist.
                      </td>
                      <td>
                        <img
                          src={TableImg2}
                          alt="project grab outcome 1"
                          className="project-outcome-img"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        The same content on UI may be different from chatbot
                        scripts.
                      </td>
                      <td>
                        Separate term base and have a different style guide
                        specifically for chat.
                      </td>
                      <td>
                        <img
                          src={TableImg3}
                          alt="project grab outcome 1"
                          className="project-outcome-img"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section>
                <h6 className="project-details-content">Outcome</h6>
                <p>
                  After I refined the chat scripts according to our new strategy
                  and received an approval from the CE team, we were ready to
                  go.
                </p>
                <br />
                <p>
                  The final content was more conversational and natural. Bonus
                  point, we managed to make it more concise. Usually, we would
                  be worried about Thai being too long as it is generally longer
                  than English.
                </p>
              </section>
              <img
                src={OutcomeImg}
                alt="chat localization outcome image"
                className="project-outcome-img"
              />
            </div>
          </div>

          <BackToTop />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ChatLocalization;
