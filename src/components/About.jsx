import React, { forwardRef } from 'react'
import './styles/About.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ucm from "./assets/ucm.png"
import jpmc from "./assets/jpmc.jpeg"
import flsp from "./assets/flsp.png"
import research from "./assets/research.png"
import i2g from "./assets/i2g.jpg"
import ylp from "./assets/ylp.png"


const About = forwardRef((props,ref) => {


  return (
    
    <div className='about'>


    <div className="about__container" ref = {ref}>

    <Container>
      <Row>
        <Col lg={8}> <h1>Education</h1></Col>
        <Col lg={4}> <h1>Work Experience</h1></Col>
      </Row>
      <Row>
      <Col className="logo-container" lg="auto">
                      <img className="logo" src={ucm} alt="UCM" />
        </Col>
        <Col lg>
           <b style={{fontSize: "20px"}}> University of California, Merced </b>
           <p id='title' style={{fontSize: "15px"}}> B.S. in Computer Science and Engineering</p>
           <p id='date' style={{fontSize: "12px"}}> August 2019 - May 2023 </p>
           <b> Relevant Coursework:</b>
           <ul className='coursework'> 
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
        {/* Empty column to separate two columns */}
        <Col lg></Col>
        <Col className="logo-container" lg="auto">
                      <img className="logo" src={jpmc} alt="JPMC" />
        </Col>

        <Col lg> 
        <b style={{fontSize: "20px"}}> JPMorgan Chase &amp; Co. </b>
        <p style={{fontSize: "15px"}}> Software Engineer Intern</p>
        <p style={{fontSize: "12px"}}> June 2022 - August 2022 </p>
        <p>Modernized the Loan Editor App for the Markets Technology Team used for managing 
          loan deliveries, delivering traded pools to several agencies, and identifying and remediating
           data quality issues that may prevent loan sales.</p>
        </Col>
      </Row>
      <Row>

      <Col className="logo-container" lg="auto">
                      <img className="logo" src={research} alt="RESEARCH" />
        </Col>
        <Col lg> 
        <b style={{fontSize: "20px"}}> Undergraduate Research </b>
        <p style={{fontSize: "15px"}}> UC Merced Yosemite Coronavirus Time Capsule Team </p>
        <p style={{fontSize: "12px"}}> September 2020 - May 2021 </p>
        <p>Assessed the impact of the COVID-19 pandemic on Yosemite National Park in
           collaboration with Dr. Jeffrey Jenkins, 2 graduate students, and 4 other cohort members 
           from the Yosemite Leadership Program.</p>
        </Col>
        <Col lg></Col>

        <Col className="logo-container" lg="auto">
                      <img className="logo" src={flsp} alt="FLSP" />
        </Col>
        <Col lg> 
        <b style={{fontSize: "20px"}}> UC Merced Fiat Lux Scholars Program </b>
        <p style={{fontSize: "15px"}}> Academic Scholar</p>
        <p style={{fontSize: "12px"}}> August 2021 - May 2022 </p>
        <p>Planned, coordinated, and implemented large scale social events to facilitate connections and 
          contribute to building community among participants in the program.</p>
        </Col>

      </Row>
      <Row>
        <Col lg={8}> <h1>Activities + Leadership Experience</h1></Col>
        <Col lg={4}> <h1>Achievements</h1></Col>
      </Row>

      <Row> 
      <Col className="logo-container" lg="auto">
                      <img className="logo" src={i2g} alt="I2G" />
        </Col>
        <Col lg> 
        <b style={{fontSize: "20px"}}> Innovate to Grow </b>
        <p style={{fontSize: "15px"}}> Front End Developer </p>
        <p style={{fontSize: "12px"}}> September 2022 - December 2022 </p>
        <p>Partnered with Western Digital Corporation to develop a web application for their Internal Developer team to display Key Performance Indicators (KPI)
         reports for the purpose of enhancing team performance and metrics. 
        </p>
        </Col>
        <Col lg></Col>
        {/* Empty column to separate two columns */}
        <Col lg></Col>

      </Row>
   
      <Row> 
      <Col className="logo-container" lg="auto">
                      <img className="logo" src={ylp} alt="I2G" />
        </Col>
        <Col lg> 
        <b style={{fontSize: "20px"}}> Yosemite Leadership Program </b>
        <p style={{fontSize: "15px"}}> Cohort Member </p>
        <p style={{fontSize: "12px"}}> September 2019 - May 2021 </p>
        <p>The Yosemite Leadership Program is a hallmark, partnership program between UC Merced and Yosemite National Park. Core responsibilities and 
          accomplishments: Built transformative, leadership lifestyle experiences through cohort curriculum design, coordination of team-building and 
          wilderness experiences, and mentoring students to constantly pursue their personal and professional potential.
          </p>
        </Col>
        <Col lg></Col>
        {/* Empty column to separate two columns */}
        <Col lg></Col>

      </Row>

    </Container>

  

    </div>
    </div>
  )
});

export default About;