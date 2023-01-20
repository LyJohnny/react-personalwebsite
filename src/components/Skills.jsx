import React from "react";
import "./styles/Skills.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__container">
        <Container>
          <Row>
            <Col id="languages">
              {" "}
              <h1> Languages </h1>
            </Col>
            <Col id="tools">
              {" "}
              <h1> Tools/Libraries </h1>
            </Col>
            <Col id="other">
              {" "}
              <h1> Other </h1>
            </Col>
          </Row>

          <Row>
            <Col>
              <ul className="pLanguages">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>C/C++</li>
                <li>SQL</li>
              </ul>
            </Col>

            <Col lg ={8}>
              <ul className="toolsLibraries">
                <li>React</li>
                <li>Node</li>
                <li>MySQL</li>
                <li>Git</li>
                <li>Scss</li>
                <li>Bootstrap</li>
              </ul>
            </Col>

            <Col lg ={4}>
              <ul className="otherCol">
                <li>AGILE Methodologies</li>
                <li>Typing Speed: 100+ WPM</li>
                <li>Photography</li>
                <li>Adobe Lightroom</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;
