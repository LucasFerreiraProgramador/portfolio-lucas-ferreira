import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const isMobile = () => window.innerWidth < 768;

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const mobile = isMobile();

  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: mobile ? 30 : 60,
      interactivity: {
        events: {
          onHover: { enable: !mobile, mode: "grab" },
          onClick: { enable: !mobile, mode: "push" },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.5 } },
          push: { quantity: 2 },
        },
      },
      particles: {
        color: { value: ["#00f3ff", "#7b2cbf", "#00d4ff"] },
        links: {
          color: "#00f3ff",
          distance: 150,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: mobile ? 0.5 : 1,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: mobile ? 25 : 60,
        },
        opacity: { value: 0.4 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [mobile]
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      options={options}
    />
  );
};

export default ParticlesBackground;
