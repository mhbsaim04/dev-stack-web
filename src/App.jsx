import { useEffect, useMemo, useState } from 'react'

const navItems = [
  { label: 'Home', href: '' },
  { label: 'Technologies', href: '' },
  { label: 'Projects', href: '' },
  { label: 'About', href: '' },
  { label: 'Contact', href: '' },
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

      {mobileOpen && (
        <div className="mobile-menu container">
          {navItems.map((item) => (
            <a href={item.href} onClick={closeMobile} key={item.label}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <img
        src="/data/banner-stack.png"
        alt="Development Stack"
      />
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>
            Build Your Ideal <span>Development Stack</span>
          </h1>

          <p>
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-gradient btn-primary"
              href=""
            >
              Explore Technologies
            </a>

            <a className="btn btn-outline" href="">
              Learn More
            </a>
          </div>
        </div>

        <HeroArt />
      </div>
    </section>
  )
}

function TechnologyCard({ technology, added, onAdd }) {
  return (
    <article className="tech-card">
      <div className="tech-card-top">
        <img
          className="tech-icon"
          src={technology.icon}
          alt=""
          loading="lazy"
        />

        <span className="badge">{technology.badge}</span>
      </div>

      <h3>{technology.name}</h3>

      <p>{technology.description}</p>

      <div className="meta-row">
        <span
          className={
            categoryClass[technology.category] || 'chip'
          }
        >
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>

        <span className="rating">
          ★ {technology.rating.toFixed(1)}
        </span>
      </div>

      <button
        className={`stack-button ${added ? 'added' : ''}`}
        type="button"
        disabled={added}
        onClick={() => onAdd(technology)}
      >
        {added ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}

function StackPanel({ stack, onRemove, onRemoveAll }) {
  const selectedText =
    stack.length === 1
      ? '1 Technology Selected'
      : `${stack.length} Technologies Selected`

  return (
    <aside className="stack-panel">
      <div className="stack-heading">
        <h2>Your Stack</h2>
        <p>{selectedText}</p>
      </div>

      {stack.length === 0 ? (
        <div className="stack-empty">
          <span>Your stack is empty.</span>
        </div>
      ) : (
        <div className="stack-list">
          {stack.map((item) => (
            <div className="stack-item" key={item.id}>
              <img src={item.icon} alt="" />

              <div className="stack-item-info">
                <strong>{item.name}</strong>
                <span>{item.category}</span>
              </div>

              <button
                type="button"
                className="remove-btn"
                onClick={() => onRemove(item.id)}
                aria-label={`Remove ${item.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        className="remove-all"
        type="button"
        onClick={onRemoveAll}
        disabled={stack.length === 0}
      >
        Remove All
      </button>
    </aside>
  )
}

function Technologies({
  technologies,
  loading,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}) {
  const [filter, setFilter] = useState('All')

  const categories = useMemo(
    () => [
      'All',
      ...new Set(
        technologies.map((technology) => technology.category)
      ),
    ],
    [technologies]
  )

  const filteredTechnologies = useMemo(
    () =>
      filter === 'All'
        ? technologies
        : technologies.filter(
          (technology) => technology.category === filter
        ),
    [filter, technologies]
  )

  return (
    <section className="technologies-section" id="technologies">
      <div className="container">
        <div className="section-heading">
          <h2>
            Explore the <span>Technologies</span>
          </h2>

          <p>
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div
          className="category-filter"
          aria-label="Filter technologies by category"
        >
          {categories.map((category) => (
            <button
              className={
                filter === category
                  ? 'filter-btn active'
                  : 'filter-btn'
              }
              type="button"
              onClick={() => setFilter(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="technology-layout">
          <div className="tech-grid">
            {loading ? (
              <div className="loading-state">
                <div className="spinner" />
                <p>Loading technologies...</p>
              </div>
            ) : filteredTechnologies.length ? (
              filteredTechnologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  added={stack.some(
                    (item) => item.id === technology.id
                  )}
                  onAdd={onAdd}
                />
              ))
            ) : (
              <div className="loading-state">
                <p>No technologies found.</p>
              </div>
            )}
          </div>

          <StackPanel
            stack={stack}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand" id="about">
            <Brand />

            <p>
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="social-links">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3>PRODUCT</h3>
            <a href="">Home</a>
            <a href="">Technologies</a>
            <a href="">Projects</a>
          </div>

          <div>
            <h3>COMPANY</h3>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Careers</a>
          </div>

          <div>
            <h3>LEGAL</h3>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
          </div>
        </div>

        <div className="footer-bottom" id="projects">
          <span>© 2026 Dev Stack. All rights reserved.</span>

          <div>
            <a href="">Privacy</a>
            <a href="">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [technologies, setTechnologies] = useState([])
  const [stack, setStack] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    async function loadTechnologies() {
      try {
        setLoading(true)

        const response = await fetch(
          `${import.meta.env.BASE_URL}data/technologies.json`,
          {
            signal: controller.signal,
          }
        )

        if (!response.ok) {
          throw new Error('Failed to fetch technology data.')
        }

        const data = await response.json()
        setTechnologies(data)
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error(error)
        }
      } finally {
        setLoading(false)
      }
    }

    loadTechnologies()

    return () => controller.abort()
  }, [])

  const addToStack = (technology) => {
    setStack((current) => {
      // Don't add the same technology twice.
      if (
        current.some((item) => item.id === technology.id)
      ) {
        return current
      }

      return [...current, technology]
    })
  }

  const removeFromStack = (id) => {
    setStack((current) =>
      current.filter((item) => item.id !== id)
    )
  }

  const removeAll = () => {
    setStack([])
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Technologies
          technologies={technologies}
          loading={loading}
          stack={stack}
          onAdd={addToStack}
          onRemove={removeFromStack}
          onRemoveAll={removeAll}
        />
      </main>

      <Footer />
    </>
  )
}