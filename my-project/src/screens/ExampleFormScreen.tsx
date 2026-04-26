"use client";
import { useState } from "react";
import { TextField } from "@/app/components/TextField";

export default function ExampleFormScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div
      style={{
        width: 393,
        minHeight: "100vh",
        backgroundColor: "#fff",
        padding: "24px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          margin: 0,
          color: "#1a1a1a",
        }}
      >
        정보 입력
      </h2>
      <p style={{ fontSize: 14, color: "#666", margin: 0 }}>
        아래 정보를 입력해주세요.
      </p>
      <TextField
        state={name ? "filled" : "enabled"}
        status="none"
        label="이름"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        state={email ? "filled" : "enabled"}
        status="none"
        label="이메일"
        placeholder="이메일을 입력하세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        style={{
          marginTop: 8,
          height: 52,
          borderRadius: 12,
          border: "none",
          backgroundColor: "#1B4EFF",
          color: "#fff",
          fontSize: 16,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        확인
      </button>
    </div>
  );
}
