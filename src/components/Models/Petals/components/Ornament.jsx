// Divisor decorativo con líneas y punto central.

import React from "react";

export default function Ornament({ light = false }) {
  const color = light ? "var(--text-light)" : "var(--accent-alt)";
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <div style={{ width: 48, height: "0.5px", background: color, opacity: 0.5 }} />
      <div style={{ width: 5, height: 5, borderRadius: "50%", background: color, opacity: 0.6 }} />
      <div style={{ width: 5, height: 5, borderRadius: "50%", background: color, opacity: 0.4 }} />
      <div style={{ width: 5, height: 5, borderRadius: "50%", background: color, opacity: 0.6 }} />
      <div style={{ width: 48, height: "0.5px", background: color, opacity: 0.5 }} />
    </div>
  );
}
