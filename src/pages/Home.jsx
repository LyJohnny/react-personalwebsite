import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
import "../styles/Home.scss";
import portrait from "../assets/portrait.webp";
import ParticleBackground from "../utils/ParticleBackground";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/js/bootstrap.min.js";
import ResumeModal from "../components/modal";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
      <div className="particlejs">
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
                  <div className="name-header" id="name">
                    <h1>Johnny Ly </h1>
                  </div>

                  <div className="email-header">
                    <p className="email-text"> johnbus.ly@gmail.com</p>

                    <div
                      className={`${"hiddenDescription"} ${
                        visibleElement ? "Typewriter" : ""
                      }`}
                      ref={myRef}
                    >
                      <Typewriter
                        options={{
                          pauseFor: 3000,
                          strings: ["Software Engineer", "Full Stack Developer"],
                          autoStart: true,
                          loop: true,
                          delay: "natural",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="buttonHome">
                  <div className="button-area ">
                    <ResumeModal />
                    <button
                      type="button"
                      className="name noselect"
                      id="portfolio-button"
                      onClick={portScroll}
                      aria-label="My Portfolio"
                    />
                  </div>
                </div>

                {/* SOCIAL MEDIA ICONS */}
                <div className="icon-area">
                  <div className="button-area">
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
                          aria-label="My LinkedIn Page"
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
                        <a
                          href="https://github.com/LyJohnny"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="My GitHub Page"
                        >
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
                          aria-label="My Instagram Page"
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
                  <LazyLoadImage
                    className="portrait-icon"
                    src={portrait}
                    width={350}
                    height={350}
                    alt="Portrait Icon"
                    effect="blur"
                  />
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
