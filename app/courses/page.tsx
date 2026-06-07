"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const semesters = [
  {
    term: "Spring 2026",
    institution: "ETH Zürich",
    courses: [
      { name: "Introduction to Energy Systems", code: "151-0244-00L" },
      { name: "Experimental Methods for Engineers", code: "151-0123-00L" },
      { name: "Finite Element Analysis", code: "151-0518-00L" },
      { name: "Biomechatronics", code: "376-0210-00L" },
      { name: "Visualization, Simulation and Interaction — Virtual Reality I", code: "151-0950-00L" },
    ],
  },
  {
    term: "Fall 2025",
    institution: "University of Pennsylvania",
    courses: [
      { name: "Machine Design & Manufacturing", code: "MEAM 2010" },
      { name: "Fluid Mechanics", code: "MEAM 3020" },
      { name: "Intro to Mechanical and Mechatronic Systems", code: "MEAM 3200" },
      { name: "Mechanical Engineering Design Laboratory", code: "MEAM 3470" },
      { name: "Engineering Ethics", code: "EAS 2030" },
      { name: "Elementary German I", code: "GRMN 0100" },
    ],
  },
  {
    term: "Spring 2025",
    institution: "University of Pennsylvania",
    courses: [
      { name: "Thermodynamics I", code: "MEAM 2030" },
      { name: "Engineering Mechanics: Dynamics", code: "MEAM 2110" },
      { name: "Mechanical Engineering Lab I", code: "MEAM 2480" },
      { name: "Engineering Entrepreneurship", code: "EAS 5450" },
      { name: "Linear Algebra", code: "MATH 3120" },
    ],
  },
  {
    term: "Fall 2024",
    institution: "University of Pennsylvania",
    courses: [
      { name: "Statics and Strength of Materials", code: "MEAM 2100" },
      { name: "Thermal-Fluids Engineering", code: "MEAM 2020" },
      { name: "Mechanical Engineering Laboratory I", code: "MEAM 2470" },
      { name: "Calculus IV", code: "MATH 2410" },
      { name: "Modern Biotechnology for Engineers", code: "ENGR 4500" },
      { name: "Pharmaceuticals and Global Health", code: "ANTH 2340" },
    ],
  },
  {
    term: "Summer 2024",
    institution: "University of Pennsylvania",
    courses: [
      { name: "Probability", code: "STAT 4300" },
    ],
  },
  {
    term: "Spring 2024",
    institution: "University of Pennsylvania",
    courses: [
      { name: "Engineering Electromagnetics & Lab", code: "ESE 1120" },
      { name: "Intro to Mechanical Design", code: "MEAM 1010" },
      { name: "Calculus, Part III", code: "MATH 2400" },
      { name: "Intro to Economics: Macro", code: "ECON 0200" },
      { name: "Critical Writing Seminar in JOUR: Hidden Influence of the World's Most Powerful Consulting Firm", code: "WRIT 0570" },
    ],
  },
  {
    term: "Fall 2023",
    institution: "University of Pennsylvania",
    courses: [
      { name: "Intro to Mechanics", code: "MEAM 1100" },
      { name: "Intro to Mechanics Lab", code: "MEAM 1470" },
      { name: "Calculus, Part II", code: "MATH 1410" },
      { name: "Intro to Economics: Micro", code: "ECON 0100" },
      { name: "Molecular Biology", code: "BIOL 1121" },
    ],
  },
  {
    term: "Advanced Placement Credit",
    institution: "",
    courses: [
      { name: "Intro to Computer Programming", code: "CIS 1100" },
      { name: "Calculus I", code: "MATH 1400" },
    ],
  },
];

export default function Courses() {
  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2.5rem" }}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginBottom: "4rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}
        >
          <div>
            <Link href="/experience" style={{ fontSize: "0.8rem", color: "var(--text-faint)", display: "inline-flex", alignItems: "center", gap: "0.4rem", marginBottom: "1.2rem" }}>
              ← Experience
            </Link>
            <h1 style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "var(--text)", lineHeight: 1.1 }}>
              Course List
            </h1>
          </div>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {semesters.map((s, i) => (
            <motion.div
              key={s.term}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "1rem", paddingBottom: "0.6rem", borderBottom: "1px solid var(--border)" }}>
                <h2 style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "1.1rem", fontWeight: 600, color: "var(--text)" }}>{s.term}</h2>
                {s.institution && (
                  <span style={{ fontSize: "0.8rem", color: "var(--text-faint)" }}>{s.institution}</span>
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {s.courses.map((c) => (
                  <div key={c.code} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    padding: "0.75rem 0",
                    borderBottom: "1px solid var(--border)",
                    gap: "2rem",
                  }}>
                    <span style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>{c.name}</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-faint)", flexShrink: 0 }}>{c.code}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
