import { GitHub, LinkedIn, Instagram } from '@material-ui/icons'
import React from 'react'
import './styles/Home.scss'
import portrait from './assets/portrait.png'
import ParticleBackground from './ParticleBackground'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
    root: {
        fontFamily: "sans-serif",
        textAlign: "center",
        height: "100%",
        background: "#222",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
};


const Home = () => {
  return (
    <div className='home'>
        <div style={styles.root}> 
        </div>

       

        <div className="home__container"
        style={{
            display: 'flex',
            justifyContent: 'center',
        }}>


        <div className="home__content"> 

    <Container>
      <Row>
        <Col>

        <div className='text'>

            <p>Hello World</p>
            <h1>I am Johnny Ly </h1>
            <p> Software Engineer and Learner </p>


            <div className='icons'>

                <Instagram className='icon'/>
                <LinkedIn className='icon'/>
                <GitHub className='icon'/>

            </div>

                <div className="buttons">

                    <button>My Resume</button>
                    <button> My Portfolio</button>

                </div>
        </div>
        </Col>

        <Col>
        <div className="home__img"
        style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <img src={portrait} alt="" />
        </div>
        </Col>

        </Row>
        </Container>

        </div>
</div>
        
        <div className='particleCanvas'> 
        <ParticleBackground 
        // style = {styling}
        width="10%"
        className = "particles-wrapper" />
        </div>


    </div>
  )
}

export default Home