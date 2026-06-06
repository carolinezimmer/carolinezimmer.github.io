"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
];

export function Nav() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2.5rem",
        height: "60px",
        background: scrolled ? "var(--bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "'Geist Mono', monospace",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          color: "var(--text)",
          fontWeight: 500,
        }}
      >
        CZ
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.08em",
              color: pathname === l.href ? "var(--accent)" : "var(--text-muted)",
              transition: "color 0.2s",
            }}
          >
            {l.label}
          </Link>
        ))}

        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            style={{
              background: "none",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
              cursor: "pointer",
              padding: "0.3rem 0.6rem",
              fontFamily: "'Geist Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.08em",
              transition: "border-color 0.2s, color 0.2s",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "light" : "dark"}
          </button>
        )}
      </div>
    </nav>
  );
}
