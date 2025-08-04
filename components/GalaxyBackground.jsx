// components/GalaxyBackground.jsx
const { useEffect, useMemo } = React;

function GalaxyBackground() {
  // 1) 옵션 정의 (Galaxy 배경)
  const options = useMemo(() => ({
    background: { color: "#0f172a" },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#ffffff" },
      links: { color: "#ffffff", distance: 120, enable: true, opacity: 0.1, width: 1 },
      move: { enable: true, speed: 1, outModes: { default: "bounce" } },
      number: { value: 80, density: { enable: true, area: 800 } },
      opacity: { value: 0.1 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  }), []);

  // 2) 마운트 직후 tsParticles.load 호출
  useEffect(() => {
    if (window.tsParticles) {
      window.tsParticles.load("tsparticles", options);
    }
  }, [options]);

  // 3) 빈 div 한 개만 두면 tsParticles가 내부에서 <canvas>를 생성합니다
  return (
    <div
      id="tsparticles"
      className="fixed inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
}

// 전역에 노출해야 index.html의 JSX에서 쓸 수 있습니다
window.GalaxyBackground = GalaxyBackground;
