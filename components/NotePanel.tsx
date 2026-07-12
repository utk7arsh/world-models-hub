"use client";

import * as React from "react";
import {
  papers,
  concepts,
  questions,
  home,
  noteById,
  nodeById,
  titleOf,
  paradigms,
} from "@/lib/graph";
import {
  paradigmColor,
  paradigmShort,
  CONCEPT_COLOR,
  QUESTION_COLOR,
} from "@/lib/paradigms";
import type { Paper, Note } from "@/lib/types";
import { MarkdownNote } from "./MarkdownNote";
import {
  IconArxiv,
  IconCode,
  IconExternal,
  IconClose,
  IconArrowRight,
} from "./icons";

const allNotes = [...concepts, ...questions, home];

function backlinksTo(id: string): string[] {
  return allNotes.filter((n) => n.id !== id && n.links.includes(id)).map((n) => n.id);
}

function kindMeta(id: string): { color: string; ring: boolean } {
  if (paradigms.some((p) => p.id === id))
    return { color: paradigmColor(id), ring: true };
  const n = nodeById.get(id);
  if (!n) return { color: CONCEPT_COLOR, ring: true };
  if (n.kind === "paper") return { color: paradigmColor(n.paradigm), ring: false };
  if (n.kind === "question") return { color: QUESTION_COLOR, ring: true };
  return { color: CONCEPT_COLOR, ring: true };
}

function LinkPill({
  id,
  suffix,
  onNavigate,
}: {
  id: string;
  suffix?: string;
  onNavigate: (id: string) => void;
}) {
  const { color, ring } = kindMeta(id);
  return (
    <button className="link-pill" onClick={() => onNavigate(id)}>
      <span
        className={ring ? "ring" : "dot"}
        style={ring ? { color, borderColor: color } : { background: color, boxShadow: `0 0 7px ${color}` }}
      />
      <span className="label" style={{ flex: 1 }}>
        {titleOf(id)}
      </span>
      {suffix && <span className="arrow">{suffix}</span>}
      {!suffix && <IconArrowRight size={12} className="arrow" />}
    </button>
  );
}

function Section({
  title,
  ids,
  onNavigate,
  suffix,
}: {
  title: string;
  ids: string[];
  onNavigate: (id: string) => void;
  suffix?: string;
}) {
  const valid = ids.filter((id) => noteById.has(id));
  if (valid.length === 0) return null;
  return (
    <div className="note-section">
      <h4>
        {title} <span style={{ opacity: 0.6 }}>· {valid.length}</span>
      </h4>
      <div className="link-list">
        {valid.map((id) => (
          <LinkPill key={id} id={id} suffix={suffix} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
}

function PaperView({ p, onNavigate }: { p: Paper; onNavigate: (id: string) => void }) {
  const color = paradigmColor(p.paradigm);
  const pname = paradigms.find((x) => x.id === p.paradigm)?.name ?? p.paradigm;
  const extendedBy = papers.filter((x) => x.buildsOn.includes(p.id)).map((x) => x.id);
  const refs = backlinksTo(p.id);

  return (
    <>
      <div className="note-hero">
        <div className="note-kind">
          <span className="swatch" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
          {paradigmShort(p.paradigm)} · Paper
        </div>
        <h2 className="note-title">{p.title}</h2>
        <div className="note-meta">
          <span>{p.authors.join(", ")}</span>
          <span style={{ color }}>{p.year}</span>
          {p.venue && <span>· {p.venue}</span>}
        </div>
        {p.tldr && <p className="note-tldr">{p.tldr}</p>}
      </div>

      <div className="note-section">
        <h4>Contribution</h4>
        <div className="md">
          <p>{p.contribution}</p>
        </div>
      </div>

      {(p.links?.arxiv || p.links?.code || p.links?.project) && (
        <div className="note-section">
          <h4>Sources</h4>
          <div className="ext-links">
            {p.links?.arxiv && (
              <a className="ext-link" href={p.links.arxiv} target="_blank" rel="noreferrer">
                <IconArxiv size={14} /> arXiv
              </a>
            )}
            {p.links?.code && (
              <a className="ext-link" href={p.links.code} target="_blank" rel="noreferrer">
                <IconCode size={14} /> Code
              </a>
            )}
            {p.links?.project && (
              <a className="ext-link" href={p.links.project} target="_blank" rel="noreferrer">
                <IconExternal size={13} /> Project
              </a>
            )}
          </div>
        </div>
      )}

      {(p.benchmarks?.length || p.metrics) && (
        <div className="note-section">
          <h4>Benchmarks</h4>
          {p.benchmarks && p.benchmarks.length > 0 && (
            <div className="bench-row">
              {p.benchmarks.map((b) => (
                <span key={b} className="bench">
                  {b}
                </span>
              ))}
            </div>
          )}
          {p.metrics && (
            <p className="md" style={{ marginTop: 10, fontSize: 12.5 }}>
              {p.metrics}
            </p>
          )}
        </div>
      )}

      {p.tags.length > 0 && (
        <div className="note-section">
          <h4>Tags</h4>
          <div className="tag-row">
            {p.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      <Section title="Builds on" ids={p.buildsOn} onNavigate={onNavigate} suffix="ancestor" />
      <Section title="Extended by" ids={extendedBy} onNavigate={onNavigate} suffix="descendant" />
      <Section title="Related" ids={p.related} onNavigate={onNavigate} />
      <Section title="Referenced in" ids={refs} onNavigate={onNavigate} suffix="backlink" />
    </>
  );
}

function NoteView({ n, onNavigate }: { n: Note; onNavigate: (id: string) => void }) {
  const isQuestion = n.kind === "question";
  const isParadigm = n.kind === "paradigm";
  const color = isParadigm
    ? paradigmColor(n.id)
    : isQuestion
      ? QUESTION_COLOR
      : CONCEPT_COLOR;
  const label =
    n.kind === "home"
      ? "Map of Content"
      : isParadigm
        ? "Paradigm"
        : isQuestion
          ? "Open Question"
          : "Concept";
  const refs = backlinksTo(n.id);
  const linkTitle = isParadigm ? "Papers" : "Links to";

  return (
    <>
      <div className="note-hero">
        <div className="note-kind">
          <span
            className="swatch"
            style={{
              background: "transparent",
              border: `1.6px ${isQuestion ? "dashed" : "solid"} ${color}`,
              boxShadow: `0 0 8px ${color}66`,
            }}
          />
          {label}
        </div>
        <h2 className="note-title">{n.title}</h2>
      </div>

      <div className="note-section">
        <MarkdownNote
          body={n.body}
          exists={(id) => noteById.has(id)}
          titleOf={titleOf}
          onNavigate={onNavigate}
        />
      </div>

      {n.tags.length > 0 && (
        <div className="note-section">
          <h4>Tags</h4>
          <div className="tag-row">
            {n.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      <Section title={linkTitle} ids={n.links} onNavigate={onNavigate} />
      <Section title="Backlinks" ids={refs} onNavigate={onNavigate} suffix="backlink" />
    </>
  );
}

export function NotePanel({
  open,
  activeId,
  onNavigate,
  onClose,
}: {
  open: boolean;
  activeId: string;
  onNavigate: (id: string) => void;
  onClose: () => void;
}) {
  const item = noteById.get(activeId);
  const isPaper = !!item && "authors" in item;

  return (
    <aside className={`side right panel${open ? "" : " hidden-right"}`} aria-label="Note detail" aria-hidden={!open}>
      <div className="side-head">
        <span className="side-title">Note</span>
        <button className="icon-btn" onClick={onClose} aria-label="Close panel">
          <IconClose size={15} />
        </button>
      </div>
      <div className="note-scroll">
        {!item ? (
          <div className="empty">
            <p>Select a node in the graph to read its note.</p>
          </div>
        ) : isPaper ? (
          <PaperView p={item as Paper} onNavigate={onNavigate} />
        ) : (
          <NoteView n={item as Note} onNavigate={onNavigate} />
        )}
      </div>
    </aside>
  );
}
