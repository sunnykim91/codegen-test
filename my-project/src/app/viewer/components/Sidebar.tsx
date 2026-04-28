"use client";
import { useState, useMemo } from "react";
import { ScreenMeta } from "@/screens/manifest";

interface CategoryTree {
  [major: string]: {
    [middle: string]: {
      [minor: string]: ScreenMeta[];
    };
  };
}

function buildTree(screens: ScreenMeta[], query: string): CategoryTree {
  const filtered = query
    ? screens.filter(
        (s) =>
          s.name.toLowerCase().includes(query.toLowerCase()) ||
          s.category.major.toLowerCase().includes(query.toLowerCase()) ||
          s.category.middle.toLowerCase().includes(query.toLowerCase()) ||
          (s.category.minor ?? "").toLowerCase().includes(query.toLowerCase()),
      )
    : screens;

  const tree: CategoryTree = {};
  for (const screen of filtered) {
    const { major, middle, minor = "기타" } = screen.category;
    if (!tree[major]) tree[major] = {};
    if (!tree[major][middle]) tree[major][middle] = {};
    if (!tree[major][middle][minor]) tree[major][middle][minor] = [];
    tree[major][middle][minor].push(screen);
  }
  return tree;
}

interface SidebarProps {
  screens: ScreenMeta[];
  selectedId: string;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSelect: (id: string) => void;
}

export default function Sidebar({
  screens,
  selectedId,
  searchQuery,
  onSearchChange,
  onSelect,
}: SidebarProps) {
  const tree = useMemo(
    () => buildTree(screens, searchQuery),
    [screens, searchQuery],
  );

  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const isExpanded = (key: string) =>
    searchQuery ? true : expanded.has(key);

  const totalCount = screens.length;
  const filteredCount = Object.values(tree)
    .flatMap((mid) => Object.values(mid))
    .flatMap((min) => Object.values(min))
    .flat().length;

  return (
    <aside
      style={{
        width: 260,
        minWidth: 260,
        height: "100vh",
        borderRight: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fafafa",
        overflow: "hidden",
      }}
    >
      {/* 헤더 */}
      <div
        style={{
          padding: "16px 16px 12px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "#111",
            marginBottom: 10,
          }}
        >
          Page Viewer
          <span
            style={{
              fontSize: 12,
              fontWeight: 400,
              color: "#888",
              marginLeft: 6,
            }}
          >
            {searchQuery ? `${filteredCount}/` : ""}
            {totalCount}개
          </span>
        </div>
        {/* 검색 */}
        <div style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#999",
              fontSize: 14,
              pointerEvents: "none",
            }}
          >
            🔍
          </span>
          <input
            type="text"
            placeholder="검색..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{
              width: "100%",
              height: 34,
              paddingLeft: 32,
              paddingRight: 10,
              border: "1px solid #e0e0e0",
              borderRadius: 8,
              fontSize: 13,
              outline: "none",
              backgroundColor: "#fff",
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>

      {/* 카테고리 트리 */}
      <div style={{ flex: 1, overflowY: "auto", padding: "8px 0" }}>
        {Object.keys(tree).length === 0 ? (
          <div
            style={{ padding: "20px 16px", fontSize: 13, color: "#999" }}
          >
            검색 결과가 없습니다.
          </div>
        ) : (
          Object.entries(tree).map(([major, midMap]) => {
            const majorKey = `major:${major}`;
            const majorOpen = isExpanded(majorKey);
            return (
              <div key={major}>
                {/* 대분류 */}
                <button
                  onClick={() => toggle(majorKey)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 16px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#333",
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontSize: 10, color: "#888" }}>
                    {majorOpen ? "▼" : "▶"}
                  </span>
                  {major}
                </button>

                {majorOpen &&
                  Object.entries(midMap).map(([middle, minMap]) => {
                    const midKey = `${majorKey}|middle:${middle}`;
                    const midOpen = isExpanded(midKey);
                    return (
                      <div key={middle}>
                        {/* 중분류 */}
                        <button
                          onClick={() => toggle(midKey)}
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "5px 16px 5px 30px",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            fontSize: 12,
                            fontWeight: 500,
                            color: "#555",
                            textAlign: "left",
                          }}
                        >
                          <span style={{ fontSize: 9, color: "#aaa" }}>
                            {midOpen ? "▼" : "▶"}
                          </span>
                          {middle}
                        </button>

                        {midOpen &&
                          Object.entries(minMap).map(([minor, items]) => {
                            const minKey = `${midKey}|minor:${minor}`;
                            const minOpen = isExpanded(minKey);
                            return (
                              <div key={minor}>
                                {/* 소분류 */}
                                <button
                                  onClick={() => toggle(minKey)}
                                  style={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    padding: "4px 16px 4px 44px",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: 11,
                                    fontWeight: 500,
                                    color: "#777",
                                    textAlign: "left",
                                  }}
                                >
                                  <span style={{ fontSize: 8, color: "#bbb" }}>
                                    {minOpen ? "▼" : "▶"}
                                  </span>
                                  {minor}
                                </button>

                                {minOpen &&
                                  items.map((screen) => (
                                    <button
                                      key={screen.id}
                                      onClick={() => onSelect(screen.id)}
                                      style={{
                                        width: "100%",
                                        display: "block",
                                        padding: "6px 16px 6px 58px",
                                        background:
                                          selectedId === screen.id
                                            ? "#EEF2FF"
                                            : "none",
                                        border: "none",
                                        borderLeft:
                                          selectedId === screen.id
                                            ? "2px solid #4F46E5"
                                            : "2px solid transparent",
                                        cursor: "pointer",
                                        fontSize: 12,
                                        color:
                                          selectedId === screen.id
                                            ? "#4F46E5"
                                            : "#444",
                                        fontWeight:
                                          selectedId === screen.id ? 600 : 400,
                                        textAlign: "left",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                      }}
                                    >
                                      {screen.name}
                                    </button>
                                  ))}
                              </div>
                            );
                          })}
                      </div>
                    );
                  })}
              </div>
            );
          })
        )}
      </div>
    </aside>
  );
}
