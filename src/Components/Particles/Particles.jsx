import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
// import { loadFull } from "tsparticles"; // load tsparticles
import { useCallback, useMemo } from "react";

const ParticlesComponent = ({ id }) => {
  const enable = true;

  const options = useMemo(() => {
    // Using an empty options will load default options
    return {
      // background: {
      //   // color // Background colour
      // },
      fullScreen: {
        enable, // Enabled by default, the canvas fills the entire screen
        zIndex: -1, // This is 0 by default. Can make this negative and disable any background color in css to show
      },
      // interactivity: {
      //   events: {
      //     onClick: {
      //       enable, // Enables the click event
      //       mode: "push", // Adds new particles with click
      //     },
      //     onHover: {
      //       enable,
      //       mode: "repulse",
      //     },
      //   },
      //   modes: {
      //     push: {
      //       quantity: 10, // Number of particles added on click
      //     },
      //     repulse: {
      //       distance: 100, // Distance of particles from mouse
      //     },
      //   },
      // },
      particles: {
        color: {
          value: "#0d47a1",
        },
        links: {
          color: {
            value: "#000000",
          },
          enable, // This shows linkage between points
          distance: 100, //Maximum distance between particles
        },
        move: {
          enable, // This enables movement
          speed: { min: 1, max: 3 }, // Randomize the speed of each particle
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // Semi-transparent effects
        },
        size: {
          value: { min: 1, max: 3 }, // This randomly assigns a size to the particles
        },
      },
    };
  }, [enable]);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine) // Slim is smaller but doesn't have all the plugins and the mouse trail feature
  }, []);

  // Giving an id so easy to know which one you're seeing.
  return <Particles id={id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
