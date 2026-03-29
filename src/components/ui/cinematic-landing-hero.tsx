import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  .film-grain {
    position: absolute; inset: 0; width: 100%; height: 100%;
    pointer-events: none; z-index: 50; opacity: 0.04; mix-blend-mode: overlay;
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .ch-bg-grid {
    background-size: 60px 60px;
    background-image:
      linear-gradient(to right, rgba(148,163,184,0.07) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(148,163,184,0.07) 1px, transparent 1px);
    mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  .text-silver-matte {
    background: linear-gradient(180deg, #F8FAFC 0%, #64748B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateZ(0);
    filter:
      drop-shadow(0px 10px 20px rgba(148,163,184,0.15))
      drop-shadow(0px 2px 4px rgba(148,163,184,0.10));
  }

  .text-card-silver-matte {
    background: linear-gradient(180deg, #FFFFFF 0%, #94A3B8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateZ(0);
    filter:
      drop-shadow(0px 12px 24px rgba(0,0,0,0.8))
      drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  .premium-depth-card {
    background: linear-gradient(145deg, #0d1829 0%, #060b14 100%);
    box-shadow:
      0 40px 100px -20px rgba(0,0,0,0.95),
      0 20px 40px -20px rgba(0,0,0,0.8),
      inset 0 1px 2px rgba(34,211,238,0.08),
      inset 0 -2px 4px rgba(0,0,0,0.8);
    border: 1px solid rgba(34,211,238,0.06);
    position: relative;
  }

  .card-sheen {
    position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
    background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34,211,238,0.04) 0%, transparent 40%);
    mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  /* Terminal / Monitor Mockup */
  .monitor-bezel {
    background: linear-gradient(180deg, #1a1a1a 0%, #111111 100%);
    box-shadow:
      0 0 0 1px #2a2a2a,
      0 40px 80px -15px rgba(0,0,0,0.95),
      0 15px 25px -5px rgba(0,0,0,0.7),
      inset 0 1px 0 rgba(255,255,255,0.05);
  }

  .screen-glow {
    box-shadow:
      0 0 40px rgba(34,211,238,0.08),
      inset 0 0 20px rgba(0,0,0,0.8);
  }

  .terminal-line {
    opacity: 0;
    animation: terminalReveal 0.3s ease forwards;
  }

  @keyframes terminalReveal {
    to { opacity: 1; }
  }

  .floating-ui-badge {
    background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    box-shadow:
      0 0 0 1px rgba(34,211,238,0.12),
      0 25px 50px -12px rgba(0,0,0,0.8),
      inset 0 1px 1px rgba(255,255,255,0.08),
      inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  .progress-ring {
    transform: rotate(-90deg);
    transform-origin: center;
    stroke-dasharray: 402;
    stroke-dashoffset: 402;
    stroke-linecap: round;
  }

  .btn-portfolio-primary {
    background: linear-gradient(180deg, #22d3ee 0%, #0891b2 100%);
    color: #030712;
    font-weight: 700;
    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    box-shadow:
      0 0 0 1px rgba(34,211,238,0.3),
      0 2px 4px rgba(0,0,0,0.4),
      0 12px 24px -4px rgba(34,211,238,0.25),
      inset 0 1px 1px rgba(255,255,255,0.3);
  }
  .btn-portfolio-primary:hover {
    transform: translateY(-3px);
    box-shadow:
      0 0 0 1px rgba(34,211,238,0.5),
      0 6px 12px -2px rgba(34,211,238,0.2),
      0 20px 32px -6px rgba(34,211,238,0.35),
      inset 0 1px 1px rgba(255,255,255,0.3);
  }
  .btn-portfolio-primary:active {
    transform: translateY(1px);
  }

  .btn-portfolio-secondary {
    background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
    color: #e2e8f0;
    font-weight: 600;
    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    box-shadow:
      0 0 0 1px rgba(148,163,184,0.15),
      0 2px 4px rgba(0,0,0,0.6),
      0 12px 24px -4px rgba(0,0,0,0.8),
      inset 0 1px 1px rgba(255,255,255,0.06);
  }
  .btn-portfolio-secondary:hover {
    transform: translateY(-3px);
    background: linear-gradient(180deg, #334155 0%, #1e293b 100%);
    box-shadow:
      0 0 0 1px rgba(148,163,184,0.25),
      0 6px 12px -2px rgba(0,0,0,0.6),
      0 20px 32px -6px rgba(0,0,0,0.9),
      inset 0 1px 1px rgba(255,255,255,0.08);
  }
  .btn-portfolio-secondary:active {
    transform: translateY(1px);
  }
`;

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  tagline1?: string;
  tagline2?: string;
  cardHeading?: string;
  cardDescription?: React.ReactNode;
  metricValue?: number;
  metricLabel?: string;
  ctaHeading?: string;
  ctaDescription?: string;
  onViewProjects?: () => void;
  onContact?: () => void;
}

export function CinematicHero({
  name = "Yashdeep Tehlan",
  tagline1 = "Build systems that",
  tagline2 = "think and scale.",
  cardHeading = "Backend precision. AI intelligence.",
  cardDescription = (
    <>
      <span className="text-white font-semibold">Yashdeep Tehlan</span> builds
      production-grade LLM applications, RAG pipelines, and high-performance
      FastAPI backends — turning applied AI research into deployed, measurable
      systems.
    </>
  ),
  metricValue = 95,
  metricLabel = "Python",
  ctaHeading = "Let's build together.",
  ctaDescription =
    "Available for full-time AI Engineer, Backend Engineer, and Applied ML Engineer roles in Canada.",
  onViewProjects,
  onContact,
  className,
  ...props
}: CinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  // High-performance mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          mainCardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;
          gsap.to(mockupRef.current, {
            rotationY: xVal * 10,
            rotationX: -yVal * 8,
            ease: "power3.out",
            duration: 1.4,
          });
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Cinematic scroll timeline
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(".ch-text-track", { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 });
      gsap.set(".ch-text-role", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".ch-main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set([".ch-card-left", ".ch-card-right", ".ch-mockup-wrap", ".ch-badge", ".ch-terminal-content"], { autoAlpha: 0 });
      gsap.set(".ch-cta-wrap", { autoAlpha: 0, scale: 0.85, filter: "blur(30px)" });

      // Intro animation
      const introTl = gsap.timeline({ delay: 0.4 });
      introTl
        .to(".ch-text-track", {
          duration: 1.8, autoAlpha: 1, y: 0, scale: 1,
          filter: "blur(0px)", rotationX: 0, ease: "expo.out"
        })
        .to(".ch-text-role", {
          duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut"
        }, "-=1.0");

      // Scroll timeline
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=7000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        // Phase 1: Hero text fades, card rises
        .to([".ch-hero-text", ".ch-bg-grid"], {
          scale: 1.12, filter: "blur(18px)", opacity: 0.15,
          ease: "power2.inOut", duration: 2
        }, 0)
        .to(".ch-main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)

        // Phase 2: Card expands fullscreen
        .to(".ch-main-card", {
          width: "100%", height: "100%", borderRadius: "0px",
          ease: "power3.inOut", duration: 1.5
        })

        // Phase 3: Terminal mockup rises from below with 3D spin
        .fromTo(".ch-mockup-wrap",
          { y: 280, z: -400, rotationX: 45, rotationY: -25, autoAlpha: 0, scale: 0.65 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2.5 },
          "-=0.8"
        )

        // Phase 4: Terminal content streams in
        .to(".ch-terminal-content", {
          autoAlpha: 1, stagger: 0.12, ease: "power2.out", duration: 0.8
        }, "-=1.5")
        .to(".progress-ring", { strokeDashoffset: 60, duration: 2, ease: "power3.inOut" }, "-=1.2")
        .to(".counter-val", { innerHTML: metricValue, snap: { innerHTML: 1 }, duration: 2, ease: "expo.out" }, "-=2.0")

        // Phase 5: Badges fly in
        .fromTo(".ch-badge",
          { y: 80, autoAlpha: 0, scale: 0.75, rotationZ: -8 },
          { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.4, stagger: 0.18 },
          "-=1.8"
        )

        // Phase 6: Card text slides in from sides
        .fromTo(".ch-card-left", { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 }, "-=1.2")
        .fromTo(".ch-card-right", { x: 50, autoAlpha: 0, scale: 0.85 }, { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5 }, "<")

        // Hold
        .to({}, { duration: 2.5 })

        // Phase 7: Content exits, CTA arrives
        .set(".ch-hero-text", { autoAlpha: 0 })
        .set(".ch-cta-wrap", { autoAlpha: 1 })
        .to({}, { duration: 1.5 })
        .to([".ch-mockup-wrap", ".ch-badge", ".ch-card-left", ".ch-card-right"], {
          scale: 0.88, y: -50, z: -200, autoAlpha: 0,
          ease: "power3.in", duration: 1.2, stagger: 0.04
        })

        // Phase 8: Card shrinks back, CTA revealed
        .to(".ch-main-card", {
          width: isMobile ? "92vw" : "85vw",
          height: isMobile ? "92vh" : "85vh",
          borderRadius: isMobile ? "28px" : "36px",
          ease: "expo.inOut", duration: 1.8
        }, "pullback")
        .to(".ch-cta-wrap", { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.8 }, "pullback")

        // Phase 9: Card exits
        .to(".ch-main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 });

    }, containerRef);

    return () => ctx.revert();
  }, [metricValue]);

  const handleViewProjects = () => {
    if (onViewProjects) {
      onViewProjects();
    } else {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContact = () => {
    if (onContact) {
      onContact();
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-screen h-screen overflow-hidden flex items-center justify-center bg-[#0a0d12] text-slate-100 antialiased",
        className
      )}
      style={{ perspective: "1500px", fontFamily: "'Archivo', system-ui, sans-serif" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div className="ch-bg-grid absolute inset-0 z-0 pointer-events-none opacity-40" aria-hidden="true" />

      {/* ── LAYER 1: Hero text ── */}
      <div className="ch-hero-text absolute z-10 flex flex-col items-center justify-center text-center w-screen px-6 will-change-transform">
        <p className="ch-text-track gsap-reveal font-mono text-xs tracking-[0.25em] text-cyan-400 mb-6 uppercase">
          AI / Backend Engineer · Toronto, Canada
        </p>
        <h1 className="ch-text-track gsap-reveal text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight text-slate-100 mb-2">
          {tagline1}
        </h1>
        <h1 className="ch-text-role gsap-reveal text-silver-matte text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter">
          {tagline2}
        </h1>
      </div>

      {/* ── LAYER 2: CTA ── */}
      <div className="ch-cta-wrap absolute z-10 flex flex-col items-center justify-center text-center w-screen px-6 gsap-reveal pointer-events-auto will-change-transform">
        <p className="font-mono text-xs tracking-[0.2em] text-cyan-400 mb-4 uppercase">Available for hire · Canada</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-silver-matte">
          {ctaHeading}
        </h2>
        <p className="text-slate-400 text-base md:text-lg mb-12 max-w-lg mx-auto font-light leading-relaxed">
          {ctaDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <button
            onClick={handleViewProjects}
            className="btn-portfolio-primary flex items-center justify-center gap-3 px-8 py-4 rounded-[1.1rem] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0d12]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            View Projects
          </button>
          <button
            onClick={handleContact}
            className="btn-portfolio-secondary flex items-center justify-center gap-3 px-8 py-4 rounded-[1.1rem] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-[#0a0d12]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </button>
        </div>
      </div>

      {/* ── LAYER 3: The deep card ── */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
        <div
          ref={mainCardRef}
          className="ch-main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[28px] md:rounded-[36px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0">

            {/* Right: Brand name */}
            <div className="ch-card-right gsap-reveal order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full">
              <h2 className="text-5xl md:text-[5rem] lg:text-[7rem] font-black uppercase tracking-tighter text-card-silver-matte leading-none">
                YT
              </h2>
            </div>

            {/* Center: Terminal mockup */}
            <div
              className="ch-mockup-wrap order-2 relative w-full h-[340px] lg:h-[520px] flex items-center justify-center z-10"
              style={{ perspective: "1000px" }}
            >
              <div className="relative w-full h-full flex items-center justify-center scale-[0.72] md:scale-90 lg:scale-100">
                <div
                  ref={mockupRef}
                  className="monitor-bezel relative w-[320px] h-[480px] rounded-[1.5rem] flex flex-col will-change-transform overflow-hidden"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Title bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#0d0d0d] border-b border-[#1f1f1f]">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    <span className="ml-3 font-mono text-[10px] text-neutral-500 tracking-wide">yashdeep@terminal ~ portfolio</span>
                    <div className="ml-auto w-2 h-2 rounded-full bg-green-500/80 animate-pulse" />
                  </div>

                  {/* Terminal screen */}
                  <div className="flex-1 bg-[#060910] screen-glow p-4 overflow-hidden font-mono text-[11px] leading-relaxed">

                    <div className="ch-terminal-content text-cyan-400 mb-3">
                      <span className="text-emerald-400">❯</span> <span className="text-slate-300">yashdeep</span> <span className="text-slate-500">--profile</span>
                    </div>

                    <div className="ch-terminal-content text-slate-400 mb-1">
                      <span className="text-cyan-300">Role</span>      <span className="text-slate-500">·</span> AI / Backend Engineer
                    </div>
                    <div className="ch-terminal-content text-slate-400 mb-1">
                      <span className="text-cyan-300">Stack</span>     <span className="text-slate-500">·</span> Python · FastAPI · RAG · LLM
                    </div>
                    <div className="ch-terminal-content text-slate-400 mb-4">
                      <span className="text-cyan-300">Location</span>  <span className="text-slate-500">·</span> Toronto, Canada
                    </div>

                    <div className="ch-terminal-content text-slate-500 mb-2">─────────────────────────</div>

                    <div className="ch-terminal-content mb-3">
                      <span className="text-emerald-400">❯</span> <span className="text-slate-300">schemon</span> <span className="text-slate-500">--optimize</span> <span className="text-cyan-300/60">"SELECT * FROM orders"</span>
                    </div>

                    <div className="ch-terminal-content bg-[#0a1628] border border-cyan-900/30 rounded-lg p-3 mb-3">
                      <div className="text-cyan-400 text-[10px] mb-2">SQL OPTIMIZER · SCHEMON AI</div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400">Query time</span>
                        <span className="text-emerald-400 font-bold">↓ 3.2x faster</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400">Tokens saved</span>
                        <span className="text-emerald-400 font-bold">↓ 40%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2">
                        <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 w-[78%]" />
                      </div>
                    </div>

                    {/* Radial progress */}
                    <div className="ch-terminal-content flex items-center gap-4 mt-2">
                      <div className="relative w-16 h-16">
                        <svg className="w-full h-full" aria-hidden="true">
                          <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(34,211,238,0.08)" strokeWidth="5" />
                          <circle className="progress-ring" cx="32" cy="32" r="26" fill="none" stroke="#22d3ee" strokeWidth="5" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="counter-val text-white font-bold text-sm leading-none">0</span>
                          <span className="text-cyan-400/50 text-[8px] font-bold mt-0.5">%</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-white text-xs font-semibold">{metricLabel} Mastery</div>
                        <div className="text-slate-500 text-[10px]">Primary language</div>
                      </div>
                    </div>

                    {/* Blinking cursor */}
                    <div className="ch-terminal-content mt-3 flex items-center gap-1">
                      <span className="text-emerald-400">❯</span>
                      <span className="w-2 h-4 bg-cyan-400/70 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="ch-badge absolute top-4 lg:top-8 left-[-20px] lg:left-[-90px] floating-ui-badge rounded-xl p-3 lg:p-4 flex items-center gap-3 z-30">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-400/20">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold tracking-tight">RAG Pipeline</p>
                    <p className="text-cyan-200/40 text-[10px]">Production · Live</p>
                  </div>
                </div>

                <div className="ch-badge absolute bottom-10 lg:bottom-16 right-[-20px] lg:right-[-90px] floating-ui-badge rounded-xl p-3 lg:p-4 flex items-center gap-3 z-30">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400/20">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold tracking-tight">FastAPI</p>
                    <p className="text-cyan-200/40 text-[10px]">3x query speed</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Left: Text */}
            <div className="ch-card-left gsap-reveal order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full px-4 lg:px-0">
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-0 lg:mb-5 tracking-tight">
                {cardHeading}
              </h3>
              <p className="hidden md:block text-blue-100/50 text-sm lg:text-base font-normal leading-relaxed max-w-sm lg:max-w-none">
                {cardDescription}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
