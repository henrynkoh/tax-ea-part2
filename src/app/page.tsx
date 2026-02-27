"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  domainSummary,
  domainTopics,
  reportOutline,
  setDesignRows,
  setDesignTakeaways,
  sourceEntries,
} from "@/lib/seePart2Data";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/henrynkoh/tax-ea-part2";

  const primarySources = sourceEntries.filter(
    (entry) => entry.group === "Primary IRS / Exam Structure",
  );
  const secondarySources = sourceEntries.filter(
    (entry) => entry.group === "Secondary Blueprint Interpreters",
  );
  const sections = useMemo(
    () => [
      { id: "hero", label: "Top" },
      { id: "overview", label: "Overview" },
      { id: "domains", label: "Domain Structure" },
      { id: "topics", label: "Topic Breakdown" },
      { id: "primary-sources", label: "Primary Sources" },
      { id: "secondary-sources", label: "Secondary Sources" },
      { id: "report-outline", label: "50-Page Outline" },
      { id: "matrix", label: "Question Matrix" },
    ],
    [],
  );

  useEffect(() => {
    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio ||
              a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sections]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8 lg:px-8">
        <aside className="hidden lg:block">
          <div className="sticky top-6 rounded-2xl border border-white/10 bg-slate-900/85 p-4 backdrop-blur-md">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
              Navigation
            </h2>
            <p className="mt-2 text-xs text-slate-300">
              Scroll or click to jump section.
            </p>
            <nav className="mt-4 space-y-4 pr-1">
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`block rounded-lg px-3 py-2 text-sm transition ${
                        activeSection === section.id
                          ? "bg-cyan-400/20 text-cyan-200 ring-1 ring-cyan-300/40"
                          : "text-slate-300 hover:bg-slate-800 hover:text-slate-100"
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="my-4 border-t border-white/10" />

              {/* Practice questions buttons (Sets 1–10) */}
              <Link
                href="/questions"
                className="flex items-center gap-2 rounded-xl border border-amber-400/40 bg-amber-500/10 px-3 py-2.5 text-sm font-semibold text-amber-200 transition hover:bg-amber-500/20 hover:border-amber-400/60"
              >
                <span className="text-base">📝</span>
                <span>Set 1 — 100 Q&amp;A</span>
                <span className="ml-auto text-amber-400/70">→</span>
              </Link>
              <Link
                href="/questions2"
                className="flex items-center gap-2 rounded-xl border border-violet-400/40 bg-violet-500/10 px-3 py-2.5 text-sm font-semibold text-violet-200 transition hover:bg-violet-500/20 hover:border-violet-400/60"
              >
                <span className="text-base">📝</span>
                <span>Set 2 — 100 Q&amp;A</span>
                <span className="ml-auto text-violet-400/70">→</span>
              </Link>
              <Link
                href="/questions3"
                className="flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-3 py-2.5 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/20 hover:border-emerald-400/60"
              >
                <span className="text-base">📝</span>
                <span>Set 3 — 100 Q&amp;A</span>
                <span className="ml-auto text-emerald-400/70">→</span>
              </Link>
              <Link
                href="/questions4"
                className="flex items-center gap-2 rounded-xl border border-orange-400/40 bg-orange-500/10 px-3 py-2.5 text-sm font-semibold text-orange-200 transition hover:bg-orange-500/20 hover:border-orange-400/60"
              >
                <span className="text-base">📝</span>
                <span>Set 4 — 100 Q&amp;A</span>
                <span className="ml-auto text-orange-400/70">→</span>
              </Link>
              <Link
                href="/questions5"
                className="flex items-center gap-2 rounded-xl border border-rose-400/40 bg-rose-500/10 px-3 py-2.5 text-sm font-semibold text-rose-200 transition hover:bg-rose-500/20 hover:border-rose-400/60"
              >
                <span className="text-base">📝</span>
                <span>Set 5 — 100 Q&amp;A</span>
                <span className="ml-auto text-rose-400/70">→</span>
              </Link>
              <Link
                href="/questions6"
                className="flex items-center gap-2 rounded-xl border border-indigo-400/40 bg-indigo-500/10 px-3 py-2.5 text-sm font-semibold text-indigo-200 transition hover:bg-indigo-500/20 hover:border-indigo-400/60"
              >
                <span className="text-base">📝</span>
                <span>Set 6 — 100 Q&amp;A</span>
                <span className="ml-auto text-indigo-400/70">→</span>
              </Link>
              <Link
                href="/questions7"
                className="flex items-center gap-2 rounded-xl border border-sky-400/40 bg-sky-500/10 px-3 py-2.5 text-sm font-semibold text-sky-200 transition hover:bg-sky-500/20 hover:border-sky-400/60"
              >
                <span className="text-base">📝</span>
                <span>Set 7 — 100 Q&amp;A</span>
                <span className="ml-auto text-sky-400/70">→</span>
              </Link>
              <Link
                href="/questions8"
                className="flex items-center gap-2 rounded-xl border border-rose-400/40 bg-rose-500/10 px-3 py-2.5 text-sm font-semibold text-rose-200 transition hover:bg-rose-500/20 hover:border-rose-400/60"
              >
                <span className="text-base">📝</span>
                <span>Set 8 — 100 Q&amp;A</span>
                <span className="ml-auto text-rose-400/70">→</span>
              </Link>
              <Link
                href="/questions9"
                className="flex items-center gap-2 rounded-xl border border-orange-400/40 bg-orange-500/10 px-3 py-2.5 text-sm font-semibold text-orange-200 transition hover:bg-orange-500/20 hover:border-orange-400/60"
              >
                <span className="text-base">📝</span>
                <span>Set 9 — 100 Q&amp;A</span>
                <span className="ml-auto text-orange-400/70">→</span>
              </Link>
              <Link
                href="/questions10"
                className="flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-3 py-2.5 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/20 hover:border-emerald-400/60"
              >
                <span className="text-base">🎓</span>
                <span>Set 10 — Final 100 Q&amp;A</span>
                <span className="ml-auto text-emerald-400/70">→</span>
              </Link>
            </nav>
          </div>
        </aside>

        <div className="space-y-6 lg:space-y-8">
          <section
            id="hero"
            className="scroll-mt-24 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-700/50 via-slate-900 to-cyan-900/60 p-6 shadow-2xl sm:p-10"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">
              2026-focused SEE Part 2 Knowledge Base
            </p>
            <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">
              IRS Enrolled Agent Part 2 (Businesses) Visual Blueprint Landing
              Page
            </h1>
            <p className="mt-4 max-w-3xl text-slate-200">
              A modern one-page command center for source mapping, domain
              weighting, topic navigation, report planning, and question-set
              design. Use the left sidebar to jump quickly between every
              subsection.
            </p>
            <div className="mt-6 mb-2">
              <Link
                href="/questions"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/15 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/25"
              >
                📝 Practice — 100 Q&amp;A with Explanations →
              </Link>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-cyan-300/20 bg-slate-950/40 p-4">
                <p className="text-xs text-cyan-200">Exam Size</p>
                <p className="mt-1 text-2xl font-bold">100 Q</p>
                <p className="text-xs text-slate-300">85 scored, 15 extra</p>
              </div>
              <div className="rounded-xl border border-violet-300/20 bg-slate-950/40 p-4">
                <p className="text-xs text-violet-200">Core Domains</p>
                <p className="mt-1 text-2xl font-bold">3</p>
                <p className="text-xs text-slate-300">Official IRS labels</p>
              </div>
              <div className="rounded-xl border border-teal-300/20 bg-slate-950/40 p-4">
                <p className="text-xs text-teal-200">Study Framework</p>
                <p className="mt-1 text-2xl font-bold">50 Pages</p>
                <p className="text-xs text-slate-300">I-VI structured outline</p>
              </div>
            </div>
          </section>

          <section id="overview" className="scroll-mt-24 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-lg">
              <h2 className="text-lg font-semibold text-cyan-200">
                Exam Structure Snapshot
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                <li>3 exam parts; Part 2 title is Businesses.</li>
                <li>100 questions total: 85 scored + 15 experimental.</li>
                <li>3.5-hour exam duration for each part.</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-lg">
              <h2 className="text-lg font-semibold text-violet-200">
                Testing Window + Attempts
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                <li>Offered May through February each year.</li>
                <li>Up to 4 attempts per part per testing window.</li>
                <li>Passing scores valid 3 years to pass all parts.</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-lg">
              <h2 className="text-lg font-semibold text-teal-200">
                Recommended Authorities
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                <li>Internal Revenue Code (IRC)</li>
                <li>Circular 230 practice standards</li>
                <li>IRS publications, forms, and instructions</li>
              </ul>
            </article>
          </section>

          <section
            id="domains"
            className="scroll-mt-24 rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-xl"
          >
            <h2 className="text-2xl font-semibold">Official Domain Structure</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-300">
                    <th className="py-2 pr-4">Domain</th>
                    <th className="py-2 pr-4">IRS Label</th>
                    <th className="py-2 pr-4">Question Count</th>
                    <th className="py-2 pr-4">Approx. Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {domainSummary.map((row) => (
                    <tr key={row.domain} className="border-b border-slate-800">
                      <td className="py-3 pr-4 font-medium text-cyan-200">
                        {row.domain}
                      </td>
                      <td className="py-3 pr-4">{row.label}</td>
                      <td className="py-3 pr-4">{row.questions}</td>
                      <td className="py-3 pr-4">{row.share}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="topics" className="scroll-mt-24 grid gap-4 xl:grid-cols-3">
            {domainTopics.map((domain) => (
              <article
                key={domain.heading}
                className="rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-lg transition hover:-translate-y-1 hover:border-cyan-300/40"
              >
                <h3 className="text-lg font-semibold text-cyan-100">
                  {domain.heading}
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                  {domain.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section
            id="primary-sources"
            className="scroll-mt-24 rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-xl"
          >
            <h2 className="text-2xl font-semibold">Primary IRS / Exam-Structure Sources</h2>
            <div className="mt-4 grid gap-4 xl:grid-cols-2">
              {primarySources.map((entry) => (
                <details
                  key={entry.title}
                  className="group rounded-xl border border-slate-700 bg-slate-950 p-4 open:border-cyan-300/40"
                >
                  <summary className="cursor-pointer list-none pr-8 font-semibold text-slate-100">
                    <span>{entry.title}</span>
                    <span className="ml-2 text-xs text-cyan-300 group-open:hidden">
                      [expand]
                    </span>
                    <span className="ml-2 hidden text-xs text-cyan-300 group-open:inline">
                      [collapse]
                    </span>
                  </summary>
                  <p className="mt-2 text-xs text-slate-400">
                    {entry.publisher} | {entry.date}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {entry.contribution.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </section>

          <section
            id="secondary-sources"
            className="scroll-mt-24 rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-xl"
          >
            <h2 className="text-2xl font-semibold">Secondary Blueprint Interpreters</h2>
            <div className="mt-4 grid gap-4 xl:grid-cols-2">
              {secondarySources.map((entry) => (
                <details
                  key={entry.title}
                  className="group rounded-xl border border-slate-700 bg-slate-950 p-4 open:border-violet-300/40"
                >
                  <summary className="cursor-pointer list-none pr-8 font-semibold text-slate-100">
                    <span>{entry.title}</span>
                    <span className="ml-2 text-xs text-violet-300 group-open:hidden">
                      [expand]
                    </span>
                    <span className="ml-2 hidden text-xs text-violet-300 group-open:inline">
                      [collapse]
                    </span>
                  </summary>
                  <p className="mt-2 text-xs text-slate-400">
                    {entry.publisher} | {entry.date}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {entry.contribution.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </section>

          <section
            id="report-outline"
            className="scroll-mt-24 rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-xl"
          >
            <h2 className="text-2xl font-semibold">50-Page Report Outline</h2>
            <div className="mt-4 grid gap-4 xl:grid-cols-2">
              {reportOutline.map((section) => (
                <article
                  key={section.section}
                  className="rounded-xl border border-slate-700 bg-slate-950 p-4 transition hover:border-teal-300/40"
                >
                  <h3 className="font-semibold text-teal-100">{section.section}</h3>
                  <p className="text-xs text-slate-400">{section.pages}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section
            id="matrix"
            className="scroll-mt-24 rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-xl"
          >
            <h2 className="text-2xl font-semibold">Question-Set Design Matrix</h2>
            <p className="mt-2 text-sm text-slate-300">
              Each set assumes 100 questions to mirror exam length in practice
              design (85 scored equivalent + 15 extra).
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[1200px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-300">
                    <th className="py-2 pr-4">Topic</th>
                    <th className="py-2 pr-4">Domain</th>
                    <th className="py-2 pr-4">E/M/H Mix</th>
                    <th className="py-2 pr-4">Set A</th>
                    <th className="py-2 pr-4">Set B</th>
                    <th className="py-2 pr-4">Set C</th>
                    <th className="py-2 pr-4">Allocation Rationale</th>
                  </tr>
                </thead>
                <tbody>
                  {setDesignRows.map((row) => (
                    <tr key={row.topic} className="border-b border-slate-800 align-top">
                      <td className="py-3 pr-4 font-medium text-cyan-100">
                        {row.topic}
                      </td>
                      <td className="py-3 pr-4">{row.domain}</td>
                      <td className="py-3 pr-4">{row.mix}</td>
                      <td className="py-3 pr-4">{row.setA}</td>
                      <td className="py-3 pr-4">{row.setB}</td>
                      <td className="py-3 pr-4">{row.setC}</td>
                      <td className="py-3 pr-4">{row.rationale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">
              {setDesignTakeaways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 z-50 rounded-full border border-cyan-300/40 bg-slate-900/95 px-4 py-2 text-sm font-semibold text-cyan-200 shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
      >
        Open on GitHub
      </a>
    </main>
  );
}
