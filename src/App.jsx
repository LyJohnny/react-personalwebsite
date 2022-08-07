import React,{useState} from 'react';
import './App.scss';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home'
import ParticleBackground from './components/ParticleBackground';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Home/>
      <About/>

    </div>
  );
}

export default App;
