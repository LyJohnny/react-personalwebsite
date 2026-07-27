import React from "react";
import { useInView } from "react-intersection-observer";
import "../styles/Skills.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import sql from "../assets/sql.webp";
import agile from "../assets/agile.webp";
import typingSpeed from "../assets/typingSpeed.webp";
import photography from "../assets/photography.webp";
import lightroom from "../assets/lightroom.webp";

// Icons are served from the devicons set on jsDelivr. The site's CSP only
// allows images from 'self' and https://cdn.jsdelivr.net, so any icon added
// here must come from that CDN or be imported as a local asset instead.
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const devicon = (path) => `${DEVICON}/${path}.svg`;

// Each card renders as two columns: `left` and `right`.
const CARDS = [
  {
    title: "Languages",
    left: [
      { label: "HTML", src: devicon("html5/html5-original-wordmark") },
      { label: "CSS", src: devicon("css3/css3-original-wordmark") },
      { label: "JavaScript", src: devicon("javascript/javascript-original") },
      { label: "TypeScript", src: devicon("typescript/typescript-original") },
    ],
    right: [
      { label: "Java", src: devicon("java/java-original") },
      { label: "Python", src: devicon("python/python-original") },
      { label: "SQL", src: sql },
    ],
  },
  {
    title: "Frameworks & Libraries",
    left: [
      { label: "Spring", src: devicon("spring/spring-original") },
      { label: "Angular", src: devicon("angular/angular-original") },
      { label: "React", src: devicon("react/react-original") },
      { label: "Node", src: devicon("nodejs/nodejs-original") },
    ],
    right: [
      { label: "JUnit", src: devicon("junit/junit-original") },
      { label: "Scss", src: devicon("sass/sass-original") },
      { label: "Bootstrap", src: devicon("bootstrap/bootstrap-original") },
    ],
  },
  {
    title: "Tools & Platforms",
    left: [
      { label: "Git", src: devicon("git/git-original") },
      { label: "Jenkins", src: devicon("jenkins/jenkins-original") },
      { label: "PostgreSQL", src: devicon("postgresql/postgresql-original") },
      // Oracle and Splunk ship only as wordmarks on a square canvas, so they
      // use `icon--wordmark` to scale the artwork up without changing the box.
      { label: "Oracle", src: devicon("oracle/oracle-original"), cls: "icon icon--wordmark" },
    ],
    right: [
      { label: "Splunk", src: devicon("splunk/splunk-original-wordmark"), cls: "icon icon--wordmark" },
      { label: "GraphQL", src: devicon("graphql/graphql-plain") },
      { label: "Postman", src: devicon("postman/postman-original") },
      { label: "Swagger", src: devicon("swagger/swagger-original") },
    ],
  },
  {
    title: "Other",
    left: [
      { label: "AGILE Methodologies", src: agile, cls: "other-icon" },
      { label: "Typing Speed: 110+ WPM", src: typingSpeed, cls: "other-icon" },
      { label: "Photography", src: photography, cls: "other-icon" },
    ],
    right: [
      { label: "Lightroom", src: lightroom },
      { label: "Figma", src: devicon("figma/figma-original") },
    ],
  },
];

const IconList = ({ items }) =>
  items.map((item) => (
    <React.Fragment key={item.label}>
      <img className={item.cls || "icon"} src={item.src} alt={item.label} />
      <div className="icon-text">{item.label}</div>
    </React.Fragment>
  ));

const Skills = () => {
  const { ref: myRef, inView: visibleElement } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="skills">
      <div className="skills__container">
        <Container className="skill-container" xs="12">
          <Row>
            {CARDS.map((card, i) => (
              // Two cards per row from md up, stacked full-width below that.
              <Col key={card.title} xs={12} md={6} className={`showH${i + 1}`}>
                <h2 className="skills-header"> {card.title} </h2>
                <Col
                  className={`${"hidden"} ${
                    visibleElement ? `appear${i === 0 ? "" : i + 1}` : ""
                  }`}
                  ref={i === 0 ? myRef : undefined}
                >
                  <Row>
                    <Col className={`logo-container${i + 1}`} xs="6">
                      <IconList items={card.left} />
                    </Col>
                    <Col className="logo-container-half" xs="6">
                      <IconList items={card.right} />
                    </Col>
                  </Row>
                </Col>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;
