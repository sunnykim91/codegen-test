import { useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { ScreenMeta } from "@/screens/manifest";
import Sidebar from "./Sidebar";
import PreviewArea from "./PreviewArea";

interface ViewerLayoutProps {
  screens: ScreenMeta[];
}

export default function ViewerLayout({ screens }: ViewerLayoutProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get("id") ?? "";
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelect = useCallback(
    (id: string) => {
      setSearchParams({ id }, { replace: true });
    },
    [setSearchParams],
  );

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar
        screens={screens}
        selectedId={selectedId}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSelect={handleSelect}
      />
      <PreviewArea selectedId={selectedId} />
    </div>
  );
}
