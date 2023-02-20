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
        <Container className="skillsHeading">
          <Row>
            <Col
              className={`${"hidden"} ${visibleElement ? "showH1" : ""}`}
              id="languages"
            >
              {" "}
              <h1> Languages </h1>
            </Col>
            <Col
              className={`${"hidden"} ${visibleElement ? "showH2" : ""}`}
              id="tools"
            >
              {" "}
              <h1> Tools/Libraries </h1>
            </Col>
            <Col
              className={`${"hidden"} ${visibleElement ? "showH3" : ""}`}
              id="other"
            >
              {" "}
              <h1> Other </h1>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col
              className={`${"hidden"} ${visibleElement ? "appear" : ""}`}
              id="languages"
              ref={myRef}
            >
              <Col className="logo-container1" lg="auto">
                <img
                  className="icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                  alt="HTML/CSS"
                />
                HTML/CSS
                <img
                  className="jsIcon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                />
                JavaScript
              </Col>

              <Col className="logo-container1" lg="auto">
                <img
                  className="icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  alt="Python"
                />
                Python
                <img
                  className="cplusplusIcon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                  alt="C/C++"
                />
                C/C++
              </Col>

              <Col className="logo-container1" lg="auto">
                <img className="icon" src={sql} alt="SQL" />
                SQL
              </Col>
            </Col>

            <Col
              className={`${"hidden"} ${visibleElement ? "appear2" : ""}`}
              id="tools"
              ref={myRef}
            >
              <Col className="logo-container2" lg="auto">
                <img
                  className="icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                />
                React
                <img
                  className="nodeIcon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node"
                />
                Node
              </Col>

              <Col className="logo-container2" lg="auto">
                <img
                  className="icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                  alt="Scss"
                />
                Scss
                <img
                  className="bootstrapIcon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  alt="Bootstrap"
                />
                Bootstrap
              </Col>

              <Col className="logo-container2" lg="auto">
                <img
                  className="icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git"
                />
                Git
              </Col>
            </Col>

            <Col
              className={`${"hidden"} ${visibleElement ? "appear3" : ""}`}
              id="other"
              ref={myRef}
            >
              <Col className="logo-container3" lg="auto">
                <img className="icon" src={agile} alt="AGILE Methodologies" />
                AGILE
                <img
                  className="typeIcon"
                  src={typingSpeed}
                  alt="Typing Speed"
                />
                110+ WPM
              </Col>

              <Col className="logo-container3" lg="auto">
                <img className="icon" src={photography} alt="Photography" />
                Photography
                <img
                  className="lightroomIcon"
                  src={lightroom}
                  alt="Adobe Lightroom"
                />
                Lightroom
              </Col>
              <Col className="logo-container2" lg="auto">
                <img
                  className="icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                  alt="Figma"
                />
                Figma
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;
