"use client";

import * as React from "react";
import { getBezierPath, type EdgeProps } from "@xyflow/react";
import { useGraphUI } from "./GraphContext";
import type { EdgeType } from "@/lib/types";

export interface LineageEdgeData {
  source: string;
  target: string;
  type: EdgeType;
  color: string;
  [key: string]: unknown;
}

function LineageEdgeImpl({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}: EdgeProps) {
  const d = data as LineageEdgeData;
  const ui = useGraphUI();

  const [path] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    curvature: 0.28,
  });

  const active = ui.edgeActive(d.source, d.target);
  const dim = ui.edgeDim(d.source, d.target);
  const isConcept = d.type === "concept";
  const isDerived = d.type === "shares-author" || d.type === "same-benchmark";

  let opacity = isConcept ? 0.16 : isDerived ? 0.1 : 0.3;
  if (active) opacity = 0.95;
  else if (dim) opacity = 0.045;

  const width = active ? 2 : isConcept ? 1 : 1.25;

  return (
    <g>
      <path
        id={id}
        d={path}
        fill="none"
        stroke={d.color}
        strokeWidth={width}
        strokeOpacity={opacity}
        strokeDasharray={isConcept ? "1.5 5" : isDerived ? "1 6" : undefined}
        style={{ transition: "stroke-opacity 0.25s, stroke-width 0.2s" }}
      />
      {active && !ui.reducedMotion && (
        <circle className="edge-signal" r={2.4}>
          <animateMotion dur="1.25s" repeatCount="indefinite" rotate="auto">
            <mpath href={`#${id}`} />
          </animateMotion>
        </circle>
      )}
    </g>
  );
}

export const LineageEdge = React.memo(LineageEdgeImpl);
