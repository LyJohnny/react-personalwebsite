import { GitHub, LinkedIn, Instagram } from "@material-ui/icons";
import React from "react";
import "./styles/Home.scss";
import portrait from "./assets/portrait.png";
import resume from "./assets/Johnny_Ly_Résumé_.pdf"
import ParticleBackground from "./ParticleBackground";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typical from "react-typical";


const Home = () => {
  return (
    <div className="particleCanvas">
    <ParticleBackground />
    <div className="home">

      <div className="home__container">
        <div className="home__content">
          <Container>
            <Row>
              <Col>
                <div className="text">
                  <div className = "row d-flex text-center justify-content-center mt-5"> 
                  <h1>Johnny Ly </h1>
                  </div>

                  <div className= "text-center ms-0 justify-content-center"> 
                  <p className="email-text"> johnbus.ly@gmail.com</p>
                  <p>
                    <Typical
                      loop={Infinity}
                      wrapper="t"
                      steps={[
                        "Developer",
                        3000,
                        "Lifelong Student",
                        3000,
                        "Problem Solver",
                        3000,
                      ]}
                    />
                  </p>
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
                                <iframe src={resume} style={{ width: '100%', height: '110%'}} />
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
                            <LinkedIn fontSize="large"/>{" "}
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
                            <GitHub fontSize="large"/>
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
                            <Instagram fontSize="large"/>{" "}
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
      </div>
      </div>
      </div>


  );
};

export default Home;
