"use client";

import * as React from "react";
import {
  papers,
  concepts,
  questions,
  home,
  healthReport,
} from "@/lib/graph";
import { PARADIGM_META, PARADIGM_ORDER, CONCEPT_COLOR, QUESTION_COLOR, paradigmColor } from "@/lib/paradigms";
import type { Filters } from "./GraphCanvas";
import { IconChevron, IconHome } from "./icons";

const health = healthReport();
const paradigmName = new Map(PARADIGM_META.map((p) => [p.id, p.short]));

function Section({
  title,
  defaultOpen = true,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className="section">
      <button
        className="section-head"
        data-open={open}
        onClick={() => setOpen((o) => !o)}
      >
        {title}
        <IconChevron className="chev" size={14} />
      </button>
      {open && <div className="section-body">{children}</div>}
    </div>
  );
}

function Row({
  label,
  color,
  ring,
  active,
  count,
  onClick,
  icon,
}: {
  label: string;
  color?: string;
  ring?: boolean;
  active?: boolean;
  count?: number;
  onClick: () => void;
  icon?: React.ReactNode;
}) {
  return (
    <button className={`tree-row${active ? " active" : ""}`} onClick={onClick}>
      {icon}
      {color &&
        (ring ? (
          <span className="ring" style={{ color }} />
        ) : (
          <span className="dot" style={{ background: color, color }} />
        ))}
      <span className="label">{label}</span>
      {count !== undefined && <span className="count">{count}</span>}
    </button>
  );
}

export function Sidebar({
  open,
  filters,
  setFilters,
  activeId,
  onSelect,
}: {
  open: boolean;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const toggleParadigm = (id: string) =>
    setFilters((f) => ({
      ...f,
      paradigms: { ...f.paradigms, [id]: f.paradigms[id] === false },
    }));

  return (
    <aside className={`side left panel${open ? "" : " hidden-left"}`} aria-label="Vault" aria-hidden={!open}>
      <div className="side-head">
        <span className="side-title">Vault</span>
        <span className="count" style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-faint)" }}>
          {papers.length + concepts.length + questions.length} notes
        </span>
      </div>
      <div className="side-body">
        <Section title="Map">
          <Row
            label="Home"
            active={activeId === "home"}
            onClick={() => onSelect("home")}
            icon={<IconHome size={13} />}
          />
        </Section>

        <Section title="Papers by paradigm">
          {PARADIGM_ORDER.map((pid) => {
            const list = papers.filter((p) => p.paradigm === pid);
            if (list.length === 0) return null;
            return (
              <ParadigmGroup
                key={pid}
                pid={pid}
                list={list.map((p) => ({ id: p.id, title: p.title, year: p.year }))}
                activeId={activeId}
                onSelect={onSelect}
              />
            );
          })}
        </Section>

        <Section title={`Concepts · ${concepts.length}`} defaultOpen={false}>
          {concepts.map((c) => (
            <Row
              key={c.id}
              label={c.title}
              color={CONCEPT_COLOR}
              ring
              active={activeId === c.id}
              onClick={() => onSelect(c.id)}
            />
          ))}
        </Section>

        <Section title={`Open questions · ${questions.length}`} defaultOpen={false}>
          {questions.map((q) => (
            <Row
              key={q.id}
              label={q.title}
              color={QUESTION_COLOR}
              ring
              active={activeId === q.id}
              onClick={() => onSelect(q.id)}
            />
          ))}
        </Section>

        <Section title="Filters" defaultOpen={false}>
          <div className="chips">
            {PARADIGM_META.map((p) => (
              <button
                key={p.id}
                className={`chip${filters.paradigms[p.id] === false ? " off" : ""}`}
                onClick={() => toggleParadigm(p.id)}
                title={`Toggle ${p.short}`}
              >
                <span className="dot" style={{ background: p.color }} />
                {p.short}
              </button>
            ))}
          </div>
          <div className="chips" style={{ marginTop: 6 }}>
            <button
              className={`chip${filters.showConcepts ? "" : " off"}`}
              onClick={() => setFilters((f) => ({ ...f, showConcepts: !f.showConcepts }))}
            >
              <span className="ring" style={{ color: CONCEPT_COLOR, width: 8, height: 8, borderRadius: "50%", border: `1.5px solid ${CONCEPT_COLOR}` }} />
              Concepts
            </button>
            <button
              className={`chip${filters.showQuestions ? "" : " off"}`}
              onClick={() => setFilters((f) => ({ ...f, showQuestions: !f.showQuestions }))}
            >
              <span className="ring" style={{ color: QUESTION_COLOR, width: 8, height: 8, borderRadius: "50%", border: `1.5px dashed ${QUESTION_COLOR}` }} />
              Questions
            </button>
          </div>
          <div className="chips" style={{ marginTop: 6 }}>
            <EdgeChip
              label="Lineage"
              on={filters.edges.lineage}
              onClick={() => setFilters((f) => ({ ...f, edges: { ...f.edges, lineage: !f.edges.lineage } }))}
            />
            <EdgeChip
              label="Concept links"
              on={filters.edges.concept}
              onClick={() => setFilters((f) => ({ ...f, edges: { ...f.edges, concept: !f.edges.concept } }))}
            />
            <EdgeChip
              label="Author / benchmark"
              on={filters.edges.derived}
              onClick={() => setFilters((f) => ({ ...f, edges: { ...f.edges, derived: !f.edges.derived } }))}
            />
          </div>
        </Section>

        <Section title="Health" defaultOpen={false}>
          <div className="stat-grid">
            <div className="stat">
              <div className="num">{health.papers}</div>
              <div className="lbl">Papers</div>
            </div>
            <div className="stat">
              <div className="num">{health.links}</div>
              <div className="lbl">Links</div>
            </div>
            <div className="stat">
              <div className="num">{health.concepts + health.questions}</div>
              <div className="lbl">Notes</div>
            </div>
            <div className={`stat ${health.orphans.length === 0 ? "ok" : "warn"}`}>
              <div className="num">{health.orphans.length}</div>
              <div className="lbl">Orphans</div>
            </div>
          </div>
          <div className="mini-bars">
            {health.perParadigm
              .filter((p) => p.count > 0)
              .map((p) => {
                const max = Math.max(...health.perParadigm.map((x) => x.count), 1);
                return (
                  <div className="mini-bar" key={p.id}>
                    <span style={{ width: 78, color: paradigmColor(p.id) }}>
                      {paradigmName.get(p.id)}
                    </span>
                    <span className="track">
                      <span
                        className="fill"
                        style={{
                          width: `${(p.count / max) * 100}%`,
                          background: paradigmColor(p.id),
                        }}
                      />
                    </span>
                    <span className="n">{p.count}</span>
                  </div>
                );
              })}
          </div>
        </Section>
      </div>
    </aside>
  );
}

function EdgeChip({ label, on, onClick }: { label: string; on: boolean; onClick: () => void }) {
  return (
    <button className={`chip${on ? "" : " off"}`} onClick={onClick}>
      <svg width="16" height="8" aria-hidden>
        <line x1="1" y1="4" x2="15" y2="4" stroke="var(--text-dim)" strokeWidth="1.4" strokeDasharray={label === "Lineage" ? undefined : "2 3"} />
      </svg>
      {label}
    </button>
  );
}

function ParadigmGroup({
  pid,
  list,
  activeId,
  onSelect,
}: {
  pid: string;
  list: { id: string; title: string; year: number }[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const [open, setOpen] = React.useState(true);
  const color = paradigmColor(pid);
  return (
    <div>
      <button
        className="section-head"
        data-open={open}
        style={{ textTransform: "none", letterSpacing: 0, fontFamily: "var(--font-sans)", fontSize: 12 }}
        onClick={() => setOpen((o) => !o)}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="dot" style={{ width: 8, height: 8, borderRadius: "50%", background: color, boxShadow: `0 0 7px ${color}` }} />
          {paradigmName.get(pid)}
          <span className="count">{list.length}</span>
        </span>
        <IconChevron className="chev" size={13} />
      </button>
      {open && (
        <div style={{ paddingLeft: 6 }}>
          {list
            .sort((a, b) => a.year - b.year)
            .map((p) => (
              <Row
                key={p.id}
                label={p.title}
                color={color}
                active={activeId === p.id}
                count={p.year}
                onClick={() => onSelect(p.id)}
              />
            ))}
        </div>
      )}
    </div>
  );
}
