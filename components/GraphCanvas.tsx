"use client";

import * as React from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  useReactFlow,
  useStore,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
} from "@xyflow/react";

import { nodes as allNodes, edges as allEdges, neighborhood } from "@/lib/graph";
import {
  structuredLayout,
  neuronLayout,
  structuredAnnotations,
  neuronAnnotations,
  type PosMap,
} from "@/lib/layout";
import { CONCEPT_COLOR, paradigmColor } from "@/lib/paradigms";
import { NoteNode } from "./NoteNode";
import { LineageEdge } from "./LineageEdge";
import { AnnotationNode } from "./AnnotationNode";
import { GraphUIProvider } from "./GraphContext";
import type { GraphNode } from "@/lib/types";

export type Mode = "structured" | "neuron";

export interface Filters {
  paradigms: Record<string, boolean>;
  showConcepts: boolean;
  showQuestions: boolean;
  edges: { lineage: boolean; concept: boolean; derived: boolean };
}

const nodeTypes = { note: NoteNode, anno: AnnotationNode };
const edgeTypes = { lineage: LineageEdge };

function edgeColor(type: string, targetParadigm?: string): string {
  if (type === "builds-on") return paradigmColor(targetParadigm);
  if (type === "concept") return CONCEPT_COLOR;
  return "rgba(148,163,184,0.7)";
}

function visible(node: GraphNode, filters: Filters): boolean {
  if (node.kind === "paper") return filters.paradigms[node.paradigm ?? ""] !== false;
  if (node.kind === "concept") return filters.showConcepts;
  if (node.kind === "question") return filters.showQuestions;
  return true;
}

interface FlowProps {
  mode: Mode;
  filters: Filters;
  selectedId: string | null;
  hoverId: string | null;
  matchSet: Set<string> | null;
  reducedMotion: boolean;
  onSelect: (id: string | null) => void;
  onHover: (id: string | null) => void;
}

function Flow({
  mode,
  filters,
  selectedId,
  hoverId,
  matchSet,
  reducedMotion,
  onSelect,
  onHover,
}: FlowProps) {
  const rf = useReactFlow();

  // Layouts + annotations are computed exactly once (stable graph).
  const structuredPos = React.useMemo<PosMap>(
    () => structuredLayout(allNodes, allEdges),
    []
  );
  const neuronPos = React.useMemo<PosMap>(
    () => neuronLayout(allNodes, allEdges),
    []
  );
  const structAnno = React.useMemo(() => structuredAnnotations(allNodes), []);
  const neuronAnno = React.useMemo(() => neuronAnnotations(), []);

  const pos = mode === "structured" ? structuredPos : neuronPos;
  const anno = mode === "structured" ? structAnno : neuronAnno;

  // Build ReactFlow nodes for the current mode + filters.
  const computedNodes = React.useMemo<Node[]>(() => {
    const out: Node[] = [];
    for (const n of allNodes) {
      if (!visible(n, filters)) continue;
      const p = pos[n.id];
      if (!p) continue;
      const label =
        n.kind === "concept" ? n.id.replace(/-/g, " ") : n.id;
      const landmark = n.kind === "paper" && (n.paper?.importance ?? 0) >= 5;
      out.push({
        id: n.id,
        type: "note",
        position: { x: p.x - n.size, y: p.y - n.size },
        selectable: true,
        draggable: false,
        data: {
          kind: n.kind,
          label,
          color: n.color,
          paradigm: n.paradigm,
          size: n.size,
          landmark,
        },
      });
    }
    for (const a of anno) {
      out.push({
        id: a.id,
        type: "anno",
        position: { x: a.x, y: a.y },
        selectable: false,
        draggable: false,
        focusable: false,
        data: { kind: a.kind, text: a.text, color: a.color },
      });
    }
    return out;
  }, [pos, anno, filters]);

  const computedEdges = React.useMemo<Edge[]>(() => {
    const vis = new Set(
      allNodes.filter((n) => visible(n, filters)).map((n) => n.id)
    );
    const out: Edge[] = [];
    for (const e of allEdges) {
      const allow =
        e.type === "builds-on"
          ? filters.edges.lineage
          : e.type === "concept"
            ? filters.edges.concept
            : filters.edges.derived;
      if (!allow) continue;
      if (!vis.has(e.source) || !vis.has(e.target)) continue;
      const targetParadigm = allNodes.find((n) => n.id === e.target)?.paradigm;
      out.push({
        id: e.id,
        source: e.source,
        target: e.target,
        type: "lineage",
        data: {
          source: e.source,
          target: e.target,
          type: e.type,
          color: edgeColor(e.type, targetParadigm),
        },
      });
    }
    return out;
  }, [filters]);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  React.useEffect(() => {
    setNodes(computedNodes);
  }, [computedNodes, setNodes]);
  React.useEffect(() => {
    setEdges(computedEdges);
  }, [computedEdges, setEdges]);

  // Fit the view whenever the layout mode changes.
  React.useEffect(() => {
    const t = requestAnimationFrame(() =>
      rf.fitView({ padding: 0.2, duration: reducedMotion ? 0 : 650, maxZoom: 1.4 })
    );
    return () => cancelAnimationFrame(t);
  }, [mode, rf, reducedMotion]);

  // Gently center a freshly selected node.
  React.useEffect(() => {
    if (!selectedId) return;
    const p = pos[selectedId];
    if (!p) return;
    const t = requestAnimationFrame(() =>
      rf.setCenter(p.x, p.y, { zoom: 1.15, duration: reducedMotion ? 0 : 600 })
    );
    return () => cancelAnimationFrame(t);
  }, [selectedId, pos, rf, reducedMotion]);

  const focusSet = React.useMemo(() => {
    const id = hoverId ?? selectedId;
    return id ? neighborhood(id) : null;
  }, [hoverId, selectedId]);

  // Semantic zoom: this selector only flips when crossing the threshold, so it
  // does not re-render on every zoom frame.
  const showAllLabels = useStore((s) => s.transform[2] >= 1.15);

  const uiValue = React.useMemo(
    () => ({ selectedId, hoverId, focusSet, matchSet, showAllLabels, reducedMotion }),
    [selectedId, hoverId, focusSet, matchSet, showAllLabels, reducedMotion]
  );

  return (
    <GraphUIProvider value={uiValue}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable
        panOnScroll={false}
        zoomOnScroll
        zoomOnPinch
        panOnDrag
        zoomOnDoubleClick={false}
        minZoom={0.2}
        maxZoom={3}
        fitView
        fitViewOptions={{ padding: 0.22, maxZoom: 1.3 }}
        onNodeClick={(_, node) => {
          if (node.type === "note") onSelect(node.id);
        }}
        onNodeMouseEnter={(_, node) => {
          if (node.type === "note") onHover(node.id);
        }}
        onNodeMouseLeave={() => onHover(null)}
        onPaneClick={() => onSelect(null)}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={32}
          size={1}
          color="rgba(153,162,177,0.06)"
        />
        <Controls
          position="bottom-center"
          showInteractive={false}
          fitViewOptions={{ padding: 0.22, duration: reducedMotion ? 0 : 600 }}
        />
        <MiniMap
          position="bottom-right"
          pannable
          zoomable
          nodeStrokeWidth={0}
          maskColor="rgba(13,16,20,0.72)"
          nodeColor={(n) => ((n.data as { color?: string })?.color ?? "#3a4250")}
          style={{ width: 168, height: 108 }}
        />
      </ReactFlow>
    </GraphUIProvider>
  );
}

export function GraphCanvas(props: FlowProps) {
  return (
    <div className="stage">
      <ReactFlowProvider>
        <Flow {...props} />
      </ReactFlowProvider>
    </div>
  );
}
