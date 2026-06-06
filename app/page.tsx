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
        maxWidth: "960px",
        margin: "0 auto",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "4rem" }}>
          {/* Text content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: "’Roboto Mono’, monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                color: "var(--accent)",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
              }}>
              UPenn Mechanical Engineering · Class of 2027 · GPA: 3.70/4.00
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontFamily: "’Roboto Mono’, monospace",
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                color: "var(--text)",
                marginBottom: "2rem",
                fontWeight: 400,
              }}>
              Caroline<br />
              <span style={{ color: "var(--text-muted)"}}>Zimmer.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                fontSize: "1.1rem",
                color: "var(--text-muted)",
                maxWidth: "480px",
                lineHeight: 1.75,
                marginBottom: "3rem",
              }}>
              I’m a junior at the University of Pennsylvania studying Mechanical Engineering and Applied Mechanics, with minors in Math and Engineering Entrepreneurship. In Spring 2026, I’m studying abroad at ETH Zürich, a world-renowned engineering institution where I’m broadening my technical perspective in an international environment. I’m focusing my coursework on manufacturing and robotics, and I’m especially interested in sustainable hardware solutions that combine strong mechanical design with practical impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
            >
              <Link href="/projects" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.7rem 1.5rem",
                background: "var(--accent)",
                color: "#ffffff",
                borderRadius: "980px",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "opacity 0.2s",
              }}>
                View Projects
              </Link>
              <a href="mailto:czimmer@seas.upenn.edu" style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.7rem 1.5rem",
                border: "1px solid var(--border-strong)",
                borderRadius: "980px",
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                transition: "border-color 0.2s, color 0.2s",
              }}>
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ flexShrink: 0 }}
          >
            <img
              src="/images/caroline-zimmer-headshot.jpg"
              alt="Caroline Zimmer"
              style={{
                width: "260px",
                height: "320px",
                objectFit: "cover",
                objectPosition: "center top",
                filter: "grayscale(100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 18%), linear-gradient(to bottom, black 60%, transparent)",
                WebkitMaskComposite: "destination-in",
                maskImage: "linear-gradient(to right, transparent, black 18%), linear-gradient(to bottom, black 60%, transparent)",
                maskComposite: "intersect",
              }}
            />
          </motion.div>
        </div>

      </section>

      {/* ── SELECTED PROJECTS ── */}
      <section style={{
        borderTop: "1px solid var(--border)",
        padding: "5rem 2.5rem",
        maxWidth: "960px",
        margin: "0 auto",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2.5rem" }}>
          <h2 style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "2rem",
            fontWeight: 400,
            color: "var(--text)",
          }}>Selected Projects</h2>
          <Link href="/projects" style={{
            fontSize: "0.85rem",
            color: "var(--accent)",
            transition: "opacity 0.2s",
          }}>
            All projects →
          </Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {projects.slice(0, 3).map((p, i) => (
            <Link key={p.id} href={`/projects/${p.id}`} style={{ display: "block" }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                style={{
                  background: "var(--bg-card)",
                  borderRadius: "var(--radius-card)",
                  border: "1px solid var(--border)",
                  padding: "1.8rem 2rem",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  alignItems: "center",
                  gap: "2rem",
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-hover)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--bg-card)")}
              >
                <div>
                  <p style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "0.62rem",
                    letterSpacing: "0.12em",
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    textTransform: "uppercase",
                  }}>{p.category} · {p.semester}</p>
                  <h3 style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "var(--text)",
                    marginBottom: "0.5rem",
                  }}>{p.title}</h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{p.shortDesc}</p>
                </div>
                <span style={{ color: "var(--accent)", fontSize: "1.1rem", flexShrink: 0 }}>→</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "1px solid var(--border)",
        padding: "2.5rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "960px",
        margin: "0 auto",
      }}>
        <p style={{ fontSize: "0.8rem", color: "var(--text-faint)" }}>
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
                fontSize: "0.8rem",
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
