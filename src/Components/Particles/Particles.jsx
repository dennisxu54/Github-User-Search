import Particles from "react-tsparticles/types/Particles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
// import { loadFull } from "tsparticles"; // load tsparticles
import { useCallback, useMemo } from "react";

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {};
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine) // Slim is smaller but doesn't have all the plugins and the mouse trail feature
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;
