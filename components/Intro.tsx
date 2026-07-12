"use client";

import * as React from "react";
import { IconArrowRight } from "./icons";

export function Intro({ onClose }: { onClose: () => void }) {
  return (
    <div className="intro-scrim" role="dialog" aria-modal="true" aria-label="Welcome to Engram">
      <div className="intro panel">
        <div className="intro-eyebrow">A second brain for world models</div>
        <h1>
          Welcome to <span className="accent">Engram</span>
        </h1>
        <p className="lede">
          Every top world-models paper as a note; every lineage as a memory
          trace between ideas. Knowledge lives in the connections — so this is a
          map you read, not a list you scroll.
        </p>

        <div className="layers">
          <div className="layer">
            <div className="step">LAYER 01 · RAW</div>
            <div className="name">Sources</div>
            <div className="desc">
              Primary papers and citations — the immutable evidence layer.
            </div>
          </div>
          <div className="layer">
            <div className="step">LAYER 02 · WIKI</div>
            <div className="name">Compiled graph</div>
            <div className="desc">
              Linked notes, concept hubs, and open questions — the knowledge
              compiled from the sources.
            </div>
          </div>
          <div className="layer">
            <div className="step">LAYER 03 · SCHEMA</div>
            <div className="name">Maintenance</div>
            <div className="desc">
              Prompts and health checks let an LLM keep the graph coherent as it
              grows, instead of it decaying.
            </div>
          </div>
        </div>

        <div className="intro-actions">
          <button className="btn-primary" onClick={onClose}>
            Enter the graph <IconArrowRight size={16} />
          </button>
          <span style={{ fontSize: 12, color: "var(--text-faint)" }}>
            Toggle <strong style={{ color: "var(--text-dim)" }}>Timeline</strong> /{" "}
            <strong style={{ color: "var(--text-dim)" }}>Neuron</strong> to change how the field is drawn.
          </span>
        </div>
      </div>
    </div>
  );
}
