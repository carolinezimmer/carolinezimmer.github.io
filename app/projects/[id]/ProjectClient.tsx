"use client";
import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
  id: string; title: string; category: string; semester: string;
  longDesc: string; tags: string[]; images: string[];
};

export function ProjectClient({ project, next, prev }: { project: Project; next: Project; prev: Project }) {
  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "4rem 2.5rem" }}>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} style={{ marginBottom: "3rem" }}>
          <Link href="/projects" style={{
            fontSize: "0.8rem", color: "var(--text-faint)", display: "inline-flex",
            alignItems: "center", gap: "0.4rem",
          }}>
            ← All Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem", paddingBottom: "2.5rem", borderBottom: "1px solid var(--border)" }}
        >
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--accent)" }}>{project.category}</span>
            <span style={{ color: "var(--border)" }}>·</span>
            <span style={{ fontSize: "0.8rem", color: "var(--text-faint)" }}>{project.semester}</span>
          </div>
          <h1 style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 600, color: "var(--text)", lineHeight: 1.15, marginBottom: "1.5rem" }}>{project.title}</h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {project.tags.map(t => (
              <span key={t} style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.06em", padding: "0.25rem 0.65rem", border: "1px solid var(--border)", color: "var(--text-faint)" }}>{t}</span>
            ))}
          </div>
        </motion.div>

        {project.images.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
            style={{ width: "100%", aspectRatio: "16/9", background: "var(--bg-subtle)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "3rem" }}>
            <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem", color: "var(--text-faint)", letterSpacing: "0.1em" }}>PHOTOS COMING SOON</p>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "var(--border)", border: "1px solid var(--border)", marginBottom: "3rem" }}>
            {project.images.map((src, i) => (
              <img key={i} src={src} alt={`${project.title} ${i + 1}`}
                style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", gridColumn: project.images.length % 2 === 1 && i === project.images.length - 1 ? "1 / -1" : "auto" }} />
            ))}
          </motion.div>
        )}

        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--text-muted)", marginBottom: "4rem" }}>
          {project.longDesc}
        </motion.p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)", border: "1px solid var(--border)" }}>
          {[{ label: "← Previous", p: prev }, { label: "Next →", p: next }].map(({ label, p: np }) => (
            <Link key={np.id} href={`/projects/${np.id}`}>
              <div style={{ background: "var(--bg)", padding: "1.5rem", transition: "background 0.15s", height: "100%" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-hover)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--bg)")}>
                <p style={{ fontSize: "0.75rem", color: "var(--text-faint)", marginBottom: "0.5rem" }}>{label}</p>
                <p style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 600, fontSize: "1rem", color: "var(--text)" }}>{np.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
