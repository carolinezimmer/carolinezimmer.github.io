"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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

  useEffect(() => { setMounted(true); }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: "52px",
        background: "var(--nav-bg)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
      }}
    >
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        height: "100%",
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
            fontWeight: hoveredItem === "cz" ? 500 : 500,
            fontSize: hoveredItem === "cz" ? "1rem" : "0.78rem",
            letterSpacing: hoveredItem === "cz" ? "0" : "0.12em",
            color: "var(--text)",
            transition: "font-size 0.15s, letter-spacing 0.15s",
          }}
        >
          CZ
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onMouseEnter={() => setHoveredItem(l.href)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                fontFamily: hoveredItem === l.href ? "'Cormorant Garamond', serif" : "inherit",
                fontStyle: hoveredItem === l.href ? "italic" : "normal",
                fontWeight: hoveredItem === l.href ? 500 : (pathname === l.href ? 500 : 400),
                fontSize: hoveredItem === l.href ? "1.05rem" : "0.85rem",
                color: "var(--text)",
                transition: "font-size 0.15s, color 0.2s",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

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
  );
}
