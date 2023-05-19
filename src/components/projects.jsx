import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../styles/Portfolio.scss";
import { GitHub } from "@mui/icons-material";
import PosterModal from "./modal2";
import huf from "../assets/huf.webp";
import website from "../assets/personalWebsite.webp";
import hackmerced from "../assets/hackmerced.webp";
import devpost from "../assets/devpost-icon.svg";
import google from "../assets/google.svg";
import flyerscan from "../assets/FlyerScan.webp";

function Projects() {
  return (
    <div className="projectsTab">
      <Container className="project-container">
        <Row>
          <Col className="logo-container" lg="auto">
            <img src={flyerscan} width="100px" alt="" />
          </Col>
          <Col lg>
            <b style={{ fontSize: "20px" }}> FlyerScan </b>
            <p id="date" style={{ fontSize: "12px" }}>
              {" "}
              January 2023 - May 2023{" "}
            </p>
            <a
              className="githubLink"
              href="https://github.com/LyJohnny/FlyerScan"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub fontSize="large" style={{ color: "black" }} /> View on
              GitHub
            </a>
            <a
              className="figmaLink"
              href="https://www.figma.com/file/sUUVQxGneejPU5kFZnObCc/FlyerScan?type=design&node-id=2%3A3&t=hCf43QzO486JfDMb-1"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                width="30px"
                alt=""
              />{" "}
              View on Figma
            </a>

            <p id="project-description">
              Progressive Web App designed to help students keep track of
              on-campus events by scanning event flyers and extracting event
              details into a personal calendar. Using Optical Character
              Recognition (OCR) and Named Entity Recognition (NER), the app
              identifies parameters pertaining to a calendar event on physical
              flyers and imports the data into the user’s personal calendar app.
              The user can confirm and edit any necessary changes using the
              app’s speech detection and keyboard text input.
            </p>
          </Col>
        </Row>
        <Row>
          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
              alt="flask-icon"
            />
            Flask
          </a>
          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img id="tool-icon2" src={google} alt="googlebert-icon" />
            Google BERT Model
          </a>

          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              alt="html-icon"
            />
            HTML
          </a>
          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              alt="css-icon"
            />
            CSS
          </a>

          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="javascript-icon"
            />
            JavaScript
          </a>

          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="bootstrap-icon"
            />
            Bootstrap
          </a>

          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
              alt="sqlite-icon"
            />
            SQLite
          </a>

          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="git-icon"
            />
            Git
          </a>
        </Row>
      </Container>
      <Container className="project-container">
        <Row>
          <Col className="logo-container" lg="auto">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"
              width="100px"
              alt=""
            />
          </Col>
          <Col lg>
            <b style={{ fontSize: "20px" }}> DevTracker </b>
            <p style={{ fontSize: "15px" }}> Innovate To Grow </p>
            <p id="date" style={{ fontSize: "12px" }}>
              {" "}
              September 2022 - December 2022{" "}
            </p>

            <PosterModal />

            <p id="project-description">
              A Web application developed to allow product managers and
              developers to view performance metrics through Key Performance
              Indicator (KPI) reports. KPI reports are generated from
              information pulled from SVN server which are displayed dynamically
              through tables and graphs and organized by developer repositories.
            </p>
          </Col>
        </Row>
        <Row>
          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="react-icon"
            />
            React
          </a>

          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt="java-icon"
            />
            Java
          </a>

          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
              alt="springboot-icon"
            />
            Spring Boot
          </a>
          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="mysql-icon"
            />
            MYSQL
          </a>

          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="node-icon"
            />
            Node
          </a>

          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="git-icon"
            />
            Git
          </a>
        </Row>
      </Container>
      <Container className="project-container">
        <Row>
          <Col className="logo-container" lg="auto">
            <img src={huf} width="100px" alt="" />
          </Col>
          <Col lg>
            <b style={{ fontSize: "20px" }}>
              {" "}
              Hispanic Unity of Florida Website{" "}
            </b>
            <p style={{ fontSize: "15px" }}>
              {" "}
              JPMorgan Chase &amp; Co. Code For Good{" "}
            </p>
            <p id="date" style={{ fontSize: "12px" }}>
              {" "}
              February 2022{" "}
            </p>
            <p id="project-description">
              Redesigned the user interface of the Hispanic Unity of Florida's
              website to simplify navigation and improve user experience.
              Streamlined website architecture by integrating an integrated
              video player, iframes to display external websites on the same
              page, and UI elements to highlight the organization's initiatives.
              Utilized brand colors and incorporated call-to-action buttons to
              direct visitors to desired areas of the website.
              {/* Website aimed to help the non-profit organization, Hispanic Unity of Florida, redesign
              and simplify their user interface. Streamlined the website's architecture to maintain continuity for users by
              implementing an integrated video player, iframes to display external websites on the same page, and 
              other UI elements to highlight the organization's various initiatives. Ensured that the website was both user-friendly 
              and visually appealing by utilizing the brand's colors throughout, and incorporating call-to-action buttons to direct visitors 
              to desired areas of the website.  */}
            </p>
          </Col>
        </Row>
        <Row>
          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              alt="html-icon"
            />
            HTML
          </a>
          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              alt="css-icon"
            />
            CSS
          </a>

          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="javascript-icon"
            />
            JavaScript
          </a>

          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="node-icon"
            />
            Node
          </a>

          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="bootstrap-icon"
            />
            Bootstrap
          </a>
          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="git-icon"
            />
            Git
          </a>
        </Row>
      </Container>

      <Container className="project-container">
        <Row>
          <Col className="logo-container" lg="auto">
            <img src={hackmerced} width="100px" alt="" />
          </Col>
          <Col lg>
            <b style={{ fontSize: "20px" }}> Project Fliar </b>
            <p style={{ fontSize: "15px" }}>HackMerced</p>
            <p id="date" style={{ fontSize: "12px" }}>
              {" "}
              February 2020{" "}
            </p>
            <Row>
              <Col className="project-links-container">
                <a
                  className="githubLink"
                  href="https://github.com/LyJohnny/Project-Fliar-Hackmerced2020"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHub fontSize="large" style={{ color: "black" }} /> View on
                  GitHub
                </a>
                <a
                  className="devpostLink"
                  href="https://devpost.com/software/project-fliar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={devpost} width="35px" alt="" /> View on Devpost
                </a>
              </Col>
            </Row>
            <p id="project-description">
              Android Application aimed at reducing the time and materials
              needed for event planning and distribution of flyers. Streamlined
              the process of inputting event details into a personal Calendar by
              using an image-scanning feature to extract data such as event
              name, date, start/end time, and location.
            </p>
          </Col>
        </Row>
        <Row>
          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
              alt="androidstudio-icon"
            />
            Android Studio
          </a>
          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt="java-icon"
            />
            Java
          </a>
          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img id="tool-icon2" src={google} alt="googlemobilevision-icon" />
            Google Mobile Vision API
          </a>

          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="git-icon"
            />
            Git
          </a>
        </Row>
      </Container>

      <Container className="project-container">
        <Row>
          <Col className="logo-container" lg="auto">
            <img src={website} width="100px" alt="PersonalWebsiteIcon" />
          </Col>
          <Col lg>
            <b style={{ fontSize: "20px" }}> Personal Website </b>
            <p id="date" style={{ fontSize: "12px" }}>
              {" "}
              July 2022 - March 2023{" "}
            </p>
            <a
              className="githubLink"
              href="https://github.com/LyJohnny/react-personalwebsite"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub fontSize="large" style={{ color: "black" }} /> View on
              GitHub
            </a>
            <p id="project-description">
              Personal website built from scratch with the help of React and
              Bootstrap.{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="react-icon"
            />
            React
          </a>
          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="node-icon"
            />
            Node
          </a>
          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="bootstrap-icon"
            />
            Bootstrap
          </a>
          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              alt="scss-icon"
            />
            Scss
          </a>

          <a
            className="tool-container"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              id="tool-icon2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="git-icon"
            />
            Git
          </a>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
