export function Footer() {
  return (
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
          { label: "GitHub", href: "https://github.com/carolinezimmer" },
          { label: "Email", href: "mailto:czimmer@seas.upenn.edu" },
        ].map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
            style={{
              fontSize: "0.8rem",
              color: "var(--accent)",
              fontWeight: 500,
              transition: "opacity 0.2s",
            }}
          >{l.label}</a>
        ))}
      </div>
    </footer>
  );
}
