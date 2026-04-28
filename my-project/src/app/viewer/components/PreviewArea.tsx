"use client";
import { lazy, Suspense, useMemo } from "react";
import { screenImports } from "@/screens/manifest";

interface PreviewAreaProps {
  selectedId: string;
}

export default function PreviewArea({ selectedId }: PreviewAreaProps) {
  const ScreenComponent = useMemo(() => {
    if (!selectedId || !screenImports[selectedId]) return null;
    return lazy(screenImports[selectedId]);
  }, [selectedId]);

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
        overflowY: "auto",
        padding: "32px 24px",
      }}
    >
      {!selectedId ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            fontSize: 14,
            color: "#999",
          }}
        >
          사이드바에서 페이지를 선택해주세요
        </div>
      ) : !ScreenComponent ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            fontSize: 14,
            color: "#999",
          }}
        >
          페이지를 찾을 수 없습니다: {selectedId}
        </div>
      ) : (
        <div
          style={{
            width: 393,
            minHeight: 852,
            backgroundColor: "#fff",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
          }}
        >
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 852,
                  fontSize: 14,
                  color: "#999",
                }}
              >
                로딩 중...
              </div>
            }
          >
            <ScreenComponent />
          </Suspense>
        </div>
      )}
    </div>
  );
}
