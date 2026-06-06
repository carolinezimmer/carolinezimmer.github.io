"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 2.5rem 4rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.15em",
            color: "var(--accent)",
            marginBottom: "1.5rem",
          }}>
          MECHANICAL ENGINEER · PENN SEAS · CLASS OF 2027
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginBottom: "2rem",
            fontWeight: 400,
          }}>
          Caroline<br />
          <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>Zimmer.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            fontSize: "1.05rem",
            color: "var(--text-muted)",
            maxWidth: "480px",
            lineHeight: 1.75,
            marginBottom: "3rem",
          }}>
          I build things that move, sense, and convert energy.
          Concentrating in dynamics, controls, and robotics.
          Currently at ETH Zürich.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <Link href="/projects" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1.5rem",
            background: "var(--text)",
            color: "var(--bg)",
            fontFamily: "'Geist Mono', monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
            transition: "opacity 0.2s",
          }}>
            VIEW PROJECTS →
          </Link>
          <a href="mailto:czimmer@seas.upenn.edu" style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.75rem 1.5rem",
            border: "1px solid var(--border)",
            color: "var(--text-muted)",
            fontFamily: "'Geist Mono', monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
            transition: "border-color 0.2s, color 0.2s",
          }}>
            GET IN TOUCH
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
            marginTop: "5rem",
            maxWidth: "560px",
          }}
        >
          {[
            { label: "GPA", value: "3.70" },
            { label: "Graduation", value: "2027" },
            { label: "Currently", value: "Zürich" },
          ].map((s) => (
            <div key={s.label} style={{
              background: "var(--bg)",
              padding: "1.4rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
            }}>
              <span style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.15em",
                color: "var(--text-faint)",
                textTransform: "uppercase",
              }}>{s.label}</span>
              <span style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "1.6rem",
                color: "var(--text)",
                lineHeight: 1,
              }}>{s.value}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── SELECTED PROJECTS ── */}
      <section style={{
        borderTop: "1px solid var(--border)",
        padding: "5rem 2.5rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "3rem" }}>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "2rem",
            fontWeight: 400,
            color: "var(--text)",
          }}>Selected Projects</h2>
          <Link href="/projects" style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.1em",
            color: "var(--text-muted)",
          }}>
            ALL PROJECTS →
          </Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", border: "1px solid var(--border)" }}>
          {projects.slice(0, 3).map((p, i) => (
            <Link key={p.id} href={`/projects/${p.id}`} style={{ display: "block" }}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                whileHover={{ backgroundColor: "var(--bg-hover)" } as never}
                style={{
                  background: "var(--bg)",
                  padding: "1.8rem 2rem",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  alignItems: "center",
                  gap: "2rem",
                  cursor: "pointer",
                }}
              >
                <div>
                  <p style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.62rem",
                    letterSpacing: "0.12em",
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    textTransform: "uppercase",
                  }}>{p.category} · {p.semester}</p>
                  <h3 style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "var(--text)",
                    marginBottom: "0.5rem",
                  }}>{p.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{p.shortDesc}</p>
                </div>
                <span style={{ color: "var(--text-faint)", fontSize: "1.2rem", flexShrink: 0 }}>→</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: "0.65rem", color: "var(--text-faint)", letterSpacing: "0.08em" }}>
          © 2026 Caroline Zimmer
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/carolinezimmer1/" },
            { label: "GitHub", href: "https://github.com/" },
            { label: "Email", href: "mailto:czimmer@seas.upenn.edu" },
          ].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                color: "var(--text-faint)",
                transition: "color 0.2s",
              }}
            >{l.label}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
