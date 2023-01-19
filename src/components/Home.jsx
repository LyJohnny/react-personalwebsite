import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useRef } from "react";
import "./styles/Home.scss";
import portrait from "./assets/portrait.png";
import resume from "./assets/Johnny_Ly_Résumé_.pdf";
import ParticleBackground from "./ParticleBackground";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typical from "react-typical";

const Home = ({ aboutRef, portfolioRef }) => {
  const navScroll = (e) => {
    e.preventDefault();
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const portScroll = (e) => {
    e.preventDefault();
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <ParticleBackground />

      <div className="home__container">
        <div className="home__content">
          <Container>
            <Row>
              <Col>
                <div className="text">
                  <div className="row d-flex text-center justify-content-center mt-5">
                    <h1>Johnny Ly </h1>
                  </div>

                  <div className="text-center ms-0 justify-content-center">
                    <p className="email-text"> johnbus.ly@gmail.com</p>

                    <Typical
                      loop={Infinity}
                      // wrapper="t"
                      steps={[
                        "Developer",
                        3000,
                        "Lifelong Student",
                        3000,
                        "Problem Solver",
                        3000,
                      ]}
                    />
                  </div>
                </div>

                <div className="button">
                  {/* Buttons */}
                  <div className="d-flex text-center ms-0 justify-content-center mt-4">
                    <button
                      type="button"
                      className="name noselect"
                      id="resume-button"
                      data-bs-toggle="modal"
                      data-bs-target=".bd-example-modal-lg"
                    />
                    <button
                      type="button"
                      className="name noselect"
                      id="portfolio-button"
                      onClick={portScroll}
                    />
                    {/* Modal for Résumé */}
                    <div
                      className="modal fade bd-example-modal-lg"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="myLargeModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog ">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h2> Résumé (Updated August 2022)</h2>
                          </div>
                          <div className="modal-body">
                            <div className="ratio ratio-1x1">
                              <iframe
                                src={resume}
                                style={{ width: "100%", height: "110%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SOCIAL MEDIA ICONS */}
                <div className="icon-area">
                  <div className="d-flex text-center ms-0 justify-content-center mt-4">
                    <ul id="social-icons">
                      <a
                        href="https://www.linkedin.com/in/johnny-ly-/"
                        target="_blank"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="@johnny-ly"
                      >
                        <li id="linkedin">
                          {" "}
                          <LinkedIn
                            fontSize="large"
                            style={{ color: "white" }}
                          />{" "}
                        </li>
                      </a>
                      <a
                        href="https://github.com/LyJohnny"
                        target="_blank"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="@LyJohnny"
                      >
                        <li id="github">
                          <GitHub fontSize="large" style={{ color: "white" }} />
                        </li>
                      </a>
                      <a
                        href="https://www.instagram.com/johnster.shoots/"
                        target="_blank"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="@johnster.shoots"
                      >
                        <li id="instagram">
                          {" "}
                          <Instagram
                            fontSize="large"
                            style={{ color: "white" }}
                          />{" "}
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col>
                {/* PORTRAIT  */}
                <div className="home__img">
                  <img src={portrait} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Nav Arrow  */}
        <div className="arrowDown">
          <KeyboardArrowDownIcon
            fontSize="large"
            style={{ color: "white" }}
            onClick={navScroll}
          />
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(Home);
