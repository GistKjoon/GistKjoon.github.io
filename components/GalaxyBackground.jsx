// components/GalaxyBackground.jsx
const { useCallback, useMemo } = React;

/**
 * GalaxyBackground
 * — ReactBits의 Galaxy 파티클 설정을 그대로 사용합니다.
 * — tsparticles 와 react-tsparticles(CDN)를 전역(window)에서 가져다 씁니다.
 */
function GalaxyBackground() {
  // 엔진 초기화 시 전체 모듈 로딩
  const particlesInit = useCallback(async engine => {
    if (window.tsParticles) {
      await window.tsParticles.loadFull(engine);
    }
  }, []);

  // Galaxy background 옵션
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

  // React 요소로 렌더링
  return React.createElement(
    window.ReactParticles.default,
    {
      id: "tsparticles",
      init: particlesInit,
      options,
      className: "fixed inset-0 z-0"
    }
  );
}

// 전역에 노출
window.GalaxyBackground = GalaxyBackground;
