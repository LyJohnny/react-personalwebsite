import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from "./styles/Portfolio.scss";
import DvrIcon from '@mui/icons-material/Dvr';
import huf from './assets/huf.png'
import { GitHub } from "@mui/icons-material";


function Projects () {

    return(
       
        <div className='projectsTab'>
            <Container className='project-container'>
     

                <Row> 
      <Col className="logo-container" lg="auto">
                      <img src={huf} width='100px'/>
        </Col>
        <Col lg> 
        <b style={{fontSize: "20px"}}> Hispanic Unity of Florida Website </b>
        <p style={{fontSize: "15px"}}> JPMorgan Chase &amp; Co. Code For Good  </p>
        <p style={{fontSize: "12px"}}> February 2022 </p>
        <a className="githubLink" href="https://www.github.com/LyJohnny" target="_blank"
                        >
                            <GitHub
                              fontSize="large"
                              style={{ color: "black" }}
                            /> View on GitHub
                         
                        </a>
        <p id='project-description'>
            Redesigned the Hispanic Unity of Florida’s website to be more modern and accessible.
        </p>
        </Col>
      </Row>
      <Row>
      <Col className="tool-container" lg="auto">
                <img className="tool-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"  />
                HTML
              </Col>
              <Col className="tool-container" lg="auto">
                <img className="tool-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                CSS
              </Col>
              <Col className="tool-container" lg="auto">
                <img className="tool-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  />
                JavaScript
              </Col>
              <Col className="tool-container" lg="auto">
                <img className="tool-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"  />
                Bootstrap
              </Col>
              <Col className="tool-container" lg="auto">
                <img className="tool-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  />
                Git
              </Col>
      </Row>
            </Container>

    <Container>
     

                <Row> 
      <Col className="logo-container" lg="auto">
                      <img src={huf} width='100px'/>
        </Col>
        <Col lg> 
        <b style={{fontSize: "20px"}}> Hispanic Unity of Florida Website </b>
        <p style={{fontSize: "15px"}}> JPMorgan Chase &amp; Co. Code For Good  </p>
        <p style={{fontSize: "12px"}}> February 2022 </p>
        <a className="githubLink" href="https://www.github.com/LyJohnny" target="_blank"
                        >
                            <GitHub
                              fontSize="large"
                              style={{ color: "black" }}
                            /> View on GitHub
                         
                        </a>
        <p id='project-description'>
            Redesigned the Hispanic Unity of Florida’s website to be more modern and accessible.
        </p>
        </Col>
      </Row>
      <Row>
      <Col className="tool-container" lg="auto">
                <img className="tool-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"  />
                HTML
              </Col>
              <Col className="tool-container" lg="auto">
                <img className="tool-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                CSS
              </Col>
              <Col className="tool-container" lg="auto">
                <img className="tool-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  />
                JavaScript
              </Col>
              <Col className="tool-container" lg="auto">
                <img className="tool-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"  />
                Bootstrap
              </Col>
              <Col className="tool-container" lg="auto">
                <img className="tool-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  />
                Git
              </Col>
      </Row>
            </Container>

        </div>
    
    
    )
        };
    
    export default Projects;
    