import React, { forwardRef } from 'react'
import './styles/Portfolio.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {Tab, Tabs } from 'react-bootstrap';
import Photography from './photography';
import Research from './research';
import Projects from './projects';



const Portfolio = forwardRef((props,ref) => {


  return (
    
    <div className='portfolio'>


    <div className="portfolio" ref = {ref}>

    <Container>
      
   <h1 className='headingText'>Portfolio</h1>
   <Tabs justify>
     <Tab eventKey="projects" title="Projects" >
       <Projects/>
        </Tab>
     <Tab eventKey="photography" title="Photography">
       <Photography/> </Tab>
     {/* <Tab eventKey="research" title="Research"> 
     <Research/> </Tab> */}
    

   </Tabs>
    </Container>

  

    </div>
    </div>
  )
});

export default Portfolio;