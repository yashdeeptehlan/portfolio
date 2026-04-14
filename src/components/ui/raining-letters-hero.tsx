import React, { useState, useEffect, useCallback, useRef } from "react"
import { Github, Linkedin, ArrowDown } from "lucide-react"
import { personalInfo } from "@/data/portfolio"

// ─── Text Scramble ────────────────────────────────────────────────────────────

class TextScramble {
  el: HTMLElement
  chars: string
  queue: Array<{ from: string; to: string; start: number; end: number; char?: string }>
  frame: number
  frameRequest: number
  resolve: (value: void | PromiseLike<void>) => void

  constructor(el: HTMLElement) {
    this.el = el
    this.chars = "!<>-_\\/[]{}—=+*^?#"
    this.queue = []
    this.frame = 0
    this.frameRequest = 0
    this.resolve = () => {}
    this.update = this.update.bind(this)
  }

  setText(newText: string) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise<void>((resolve) => (this.resolve = resolve))
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ""
      const to = newText[i] || ""
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }

  update() {
    let output = ""
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)]
          this.queue[i].char = char
        }
        output += `<span style="color:#22d3ee;opacity:0.7">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
}

// ─── Scrambled Role Label ─────────────────────────────────────────────────────

const ScrambledRole: React.FC = () => {
  const elementRef = useRef<HTMLSpanElement>(null)
  const scramblerRef = useRef<TextScramble | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (elementRef.current && !scramblerRef.current) {
      scramblerRef.current = new TextScramble(elementRef.current)
      setMounted(true)
    }
  }, [])

  useEffect(() => {
    if (!mounted || !scramblerRef.current) return
    const phrases = [
      "AI / Backend Engineer",
      "LLM Systems Builder",
      "RAG Pipeline Architect",
      "FastAPI Craftsman",
      "Prompt Engineer",
      "AI / Backend Engineer",
    ]
    let counter = 0
    let timeoutId: ReturnType<typeof setTimeout>
    const next = () => {
      if (scramblerRef.current) {
        scramblerRef.current.setText(phrases[counter]).then(() => {
          timeoutId = setTimeout(next, 2400)
        })
        counter = (counter + 1) % phrases.length
      }
    }
    next()
    return () => clearTimeout(timeoutId)
  }, [mounted])

  return (
    <span
      ref={elementRef}
      className="font-mono text-sm tracking-[0.18em] text-cyan-400"
      style={{ minWidth: "220px", display: "inline-block" }}
    >
      AI / Backend Engineer
    </span>
  )
}

// ─── Raining Characters ───────────────────────────────────────────────────────

interface Char {
  char: string
  x: number
  y: number
  speed: number
  opacity: number
}

const CHAR_POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"

function makeChar(): Char {
  return {
    char: CHAR_POOL[Math.floor(Math.random() * CHAR_POOL.length)],
    x: Math.random() * 100,
    y: Math.random() * 100,
    speed: 0.08 + Math.random() * 0.22,
    opacity: 0.12 + Math.random() * 0.25,
  }
}

const RainingBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stateRef = useRef<{ chars: Char[]; activeSet: Set<number>; raf: number }>({
    chars: [],
    activeSet: new Set(),
    raf: 0,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const CHAR_COUNT = 220
    stateRef.current.chars = Array.from({ length: CHAR_COUNT }, makeChar)

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    // Flicker interval — highlight a few chars
    const flickerInterval = setInterval(() => {
      const set = new Set<number>()
      for (let i = 0; i < 4; i++) {
        set.add(Math.floor(Math.random() * CHAR_COUNT))
      }
      stateRef.current.activeSet = set
    }, 60)

    const draw = () => {
      const { chars, activeSet } = stateRef.current
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)
      ctx.font = "16px monospace"

      for (let i = 0; i < chars.length; i++) {
        const c = chars[i]
        const px = (c.x / 100) * width
        const py = (c.y / 100) * height
        const active = activeSet.has(i)

        if (active) {
          ctx.fillStyle = "#22d3ee"
          ctx.globalAlpha = 1
          ctx.font = "20px monospace"
          if (ctx.shadowColor !== undefined) {
            ctx.shadowColor = "#22d3ee"
            ctx.shadowBlur = 10
          }
        } else {
          ctx.fillStyle = "#475569"
          ctx.globalAlpha = c.opacity
          ctx.font = "14px monospace"
          ctx.shadowBlur = 0
        }

        ctx.fillText(c.char, px, py)

        // advance
        chars[i].y += c.speed
        if (chars[i].y > 102) {
          chars[i] = { ...makeChar(), y: -3 }
        }
      }

      ctx.globalAlpha = 1
      ctx.shadowBlur = 0
      stateRef.current.raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(stateRef.current.raf)
      clearInterval(flickerInterval)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  )
}

// ─── Main Hero ────────────────────────────────────────────────────────────────

interface RainingLettersHeroProps {
  id?: string
}

const RainingLettersHero: React.FC<RainingLettersHeroProps> = ({ id }) => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id={id}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#060910]"
    >
      {/* Raining characters canvas */}
      <RainingBackground />

      {/* Vignette — keeps center readable */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgba(6,9,16,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        {/* Index label */}
        <p className="font-mono text-xs tracking-[0.25em] text-slate-500 uppercase">
          00.&nbsp;&nbsp;Portfolio
        </p>

        {/* Name */}
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {personalInfo.name}
        </h1>

        {/* Scrambled role */}
        <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/20 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
          <ScrambledRole />
        </div>

        {/* Tagline */}
        <p className="max-w-xl text-base text-slate-400 sm:text-lg">
          Building intelligent systems — LLM pipelines, RAG architectures,
          and high-performance APIs that ship to production.
        </p>

        {/* CTAs */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            data-hover
            onClick={() => scrollToSection("projects")}
            className="rounded-md bg-cyan-500 px-5 py-2.5 font-mono text-sm font-semibold tracking-wide text-slate-900 transition hover:bg-cyan-400 active:scale-95"
          >
            VIEW PROJECTS
          </button>
          <button
            data-hover
            onClick={() => scrollToSection("contact")}
            className="rounded-md border border-cyan-500/40 px-5 py-2.5 font-mono text-sm font-semibold tracking-wide text-cyan-400 transition hover:border-cyan-400 hover:text-cyan-300 active:scale-95"
          >
            CONTACT
          </button>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-slate-700 p-2.5 text-slate-400 transition hover:border-slate-500 hover:text-slate-200"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-slate-700 p-2.5 text-slate-400 transition hover:border-slate-500 hover:text-slate-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

        {/* Scroll cue */}
        <button
          onClick={() => scrollToSection("about")}
          className="mt-10 flex flex-col items-center gap-1.5 text-slate-600 transition hover:text-slate-400"
          aria-label="Scroll down"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  )
}

export { RainingLettersHero }
