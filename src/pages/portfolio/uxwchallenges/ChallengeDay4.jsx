import React from "react";
import ChallengeCard from "../../../components/card/challenge/ChallengeCard";
import BackBtn from "../../../components/button/BackBtn";
import { PageRoute } from "../../../App";

import UserImg from "../../../assets/challenges/uxw-challenge-day-4.png";
import ServiceImg from "../../../assets/challenges/uxw-challenge-day-4-services.png";
import ResultImg from "../../../assets/challenges/uxw-day-4.jpg";
import BackToTop from "../../../components/backToTop/backToTop";
import Footer from "../../../components/footer/Footer";
import ChallengesDropdown from "../../../components/dropdown/ChallegesDropdown";

function ChallengeDay4() {
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
              <h3 className="challenge-detail-h3">UXW Challenge Day 4</h3>
              <ChallengeCard>
                <section>
                  <h6>Scenario</h6>
                  <p className="body-4">
                    A user is in their favorite supermarket. They open the
                    supermarket’s app on their phone to see what’s on sale and
                    are greeted by a promotion.
                  </p>
                </section>

                <section>
                  <h6>Challenge</h6>
                  <p className="body-4">
                    Write a promotional home screen for a subscription service
                    that delivers groceries to the user once-a-month for a flat
                    fee.
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
                  I choose a customer-friendly and approachable voice to make
                  the brand sound easy to talk to. It’s the supermarket with
                  items as affordable as a local grocery shop but presented in a
                  slightly more formal manner to maintain professionalism. Just
                  like in Challenge Day 2, the tone stays exciting and
                  persuasive with an understanding touch to let the users know
                  that we empathize with their need making this product a
                  perfect fit.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Goals</h6>
                <p className="body-4">
                  <ul>
                    <li>
                      Encourage supermarket customers to try out a new delivery
                      service
                    </li>
                    <li>
                      Capture customers' attention making them curious about the
                      product
                    </li>
                    <li>Increase the number of mobile app users</li>
                  </ul>
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Target users</h6>
                <p className="body-4">
                  Customers who are currently shopping inside the supermarket,
                  potentially regulars as evidenced by their use of the
                  supermarket's app which showcases the familiarity with great
                  deals. These customers are also tech-savvy from the way they
                  go for mobile convenience over physically browsing the store
                  for sales. They like promotions, discounts, and value-driven
                  products.
                </p>
              </section>

              <section>
                <h6 className="project-details-content">User journey</h6>
                <p className="body-4">
                  User goes to a supermarket &gt; opens the app &gt; searches
                  for exclusive deals and discounted items 📍{" "}
                  <b>sees a promotional screen</b> &gt; continues shopping with
                  heavy baskets &gt; checks out &gt; heads home wondering if
                  there's a better shopping approach
                </p>
                <br />
                <p className="project-sub-heading">
                  ☝ What happens if the message is unsuccessful?
                </p>
                <ul>
                  <li>Customers dismiss the page without interest</li>
                  <li>
                    They continue shopping at the supermarket but choose not to
                    use the delivery service
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
                      <b>Disrupted</b> — greeted by a promotional page instead
                      of seeing deals
                    </li>
                    <li>
                      <b>Surprised</b> — to see new product they’ve never seen
                      at this supermarket
                    </li>
                    <li>
                      <b>Curious</b> — about the potential benefits of the
                      delivery service
                    </li>
                  </ul>
                </p>
              </section>

              <section>
                <h6 className="project-details-content">Thought processes</h6>
                <p className="body-4">
                  Users might encounter this promotional screen as soon as they
                  open the app or catalogue, not during the payment process. The
                  unexpected appearance of this screen could be disruptive but
                  since our goal is to promote a product, we need content that
                  prevents users from immediately closing it and encourages them
                  to continue reading. Therefore, I try to create a catchy
                  heading by incorporating a rhyme in both the English and Thai
                  versions, believing it can grab the customers' attention
                </p>
                <br />
                <p>
                  In the body, I've divided the content into two simple
                  paragraphs. The first focuses on common shopper pain points
                  such as time spent on traffic, commuting, picking items from
                  shelves, waiting in line, and lifting heavy baskets. I chose
                  the last two as they resonate with most people. The next
                  paragraph highlights the nature of the product emphasizing 1)
                  a once-a-month delivery 2) with a flat fee.
                </p>
                <section>
                  <br />
                  <div className="project-supporting-img">
                    <img
                      src={ServiceImg}
                      alt="upset user waiting at the airport"
                      className="project-supporting-img"
                    />
                  </div>
                </section>
                <p>
                  Addressing the challenge of clearly communicating the
                  "once-a-month" part was a bit tricky for me. I wanted to avoid
                  any confusion where readers might think our service offers
                  unlimited deliveries for a flat monthly fee. While "monthly
                  grocery shopping" could work in English, its translation to
                  Thai (ช้อปรายเดือน or ช้อปประจำเดือน) might still be unclear.
                  To ensure transparency, I chose a straightforward sentence:
                  "We'll bring groceries to you once every month." This helps
                  eliminate any potential misunderstandings about the frequency
                  of our delivery service.
                </p>
                <br />
                <p>
                  Lastly, for the CTAs, I prioritize transparency by displaying
                  the price upfront. This allows users to know the cost before
                  committing. The secondary CTA, "Maybe Later," is chosen to
                  give users the option to think about it later especially if
                  they are currently engaged in another task which is shopping
                  inside a supermarket.
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

export default ChallengeDay4;
