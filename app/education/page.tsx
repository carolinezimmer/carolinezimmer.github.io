"use client";
import { motion } from "framer-motion";

export default function Education() {
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
            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 600,
              color: "var(--text)",
              lineHeight: 1.1,
            }}>Education</h1>
          </div>
          <a
            href="/courses"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.65rem 1.2rem",
              border: "1px solid var(--accent)",
              fontSize: "0.85rem",
              color: "var(--accent)",
              transition: "opacity 0.2s",
              textDecoration: "none",
              flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.7"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
          >
            Course List
          </a>
        </motion.div>

        {/* Education cards */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              {
                school: "University of Pennsylvania",
                degree: "BSE Mechanical Engineering",
                detail: "GPA: 3.70 · Concentration: Dynamics, Controls & Robotics · Minors: Mathematics, Engineering Entrepreneurship",
                period: "Fall 2023 – Spring 2027",
              },
              {
                school: "University of Pennsylvania",
                degree: "MSE Mechanical Engineering",
                detail: "",
                period: "2026 – 2027",
              },
              {
                school: "ETH Zürich",
                degree: "Exchange Student",
                detail: "Electrochemical Energy Systems · Supercapacitor Fabrication & Characterization",
                period: "Spring 2026",
              },
            ].map((e, i) => (
              <div key={i} style={{
                background: "var(--bg-card)",
                borderRadius: "var(--radius-card)",
                border: "1px solid var(--border)",
                padding: "1.8rem 2rem",
                display: "grid",
                gridTemplateColumns: "1fr 120px",
                gap: "1rem",
                alignItems: "start",
              }}>
                <div>
                  <h3 style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "var(--text)",
                    marginBottom: "0.2rem",
                  }}>{e.school}</h3>
                  <p style={{
                    fontSize: "0.8rem",
                    color: "var(--accent)",
                    marginBottom: "0.6rem",
                  }}>{e.degree}</p>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{e.detail}</p>
                </div>
                <span style={{
                  fontSize: "0.8rem",
                  color: "var(--text-faint)",
                  textAlign: "right",
                  paddingTop: "0.15rem",
                }}>{e.period}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
