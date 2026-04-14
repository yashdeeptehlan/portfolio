import { useRef, useCallback, useState, useEffect } from "react";
import { motion, useSpring, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const PANEL_COUNT = 5;
const WAVE_SPRING = { stiffness: 160, damping: 22, mass: 0.6 };
const SCENE_SPRING = { stiffness: 80, damping: 22, mass: 1 };
const Z_SPREAD = 88;
const SIGMA = 1.2;
const PANEL_W = 320;
const PANEL_H = 460;

// ─── Project Mockups ──────────────────────────────────────────────────────────

function TitleBar({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-2.5 bg-black/40 border-b border-white/[0.06] shrink-0">
      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-2 text-[10px] text-slate-500 tracking-wide font-mono">{name}</span>
      <div className="ml-auto flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
        <span className="text-[9px] font-mono" style={{ color }}>live</span>
      </div>
    </div>
  );
}

function ProgressBar({ value, color }: { value: number; color: string }) {
  return (
    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
      <div className="h-full rounded-full" style={{ width: `${value}%`, background: color }} />
    </div>
  );
}

// Panel 1 — PromptForge
function PromptForgeMockup() {
  return (
    <div className="w-full h-full bg-[#0d1117] flex flex-col font-mono text-[10px] overflow-hidden">
      <TitleBar name="promptforge — zsh" color="#22d3ee" />
      <div className="flex-1 p-3 space-y-2 overflow-hidden relative">
        <div className="text-emerald-400/70">$ promptforge-stats</div>
        <div className="border border-cyan-500/25 rounded-md p-2 bg-cyan-950/15">
          <div className="text-cyan-400 text-[9px] leading-relaxed">╔═ PromptForge +58 ══════════╗</div>
          <div className="text-slate-400 text-[9px] pl-1">║ Prompt optimized            ║</div>
          <div className="text-white/10 text-[9px]">╠════════════════════════════╣</div>
          <div className="text-[9px] pl-1">
            <span className="text-orange-400/80">BEFORE</span>
            <span className="text-slate-500"> write a function that handles...</span>
          </div>
          <div className="text-[9px] pl-1">
            <span className="text-emerald-400/80">AFTER </span>
            <span className="text-slate-300"> Write a Python function for...</span>
          </div>
          <div className="text-white/10 text-[9px]">╚════════════════════════════╝</div>
        </div>
        <div className="space-y-1 pt-1">
          <div className="text-[9px] text-slate-600 tracking-wider mb-1.5">SCORE  INTERCEPT</div>
          {[
            { score: "● 65", yes: true, prompt: "refactor this to handle edge..." },
            { score: "○-35", yes: false, prompt: "what is jwt" },
            { score: "● 48", yes: true, prompt: "write me a middleware that..." },
            { score: "● 70", yes: true, prompt: "implement a rate limiter..." },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className={`text-[9px] w-8 ${row.yes ? "text-emerald-400" : "text-slate-600"}`}>{row.score}</span>
              <span className={`text-[9px] w-5 ${row.yes ? "text-yellow-400/80" : "text-slate-600"}`}>{row.yes ? "YES" : "no"}</span>
              <span className="text-[9px] text-slate-500 truncate">{row.prompt}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-white/[0.04] pt-2 space-y-1.5">
          <div className="text-[9px] text-slate-600 tracking-wider">stack memory</div>
          {[
            { lang: "python", val: 92, color: "linear-gradient(90deg,#22d3ee,#06b6d4)" },
            { lang: "fastapi", val: 88, color: "linear-gradient(90deg,#10b981,#34d399)" },
            { lang: "postgresql", val: 74, color: "linear-gradient(90deg,#818cf8,#6366f1)" },
          ].map(({ lang, val, color }) => (
            <div key={lang} className="flex items-center gap-1.5">
              <span className="text-[9px] text-cyan-300/70 w-16">{lang}</span>
              <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${val}%`, background: color }} />
              </div>
              <span className="text-[9px] text-slate-600">{val}%</span>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-[#0d1117] to-transparent flex justify-between">
          <span className="text-[9px] text-cyan-400/50 tracking-widest uppercase">PromptForge</span>
          <span className="text-[9px] text-slate-700">Python · MCP · Claude</span>
        </div>
      </div>
    </div>
  );
}

// Panel 2 — Polymarket Bot
function PolymarketMockup() {
  return (
    <div className="w-full h-full bg-[#060d14] flex flex-col font-mono text-[10px] overflow-hidden">
      <TitleBar name="polymarket-bot — dashboard" color="#10b981" />
      <div className="flex-1 p-3 space-y-2 overflow-hidden relative">
        <div className="flex gap-2 text-[9px] py-1.5 border-b border-white/[0.04]">
          {[
            { sym: "BTC", price: "$95,240", chg: "+2.3%", up: true },
            { sym: "ETH", price: "$3,412", chg: "+1.1%", up: true },
            { sym: "SOL", price: "$198", chg: "-0.8%", up: false },
          ].map(({ sym, price, chg, up }) => (
            <div key={sym} className="flex-1">
              <div className="text-slate-400">{sym}</div>
              <div className="text-white/90">{price}</div>
              <div className={up ? "text-emerald-400" : "text-red-400"}>{chg}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 py-1">
          {[
            { label: "Win Rate", value: "68.4%", color: "text-emerald-400" },
            { label: "P Factor", value: "1.84×", color: "text-cyan-400" },
            { label: "Total P&L", value: "+$24.80", color: "text-emerald-400" },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-white/[0.03] rounded p-1.5">
              <div className="text-[8px] text-slate-600 mb-0.5">{label}</div>
              <div className={`text-[10px] font-bold ${color}`}>{value}</div>
            </div>
          ))}
        </div>
        <div className="space-y-1 pt-0.5">
          <div className="text-[8px] text-slate-600 tracking-wider">RECENT TRADES</div>
          {[
            { outcome: "WIN", market: "Trump wins election", pnl: "+$3.20", open: false },
            { outcome: "WIN", market: "BTC hits $100k Q1", pnl: "+$1.80", open: false },
            { outcome: "OPEN", market: "AI regulation passes", pnl: "$1.00", open: true },
            { outcome: "WIN", market: "Fed rate cut March", pnl: "+$2.40", open: false },
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-2 py-0.5">
              <span className={`text-[8px] font-bold w-8 ${t.open ? "text-cyan-400" : "text-emerald-400"}`}>
                {t.outcome === "OPEN" ? "●" : "▲"} {t.outcome}
              </span>
              <span className="text-[9px] text-slate-400 flex-1 truncate">{t.market}</span>
              <span className={`text-[9px] ${t.open ? "text-slate-500" : "text-emerald-400"}`}>{t.pnl}</span>
            </div>
          ))}
        </div>
        <div className="border border-yellow-500/20 rounded p-2 bg-yellow-900/10 mt-1">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] text-yellow-400/80 tracking-wider">⚡ HIGH SIGNAL</span>
            <span className="text-[8px] text-slate-600">0.81 conf</span>
          </div>
          <div className="text-[9px] text-slate-300">SOL above $200 by April</div>
          <ProgressBar value={81} color="linear-gradient(90deg,#f59e0b,#fbbf24)" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-[#060d14] to-transparent flex justify-between">
          <span className="text-[9px] text-emerald-400/50 tracking-widest uppercase">Polymarket Bot</span>
          <span className="text-[9px] text-slate-700">Python · FastAPI · React</span>
        </div>
      </div>
    </div>
  );
}

// Panel 3 — AI-Interviewer
function AIInterviewerMockup() {
  return (
    <div className="w-full h-full bg-[#0c0a18] flex flex-col font-sans text-[10px] overflow-hidden">
      <TitleBar name="ai-interviewer" color="#a78bfa" />
      <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden relative">
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className="flex-1 h-1 rounded-full"
              style={{
                background: n <= 2
                  ? "linear-gradient(90deg,#a78bfa,#7c3aed)"
                  : n === 3 ? "rgba(167,139,250,0.3)" : "rgba(255,255,255,0.05)",
              }}
            />
          ))}
          <span className="text-[9px] text-violet-400/70 ml-1 shrink-0">2 / 5</span>
        </div>
        <div className="bg-white/[0.04] border border-violet-400/15 rounded-xl p-3">
          <div className="text-[8px] text-violet-400/60 tracking-widest uppercase mb-2">Question 2</div>
          <p className="text-slate-200 text-[11px] leading-relaxed">
            "Tell me about a time you led a challenging technical project under pressure."
          </p>
        </div>
        <div className="bg-black/30 border border-violet-500/20 rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[9px] text-slate-400 font-mono">REC  0:23</span>
            </div>
            <span className="text-[9px] text-violet-400/60">ElevenLabs</span>
          </div>
          <div className="flex items-center gap-[3px] h-6 justify-center">
            {[3, 8, 14, 20, 16, 22, 18, 12, 20, 24, 18, 14, 22, 16, 10, 18, 24, 14, 8, 16].map((h, i) => (
              <div
                key={i}
                className="w-1 rounded-full"
                style={{
                  height: h,
                  background: i < 12 ? "linear-gradient(180deg,#a78bfa,#7c3aed)" : "rgba(255,255,255,0.08)",
                }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-[8px] text-slate-600 tracking-wider">AI EVALUATION</div>
          {[
            { label: "Communication", score: 88 },
            { label: "Technical Depth", score: 76 },
            { label: "Leadership Signal", score: 82 },
          ].map(({ label, score }) => (
            <div key={label} className="space-y-0.5">
              <div className="flex justify-between text-[9px]">
                <span className="text-slate-500">{label}</span>
                <span className="text-violet-400">{score}%</span>
              </div>
              <ProgressBar value={score} color="linear-gradient(90deg,#7c3aed,#a78bfa)" />
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-[#0c0a18] to-transparent flex justify-between">
          <span className="text-[9px] text-violet-400/50 tracking-widest uppercase">AI-Interviewer</span>
          <span className="text-[9px] text-slate-700">Next.js · ElevenLabs · OpenAI</span>
        </div>
      </div>
    </div>
  );
}

// Panel 4 — Hitch
function HitchMockup() {
  return (
    <div className="w-full h-full bg-[#080f0a] flex flex-col font-sans text-[10px] overflow-hidden">
      <TitleBar name="hitch — find a ride" color="#34d399" />
      <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden relative">
        <div className="bg-white/[0.04] border border-emerald-500/15 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/[0.04]">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-300 text-[10px]">Toronto, ON</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/[0.04]">
            <div className="w-2 h-2 rounded-full border border-emerald-400" />
            <span className="text-slate-300 text-[10px]">Montreal, QC</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2">
            <span className="text-slate-600 text-[9px]">📅 Today</span>
            <span className="text-slate-600 text-[9px]">·</span>
            <span className="text-slate-600 text-[9px]">👤 1 passenger</span>
          </div>
        </div>
        <div className="text-[8px] text-slate-600 tracking-wider">2 RIDES AVAILABLE</div>
        {[
          { name: "Alex K.", rating: "4.9", seats: 2, price: "$24", time: "9:00 AM", car: "Honda Civic" },
          { name: "Sarah M.", rating: "4.8", seats: 3, price: "$22", time: "10:30 AM", car: "Toyota RAV4" },
        ].map((driver, i) => (
          <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
            <div className="flex items-start justify-between mb-1.5">
              <div>
                <div className="text-slate-200 text-[10px] font-medium">{driver.name}</div>
                <div className="text-[9px] text-slate-500">{driver.car}</div>
              </div>
              <div className="text-emerald-400 text-[12px] font-bold">{driver.price}</div>
            </div>
            <div className="flex items-center gap-3 text-[9px] mb-2">
              <span className="text-yellow-400">⭐ {driver.rating}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-500">Departs {driver.time}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-500">{driver.seats} seats left</span>
            </div>
            {i === 0 && (
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-1.5 text-center">
                <span className="text-emerald-400 text-[9px] font-medium">Book Ride →</span>
              </div>
            )}
          </div>
        ))}
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-[#080f0a] to-transparent flex justify-between">
          <span className="text-[9px] text-emerald-400/50 tracking-widest uppercase">Hitch</span>
          <span className="text-[9px] text-slate-700">React · Supabase · TypeScript</span>
        </div>
      </div>
    </div>
  );
}

// Panel 5 — VaultX Exchange
function VaultXMockup() {
  return (
    <div className="w-full h-full bg-[#0d0900] flex flex-col font-sans text-[10px] overflow-hidden">
      <TitleBar name="vaultx-exchange — marketplace" color="#f59e0b" />
      <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden relative">
        <div className="flex items-center justify-between">
          <span className="text-slate-300 text-[11px] font-semibold">Marketplace</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[9px] text-slate-500">KYC Verified</span>
          </div>
        </div>
        <div className="border border-amber-500/20 rounded-xl overflow-hidden bg-amber-900/5">
          <div className="flex items-center justify-between px-3 py-2 bg-amber-500/5 border-b border-amber-500/10">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-amber-500/20 flex items-center justify-center">
                <span className="text-[7px] text-amber-400 font-bold">₿</span>
              </div>
              <span className="text-slate-200 text-[10px] font-medium">BTC · 0.5 BTC</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[8px] text-emerald-400">Vault Verified</span>
            </div>
          </div>
          <div className="p-3 space-y-2">
            <div className="flex items-baseline justify-between">
              <span className="text-amber-400 text-[15px] font-bold">$47,600</span>
              <span className="text-slate-500 text-[9px]">USDC</span>
            </div>
            <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 rounded px-2 py-0.5 w-fit">
              <span className="text-[8px] text-emerald-400">🔒 Escrow Protected</span>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/25 rounded-lg px-3 py-2 text-center">
              <span className="text-amber-400 text-[10px] font-medium">Buy in Escrow →</span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-[8px] text-slate-600 tracking-wider">TRUST CENTER</div>
          {[
            { label: "Trust Score", value: 89, color: "linear-gradient(90deg,#f59e0b,#fbbf24)" },
            { label: "Identity", value: 100, color: "linear-gradient(90deg,#10b981,#34d399)" },
            { label: "Risk Score", value: 22, color: "linear-gradient(90deg,#6366f1,#818cf8)", invert: true },
          ].map(({ label, value, color, invert }) => (
            <div key={label} className="space-y-0.5">
              <div className="flex justify-between text-[9px]">
                <span className="text-slate-500">{label}</span>
                <span className={invert ? "text-emerald-400" : "text-amber-400"}>
                  {invert ? "LOW" : `${value}%`}
                </span>
              </div>
              <ProgressBar value={invert ? 100 - value : value} color={color} />
            </div>
          ))}
        </div>
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2 flex justify-between">
          <span className="text-slate-600 text-[9px]">Active Escrow</span>
          <span className="text-amber-400 text-[9px] font-mono font-bold">$12,400 USDC</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-[#0d0900] to-transparent flex justify-between">
          <span className="text-[9px] text-amber-400/50 tracking-widest uppercase">VaultX Exchange</span>
          <span className="text-[9px] text-slate-700">React · Supabase · TypeScript</span>
        </div>
      </div>
    </div>
  );
}

// ─── Mockup registry ───────────────────────────────────────────────────────────

const MOCKUP_COMPONENTS = [
  PromptForgeMockup,
  PolymarketMockup,
  AIInterviewerMockup,
  HitchMockup,
  VaultXMockup,
];

const ACCENT_GLOWS = [
  "radial-gradient(ellipse at 50% 10%, rgba(34,211,238,0.18) 0%, transparent 65%)",
  "radial-gradient(ellipse at 50% 10%, rgba(16,185,129,0.18) 0%, transparent 65%)",
  "radial-gradient(ellipse at 50% 10%, rgba(139,92,246,0.18) 0%, transparent 65%)",
  "radial-gradient(ellipse at 50% 10%, rgba(52,211,153,0.18) 0%, transparent 65%)",
  "radial-gradient(ellipse at 50% 10%, rgba(245,158,11,0.18) 0%, transparent 65%)",
];

const PROJECT_NAMES = ["PromptForge", "Polymarket Bot", "AI-Interviewer", "Hitch", "VaultX"];

// ─── Focused overlay ──────────────────────────────────────────────────────────

function FocusedOverlay({
  index,
  onClose,
}: {
  index: number;
  onClose: () => void;
}) {
  const Mockup = MOCKUP_COMPONENTS[index];
  const prev = (index - 1 + PANEL_COUNT) % PANEL_COUNT;
  const next = (index + 1) % PANEL_COUNT;

  return (
    <motion.div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Card */}
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-2xl"
        style={{ width: "min(360px, 92vw)", height: "min(520px, 88vh)" }}
        initial={{ scale: 0.88, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 16 }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Mockup />

        {/* Accent glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: ACCENT_GLOWS[index] }}
        />

        {/* Close */}
        <button
          className="absolute top-3 right-3 z-50 w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Project label */}
        <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}
        />
      </motion.div>

      {/* Prev / Next arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition text-lg"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        style={{ display: "none" }}
        aria-hidden
      />

      {/* Dot navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {Array.from({ length: PANEL_COUNT }).map((_, i) => (
          <button
            key={i}
            className="rounded-full transition-all"
            style={{
              width: i === index ? 20 : 6,
              height: 6,
              background: i === index ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
            }}
            onClick={(e) => { e.stopPropagation(); }}
            aria-label={PROJECT_NAMES[i]}
          />
        ))}
      </div>

      {/* Project name */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <span className="text-[11px] text-white/60 font-mono tracking-widest uppercase">
          {index + 1} / {PANEL_COUNT} · {PROJECT_NAMES[index]}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Mobile carousel ──────────────────────────────────────────────────────────

function MobileCarousel({ onFocus }: { onFocus: (i: number) => void }) {
  return (
    <div className="w-full flex flex-col gap-3">
      <div
        className="w-full flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
        style={{ scrollbarWidth: "none", paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
      >
        {Array.from({ length: PANEL_COUNT }).map((_, i) => {
          const Mockup = MOCKUP_COMPONENTS[i];
          return (
            <motion.div
              key={i}
              className="snap-center shrink-0 rounded-2xl overflow-hidden cursor-pointer relative"
              style={{ width: "min(300px, 82vw)", height: 440 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onFocus(i)}
            >
              <Mockup />
              {/* Accent glow */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: ACCENT_GLOWS[i] }}
              />
              {/* Border */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{ border: "1px solid rgba(255,255,255,0.12)", boxSizing: "border-box" }}
              />
              {/* Tap hint */}
              <div className="absolute bottom-10 right-3 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                <span className="text-[9px] text-white/70 font-mono">tap to expand</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex gap-1.5 justify-center">
        {Array.from({ length: PANEL_COUNT }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400/40" />
        ))}
      </div>
    </div>
  );
}

// ─── 3D Panel (desktop) ────────────────────────────────────────────────────────

function Panel({
  index,
  total,
  waveY,
  scaleY,
  onFocus,
}: {
  index: number;
  total: number;
  waveY: ReturnType<typeof useSpring>;
  scaleY: ReturnType<typeof useSpring>;
  onFocus: () => void;
}) {
  const t = index / (total - 1);
  const baseZ = (index - (total - 1)) * Z_SPREAD;
  const opacity = 0.28 + t * 0.72;
  const Mockup = MOCKUP_COMPONENTS[index];

  return (
    <motion.div
      className="absolute rounded-2xl overflow-hidden cursor-pointer"
      style={{
        width: PANEL_W,
        height: PANEL_H,
        marginLeft: -PANEL_W / 2,
        marginTop: -PANEL_H / 2,
        translateZ: baseZ,
        y: waveY,
        scaleY,
        transformOrigin: "bottom center",
        opacity,
      }}
      onClick={onFocus}
      whileHover={{ opacity: Math.min(opacity + 0.15, 1) }}
    >
      <Mockup />
      <div style={{ position: "absolute", inset: 0, background: ACCENT_GLOWS[index], pointerEvents: "none" }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          border: `1px solid rgba(255,255,255,${0.06 + t * 0.14})`,
          boxSizing: "border-box",
          pointerEvents: "none",
        }}
      />
      {/* Click hint on front panel */}
      {index === total - 1 && (
        <div className="absolute bottom-10 right-3 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 pointer-events-none">
          <span className="text-[9px] text-white/60 font-mono">click to expand</span>
        </div>
      )}
    </motion.div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function StackedPanels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (focusedIndex === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setFocusedIndex(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [focusedIndex]);

  // Prevent body scroll when overlay open
  useEffect(() => {
    document.body.style.overflow = focusedIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [focusedIndex]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const waveYSprings = Array.from({ length: PANEL_COUNT }, () => useSpring(0, WAVE_SPRING));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scaleYSprings = Array.from({ length: PANEL_COUNT }, () => useSpring(1, WAVE_SPRING));

  const rotY = useSpring(-38, SCENE_SPRING);
  const rotX = useSpring(16, SCENE_SPRING);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (focusedIndex !== null) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = (e.clientX - rect.left) / rect.width;
      const cy = (e.clientY - rect.top) / rect.height;
      rotY.set(-38 + (cx - 0.5) * 18);
      rotX.set(16 + (cy - 0.5) * -12);
      const cursorCardPos = cx * (PANEL_COUNT - 1);
      waveYSprings.forEach((spring, i) => {
        const dist = Math.abs(i - cursorCardPos);
        const influence = Math.exp(-(dist * dist) / (2 * SIGMA * SIGMA));
        spring.set(-influence * 72);
      });
      scaleYSprings.forEach((spring, i) => {
        const dist = Math.abs(i - cursorCardPos);
        const influence = Math.exp(-(dist * dist) / (2 * SIGMA * SIGMA));
        spring.set(0.3 + influence * 0.7);
      });
    },
    [focusedIndex, rotY, rotX, waveYSprings, scaleYSprings]
  );

  const handleMouseLeave = useCallback(() => {
    rotY.set(-38);
    rotX.set(16);
    waveYSprings.forEach((s) => s.set(0));
    scaleYSprings.forEach((s) => s.set(1));
  }, [rotY, rotX, waveYSprings, scaleYSprings]);

  return (
    <>
      {/* Mobile: swipe carousel */}
      {isMobile ? (
        <div className="w-full py-4">
          <MobileCarousel onFocus={setFocusedIndex} />
        </div>
      ) : (
        /* Desktop: 3D stack */
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full h-full flex items-center justify-center select-none"
          style={{ perspective: "900px" }}
        >
          <motion.div
            style={{
              rotateY: rotY,
              rotateX: rotX,
              transformStyle: "preserve-3d",
              position: "relative",
              width: 0,
              height: 0,
            }}
          >
            {Array.from({ length: PANEL_COUNT }).map((_, i) => (
              <Panel
                key={i}
                index={i}
                total={PANEL_COUNT}
                waveY={waveYSprings[i]}
                scaleY={scaleYSprings[i]}
                onFocus={() => setFocusedIndex(i)}
              />
            ))}
          </motion.div>
        </div>
      )}

      {/* Focused overlay — rendered on both mobile and desktop */}
      <AnimatePresence>
        {focusedIndex !== null && (
          <FocusedOverlay
            index={focusedIndex}
            onClose={() => setFocusedIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
