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
import "bootstrap/dist/js/bootstrap.min.js";
import ResumeModal from "./modal";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


const Home = ({ aboutRef, portfolioRef }) => {
  const navScroll = (e) => {
    e.preventDefault();
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const portScroll = (e) => {
    e.preventDefault();
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };

  //   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  // const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

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

                <div className="buttonHome">
                  {/* Buttons */}
                  <div className="d-flex text-center ms-0 justify-content-center mt-4">
                    {/* <button
                      type="button"
                      className="name noselect"
                      id="resume-button"
                     
                      // data-bs-toggle="modal"
                      // data-bs-target="#bd-example-modal-lg"
                    /> */}
                     <ResumeModal/>
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
                       <Tooltip id='linkedInTooltip'>
                         <strong>@johnny-ly</strong>
                       </Tooltip>
                     }>
                      <a
                        href="https://www.linkedin.com/in/johnny-ly-/"
                        target="_blank"
                      >
                        <li id="linkedin">
                          {" "}
                          <LinkedIn
                            fontSize="large"
                            style={{ color: "white" }}
                          />{" "}
                        </li>
                      </a>
                      </OverlayTrigger>

                      <OverlayTrigger 
                    placement="bottom"
                     overlay={
                       <Tooltip id='linkedInTooltip'>
                         <strong>@LyJohnny</strong>
                       </Tooltip>
                     }>
                      <a
                        href="https://github.com/LyJohnny"
                        target="_blank"
                      >
                        <li id="github">
                          <GitHub fontSize="large" style={{ color: "white" }} />
                        </li>
                      </a>
                      </OverlayTrigger>

                      <OverlayTrigger 
                    placement="bottom"
                     overlay={
                       <Tooltip id='linkedInTooltip'>
                         <strong>@johnster.shoots</strong>
                       </Tooltip>
                     }>
                      <a
                        href="https://www.instagram.com/johnster.shoots/"
                        target="_blank"
                      >
                        <li id="instagram">
                          {" "}
                          <Instagram
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
