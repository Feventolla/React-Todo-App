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
  // const options = useMemo(() => {
  //   return {
  //     // background: {
  //     //   color: "#000",
  //     // },
  //     interactivity: {
  //       events: {
  //         onClick: {
  //           enable: true,
  //           mode: "push",
  //         },
  //         onHover: {
  //           enable: true,
  //           mode: "repulse",
  //         },
  //       },
  //       modes: {
  //         push: {
  //           quantity: 10,
  //         },
  //         repulse: {
  //           distance: 100,
  //         },
  //       },
  //     },
  //     particles: {
  //       move: {
  //         enable: true,
  //         speed: { min: 1, max: 3 },
  //       },
  //       links: {
  //         enable: true,
  //       },
  //       opacity: {
  //         value: { min: 0.3, max: 0.7 },
  //       },
  //       size: {
  //         value: { min: 1, max: 3 },
  //       },
  //     },
  //   };
  // }, []);
  // const particlesInit = useCallback((engine) => {
  //   loadSlim(engine);
  // }, []);

  return (
    <div className="particle">
      <Header />
      <Particles />
      <p className="hero-section">Let u plan your Todo's</p>
    </div>
  );
};

export default Particle;
