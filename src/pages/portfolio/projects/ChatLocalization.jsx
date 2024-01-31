import { Link } from "react-router-dom";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";
import SideImg from "../../../assets/overhaul.png";
import OutcomeImg from "../../../assets/portfolio/chat-localization-outcome.png";

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
              <option value="grab">GrabPay Wallet Powered by KBank</option>
              <option value="grab">GrabPay Wallet Powered by KBank</option>
              <option value="grab">GrabPay Wallet Powered by KBank</option>
              <option value="grab">GrabPay Wallet Powered by KBank</option>
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
                  Revamp Thai localization of GrabChat for Grab customer and
                  driver apps
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Team</h6>
                <p>Content design, customer experience, localization</p>
              </section>

              <section>
                <h6 className="project-details-content">Background</h6>
                <p>
                  The initial strategy explicitly informed users that they were
                  interacting with a bot to manage expectations and prevent
                  frustration in case their concerns couldn't be fully
                  addressed. We were cautious about using overly human-like
                  language, as it could lead to misunderstandings and
                  potentially erode user trust and loyalty. Our aim was to apply
                  a consistent product content style guide across all products,
                  including the chatbot.
                </p>
                <br />
                <p>
                  However, I later discovered that writing for microcopy differs
                  from writing for a chatbot. Conversations with the Customer
                  Experience (CE) team revealed a preference for making GrabChat
                  sound as human as possible. Surprisingly, users appeared more
                  comfortable when unaware they were conversing with a bot.
                  Frontliners in the CE team have their own distinct language
                  style when communicating with customers, which differs from
                  our in-app style. I also discussed unique challenges with
                  conversational designers, particularly regarding non-English
                  languages, such as Thai
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
                        (ครับ)
                      </td>
                      <td>
                        Align with the CS team whether we’ll use a feminine or
                        masculine tone and stick to it. Inform the content
                        designers so they’re aware of the gender aspect. If
                        we’ll ever create a persona in the future, they know
                        Thai should be a female.
                      </td>
                      <td></td>
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
                      <td></td>
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
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section>
                <h6 className="project-details-content">Outcome</h6>
                <p>
                  After I refined the chat script according to our new strategy
                  and received an approval from the CS team, we were ready to go
                </p>
                <br />
                <p>
                  The final content was more conversational and natural. Bonus
                  point, we managed to make it more concise. Usually, we would
                  be worried about Thai being too long as Thai is generally
                  longer than English.
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
