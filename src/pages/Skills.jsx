import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../styles/Skills.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import sql from "../assets/sql.webp";
import agile from "../assets/agile.webp";
import typingSpeed from "../assets/typingSpeed.webp";
import photography from "../assets/photography.webp";
import lightroom from "../assets/lightroom.webp";

const Skills = () => {
  const { ref: myRef, inView: visibleElement } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="skills">
      <div className="skills__container">
        <Container className="skill-container" xs="12">
          <Row>
            <Col className="showH1" id="languages">
              <h1 id="skills-header"> Languages </h1>
              <Col
                className={`${"hidden"} ${visibleElement ? "appear" : ""}`}
                id="languages"
                ref={myRef}
              >
                <Row>
                  <Col className="logo-container1" xs="6">
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                      alt="HTML/CSS"
                    />
                    <div className="icon-text">HTML</div>
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                      alt="CSS"
                    />
                    <div className="icon-text">CSS</div>
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      alt="JavaScript"
                    />
                    <div className="icon-text">JavaScript</div>
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      alt="TypeScript"
                    />
                    <div className="icon-text">TypeScript</div>
                  </Col>
                  <Col className="logo-container-half" xs="6">
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                      alt="Java"
                    />
                    <div className="icon-text">Java</div>
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                      alt="Python"
                    />
                    <div className="icon-text">Python</div>
                    <img className="icon" src={sql} alt="SQL" />
                    <div className="icon-text">SQL</div>
                  </Col>
                </Row>
              </Col>
            </Col>

            {/* -------------------------------------------------Tools/Libraries Column---------------------------------------------------------------------------------- */}

            <Col className="showH2" id="tools">
              <h1 id="skills-header"> Tools/Libraries </h1>
              <Col
                className={`${"hidden"} ${visibleElement ? "appear2" : ""}`}
                id="tools"
              >
                <Row>
                  <Col className="logo-container2" xs="6">
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      alt="React"
                    />
                    <div className="icon-text">React</div>
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                      alt="Spring"
                    />
                    <div className="icon-text">Spring</div>
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                      alt="Node"
                    />
                    <div className="icon-text">Node</div>
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
                      alt="Flask"
                    />
                    <div className="icon-text">Flask</div>
                  </Col>

                  <Col className="logo-container-half" xs="6">
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg"
                      alt="MSSQL"
                    />
                    <div className="icon-text">MS SQL</div>
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                      alt="Bootstrap"
                    />
                    <div className="icon-text">Bootstrap</div>
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                      alt="Scss"
                    />
                    <div className="icon-text">Scss</div>
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                      alt="Git"
                    />
                    <div className="icon-text">Git</div>
                  </Col>
                </Row>
              </Col>
            </Col>

            {/* -------------------------------------------------Other Column---------------------------------------------------------------------------------- */}
            <Col className="showH3" id="other">
              <h1 id="skills-header"> Other </h1>
              <Col
                className={`${"hidden"} ${visibleElement ? "appear3" : ""}`}
                id="other"
              >
                <Row>
                  <Col className="logo-container3" xs="6">
                    <img
                      className="other-icon"
                      src={agile}
                      alt="AGILE Methodologies"
                    />
                    <div className="icon-text">AGILE Methodologies</div>
                    <img
                      className="other-icon"
                      src={typingSpeed}
                      alt="Typing Speed"
                    />
                    <div className="icon-text">Typing Speed: 110+ WPM</div>
                    <img
                      className="other-icon"
                      src={photography}
                      alt="Photography"
                    />
                    <div className="icon-text">Photography</div>
                  </Col>

                  <Col className="logo-container-half" xs="6">
                    <img
                      className="icon"
                      src={lightroom}
                      alt="Adobe Lightroom"
                    />
                    <div className="icon-text">Lightroom</div>
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                      alt="Figma"
                    />
                    <div className="icon-text">Figma</div>
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