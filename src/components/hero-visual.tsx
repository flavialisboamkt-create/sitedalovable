import { useEffect, useRef } from "react";

const particles = [
  { l: "62%", t: "22%", d: "0s", s: 3 }, { l: "78%", t: "16%", d: "3s", s: 2 },
  { l: "88%", t: "38%", d: "6s", s: 3 }, { l: "70%", t: "70%", d: "2s", s: 2 },
  { l: "92%", t: "64%", d: "8s", s: 2 }, { l: "56%", t: "52%", d: "5s", s: 2 },
  { l: "82%", t: "84%", d: "10s", s: 3 },
];

export function HeroVisual({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const fine = window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches;
    let mx = 0, my = 0, cx = 0, cy = 0, raf = 0;
    const onMove = (e: PointerEvent) => { mx = (e.clientX / window.innerWidth - 0.5) * 2; my = (e.clientY / window.innerHeight - 0.5) * 2; };
    const tick = () => {
      cx += (mx - cx) * 0.06; cy += (my - cy) * 0.06;
      const sy = Math.min(window.scrollY, 900) * 0.25;
      el.style.transform = `translate3d(${(cx * 14).toFixed(2)}px, ${(cy * 10 + sy).toFixed(2)}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    if (fine) window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", onMove); };
  }, []);
  return (
    <div className="hero-visual">
      <div ref={ref} className="hero-parallax">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-enter"><img src={src} alt={alt} width={1536} height={1024} className="hero-image hero-float" /></div>
        {particles.map((p, i) => <span key={i} aria-hidden="true" className="hero-particle" style={{ left: p.l, top: p.t, width: p.s, height: p.s, animationDelay: p.d }} />)}
      </div>
    </div>
  );
}
