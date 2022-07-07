import ParticlesComponent from "../../Components/Particles/Particles";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <ParticlesComponent id="home-page-particles" />
      <h1>Home Page of the Front End Challenge</h1>
    </div>
  );
};

export default HomePage;
