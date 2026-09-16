import { useEffect, useMemo, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const categoryClass = {
  Frontend: 'chip chip-blue',
  Backend: 'chip chip-green',
  Database: 'chip chip-purple',
  Language: 'chip chip-yellow',
  Styling: 'chip chip-cyan',
  DevOps: 'chip chip-slate',
  Tools: 'chip chip-orange',
}

function Brand({ compact = false }) {
  return (
    <a
      className={`brand ${compact ? 'brand-compact' : ''}`}
      href="#home"
      aria-label="Dev Stack Home"
    >
      <img src="/data/logo-text.png" alt="Dev Stack Logo" />
    </a>
  )
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="navbar-wrap">
      <nav className="navbar container">
        <div className="nav-left">
          <button
            className="hamburger"
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <Brand />
        </div>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              className={item.label === 'Home' ? 'active' : ''}
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="btn btn-text" type="button">
            Sign In
          </button>

          <button className="btn btn-gradient btn-signup" type="button">
            Sign Up
          </button>
        </div>
      </nav>

     