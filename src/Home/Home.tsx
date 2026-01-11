import './Home.css'

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <div className="home-title-container">
          <img src="/logo.png" alt="Linea Arcana" className="home-logo" />
          <h1 className="home-title">Linea Arcana</h1>
        </div>
        <p className="home-subtitle">
          Révèle votre ligne de vie à travers les arcanes du Tarot de Marseille
        </p>
      </header>

      <main className="home-content">
        <section className="home-section">
          <h2 className="section-title">
            <span className="symbol">✦</span>
            Découvrez votre ligne de vie tarologique
          </h2>
          <p className="section-text">
            Une lecture claire et structurée de votre ligne de vie tarologique, 
            inspirée du Tarot de Marseille et de la tradition pythagoricienne.
          </p>
        </section>

          <p className="home-tagline">
            Linea Arcana — la ligne invisible de votre vie révélée par les arcanes.
          </p>
        
      </main>
    </div>
  )
}

export default Home
