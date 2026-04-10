import { useMemo, useState } from 'react'
import './App.css'
import { enthusiastModes, funFacts, taxonomy, timeline, tramways } from './data'

function App() {
  const [selectedId, setSelectedId] = useState(tramways[0].id)
  const [compareIds, setCompareIds] = useState<string[]>([
    'wings-of-tatev',
    'zugspitze',
    'palm-springs',
  ])

  const featured = useMemo(
    () => tramways.find((tramway) => tramway.id === selectedId) ?? tramways[0],
    [selectedId],
  )

  const compareItems = useMemo(
    () => tramways.filter((tramway) => compareIds.includes(tramway.id)),
    [compareIds],
  )

  const toggleCompare = (id: string) => {
    setCompareIds((current) => {
      if (current.includes(id)) {
        return current.length === 1 ? current : current.filter((item) => item !== id)
      }

      if (current.length === 3) {
        return [...current.slice(1), id]
      }

      return [...current, id]
    })
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">World tramway enthusiast club</p>
          <a className="brand" href="#hero">
            Tramway Atlas
          </a>
        </div>
        <nav className="nav">
          <a href="#featured">Featured rides</a>
          <a href="#compare">Compare</a>
          <a href="#history">History</a>
          <a href="#fun-facts">Fun facts</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">For people who love mountain drama, skyline crossings, and absurdly good views</p>
            <h1>A fun website for aerial tramway enthusiasts.</h1>
            <p className="lede">
              Discover the tramways that matter, learn why they are special, compare their stats,
              and dive into the stories that turned ropeways into icons.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#featured">
                Explore flagship tramways
              </a>
              <a className="button button-secondary" href="#compare">
                Compare the legends
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <p className="panel-title">What makes this site different</p>
            <div className="hero-stats">
              <article>
                <strong>6</strong>
                <span>flagship tramways seeded from the research brief</span>
              </article>
              <article>
                <strong>4</strong>
                <span>core enthusiast lenses: history, records, urbanism, and destination magic</span>
              </article>
              <article>
                <strong>3</strong>
                <span>MVP pillars: editorial showcase, browseable directory, compare mode</span>
              </article>
            </div>
          </aside>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Know the family tree</p>
            <h2>Not every cable car is a tramway.</h2>
          </div>
          <div className="taxonomy-grid">
            {taxonomy.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="featured">
          <div className="section-heading">
            <p className="eyebrow">Flagship systems</p>
            <h2>The rides every enthusiast should know.</h2>
          </div>

          <div className="featured-layout">
            <div className="card-grid">
              {tramways.map((tramway) => {
                const isActive = tramway.id === selectedId
                const isCompared = compareIds.includes(tramway.id)

                return (
                  <article
                    className={`tramway-card${isActive ? ' active' : ''}`}
                    key={tramway.id}
                  >
                    <button
                      className="card-select"
                      type="button"
                      onClick={() => setSelectedId(tramway.id)}
                    >
                      <span className="card-region">{tramway.region}</span>
                      <h3>{tramway.name}</h3>
                      <p>{tramway.highlight}</p>
                    </button>

                    <div className="tag-row">
                      {tramway.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      className={`compare-chip${isCompared ? ' selected' : ''}`}
                      type="button"
                      onClick={() => toggleCompare(tramway.id)}
                    >
                      {isCompared ? 'In compare tray' : 'Add to compare'}
                    </button>
                  </article>
                )
              })}
            </div>

            <aside className="detail-panel">
              <p className="panel-title">Spotlight</p>
              <h3>{featured.name}</h3>
              <p className="detail-location">
                {featured.location} · {featured.type}
              </p>
              <p className="detail-vibe">{featured.vibe}</p>
              <p className="detail-story">{featured.story}</p>

              <dl className="detail-metrics">
                <div>
                  <dt>Opened</dt>
                  <dd>{featured.opened}</dd>
                </div>
                <div>
                  <dt>Ride time</dt>
                  <dd>{featured.rideTime}</dd>
                </div>
                <div>
                  <dt>Length / span</dt>
                  <dd>{featured.length}</dd>
                </div>
                <div>
                  <dt>Vertical story</dt>
                  <dd>{featured.verticalRise}</dd>
                </div>
                <div>
                  <dt>Capacity</dt>
                  <dd>{featured.capacity}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section compare-section" id="compare">
          <div className="section-heading">
            <p className="eyebrow">Compare mode</p>
            <h2>Put the icons side by side.</h2>
          </div>

          <div className="compare-grid">
            {compareItems.map((tramway) => (
              <article className="compare-card" key={tramway.id}>
                <div className="compare-head">
                  <h3>{tramway.name}</h3>
                  <span>{tramway.region}</span>
                </div>
                <ul>
                  <li>
                    <strong>Opened</strong>
                    <span>{tramway.opened}</span>
                  </li>
                  <li>
                    <strong>Length</strong>
                    <span>{tramway.length}</span>
                  </li>
                  <li>
                    <strong>Vertical rise</strong>
                    <span>{tramway.verticalRise}</span>
                  </li>
                  <li>
                    <strong>Ride time</strong>
                    <span>{tramway.rideTime}</span>
                  </li>
                  <li>
                    <strong>Capacity</strong>
                    <span>{tramway.capacity}</span>
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="history">
          <div className="section-heading">
            <p className="eyebrow">History arc</p>
            <h2>From ore-hauling utility to pure mountain theatre.</h2>
          </div>

          <div className="timeline">
            {timeline.map((entry) => (
              <article className="timeline-card" key={entry.era}>
                <h3>{entry.era}</h3>
                <p>{entry.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section modes-section">
          <div className="section-heading">
            <p className="eyebrow">Choose your enthusiast mode</p>
            <h2>Everyone comes to tramways a little differently.</h2>
          </div>

          <div className="modes-grid">
            {enthusiastModes.map((mode) => (
              <article className="mode-card" key={mode.title}>
                <h3>{mode.title}</h3>
                <p>{mode.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="fun-facts">
          <div className="section-heading">
            <p className="eyebrow">Fun facts</p>
            <h2>Small details that make enthusiasts instantly lean in.</h2>
          </div>

          <div className="facts-grid">
            {funFacts.map((fact) => (
              <article className="fact-card" key={fact}>
                <p>{fact}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
