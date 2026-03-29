import { useEffect, useRef, useState } from 'react';

// Only show on pointer:fine devices (desktop/trackpad — not touch)
function useIsPointerFine() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    setFine(window.matchMedia('(pointer: fine)').matches);
  }, []);
  return fine;
}

const TRAIL_LENGTH = 5;

export default function CursorGlow() {
  const isPointerFine = useIsPointerFine();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const posRef = useRef({ x: -200, y: -200 });
  const ringPosRef = useRef({ x: -200, y: -200 });
  const trail = useRef<{ x: number; y: number }[]>([]);
  const hoveredRef = useRef(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (!isPointerFine) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      // Track trail positions
      trail.current.unshift({ x: e.clientX, y: e.clientY });
      if (trail.current.length > TRAIL_LENGTH) trail.current.pop();

      const target = e.target as HTMLElement;
      hoveredRef.current = !!(target.closest('[data-hover]') || target.closest('button') || target.closest('a'));
    };

    const animate = () => {
      const { x, y } = posRef.current;

      // Dot — instant follow
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
      }

      // Glow — instant follow
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(200px circle at ${x}px ${y}px, rgba(34,211,238,0.07), transparent 70%)`;
      }

      // Ring — lerp follow
      ringPosRef.current.x += (x - ringPosRef.current.x) * 0.12;
      ringPosRef.current.y += (y - ringPosRef.current.y) * 0.12;
      if (ringRef.current) {
        const rx = ringPosRef.current.x;
        const ry = ringPosRef.current.y;
        const isHovered = hoveredRef.current;
        ringRef.current.style.transform = `translate(${rx - 16}px, ${ry - 16}px) scale(${isHovered ? 1.8 : 1})`;
        ringRef.current.style.borderColor = isHovered ? 'rgba(34,211,238,0.9)' : 'rgba(34,211,238,0.5)';
        ringRef.current.style.backgroundColor = isHovered ? 'rgba(34,211,238,0.08)' : 'transparent';
      }

      // Trail dots
      for (let i = 0; i < TRAIL_LENGTH; i++) {
        const el = trailRefs.current[i];
        const pos = trail.current[i];
        if (el && pos) {
          const opacity = (1 - i / TRAIL_LENGTH) * 0.25;
          const size = 4 - i * 0.5;
          el.style.transform = `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`;
          el.style.opacity = String(opacity);
          el.style.width = `${size}px`;
          el.style.height = `${size}px`;
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPointerFine]);

  if (!isPointerFine) return null;

  return (
    <>
      {/* Fixed glow overlay */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-[9998]"
        style={{ background: 'transparent' }}
      />
      {/* Trail dots */}
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { trailRefs.current[i] = el; }}
          className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-cyan-400"
          style={{ width: 4, height: 4, opacity: 0, willChange: 'transform' }}
        />
      ))}
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-cyan-300"
        style={{ willChange: 'transform' }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-cyan-400/50"
        style={{ transition: 'border-color 0.2s, background-color 0.2s, transform 0.05s linear', willChange: 'transform' }}
      />
    </>
  );
}
