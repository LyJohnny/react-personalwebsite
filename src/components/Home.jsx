import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
import "./styles/Home.scss";
import portrait from "./assets/portrait1.png";
import ParticleBackground from "./ParticleBackground";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/js/bootstrap.min.js";
import ResumeModal from "./modal";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

const Home = ({ aboutRef, portfolioRef }) => {
  const { ref: myRef, inView: visibleElement } = useInView({
    triggerOnce: true,
  });
  const navScroll = (e) => {
    e.preventDefault();
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const portScroll = (e) => {
    e.preventDefault();
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <div className='particlejs'> 
      <ParticleBackground />
      </div>
      <div
        className={`${"hiddenHome"} ${visibleElement ? "home__container" : ""}`}
        ref={myRef}
      >
        <div className="home__content">
          <Container>
            <Row>
              <Col className="infoCol">
                <div className="text">
                  <div className="row d-flex text-center justify-content-center mt-5">
                    <h1>Johnny Ly </h1>
                  </div>

                  <div className="text-center ms-0 justify-content-center">
                    <p className="email-text"> johnbus.ly@gmail.com</p>

                    <div className={`${"hiddenDescription"} ${visibleElement ? "Typewriter" : ""}`}
        ref={myRef}> 
                    <Typewriter 
                      options={{
                        pauseFor: 3000,
                        strings: ["Software Engineer", "Front End Developer", "Problem Solver"],
                        autoStart: true,
                        loop: true,
                        delay: "natural"
                      }}
                    />
                    </div>
                  </div>
                </div>

                <div className="buttonHome">
                  <div className="d-flex text-center ms-0 justify-content-center mt-4">
                    <ResumeModal />
                    <button
                      type="button"
                      className="name noselect"
                      id="portfolio-button"
                      onClick={portScroll}
                    />
                  </div>
                </div>

                {/* SOCIAL MEDIA ICONS */}
                <div className="icon-area">
                  <div className="d-flex text-center ms-0 justify-content-center mt-4">
                    <ul id="social-icons">
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip id="linkedInTooltip">
                            <strong>@johnny-ly</strong>
                          </Tooltip>
                        }
                      >
                        <a
                          href="https://www.linkedin.com/in/johnny-ly-/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <li id="linkedin">
                            {" "}
                            <LinkedIn
                              className="linkedinIcon"
                              fontSize="large"
                              style={{ color: "white" }}
                            />{" "}
                          </li>
                        </a>
                      </OverlayTrigger>

                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip id="linkedInTooltip">
                            <strong>@LyJohnny</strong>
                          </Tooltip>
                        }
                      >
                        <a href="https://github.com/LyJohnny" target="_blank"  rel="noreferrer">
                          <li id="github">
                            <GitHub
                              className="githubIcon"
                              fontSize="large"
                              style={{ color: "white" }}
                            />
                          </li>
                        </a>
                      </OverlayTrigger>

                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip id="linkedInTooltip">
                            <strong>@johnster.shoots</strong>
                          </Tooltip>
                        }
                      >
                        <a
                          href="https://www.instagram.com/johnster.shoots/"
                          target="_blank"
                          rel="noreferrer"

                        >
                          <li id="instagram">
                            {" "}
                            <Instagram
                              className="instagramIcon"
                              fontSize="large"
                              style={{ color: "white" }}
                            />{" "}
                          </li>
                        </a>
                      </OverlayTrigger>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col className="portraitCol">
                {/* PORTRAIT  */}
                <div className="home__img">
                  <img src={portrait} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
       
      </div>
       {/* Nav Arrow  */}
        <div
          className={`${"hiddenArrow"} ${visibleElement ? "arrowDown" : ""}`}
          ref={myRef}
        >
          <KeyboardArrowDownIcon
            fontSize="large"
            style={{ color: "white" }}
            onClick={navScroll}
          />
        </div>
    </div>
  );
};

export default React.forwardRef(Home);
