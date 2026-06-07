"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2.5rem" }}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginBottom: "4rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border)" }}
        >
          <p style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            color: "var(--text-faint)",
            marginBottom: "1rem",
            textTransform: "uppercase",
          }}>Work</p>
          <h1 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 600,
            color: "var(--text)",
            lineHeight: 1.1,
          }}>Projects</h1>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {projects.map((p, i) => (
            <Link key={p.id} href={`/projects/${p.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
                style={{
                  background: "var(--bg-card)",
                  borderRadius: "var(--radius-card)",
                  border: "1px solid var(--border)",
                  padding: "2.2rem 2rem",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  alignItems: "start",
                  gap: "2rem",
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-hover)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--bg-card)")}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.6rem" }}>
                    <span style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.12em",
                      color: "var(--accent)",
                      textTransform: "uppercase",
                    }}>{p.category}</span>
                    <span style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: "0.62rem",
                      color: "var(--text-faint)",
                    }}>{p.semester}</span>
                  </div>

                  <h2 style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "var(--text)",
                    marginBottom: "0.7rem",
                    lineHeight: 1.2,
                  }}>{p.title}</h2>

                  <p style={{
                    fontSize: "0.88rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    maxWidth: "560px",
                    marginBottom: "1.2rem",
                  }}>{p.shortDesc}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        fontFamily: "'Roboto Mono', monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.06em",
                        padding: "0.2rem 0.65rem",
                        border: "1px solid var(--border-strong)",
                        borderRadius: "980px",
                        color: "var(--text-faint)",
                      }}>{t}</span>
                    ))}
                  </div>
                </div>

                <span style={{ color: "var(--text-faint)", fontSize: "1.2rem", paddingTop: "0.2rem", flexShrink: 0 }}>→</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
