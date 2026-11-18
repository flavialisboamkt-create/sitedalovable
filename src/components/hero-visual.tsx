import { useEffect, useRef } from "react";

// Neural nodes of the brain artwork, in the image's own pixel space (840 x 565).
const W = 840;
const H = 565;
const nodes: Array<[number, number]> = [
  [318, 240], [375, 268], [457, 245], [513, 228], [572, 243], [617, 232],
  [535, 268], [457, 304], [613, 314], [523, 338], [604, 368], [661, 369],
  [487, 377], [503, 422], [604, 425],
];
// Connections between nodes (indexes into `nodes`), following the lines drawn in the art.
const links: Array<[number, number]> = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [2, 6], [4, 6], [2, 7], [7, 6],
  [6, 8], [5, 8], [8, 10], [10, 11], [8, 11], [7, 9], [9, 10], [9, 12],
  [12, 13], [10, 14], [13, 14],
];

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
        <div className="hero-enter">
          <div className="hero-art">
            <div className="hero-float hero-art-inner">
              <img src={src} alt={alt} width={1428} height={960} className="hero-brain" fetchPriority="high" />
              <svg className="hero-synapses" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
                {links.map(([a, b], i) => {
                  const [x1, y1] = nodes[a]!;
                  const [x2, y2] = nodes[b]!;
                  return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className="synapse" style={{ animationDelay: `${(i * 0.37) % 4}s` }} />;
                })}
              </svg>
              {nodes.map(([x, y], i) => (
                <span key={i} aria-hidden="true" className="hero-node" style={{ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%`, animationDelay: `${(i * 0.53) % 3.2}s` }} />
              ))}
            </div>
          </div>
        </div>
        {particles.map((p, i) => <span key={i} aria-hidden="true" className="hero-particle" style={{ left: p.l, top: p.t, width: p.s, height: p.s, animationDelay: p.d }} />)}
      </div>
    </div>
  );
}
