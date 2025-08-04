// components/GalaxyBackground.jsx
const { useEffect, useMemo } = React;

function GalaxyBackground() {
  // 1) 파티클 옵션 정의 (Galaxy 배경)
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

  // 2) 컴포넌트가 마운트된 후 tsParticles 로 불러오기
  useEffect(() => {
    if (window.tsParticles) {
      // id="tsparticles" 요소에 캔버스를 그려줍니다
      window.tsParticles.load("tsparticles", options);
    }
  }, [options]);

  // 3) 실제로는 빈 div 하나만 두면, tsParticles가 내부에서 <canvas>를 생성합니다
  return (
    <div
      id="tsparticles"
      className="fixed inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
}

// 전역에 노출
window.GalaxyBackground = GalaxyBackground;
