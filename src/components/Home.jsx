import { GitHub, LinkedIn, Instagram } from "@material-ui/icons";
import React from "react";
import "./styles/Home.scss";
import portrait from "./assets/portrait.png";
import ParticleBackground from "./ParticleBackground";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typical from "react-typical";

const styles = {
  root: {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: "100%",
    background: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const Home = () => {
  return (
    <div className="home">
      <div style={styles.root}></div>

      <div
        className="home__container"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="home__content">
          <Container>
            <Row>
              <Col>
                <div className="text">
                  <p>Hello World</p>
                  <h1>I'm Johnny Ly </h1>
                  <p>
                    <Typical
                      loop={Infinity}
                      wrapper="b"
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

                  <div className="icons">
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
                            <LinkedIn />{" "}
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
                            <GitHub />
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
                            <Instagram />{" "}
                          </li>
                        </a>
                      </ul>
                    </div>

            
                  </div>

                  
                </div>
              </Col>

              <Col>
                <div
                  className="home__img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img src={portrait} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="particleCanvas">
        <ParticleBackground
          // style = {styling}
          width="10%"
          className="particles-wrapper"
        />
      </div>
    </div>
  );
};

export default Home;
