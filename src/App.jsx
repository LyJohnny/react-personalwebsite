import React,{useRef} from 'react';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer';




function App() {
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  return (
    <div className='App'>
      <Home aboutRef={aboutRef} portfolioRef={portfolioRef}/>
      <About ref={aboutRef}/>
      <Skills />
      <Portfolio ref = {portfolioRef} />
      <Footer />

    </div>
  );
}

export default App;
