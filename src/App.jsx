import React,{useState, useRef} from 'react';
// import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer';
// import Header from './components/Header';




function App() {
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  return (
    <div className='App'>
      {/* <Header/> */}
      <Home aboutRef={aboutRef} portfolioRef={portfolioRef}/>
      <About ref={aboutRef}/>
      <Skills />
      <Portfolio ref = {portfolioRef} />
      <Footer />

    </div>
  );
}

export default App;
