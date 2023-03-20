import React, { forwardRef } from "react";
import "../styles/About.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ucm from "../assets/ucm.webp";
import jpmc from "../assets/jpmc.webp";
import flsp from "../assets/flsp.webp";
import research from "../assets/ucresearch.webp";
import i2g from "../assets/i2g.webp";
import ylp from "../assets/ylp.webp";
import ucm2 from "../assets/ucm2.webp";

const About = forwardRef((props, ref) => {
  return (
    <div className="about">
      <div className="about-container" ref={ref}>
        <Container>
          <Row id="row1">
            <Col className="mainCol" lg={6}>
              <h1>Education</h1>
              <div className="leftCol">
                <Row>
                  <Col className="logo-container" lg="auto">
                    <img className="logo" src={ucm} alt="UCM" />
                  </Col>
                  <Col lg className="description-container">
                    <b style={{ fontSize: "20px" }}>
                      {" "}
                      University of California, Merced{" "}
                    </b>
                    <p id="title" style={{ fontSize: "15px" }}>
                      {" "}
                      B.S. in Computer Science and Engineering
                    </p>
                    <p id="date" style={{ fontSize: "12px" }}>
                      {" "}
                      August 2019 - May 2023{" "}
                    </p>
                    <b> Relevant Coursework:</b>
                    <ul className="coursework">
                      <li>Data Structures</li>
                      <li>Algorithm Design and Analysis</li>
                      <li>Object Oriented Programming</li>
                      <li>Database Systems</li>
                      <li>Software Engineering</li>
                      <li>Computer Architecture</li>
                      <li>Human-Computer Interaction</li>
                      <li>Digital Image Processing</li>
                      <li>Discrete Mathematics</li>
                      <li>Programming in Java</li>
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <Col className="logo-container" lg="auto">
                    <img className="logo" src={research} alt="RESEARCH" />
                  </Col>
                  <Col lg className="description-container">
                    <b style={{ fontSize: "20px" }}> Undergraduate Research </b>
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      UC Merced Yosemite Coronavirus Time Capsule Team{" "}
                    </p>
                    <p id="date" style={{ fontSize: "12px" }}>
                      {" "}
                      September 2020 - May 2021{" "}
                    </p>
                    <p>
                      In collaboration with Dr. Jeffrey Jenkins, 2 graduate
                      students, and 4 other Yosemite Leadership Program cohort
                      members, conducted an assessment of COVID-19's impact on
                      Yosemite National Park. Co-authored a Case Study Article
                      examining the pandemic's effects on the park and its
                      implications for tourism and park management. Assisted in
                      researching the quantitative and qualitative changes in
                      Yosemite National Park due to COVID-19 restrictions and
                      lockdowns.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>

            {/* -------------------------------------------------End of First Column----------------------------------------------------------------- */}

            <Col className="mainCol" lg={6}>
              <h1>Work Experience</h1>
              <div className="rightCol">
                <Row>
                  <Col className="logo-container" lg="auto">
                    <img className="logo" src={jpmc} alt="JPMC" />
                  </Col>

                  <Col lg className="description-container">
                    <b style={{ fontSize: "20px" }}>
                      {" "}
                      JPMorgan Chase &amp; Co.{" "}
                    </b>
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      Software Engineer Intern{" "}
                    </p>
                    <p id="date" style={{ fontSize: "12px" }}>
                      {" "}
                      June 2022 - August 2022{" "}
                    </p>
                    <p>
                      Modernized the Loan Editor App for the Markets Technology
                      Team, used for managing loan deliveries, delivering traded
                      pools to several agencies, and identifying and remediating
                      data quality issues that may prevent loan sales. Worked in
                      an AGILE environment with developers, senior tech leads,
                      and managers to learn the Software Development Life Cycle
                      and how the Corporate Investment Banking line of business
                      operated.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="logo-container" lg="auto">
                    <img className="logo" src={flsp} alt="FLSP" />
                  </Col>
                  <Col lg className="description-container">
                    <b style={{ fontSize: "20px" }}>
                      {" "}
                      UC Merced Fiat Lux Scholars Program{" "}
                    </b>
                    <p style={{ fontSize: "15px" }}> Academic Scholar/Mentor</p>
                    <p id="date" style={{ fontSize: "12px" }}> August 2021 - May 2022 </p>
                    <p>
                      Responsibilities included maintaining accurate records and
                      acting as a liaison between the program staff and
                      scholars. Conducted weekly 1:1 sessions with scholars to
                      set academic goals and make referrals to academic support
                      services on campus. Helped plan and implement monthly
                      social events both in-person and online to foster
                      community among 100+ first-generation college students.
                      Managed the program's Instagram account, sharing relevant
                      updates to 400+ followers.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          {/* ---------------------------------------------------------------Second Half of About Page (2nd Row) ------------------------------------------------------------------- */}
          <Row id="row2">
            <Col className="mainCol" lg={6}>
              <h1>Activities + Leadership Experience</h1>
              <div className="leftCol">
                <Row>
                  <Col className="logo-container" lg="auto">
                    <img className="logo" src={i2g} alt="I2G" />
                  </Col>
                  <Col lg className="description-container">
                    <b style={{ fontSize: "20px" }}> Innovate to Grow </b>
                    <p style={{ fontSize: "15px" }}> Front End Developer </p>
                    <p id="date" style={{ fontSize: "12px" }}>
                      {" "}
                      September 2022 - December 2022{" "}
                    </p>
                    <p>
                      Partnered with Western Digital Corporation to develop a
                      web application for their Internal Developer team to
                      display Key Performance Indicators (KPI) reports for the
                      purpose of enhancing team performance and metrics.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="logo-container" lg="auto">
                    <img className="logo" src={ylp} alt="I2G" />
                  </Col>
                  <Col lg className="description-container">
                    <b style={{ fontSize: "20px" }}>
                      {" "}
                      Yosemite Leadership Program{" "}
                    </b>
                    <p style={{ fontSize: "15px" }}> Alumni </p>
                    <p id="date" style={{ fontSize: "12px" }}>
                      {" "}
                      September 2019 - May 2021{" "}
                    </p>
                    <p>
                      Participated in a two-year leadership program to develop
                      leadership skills through personal and professional
                      development opportunities, along with a one-year Capstone
                      Project. Engaged in leadership seminars, team-building
                      activities, and volunteer projects focused on conservancy,
                      social engagement, and environmental stewardship.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="mainCol" lg={6}>
              {" "}
              <h1>Achievements</h1>
              <div className="leftCol">
                <Row>
                  <Col className="logo-container" lg="auto">
                    <img className="logo" src={ucm2} alt="ucm" />
                  </Col>
                  <Col lg className="description-container">
                    <b style={{ fontSize: "20px" }}>
                      {" "}
                      Chancellor's Honors List{" "}
                    </b>
                    <p style={{ fontSize: "15px" }}> UC Merced </p>
                    <p id="date" style={{ fontSize: "12px" }}> Fall 2019 - Fall 2022 </p>
                    <p>
                      Undergraduate students who are placed on the Dean’s Honor
                      List for both semesters in a single academic year (fall
                      and spring) will be placed on the Chancellor’s Honor List
                      for that academic year.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="logo-container" lg="auto">
                    <img className="logo" src={ucm2} alt="ucm" />
                  </Col>
                  <Col lg className="description-container">
                    <b style={{ fontSize: "20px" }}>
                      {" "}
                      Frances M. Benton Scholarship{" "}
                    </b>
                    <p style={{ fontSize: "15px" }}> UC Merced </p>
                    <p id="date" style={{ fontSize: "12px" }}>
                      {" "}
                      Fall 2021 - Spring 2023{" "}
                    </p>
                    <p>
                      The Frances M. Benton Scholarship is designed to assist
                      continuing undergraduate students who show strong academic
                      promise with a 3.0 GPA or higher and have demonstrated
                      financial need.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
});

export default About;
