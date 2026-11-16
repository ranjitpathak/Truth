const traditions = [
  'Religions',
  'Philosophies',
  'Spiritual traditions',
  'Scriptures & history',
]

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="TRUTH home">TRUTH</a>
        <nav aria-label="Main navigation">
          <a href="#explore">Explore</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main id="main">
        <section className="intro" id="top" aria-labelledby="intro-title">
          <p className="eyebrow">A universal knowledge library</p>
          <h1 id="intro-title">Explore. Understand. Discover.</h1>
          <p className="lead">
            A free, source-led guide to the ideas and traditions that shape how
            people seek meaning.
          </p>
          <a className="text-link" href="#explore">Begin exploring <span aria-hidden="true">↓</span></a>
        </section>

        <section className="explore" id="explore" aria-labelledby="explore-title">
          <p className="eyebrow">A place to begin</p>
          <h2 id="explore-title">Explore the library</h2>
          <ul>
            {traditions.map((tradition) => <li key={tradition}>{tradition}</li>)}
          </ul>
          <p className="note">The library is taking shape. Carefully sourced guides are coming soon.</p>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <h2 id="about-title">Knowledge with context</h2>
          <p>
            TRUTH is being built to help people learn across traditions with
            respect, transparent sources, and room for disagreement.
          </p>
        </section>
      </main>

      <footer><span>TRUTH</span><span>Free to explore · Built for everyone</span></footer>
    </>
  )
}

export default App
