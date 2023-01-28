import React, { forwardRef } from 'react'
import './styles/Portfolio.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import TooltipPositionedExample from './tooltips';



const Portfolio = forwardRef((props,ref) => {


  return (
    
    <div className='portfolio'>


    <div className="portfolio" ref = {ref}>

    <Container>
      
   <h1> My Portfolio</h1>
    <TooltipPositionedExample/>
    </Container>

  

    </div>
    </div>
  )
});

export default Portfolio;