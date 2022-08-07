import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./Particle-Config";
import './styles/Home.scss'


export default function ParticleBackground() {
    return (
        <Particles 
        params ={particlesConfig} className = "particles-canvas" > </Particles>
    );
}