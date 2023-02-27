// Config Particles JS from https://vincentgarreau.com/particles.js/#default, export to JSON then convert from JSON to JS using: https://csvjson.com/json_beautifier
const particlesConfig = {

   
    background: {
        color: "#202329",     
        
      },

      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      // THIS RIGHT HERE was to make it so that the particles js background only fills the home div for home component and not overlap!! 1-10-23
      style: {
        position: "absolute" 
      },

    particles: {
      number: {
        value: 35,
        density: {
          enable: false,
          auto: true,
          // value_area: 2000
        }
      },
      color: {
        value: "#000000"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.5,
          sync: true
        }
      },
      size: {
        value: 1,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 3,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.5,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce",
        bounce: true,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  };




export default particlesConfig;
