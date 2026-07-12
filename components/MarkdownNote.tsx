"use client";

import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Turn Obsidian-style [[id]] or [[id|label]] into markdown links using a custom
// "engram:" protocol, then intercept those links to render clickable wikilinks.
function preprocess(body: string): string {
  return body.replace(
    /\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g,
    (_m, id: string, label?: string) => {
      const text = (label ?? id).trim().replace(/\]/g, "\\]");
      return `[${text}](engram:${id.trim()})`;
    }
  );
}

export function MarkdownNote({
  body,
  exists,
  titleOf,
  onNavigate,
}: {
  body: string;
  exists: (id: string) => boolean;
  titleOf: (id: string) => string;
  onNavigate: (id: string) => void;
}) {
  const source = React.useMemo(() => preprocess(body), [body]);

  return (
    <div className="md">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a({ href, children }) {
            if (href && href.startsWith("engram:")) {
              const id = href.slice("engram:".length);
              const ok = exists(id);
              return (
                <button
                  type="button"
                  className={`wikilink${ok ? "" : " broken"}`}
                  title={ok ? titleOf(id) : `Unresolved link: ${id}`}
                  onClick={() => ok && onNavigate(id)}
                >
                  {children}
                </button>
              );
            }
            return (
              <a href={href} target="_blank" rel="noreferrer">
                {children}
              </a>
            );
          },
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
