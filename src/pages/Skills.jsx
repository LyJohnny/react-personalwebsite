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
              {" "}
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
                    HTML
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                      alt="CSS"
                    />
                    CSS
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      alt="JavaScript"
                    />
                    JavaScript
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      alt="TypeScript"
                    />
                    TypeScript
                  </Col>
                  <Col className="logo-container-half" xs="6">
                  <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                      alt="Java"
                    />
                    Java
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                      alt="Python"
                    />
                    Python
                    <img className="icon" src={sql} alt="SQL" />
                    SQL
                  </Col>
                </Row>
              </Col>
            </Col>

            {/* -------------------------------------------------Tools/Libraries Column---------------------------------------------------------------------------------- */}

            <Col className="showH2" id="tools">
              {" "}
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
                    React
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" 
                      alt="spring"
                    />
                    Spring
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                      alt="Node"
                    />
                    Node
                    
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
                      alt="Flask"
                    />
                    Flask
                 
                  </Col>

                  <Col className="logo-container-half" xs="6">

                   <img 
                   className="icon"
                   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" 
                   alt="Oracle"
                   />
                   SQL Developer
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                      alt="Bootstrap"
                    />
                    Bootstrap
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                      alt="Scss"
                    />
                    Scss
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                      alt="Git"
                    />
                    Git
                  </Col>
                </Row>
              </Col>
            </Col>

            {/* -------------------------------------------------Other Column---------------------------------------------------------------------------------- */}
            <Col className="showH3" id="other">
              {" "}
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
                    AGILE Methodologies
                    <img
                      className="other-icon"
                      src={typingSpeed}
                      alt="Typing Speed"
                    />
                    Typing Speed: 110+ WPM
                    <img
                      className="other-icon"
                      src={photography}
                      alt="Photography"
                    />
                    Photography
                  </Col>

                  <Col className="logo-container-half" xs="6">
                    <img
                      className="icon"
                      src={lightroom}
                      alt="Adobe Lightroom"
                    />
                    Lightroom
                    <img
                      className="icon"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                      alt="Figma"
                    />
                    Figma
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
