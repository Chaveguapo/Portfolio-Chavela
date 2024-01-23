import React from "react";
import "./Work.css";

export default function Work() {
  return (
    <div>
      <h1 className="work__title section">Work</h1>

      <div className="work__container">
        {/* Flip Card 1 */}
        <div className=" flip-card ">
          <div className="flip-card-inner bento_dark">
            <div className="flip-card-front">
              <p>
                Embarking on <br /> Developmental Odysseys
              </p>
              <hr className="work__line line_primary"></hr>
            </div>
            <div className="flip-card-back">
              <p>
                Learning to code is a magical journey, unveiling secrets of
                algorithms and data. Facing challenges and uncovering languages,
                one evolves from novice to digital wizard, creating wonders with
                code.
              </p>
            </div>
          </div>
        </div>

        {/* Flip Card 2 */}
        <div className=" flip-card ">
          <div className="flip-card-inner bento_light">
            <div className="flip-card-front ">
              <p>
                Front-end <br /> Challenges
              </p>
              <hr className="work__line line_dark"></hr>
            </div>
            <div className="flip-card-back ">
              <p>
                Learning to code is a magical journey, unveiling secrets of
                algorithms and dital wizard, creating wonders with code.
              </p>
            </div>
          </div>
        </div>

        {/* Flip Card 3 */}
        <div className=" flip-card ">
          <div className="flip-card-inner bento_secondary">
            <div className="flip-card-front">
              <p>Pet-projects</p>
              <hr className="work__line line_light"></hr>
            </div>
            <div className="flip-card-back">
              <p>Details about Pet-projects...</p>
            </div>
          </div>
        </div>

        {/* Flip Card 4 */}
        <div className="flip-card">
          <div className=" flip-card-inner bento_primary">
            <div className="flip-card-front">
              <p>
                Currently <br /> I'm working on
              </p>
              <hr className="work__line line_dark"></hr>
            </div>
            <div className="flip-card-back">
              <p>Current project details...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
