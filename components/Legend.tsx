"use client";

import * as React from "react";
import { PARADIGM_META, CONCEPT_COLOR, QUESTION_COLOR } from "@/lib/paradigms";

export function Legend() {
  return (
    <div className="legend panel" aria-label="Legend">
      <h5>Paradigms</h5>
      {PARADIGM_META.map((p) => (
        <div className="legend-item" key={p.id}>
          <span className="dot" style={{ background: p.color, color: p.color }} />
          {p.short}
        </div>
      ))}
      <div className="sep" />
      <h5>Notes</h5>
      <div className="legend-item">
        <span
          className="dot"
          style={{ background: CONCEPT_COLOR, boxShadow: "none", border: `1.5px solid ${CONCEPT_COLOR}` }}
        />
        Concept (idea hub)
      </div>
      <div className="legend-item">
        <span
          className="dot"
          style={{ background: "transparent", boxShadow: "none", border: `1.5px dashed ${QUESTION_COLOR}`, color: QUESTION_COLOR }}
        />
        Open question
      </div>
      <div className="sep" />
      <h5>Edges</h5>
      <div className="legend-edge">
        <svg width="26" height="8">
          <line x1="1" y1="4" x2="25" y2="4" stroke="#94a3b8" strokeWidth="1.5" />
        </svg>
        builds on (lineage)
      </div>
      <div className="legend-edge">
        <svg width="26" height="8">
          <line x1="1" y1="4" x2="25" y2="4" stroke={CONCEPT_COLOR} strokeWidth="1.2" strokeDasharray="1.5 4" />
        </svg>
        concept link
      </div>
    </div>
  );
}
