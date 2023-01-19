import React,{useState, useRef} from 'react';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
// import Header from './components/Header';




function App() {
  const aboutRef = useRef(null);
  return (
    <div className='App'>
      {/* <Header/> */}
      <Home aboutRef={aboutRef}/>
      <About ref={aboutRef}/>

    </div>
  );
}

export default App;
