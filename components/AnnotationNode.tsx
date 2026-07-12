"use client";

import * as React from "react";
import type { NodeProps } from "@xyflow/react";

export interface AnnotationNodeData {
  kind: "year" | "lane" | "lobe";
  text: string;
  color?: string;
  [key: string]: unknown;
}

function AnnotationNodeImpl({ data }: NodeProps) {
  const d = data as AnnotationNodeData;
  return (
    <div
      className={`anno anno-${d.kind}`}
      style={d.color ? ({ "--anno-color": d.color } as React.CSSProperties) : undefined}
    >
      {d.text}
    </div>
  );
}

export const AnnotationNode = React.memo(AnnotationNodeImpl);
