import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./styles/Skills.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import sql from "../components/assets/sql.png";
import agile from "../components/assets/agile.png";
import typingSpeed from "../components/assets/typingSpeed.png";
import photography from "../components/assets/photography.png";
import lightroom from "../components/assets/lightroom.png";

const Skills = () => {
  const { ref: myRef, inView: visibleElement } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="skills">
      <div className="skills__container">
        <Container>
          <Row>
            <Col
              className={`${"hidden"} ${visibleElement ? "showH1" : ""}`}
              id="languages"
            >
              {" "}
              <h1> Languages </h1>
              <Col
                className={`${"hidden"} ${visibleElement ? "appear" : ""}`}
                id="languages"
                ref={myRef}
              >
                <Row>
                <Col className="logo-container1" lg="6">
                  <img
                    className="icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                    alt="HTML/CSS"
                  />
                  HTML/CSS
                  <img
                    className="icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                  />
                  JavaScript

                  <img
                    className="icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    alt="Python"
                  />
                  Python
                  </Col>
                  <Col className="logo-container-half" lg="6">

                  <img
                    className="icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                    alt="C/C++"
                  />
                 <p id='label'>C/C++</p>

                  <img className="icon" src={sql} alt="SQL" />
                  <p id='label'>SQL</p>
                </Col>
                </Row>
            </Col>
            </Col>

            {/* -------------------------------------------------Tools/Libraries Column---------------------------------------------------------------------------------- */}

            <Col
              className={`${"hidden"} ${visibleElement ? "showH2" : ""}`}
              id="tools"
            >
              {" "}
              <h1> Tools/Libraries </h1>
              <Col
                className={`${"hidden"} ${visibleElement ? "appear2" : ""}`}
                id="tools"
                ref={myRef}
              >
              <Row> 
                <Col className="logo-container2" lg="6">
                  <img
                    className="icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                  />
                  React
                  <img
                    className="icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="Node"
                  />
                  Node
                  <img
                    className="icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                    alt="Scss"
                  />
                  Scss
                  </Col>

                  <Col className="logo-container-half" lg="6">
                  <img
                    className="icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                    alt="Bootstrap"
                  />
                 <p id='label'>Bootstrap</p>
                  <img
                    className="icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="Git"
                  />
                 <p id='label'>Git</p>
                </Col>

                </Row>
            </Col>
            </Col>

            {/* -------------------------------------------------Other Column---------------------------------------------------------------------------------- */}
            <Col
              className={`${"hidden"} ${visibleElement ? "showH3" : ""}`}
              id="other"
            >
              {" "}
              <h1> Other </h1>
              <Col
                className={`${"hidden"} ${visibleElement ? "appear3" : ""}`}
                id="other"
                ref={myRef}
              >
            <Row> 
                <Col className="logo-container3" lg="6">
                  <img className="icon" src={agile} alt="AGILE Methodologies" />
                  AGILE
                  <img
                    className="icon"
                    src={typingSpeed}
                    alt="Typing Speed"
                  />
                  110+ WPM
                  <img className="icon" src={photography} alt="Photography" />
                  Photography
                  </Col>

                  <Col className="logo-container-half" lg="6">
                  <img
                    className="icon"
                    src={lightroom}
                    alt="Adobe Lightroom"
                  />
                 <p id='label'>Lightroom</p>
                  <img
                    className="icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    alt="Figma"
                  />
                 <p id='label'>Figma</p>
                </Col>
                </Row>
              </Col>
            </Col>




          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;
