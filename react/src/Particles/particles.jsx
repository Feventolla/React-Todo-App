import React from "react";
import Particles from "react-tsparticles";
import particlesconfig from "./particlesconfig";
import plan1 from "../assets/plan1.svg";
import plan2 from "../assets/plan2.svg";
import plan3 from "../assets/plan3.svg";
import plan4 from "../assets/plan4.svg";
import { loadSlim } from "tsparticles-slim";
import { useMemo } from "react";
import { useCallback } from "react";
import "./particles.css";

const Particle = () => {
  const options = useMemo(() => {
    return {
      // background: {
      //   color: "#000",
      // },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        modes: {
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 100,
          },
        },
      },
      particles: {
        move: {
          enable: true,
          speed: { min: 1, max: 3 },
        },
        links: {
          enable: true,
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    };
  }, []);
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return (
    <Particles className="particle" init={particlesInit} options={options} />

    // <div className="particle">
    //   <Particles
    //     id="tsparticles"
    //     options={{
    //       fullScreen: {
    //         enable: true,
    //         zIndex: 1,
    //       },
    //       detectRetina: true,
    //       fpsLimit: 60,
    //       interactivity: {
    //         events: {
    //           onClick: {
    //             enable: true,
    //             mode: "push",
    //           },
    //           onDiv: {
    //             elementId: "repulse-div",
    //             enable: false,
    //             mode: "repulse",
    //           },
    //           onHover: {
    //             enable: true,
    //             mode: "bubble",
    //             parallax: {
    //               enable: false,
    //               force: 60,
    //               smooth: 10,
    //             },
    //           },
    //           resize: true,
    //         },
    //         modes: {
    //           bubble: {
    //             distance: 400,
    //             duration: 2,
    //             opacity: 0.8,
    //             size: 2,
    //           },
    //           connect: {
    //             distance: 80,
    //             lineLinked: {
    //               opacity: 0.5,
    //             },
    //             radius: 60,
    //           },
    //           grab: {
    //             distance: 400,
    //             lineLinked: {
    //               opacity: 1,
    //             },
    //           },
    //           push: {
    //             quantity: 2,
    //           },
    //           remove: {
    //             quantity: 2,
    //           },
    //           repulse: {
    //             distance: 200,
    //             duration: 0.4,
    //           },
    //         },
    //       },
    //       particles: {
    //         color: {
    //           value: "#ffffff",
    //         },
    //         lineLinked: {
    //           blink: false,
    //           color: "#000",
    //           consent: false,
    //           distance: 150,
    //           enable: false,
    //           opacity: 0.4,
    //           width: 1,
    //         },
    //         move: {
    //           attract: {
    //             enable: false,
    //             rotate: {
    //               x: 600,
    //               y: 1200,
    //             },
    //           },
    //           bounce: false,
    //           direction: "none",
    //           enable: true,
    //           outMode: "out",
    //           random: false,
    //           speed: 2,
    //           straight: false,
    //         },
    //         number: {
    //           density: {
    //             enable: true,
    //             area: 800,
    //           },
    //           limit: 20,
    //           value: 15,
    //         },
    //         opacity: {
    //           animation: {
    //             enable: true,
    //             minimumValue: 0.2,
    //             speed: 1,
    //             sync: false,
    //           },
    //           random: true,
    //           value: 1,
    //         },
    //         rotate: {
    //           animation: {
    //             enable: true,
    //             speed: 5,
    //             sync: false,
    //           },
    //           direction: "random",
    //           random: true,
    //           value: 0,
    //         },
    //         shape: {
    //           character: {
    //             fill: false,
    //             font: "Verdana",
    //             style: "",
    //             value: "*",
    //             weight: "400",
    //           },
    //           image: [
    //             {
    //               src: plan1,
    //               width: 40,
    //               height: 40,
    //             },
    //             {
    //               src: plan2,
    //               width: 40,
    //               height: 40,
    //             },
    //             {
    //               src: plan3,
    //               width: 40,
    //               height: 40,
    //             },
    //             {
    //               src: plan4,
    //               width: 40,
    //               height: 40,
    //             },
    //           ],
    //           polygon: {
    //             sides: 5,
    //           },
    //           stroke: {
    //             color: "#000000",
    //             width: 0,
    //           },
    //           type: "image",
    //         },
    //         size: {
    //           animation: {
    //             enable: false,
    //             minimumValue: 0.2,
    //             speed: 40,
    //             sync: false,
    //           },
    //           random: false,
    //           value: 16,
    //         },
    //       },
    //       polygon: {
    //         draw: {
    //           enable: false,
    //           lineColor: "#ffffff",
    //           lineWidth: 0.5,
    //         },
    //         move: {
    //           radius: 10,
    //         },
    //         scale: 1,
    //         url: "",
    //       },
    //       background: {
    //         image: "",
    //         position: "50% 50%",
    //         repeat: "no-repeat",
    //         size: "cover",
    //       },
    //     }}
    //   />
    // </div>
  );
};

export default Particle;
