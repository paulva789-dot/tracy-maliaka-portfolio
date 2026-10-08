import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { content } from "../data/content.js";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/skills", "Skills"],
  ["/projects", "Projects"],
  ["/experience", "Experience"],
  ["/services", "Services"],
  ["/contact", "Contact"],
];

export default function Navbar({ theme, onToggle }) {
  const [open, setOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <header className="navbar">
      <div className="nav-inner">
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>

        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          {content.firstName}<span>.</span>
        </Link>

        <nav className={"nav-links" + (open ? " open" : "")}>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className="theme-toggle"
          onClick={onToggle}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title={isDark ? "Light mode" : "Dark mode"}
        >
          {isDark ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
