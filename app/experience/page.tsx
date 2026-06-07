"use client";
import { motion } from "framer-motion";
import { experience, skills } from "@/lib/data";

export default function Experience() {
  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2.5rem" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginBottom: "4rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border)" }}
        >
          <h1 style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 600,
            color: "var(--text)",
            lineHeight: 1.1,
          }}>Experience</h1>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ marginBottom: "4rem" }}
        >
          <h2 style={{ fontSize: "0.8rem", color: "var(--text-faint)", marginBottom: "2rem" }}>Work & Research</h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {experience.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.07 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 140px",
                  gap: "1rem",
                  alignItems: "start",
                  paddingTop: i === 0 ? "0" : "2rem",
                  paddingBottom: "2rem",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div>
                  <h3 style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "var(--text)",
                    marginBottom: "0.2rem",
                  }}>{e.company}</h3>
                  <p style={{
                    fontSize: "0.8rem",
                    color: "var(--accent)",
                    marginBottom: "1rem",
                  }}>{e.role}</p>
                  <ul style={{ paddingLeft: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {e.bullets.map((b, j) => (
                      <li key={j} style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{b}</li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1rem" }}>
                    {e.tags.map(t => (
                      <span key={t} style={{
                        fontFamily: "'Roboto Mono', monospace",
                        fontSize: "0.58rem",
                        letterSpacing: "0.06em",
                        padding: "0.2rem 0.6rem",
                        border: "1px solid var(--border-strong)",
                        borderRadius: "980px",
                        color: "var(--text-faint)",
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-faint)", display: "block", marginBottom: "0.3rem" }}>{e.period}</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-faint)" }}>{e.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.5 }}
        >
          <h2 style={{ fontSize: "0.8rem", color: "var(--text-faint)", marginBottom: "2rem" }}>Technical Skills</h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {Object.entries(skills).map(([category, items], i, arr) => (
              <div
                key={category}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: "1rem",
                  paddingTop: i === 0 ? "0" : "1.25rem",
                  paddingBottom: "1.25rem",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                  alignItems: "start",
                }}
              >
                <p style={{ fontSize: "0.78rem", color: "var(--accent)" }}>{category}</p>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                  {items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
