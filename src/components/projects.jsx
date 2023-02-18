import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "./styles/Portfolio.scss";
import huf from "./assets/huf.png";
import { GitHub } from "@mui/icons-material";
import PosterModal from "./modal2";
import website from "./assets/personalWebsite.png";
import hackmerced from "./assets/hackmerced.png"
import devpost from "./assets/devpost-icon.svg"
import google from "./assets/google.svg"

function Projects() {
  return (
    <div className="projectsTab">
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
            <p style={{ fontSize: "12px" }}> September 2022 - December 2022 </p>

            <PosterModal />

            <p id="project-description">
              A Web application developed to allow product managers and developers
              to view performance metrics through Key Performance Indicator
              (KPI) reports. KPI reports are generated from information pulled from SVN server
              which are displayed dynamically through tables and graphs and organized by developer repositories. 
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt=""
            />
            React
          </Col>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt=""
            />
            Java
          </Col>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
              alt=""
            />
            Spring Boot
          </Col>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt=""
            />
            MySQL
          </Col>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt=""
            />
            Node
          </Col>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt=""
            />
            Git
          </Col>
        </Row>
      </Container>
      <Container className="project-container">
        <Row>
          <Col className="logo-container" lg="auto">
            <img src={huf} width="100px" alt=""
/>
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
            <p style={{ fontSize: "12px" }}> February 2022 </p>
            <p id="project-description">
              Redesigned the Hispanic Unity of Florida’s website to be more
              modern and accessible.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              alt=""
            />
            HTML
          </Col>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              alt=""
            />
            CSS
          </Col>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt=""
            />
            JavaScript
          </Col>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt=""
            />
            Node
          </Col>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt=""
            />
            Bootstrap
          </Col>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt=""
            />
            Git
          </Col>
        </Row>
      </Container>

      <Container className="project-container">
        <Row>
          <Col className="logo-container" lg="auto">
            <img src={hackmerced} width="100px" alt=""
 />
          </Col>
          <Col lg>
            <b style={{ fontSize: "20px" }}> Project Fliar </b>
            <p style={{ fontSize: "15px" }}>
             HackMerced
            </p>
            <p style={{ fontSize: "12px" }}> February 2020 </p>
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
              <img src={devpost} width="35px" alt=""
/>  View on
              Devpost
            </a>
            <p id="project-description">
             Mobile Application that scans flyers(or any image captured from your camera) and retrieves the details of an event and 
             is intended to import the event details into Google Calendar.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
              alt=""
            />
            Android Studio
          </Col>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt=""
            />
            Java
          </Col>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src={google}
              alt=""
            />
            Google Mobile Vision API
          </Col>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt=""
            />
            Git
          </Col>
        </Row>
      </Container>

      <Container className="project-container">
        <Row>
          <Col className="logo-container" lg="auto">
            <img src={website} width="100px" alt=""
/>
          </Col>
          <Col lg>
            <b style={{ fontSize: "20px" }}> Personal Website </b>
            <p style={{ fontSize: "12px" }}> July 2022 - March 2023 </p>
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
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt=""
            />
            React
          </Col>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt=""
            />
            Node
          </Col>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt=""
            />
            Bootstrap
          </Col>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              alt=""
            />
            Scss
          </Col>
          <Col className="tool-container" lg="auto">
            <img
              className="tool-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt=""
            />
            Git
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
