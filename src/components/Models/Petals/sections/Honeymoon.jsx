// Luna de miel — fondo oscuro, alias y CBU con botón de copiar.

import  { useState } from "react";
import { Plane, Copy, Check } from "lucide-react";
import { config } from "../config.js";
import FadeIn from "../components/FadeIn.jsx";
import SectionLabel from "../components/SectionLabel.jsx";

function CopyField({ label, value }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div style={{ marginBottom: 16 }}>
      <p
        style={{
          fontSize: "9px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: 6,
        }}
      >
        {label}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(255,255,255,0.06)",
          border: "0.5px solid rgba(255,255,255,0.1)",
          borderRadius: 4,
          padding: "10px 14px",
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: 13,
            color: "var(--text-light)",
            letterSpacing: 1,
            wordBreak: "break-all",
          }}
        >
          {value}
        </span>
        <button
          onClick={handleCopy}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: copied ? "var(--accent)" : "rgba(250,247,242,0.4)",
            flexShrink: 0,
            transition: "color 0.2s",
          }}
          aria-label={`Copiar ${label}`}
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
        </button>
      </div>
    </div>
  );
}

export default function Honeymoon() {
  const { title, description, alias, cbu, bank } = config.sections.honeymoon;

  return (
    <section
      style={{
        background: "var(--bg-dark)",
        color: "var(--text-light)",
        padding: "72px 32px",
        textAlign: "center",
      }}
    >
      <FadeIn>
        <SectionLabel light>Un regalo especial</SectionLabel>

        <Plane
          size={26}
          color="var(--accent)"
          strokeWidth={1.5}
          style={{ margin: "0 auto 16px" }}
        />

        <h2
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(24px, 7vw, 34px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--text-light)",
            marginBottom: 16,
          }}
        >
          {title}
        </h2>

        <p
          style={{
            fontSize: 14,
            color: "rgba(250,247,242,0.55)",
            maxWidth: 280,
            margin: "0 auto 32px",
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>

        <div style={{ maxWidth: 340, margin: "0 auto", textAlign: "left" }}>
          {bank && (
            <p
              style={{
                fontSize: 12,
                color: "var(--accent-alt)",
                marginBottom: 16,
                textAlign: "center",
                letterSpacing: 1,
              }}
            >
              {bank}
            </p>
          )}
          <CopyField label="Alias" value={alias} />
          <CopyField label="CBU" value={cbu} />
        </div>
      </FadeIn>
    </section>
  );
}
