"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/experience", label: "Experience" },
];

export function Nav() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [menuOpen]);

  return (
    <>
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: "var(--nav-bg)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
      }}
    >
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        height: "52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
      }}>
        <Link
          href="/"
          onMouseEnter={() => setHoveredItem("cz")}
          onMouseLeave={() => setHoveredItem(null)}
          style={{
            fontFamily: hoveredItem === "cz" ? "'Cormorant Garamond', serif" : "'Inter', sans-serif",
            fontStyle: hoveredItem === "cz" ? "italic" : "normal",
            fontWeight: 500,
            fontSize: hoveredItem === "cz" ? "0.88rem" : "0.78rem",
            letterSpacing: hoveredItem === "cz" ? "0" : "0.12em",
            color: "var(--text)",
            transition: "letter-spacing 0.15s",
          }}
        >
          CZ
        </Link>

        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onMouseEnter={() => setHoveredItem(l.href)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                fontFamily: hoveredItem === l.href ? "'Cormorant Garamond', serif" : "inherit",
                fontStyle: hoveredItem === l.href ? "italic" : "normal",
                fontWeight: pathname === l.href ? 500 : 400,
                fontSize: hoveredItem === l.href ? "0.95rem" : "0.85rem",
                color: "var(--text)",
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text)",
              padding: "0.25rem",
              alignItems: "center",
            }}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </svg>
            )}
          </button>

          {mounted ? (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-strong)",
                borderRadius: "980px",
                color: "var(--text-muted)",
                cursor: "pointer",
                padding: "0.3rem 0.85rem",
                fontSize: "0.75rem",
                transition: "background 0.2s, color 0.2s",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          ) : (
            <div style={{ width: "60px" }} />
          )}
        </div>
      </div>

      {menuOpen && (
        <div style={{ borderTop: "1px solid var(--border)", paddingBottom: "0.75rem" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.65rem 2rem",
                fontWeight: pathname === l.href ? 500 : 400,
                fontSize: "0.95rem",
                color: "var(--text)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
    <div style={{
      position: "fixed",
      top: "52px",
      left: 0,
      right: 0,
      height: "48px",
      background: "linear-gradient(to bottom, var(--bg), transparent)",
      zIndex: 90,
      pointerEvents: "none",
    }} />
    </>
  );
}
