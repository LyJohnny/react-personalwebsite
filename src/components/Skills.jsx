import React from "react";
import { useInView } from 'react-intersection-observer';
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
  const { ref: myRef, inView: visibleElement} = useInView({triggerOnce: true});

   
  return (
    <div className="skills">
      <div className="skills__container">
        <Container>
          <Row>
            <Col className={`${'hidden'} ${visibleElement ? 'show' : '' }`} id="languages">
              {" "}
              <h1> Languages </h1>
            </Col>
            <Col className={`${'hidden'} ${visibleElement ? 'show2' : '' }`} id="tools">
              {" "}
              <h1> Tools/Libraries </h1>
            </Col>
            <Col className={`${'hidden'} ${visibleElement ? 'show3' : '' }`} id="other">
              {" "}
              <h1> Other </h1>
            </Col>
          </Row>

          <Row>
            <Col className={`${'hidden'} ${visibleElement ? 'show' : '' }`} id="languages" ref={myRef}>
              <Col className="logo-container" lg="auto">
                <img
                  className="icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                  alt="HTML/CSS"
                />
                HTML/CSS 
              </Col>
              <Col className="logo-container" lg="auto">
                <img
                  className="jsIcon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                />
                JavaScript
              </Col>

              <Col className="logo-container" lg="auto">
                <img
                  className="icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  alt="Python"
                />
                Python
              </Col>
              <Col className="logo-container" lg="auto">
                <img
                  className="icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                  alt="C/C++"
                />
                C/C++
              </Col>
              <Col className="logo-container" lg="auto">
                <img className="icon" src={sql} alt="SQL"/>
                SQL
              </Col>
            </Col>

            <Col className={`${'hidden'} ${visibleElement ? 'show2' : '' }`} id='tools' ref={myRef} xs lg={4}>
              <Col className="logo-container" lg="auto">
                <img
                  className="icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                />
                React
              </Col>
              <Col className="logo-container" lg="auto">
                <img
                  className="icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node"
                />
                Node
              </Col>
              
              <Col className="logo-container" lg="auto">
                <img
                  className="icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                  alt="Scss"
                />
                Scss
              </Col>
              <Col className="logo-container" lg="auto">
                <img
                  className="icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  alt="Bootstrap"
                />
                Bootstrap
              </Col>
              <Col className="logo-container" lg="auto">
                <img
                  className="icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git"
                />
                Git
              </Col>
            </Col>

            <Col className={`${'hidden'} ${visibleElement ? 'show3' : '' }`} id='other' ref={myRef} lg={4}>
              <Col className="logo-container" lg="auto">
                <img className="icon" src={agile} alt="AGILE Methodologies"/>
                AGILE Methodologies
              </Col>
              <Col className="logo-container" lg="auto">
                <img className="icon" src={typingSpeed} alt="Typing Speed" />
                Typing Speed: 110+ WPM
              </Col>
              <Col className="logo-container" lg="auto">
                <img className="icon" src={photography} alt="Photography" />
                Photography
              </Col>
              <Col className="logo-container" lg="auto">
                <img className="icon" src={lightroom} alt="Adobe Lightroom" />
                Adobe Lightroom
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;
