import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./Particle-Config";


export default function ParticleBackground() {
    return (
        <Particles 
        params ={particlesConfig} className = "particles-canvas" width="100vw" margin="auto"> </Particles>
    );
}