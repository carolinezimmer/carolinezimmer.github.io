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
          style={{ marginBottom: "4rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}
        >
          <div>
            <p style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.15em",
              color: "var(--text-faint)",
              marginBottom: "1rem",
              textTransform: "uppercase",
            }}>Background</p>
            <h1 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 400,
              color: "var(--text)",
              lineHeight: 1.1,
            }}>Experience</h1>
          </div>
          <a
            href="/resume.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.65rem 1.2rem",
              border: "1px solid var(--border)",
              fontFamily: "'Geist Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
              transition: "border-color 0.2s, color 0.2s",
              textDecoration: "none",
              flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--text)"; e.currentTarget.style.color = "var(--text)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
          >
            ↓ RESUME PDF
          </a>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ marginBottom: "4rem" }}
        >
          <h2 style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            color: "var(--text-faint)",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}>Education</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", border: "1px solid var(--border)" }}>
            {[
              {
                school: "University of Pennsylvania",
                degree: "BSE Mechanical Engineering",
                detail: "GPA: 3.70 · Concentration: Dynamics, Controls & Robotics · Minors: Mathematics, Engineering Entrepreneurship",
                period: "2023 – 2027",
              },
              {
                school: "ETH Zürich",
                degree: "Exchange Student",
                detail: "Electrochemical Energy Systems · Supercapacitor Fabrication & Characterization",
                period: "Spring 2026",
              },
            ].map((e, i) => (
              <div key={i} style={{
                background: "var(--bg)",
                padding: "1.8rem 2rem",
                display: "grid",
                gridTemplateColumns: "1fr 120px",
                gap: "1rem",
                alignItems: "start",
              }}>
                <div>
                  <h3 style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: "var(--text)",
                    marginBottom: "0.2rem",
                  }}>{e.school}</h3>
                  <p style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                    color: "var(--accent)",
                    marginBottom: "0.6rem",
                    textTransform: "uppercase",
                  }}>{e.degree}</p>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{e.detail}</p>
                </div>
                <span style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: "0.65rem",
                  color: "var(--text-faint)",
                  textAlign: "right",
                  paddingTop: "0.15rem",
                }}>{e.period}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.5 }}
          style={{ marginBottom: "4rem" }}
        >
          <h2 style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            color: "var(--text-faint)",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}>Work & Research</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", border: "1px solid var(--border)" }}>
            {experience.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.07 }}
                style={{
                  background: "var(--bg)",
                  padding: "2rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 140px",
                  gap: "1rem",
                  alignItems: "start",
                }}
              >
                <div>
                  <h3 style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    color: "var(--text)",
                    marginBottom: "0.2rem",
                  }}>{e.company}</h3>
                  <p style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.62rem",
                    letterSpacing: "0.08em",
                    color: "var(--accent)",
                    textTransform: "uppercase",
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
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.58rem",
                        letterSpacing: "0.06em",
                        padding: "0.2rem 0.55rem",
                        border: "1px solid var(--border)",
                        color: "var(--text-faint)",
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.62rem",
                    color: "var(--text-faint)",
                    display: "block",
                    marginBottom: "0.3rem",
                  }}>{e.period}</span>
                  <span style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.58rem",
                    color: "var(--text-faint)",
                  }}>{e.location}</span>
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
          <h2 style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            color: "var(--text-faint)",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}>Technical Skills</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} style={{ background: "var(--bg)", padding: "1.5rem" }}>
                <p style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.12em",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}>{category}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {items.map(item => (
                    <li key={item} style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
