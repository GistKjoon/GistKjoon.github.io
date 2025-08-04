// components/GalaxyBackground.jsx
const { useEffect, useMemo } = React;

function GalaxyBackground() {
  // 1) Galaxy 옵션 정의
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

  // 2) 컴포넌트 마운트 시 tsParticles 로드
  useEffect(() => {
    if (window.tsParticles) {
      // 'tsparticles'라는 id로 파티클 렌더링
      window.tsParticles.load("tsparticles", options);
    }
  }, [options]);

  // 3) 실제 렌더링할 div (canvas는 tsParticles가 자동 생성)
  return (
    <div
      id="tsparticles"
      className="fixed inset-0 z-0"
      style={{ pointerEvents: "none" }}  // 배경에만 쓰이도록
    />
  );
}

// 전역으로 노출해서 <GalaxyBackground /> 로 사용 가능
window.GalaxyBackground = GalaxyBackground;
