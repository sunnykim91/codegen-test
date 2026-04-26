"use client";
import { IconButton } from "@/app/components/IconButton";
import { Icon } from "@/app/components/Icon";

export default function ExampleButtonScreen() {
  return (
    <div
      style={{
        width: 393,
        minHeight: "100vh",
        backgroundColor: "#fff",
        padding: "24px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: "#1a1a1a" }}>
        버튼 예시
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: "#333", margin: 0 }}>Filled</p>
        <div style={{ display: "flex", gap: 8 }}>
          <IconButton variants="filled" color="primary" size="sm" icon={<Icon name="pluslineicon" />} />
          <IconButton variants="filled" color="gray" size="sm" icon={<Icon name="closlineicon" />} />
          <IconButton variants="filled" color="primaryTinted" size="sm" icon={<Icon name="searchlineicon" />} />
        </div>
        <p style={{ fontSize: 14, fontWeight: 600, color: "#333", margin: 0 }}>Outlined</p>
        <div style={{ display: "flex", gap: 8 }}>
          <IconButton variants="outlined" color="primary" size="sm" icon={<Icon name="pluslineicon" />} />
          <IconButton variants="outlined" color="gray" size="sm" icon={<Icon name="closlineicon" />} />
        </div>
        <p style={{ fontSize: 14, fontWeight: 600, color: "#333", margin: 0 }}>Ghost</p>
        <div style={{ display: "flex", gap: 8 }}>
          <IconButton variants="ghost" color="primary" size="sm" icon={<Icon name="pluslineicon" />} />
          <IconButton variants="ghost" color="gray" size="sm" icon={<Icon name="closlineicon" />} />
        </div>
      </div>
    </div>
  );
}
