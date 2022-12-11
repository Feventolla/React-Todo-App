import Particles from "../Particles/particles";
import plan1 from "../assets/plan1.svg";
import plan2 from "../assets/plan2.svg";
import plan3 from "../assets/plan3.svg";
import plan4 from "../assets/plan4.svg";
import { loadSlim } from "tsparticles-slim";
import { useMemo } from "react";
import { useCallback } from "react";
import "../Particles/particles.css";
import Header from "../components/Header/Header";

const Particle = () => {
  return (
    <div className="particle">
      <Header />
      <Particles />
      <p className="hero-section">Let u plan your Todo's</p>
    </div>
  );
};

export default Particle;
