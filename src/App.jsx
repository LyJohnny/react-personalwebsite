import React,{useRef} from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
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
