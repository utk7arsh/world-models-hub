"use client";

import * as React from "react";
import type { Mode } from "./GraphCanvas";
import {
  IconSearch,
  IconTimeline,
  IconNeuron,
  IconPanelLeft,
  IconHome,
} from "./icons";

export function Toolbar({
  mode,
  setMode,
  query,
  setQuery,
  matchCount,
  onHome,
  leftOpen,
  toggleLeft,
}: {
  mode: Mode;
  setMode: (m: Mode) => void;
  query: string;
  setQuery: (q: string) => void;
  matchCount: number | null;
  onHome: () => void;
  leftOpen: boolean;
  toggleLeft: () => void;
}) {
  return (
    <div className="toolbar panel" role="toolbar" aria-label="Engram controls">
      <button
        className={`icon-btn${leftOpen ? " on" : ""}`}
        onClick={toggleLeft}
        aria-label="Toggle vault sidebar"
        aria-pressed={leftOpen}
      >
        <IconPanelLeft size={16} />
      </button>

      <div className="brand">
        <svg className="brand-glyph" viewBox="0 0 24 24" aria-hidden>
          <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <circle cx="12" cy="12" r="2.2" />
            <circle cx="5" cy="6.5" r="1.3" fill="currentColor" stroke="none" />
            <circle cx="19" cy="7.5" r="1.3" fill="currentColor" stroke="none" />
            <circle cx="6.5" cy="18" r="1.3" fill="currentColor" stroke="none" />
            <circle cx="18" cy="17" r="1.3" fill="currentColor" stroke="none" />
            <path d="M10 11 6.2 7.4M14 11l3.6-2.8M10.6 13.4 7.4 16.6M13.6 13.6l3.2 2.6" opacity="0.6" />
          </g>
        </svg>
        <div>
          <div className="brand-name">Engram</div>
          <div className="brand-tag">a second brain for world models</div>
        </div>
      </div>

      <div className="tb-divider" />

      <div className="search">
        <IconSearch size={15} className="search-icon" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search papers, concepts…"
          spellCheck={false}
          aria-label="Search the graph"
        />
        {query && matchCount !== null && (
          <span className="search-count">{matchCount}</span>
        )}
      </div>

      <div className="mode-toggle" role="tablist" aria-label="Layout mode">
        <button
          className={mode === "structured" ? "active" : ""}
          onClick={() => setMode("structured")}
          role="tab"
          aria-selected={mode === "structured"}
        >
          <IconTimeline size={15} /> Timeline
        </button>
        <button
          className={mode === "neuron" ? "active" : ""}
          onClick={() => setMode("neuron")}
          role="tab"
          aria-selected={mode === "neuron"}
        >
          <IconNeuron size={15} /> Neuron
        </button>
      </div>

      <div className="tb-divider" />

      <button className="icon-btn" onClick={onHome} aria-label="Open home note">
        <IconHome size={16} />
      </button>
    </div>
  );
}
