"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { questions9 } from "@/lib/questions9";
import type { Domain, Choice } from "@/lib/questions";

const DOMAIN_COLORS: Record<Domain, { badge: string }> = {
  "Domain 1":    { badge: "bg-violet-500/20 text-violet-300 border-violet-500/30" },
  "Domain 2":    { badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
  "Domain 3":    { badge: "bg-teal-500/20 text-teal-300 border-teal-500/30" },
  "Cross-Domain":{ badge: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
};

const DIFF_COLORS = {
  Easy:   "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Medium: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  Hard:   "bg-red-500/20 text-red-300 border-red-500/30",
};

const CHOICE_LABELS: Choice[] = ["A", "B", "C", "D"];
type Filter = "All" | Domain;

export default function Questions9Page() {
  const [filter, setFilter]       = useState<Filter>("All");
  const [mode, setMode]           = useState<"quiz" | "study">("quiz");
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected]   = useState<Choice | null>(null);
  const [revealed, setRevealed]   = useState(false);
  const [score, setScore]         = useState(0);
  const [answered, setAnswered]   = useState(0);
  const [studyOpen, setStudyOpen] = useState<Record<number, boolean>>({});

  const filtered = useMemo(
    () => filter === "All" ? questions9 : questions9.filter((q) => q.domain === filter),
    [filter],
  );
  const current = filtered[quizIndex];

  function handleFilter(f: Filter) {
    setFilter(f); setQuizIndex(0); setSelected(null); setRevealed(false); setScore(0); setAnswered(0);
  }
  function handleMode(m: "quiz" | "study") {
    setMode(m); setQuizIndex(0); setSelected(null); setRevealed(false); setScore(0); setAnswered(0); setStudyOpen({});
  }
  function handleSelect(c: Choice) { if (!revealed) setSelected(c); }
  function handleReveal() {
    if (!selected || revealed) return;
    setRevealed(true); setAnswered((p) => p + 1);
    if (selected === current.answer) setScore((p) => p + 1);
  }
  function handleNext() {
    if (quizIndex < filtered.length - 1) { setQuizIndex((p) => p + 1); setSelected(null); setRevealed(false); }
  }
  function handlePrev() {
    if (quizIndex > 0) { setQuizIndex((p) => p - 1); setSelected(null); setRevealed(false); }
  }
  function toggleStudy(id: number) { setStudyOpen((p) => ({ ...p, [id]: !p[id] })); }

  const pct = answered > 0 ? Math.round((score / answered) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-3 px-4 py-3">
          <Link href="/" className="mr-2 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-300 transition hover:bg-slate-800">← Blueprint</Link>
          {[1,2,3,4,5,6,7,8].map((n) => (
            <Link key={n} href={n === 1 ? "/questions" : `/questions${n}`} className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-300 transition hover:bg-slate-800">Set {n}</Link>
          ))}
          <Link href="/questions10" className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-300 transition hover:bg-slate-800">Set 10</Link>
          <span className="text-sm font-semibold text-slate-100">SEE Part 2 — Set 9: 100 Practice Questions</span>
          <div className="ml-auto flex items-center gap-2">
            <div className="flex rounded-lg border border-white/10 overflow-hidden text-xs font-medium">
              {(["quiz","study"] as const).map((m) => (
                <button key={m} onClick={() => handleMode(m)}
                  className={`px-3 py-1.5 capitalize transition ${mode===m ? "bg-orange-500/25 text-orange-200" : "text-slate-400 hover:bg-slate-800"}`}>
                  {m === "quiz" ? "Quiz Mode" : "Study Mode"}
                </button>
              ))}
            </div>
            {mode === "quiz" && (
              <span className="rounded-lg border border-white/10 bg-slate-900 px-3 py-1.5 text-xs">
                Score: <span className={pct >= 70 ? "text-emerald-300 font-bold" : "text-red-300 font-bold"}>{score}/{answered}</span>
                {answered > 0 && <span className="ml-1 text-slate-400">({pct}%)</span>}
              </span>
            )}
          </div>
        </div>
        <div className="mx-auto flex max-w-5xl flex-wrap gap-2 px-4 pb-3">
          {(["All","Domain 1","Domain 2","Domain 3","Cross-Domain"] as Filter[]).map((f) => (
            <button key={f} onClick={() => handleFilter(f)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition ${filter===f ? "border-orange-400/60 bg-orange-500/20 text-orange-200" : "border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200"}`}>
              {f} <span className="opacity-60">({f==="All" ? questions9.length : questions9.filter((q)=>q.domain===f).length})</span>
            </button>
          ))}
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        {mode === "quiz" && current && (
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span>Question {quizIndex+1} of {filtered.length}</span>
              <div className="flex-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full rounded-full bg-orange-500 transition-all" style={{width:`${((quizIndex+1)/filtered.length)*100}%`}} />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-xl">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${DOMAIN_COLORS[current.domain].badge}`}>{current.domain}</span>
                <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${DIFF_COLORS[current.difficulty]}`}>{current.difficulty}</span>
                <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-slate-400">Q{current.id}</span>
              </div>
              <p className="text-base leading-relaxed text-slate-100 font-medium mb-6">{current.question}</p>
              <div className="space-y-3">
                {CHOICE_LABELS.map((c) => {
                  const isSel = selected === c, isCorr = current.answer === c;
                  let style = "border-white/10 bg-slate-800/60 text-slate-200 hover:border-white/25 hover:bg-slate-800";
                  if (revealed) {
                    if (isCorr) style = "border-emerald-400/60 bg-emerald-500/15 text-emerald-100";
                    else if (isSel) style = "border-red-400/60 bg-red-500/15 text-red-200";
                    else style = "border-white/5 bg-slate-800/30 text-slate-500";
                  } else if (isSel) style = "border-orange-400/60 bg-orange-500/15 text-orange-100";
                  return (
                    <button key={c} onClick={() => handleSelect(c)} disabled={revealed}
                      className={`w-full text-left flex gap-3 items-start rounded-xl border px-4 py-3 text-sm transition-all ${style} disabled:cursor-default`}>
                      <span className="shrink-0 font-bold w-5">{c}.</span>
                      <span>{current.choices[c]}</span>
                      {revealed && isCorr && <span className="ml-auto shrink-0 text-emerald-400">✓</span>}
                      {revealed && isSel && !isCorr && <span className="ml-auto shrink-0 text-red-400">✗</span>}
                    </button>
                  );
                })}
              </div>
              {revealed && (
                <div className="mt-5 rounded-xl border border-orange-400/25 bg-orange-500/8 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-orange-300 mb-1">Explanation</p>
                  <p className="text-sm text-slate-200 leading-relaxed">{current.explanation}</p>
                </div>
              )}
            </div>
            <div className="flex gap-3">
              <button onClick={handlePrev} disabled={quizIndex===0}
                className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed">← Prev</button>
              {!revealed ? (
                <button onClick={handleReveal} disabled={!selected}
                  className="flex-1 rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-500 disabled:opacity-30 disabled:cursor-not-allowed">Check Answer</button>
              ) : (
                <button onClick={handleNext} disabled={quizIndex===filtered.length-1}
                  className="flex-1 rounded-xl bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-500 disabled:opacity-30 disabled:cursor-not-allowed">Next Question →</button>
              )}
            </div>
            {quizIndex===filtered.length-1 && revealed && (
              <div className={`rounded-2xl border p-6 text-center ${pct>=70?"border-emerald-400/40 bg-emerald-500/10":"border-red-400/40 bg-red-500/10"}`}>
                <p className="text-2xl font-bold mb-1">{pct>=70?"🎉 Great work!":"📚 Keep studying!"}</p>
                <p className="text-slate-300 text-sm">Final score: <strong>{score}</strong> / {answered} ({pct}%) on {filter==="All"?"all Set 9 questions":filter}</p>
                <button onClick={() => {setQuizIndex(0);setSelected(null);setRevealed(false);setScore(0);setAnswered(0);}}
                  className="mt-4 rounded-xl bg-slate-700 px-5 py-2 text-sm font-semibold hover:bg-slate-600 transition">Restart Set 9</button>
              </div>
            )}
          </div>
        )}

        {mode === "study" && (
          <div className="space-y-4">
            <p className="text-sm text-slate-400">Showing {filtered.length} questions. Click to reveal answer and explanation.</p>
            {filtered.map((q) => (
              <div key={q.id} className="rounded-2xl border border-white/10 bg-slate-900 overflow-hidden">
                <button onClick={() => toggleStudy(q.id)}
                  className="w-full text-left px-5 py-4 flex gap-4 items-start hover:bg-slate-800/50 transition">
                  <span className="shrink-0 text-xs font-bold text-slate-500 pt-0.5 w-6">{q.id}.</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${DOMAIN_COLORS[q.domain].badge}`}>{q.domain}</span>
                      <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${DIFF_COLORS[q.difficulty]}`}>{q.difficulty}</span>
                    </div>
                    <p className="text-sm text-slate-100 leading-relaxed">{q.question}</p>
                  </div>
                  <span className="shrink-0 text-slate-500 text-lg leading-none">{studyOpen[q.id]?"−":"+"}</span>
                </button>
                {studyOpen[q.id] && (
                  <div className="border-t border-white/10 px-5 pb-5 pt-4 space-y-3">
                    <div className="space-y-2">
                      {CHOICE_LABELS.map((c) => (
                        <div key={c} className={`flex gap-2 items-start rounded-lg px-3 py-2 text-sm ${q.answer===c?"border border-emerald-400/40 bg-emerald-500/10 text-emerald-100":"text-slate-400"}`}>
                          <span className="shrink-0 font-bold w-4">{c}.</span>
                          <span>{q.choices[c]}</span>
                          {q.answer===c && <span className="ml-auto shrink-0 text-emerald-400 text-xs font-bold">✓ Correct</span>}
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl border border-orange-400/20 bg-orange-500/8 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-orange-300 mb-1">Why</p>
                      <p className="text-sm text-slate-200 leading-relaxed">{q.explanation}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
