"use client";
import { useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ScreenMeta } from "@/screens/manifest";
import Sidebar from "./Sidebar";
import PreviewArea from "./PreviewArea";

interface ViewerLayoutProps {
  initialId: string;
  screens: ScreenMeta[];
}

export default function ViewerLayout({ initialId, screens }: ViewerLayoutProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedId, setSelectedId] = useState(initialId);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelect = useCallback(
    (id: string) => {
      setSelectedId(id);
      const params = new URLSearchParams(searchParams.toString());
      params.set("id", id);
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams],
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
