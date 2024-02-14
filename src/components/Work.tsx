import React from "react";
import "./Work.css";
import Pubquiz from "../assets/Images/Pubquiz.png";
import NewsHomePage from "../assets/Images/NewsHomePage.png";
import Articlepreview from "../assets/Images/Articlepreview.png";
import woofApp from "../assets/Images/woofApp.png";
import reactlogo from "../assets/Images/reactlogo.png";

export default function Work() {
  return (
    <>
      <section id="work" className="section">
        <div className="work__box_title">
          <h1 className="work__title">
            A <strong>Portfolio</strong> of
            <br /> Growing Pains and Glowing Gains!
          </h1>
          <div className="work__section_line"></div>
        </div>
        <div className="work__container  ">
          {/* Flip Card 1 */}
          <div className=" flip-card ">
            <div className="flip-card-inner ">
              <img src={Pubquiz} className="flip__image_front" alt=""></img>
              <div className="flip-card-front ">
                <p className="background_text_front">Pub Quiz - Flash Card</p>
              </div>
              <div className="flip-card-back card__background_back">
                <p>
                  Embraced the challenge of learning React and CSS while
                  building an interactive pub quiz.
                </p>
                <button>
                  <a
                    className="button_inside"
                    href="https://github.com/Chaveguapo/Flashcards_Quiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See more
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Flip Card 2 */}
          <div className=" flip-card ">
            <div className="flip-card-inner ">
              <img
                src={NewsHomePage}
                className="flip__image_front"
                alt=""
              ></img>
              <div className="flip-card-front ">
                <p className="background_text_front">News Homepage</p>
              </div>
              <div className="flip-card-back  card__background_back ">
                <p>
                  Dived into CSS exploration through a card challenge. Conquered
                  flexbox properties, honed layout skills, and gained a deeper
                  understanding of responsive design.
                </p>
                <button>
                  <a
                    className="button_inside"
                    href="https://github.com/Chaveguapo/news-webpage-main"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See more
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Flip Card 3 */}
          <div className=" flip-card ">
            <div className="flip-card-inner ">
              <img
                src={Articlepreview}
                className="flip__image_front"
                alt=""
              ></img>
              <div className="flip-card-front">
                <p className="background_text_front">Article preview</p>
              </div>
              <div className="flip-card-back card__background_back">
                <p>
                  Embarked on a comprehensive news webpage creation. Leveraged
                  media queries to optimize the layout in differents screen
                  sizes.
                </p>
                <button>
                  <a
                    className="button_inside"
                    href="https://github.com/Chaveguapo/Article-preview/tree/main/article-preview-component-master"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See more
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Flip Card 4 */}
          <div className="flip-card">
            <div className=" flip-card-inner ">
              <img src={woofApp} className="flip__image_front" alt=""></img>
              <div className="flip-card-front">
                <p className="background_text_front">Woof</p>
              </div>
              <div className="flip-card-back card__background_back">
                <p>
                  A user-centric design journey for a "Woof" project. Conducted
                  research, crafted wireframes and prototypes, gathered user
                  feedback, and delivered a high-fidelity prototype.
                </p>
                <button>
                  <a
                    className="button_inside"
                    href="https://www.figma.com/proto/mslF18HukBZLdwRFcsx5Uf/Woof-Nutritional-App?page-id=337%3A374&type=design&node-id=607-3865&viewport=738%2C548%2C0.14&t=oZGXrmmcHhYvmZVi-1&scaling=scale-down&starting-point-node-id=607%3A3865&mode=design"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See more
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* Flip Card 5 */}
          <div className="flip-card">
            <div className=" flip-card-inner ">
              <img src={reactlogo} className="flip__image_front" alt=""></img>
              <div className="flip-card-front">
                <p className="background_text_front">Currently Working on</p>
              </div>
              <div className="flip-card-back card__background_back">
                <p>
                  Netflix Clone: Learning by Building Crafting a Netflix clone
                  to hone skills in recommendation algorithms, API integration,
                  and user experience.&nbsp;
                  <strong>
                    Coming soon: New projects and discoveries from my coding
                    journey.
                  </strong>
                </p>
                <div>
                  {/* <a
                    className="button_inside"
                    href="https://www.figma.com/proto/mslF18HukBZLdwRFcsx5Uf/Woof-Nutritional-App?page-id=337%3A374&type=design&node-id=607-3865&viewport=738%2C548%2C0.14&t=oZGXrmmcHhYvmZVi-1&scaling=scale-down&starting-point-node-id=607%3A3865&mode=design"
                    target="_blank"
                    rel="noreferrer"
                  ></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
