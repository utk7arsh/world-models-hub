"use client";

import * as React from "react";
import { GraphCanvas, type Mode, type Filters } from "@/components/GraphCanvas";
import { Toolbar } from "@/components/Toolbar";
import { Sidebar } from "@/components/Sidebar";
import { NotePanel } from "@/components/NotePanel";
import { Intro } from "@/components/Intro";
import { nodes, meta } from "@/lib/graph";
import { PARADIGM_ORDER } from "@/lib/paradigms";

const INTRO_KEY = "engram.intro.seen.v1";

function initialFilters(): Filters {
  const paradigms: Record<string, boolean> = {};
  for (const id of PARADIGM_ORDER) paradigms[id] = true;
  return {
    paradigms,
    showConcepts: true,
    showQuestions: true,
    edges: { lineage: true, concept: true, derived: false },
  };
}

export default function Page() {
  const [mode, setMode] = React.useState<Mode>("structured");
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [activeId, setActiveId] = React.useState<string>("home");
  const [hoverId, setHoverId] = React.useState<string | null>(null);
  const [query, setQuery] = React.useState("");
  const [filters, setFilters] = React.useState<Filters>(initialFilters);
  const [leftOpen, setLeftOpen] = React.useState(true);
  const [rightOpen, setRightOpen] = React.useState(true);
  const [introOpen, setIntroOpen] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    try {
      if (!localStorage.getItem(INTRO_KEY)) setIntroOpen(true);
    } catch {
      setIntroOpen(true);
    }
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeIntro = React.useCallback(() => {
    setIntroOpen(false);
    try {
      localStorage.setItem(INTRO_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  const select = React.useCallback((id: string | null) => {
    setSelectedId(id);
    if (id) {
      setActiveId(id);
      setRightOpen(true);
    }
  }, []);

  const navigate = React.useCallback((id: string) => {
    setActiveId(id);
    setSelectedId(id);
    setRightOpen(true);
  }, []);

  const goHome = React.useCallback(() => {
    setActiveId("home");
    setSelectedId(null);
    setRightOpen(true);
  }, []);

  const matchSet = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    const s = new Set<string>();
    for (const n of nodes) {
      const hay = [
        n.title,
        n.id,
        ...(n.paper?.tags ?? n.note?.tags ?? []),
        ...(n.paper?.authors ?? []),
      ]
        .join(" ")
        .toLowerCase();
      if (hay.includes(q)) s.add(n.id);
    }
    return s;
  }, [query]);

  return (
    <main className="shell">
      <GraphCanvas
        mode={mode}
        filters={filters}
        selectedId={selectedId}
        hoverId={hoverId}
        matchSet={matchSet}
        reducedMotion={reducedMotion}
        onSelect={select}
        onHover={setHoverId}
      />

      <Toolbar
        mode={mode}
        setMode={setMode}
        query={query}
        setQuery={setQuery}
        matchCount={matchSet ? matchSet.size : null}
        onHome={goHome}
        leftOpen={leftOpen}
        toggleLeft={() => setLeftOpen((o) => !o)}
      />

      <Sidebar
        open={leftOpen}
        filters={filters}
        setFilters={setFilters}
        activeId={activeId}
        onSelect={navigate}
      />

      <NotePanel
        open={rightOpen}
        activeId={activeId}
        onNavigate={navigate}
        onClose={() => setRightOpen(false)}
      />

      <div className="status panel">
        <span className="live" />
        {meta.name} · {nodes.length} notes ·{" "}
        {mode === "structured" ? "← earlier    later →" : "8 lobes"}
      </div>

      {introOpen && <Intro onClose={closeIntro} />}
    </main>
  );
}
