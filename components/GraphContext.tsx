"use client";

import * as React from "react";

export interface GraphUI {
  selectedId: string | null;
  hoverId: string | null;
  /** neighborhood set of the currently focused node (hover > selected), or null */
  focusSet: Set<string> | null;
  /** search-match set, or null when no query */
  matchSet: Set<string> | null;
  /** true once the user has zoomed in past the label threshold */
  showAllLabels: boolean;
  reducedMotion: boolean;
  nodeDim: (id: string) => boolean;
  nodeMatch: (id: string) => boolean;
  edgeActive: (a: string, b: string) => boolean;
  edgeDim: (a: string, b: string) => boolean;
}

const Ctx = React.createContext<GraphUI | null>(null);

export function GraphUIProvider({
  value,
  children,
}: {
  value: {
    selectedId: string | null;
    hoverId: string | null;
    focusSet: Set<string> | null;
    matchSet: Set<string> | null;
    showAllLabels: boolean;
    reducedMotion: boolean;
  };
  children: React.ReactNode;
}) {
  const api = React.useMemo<GraphUI>(() => {
    const { selectedId, hoverId, focusSet, matchSet, showAllLabels, reducedMotion } = value;
    return {
      selectedId,
      hoverId,
      focusSet,
      matchSet,
      showAllLabels,
      reducedMotion,
      nodeDim: (id) => {
        if (focusSet) return !focusSet.has(id);
        if (matchSet) return !matchSet.has(id);
        return false;
      },
      nodeMatch: (id) => !focusSet && !!matchSet && matchSet.has(id),
      edgeActive: (a, b) => !!focusSet && focusSet.has(a) && focusSet.has(b),
      edgeDim: (a, b) => {
        if (focusSet) return !(focusSet.has(a) && focusSet.has(b));
        if (matchSet) return true;
        return false;
      },
    };
  }, [value]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useGraphUI(): GraphUI {
  const v = React.useContext(Ctx);
  if (!v) throw new Error("useGraphUI must be used within GraphUIProvider");
  return v;
}
