import React from "react";
import "./Work.css";
import Pubquiz from "../assets/Images/Pubquiz.png";
import NewsHomePage from "../assets/Images/NewsHomePage.png";
import Articlepreview from "../assets/Images/Articlepreview.png";
import woofApp from "../assets/Images/woofApp.png";

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
                  Learning to code is a magical journey, unveiling secrets of
                  algorithms and data. Facing challenges and uncovering
                  languages, one evolves from novice to digital wizard, creating
                  wonders with code.
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
                  Creating from scratch is challenging yet rewarding, offering a
                  fulfilling dive into the coding world.
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
                <p>Details about Pet-projects...</p>
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
                <p>Current project details...</p>
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
          {/* <div className="flip-card">
            <div className=" flip-card-inner ">
              <img src={EmotionApp} className="flip__image_front" alt=""></img>
              <div className="flip-card-front">
                <p className="background_text_front">Emotion App</p>
              </div>
              <div className="flip-card-back card__background_back">
                <p>Current project details...</p>
                <button className="button_inside">See more!</button>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
