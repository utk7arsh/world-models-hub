"use client";

import * as React from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { useGraphUI } from "./GraphContext";
import { paradigmGlow } from "@/lib/paradigms";

export interface NoteNodeData {
  kind: "paper" | "concept" | "question";
  label: string;
  color: string;
  paradigm?: string;
  size: number;
  /** landmark node — labelled even in the zoomed-out overview */
  landmark?: boolean;
  [key: string]: unknown;
}

const handleStyle: React.CSSProperties = {
  opacity: 0,
  width: 1,
  height: 1,
  minWidth: 1,
  minHeight: 1,
  border: "none",
  background: "transparent",
};

function NoteNodeImpl({ id, data }: NodeProps) {
  const d = data as NoteNodeData;
  const ui = useGraphUI();

  const selected = ui.selectedId === id;
  const hover = ui.hoverId === id;
  const dim = ui.nodeDim(id);
  const match = ui.nodeMatch(id);

  // Semantic-zoom label rule:
  // - when a node is focused, only its neighborhood shows labels
  // - otherwise: landmarks + concepts always; everything once zoomed in;
  //   plus hover/selected/search-match
  let showLabel: boolean;
  if (ui.focusSet) {
    showLabel = ui.focusSet.has(id);
  } else {
    showLabel =
      selected ||
      hover ||
      match ||
      ui.showAllLabels ||
      d.kind === "concept" ||
      !!d.landmark;
  }

  const glow = d.kind === "paper" ? paradigmGlow(d.paradigm) : `${d.color}59`;
  const diameter = d.size * 2;

  return (
    <div
      className={`gnode ${d.kind}`}
      data-selected={selected}
      data-hover={hover}
      data-dim={dim}
      data-match={match}
      data-showlabel={showLabel}
      style={
        {
          "--node-color": d.color,
          "--node-glow": glow,
        } as React.CSSProperties
      }
    >
      <Handle type="target" position={Position.Top} style={handleStyle} />
      <div className="gnode-core" style={{ width: diameter, height: diameter }} />
      <div className="gnode-label">
        {d.kind === "concept" ? d.label : <span className="lbl-mono">{d.label}</span>}
      </div>
      <Handle type="source" position={Position.Bottom} style={handleStyle} />
    </div>
  );
}

export const NoteNode = React.memo(NoteNodeImpl);
