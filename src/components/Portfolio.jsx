import React, { forwardRef } from 'react'
import './styles/Portfolio.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';



const Portfolio = forwardRef((props,ref) => {


  return (
    
    <div className='portfolio'>


    <div className="portfolio" ref = {ref}>

    <Container>
      
   <h1 className='headingText'>Portfolio</h1>
    </Container>

  

    </div>
    </div>
  )
});

export default Portfolio;