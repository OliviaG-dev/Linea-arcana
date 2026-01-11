import { useNavigate } from "react-router-dom";
import { calculateLifeLine } from "../utils/tarotCalculations";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const prenom = formData.get("prenom") as string;
    const nom = formData.get("nom") as string;
    const annee = parseInt(formData.get("annee") as string, 10);

    if (!prenom || !nom || !annee) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const result = calculateLifeLine(prenom, nom, annee);

    navigate("/life-line", {
      state: {
        prenom,
        nom,
        annee,
        result,
      },
    });
  };

  return (
    <div className="home">
      <div className="home-wrapper">
        <aside className="home-sidebar">
          <div className="logo-section">
            <img src="/logo.png" alt="Linea Arcana" className="home-logo" />
          </div>
          <div className="sidebar-content">
            <h1 className="home-title">
              {"Linea Arcana".split("").map((char, index) => (
                <span
                  key={index}
                  className="title-letter"
                  style={{
                    animationDelay: `${index * 0.05}s, ${0.8 + index * 0.08}s`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <p className="home-subtitle">
              Révèle votre ligne de vie à travers les arcanes du Tarot de
              Marseille
            </p>
          </div>
        </aside>

        <main className="home-main">
          <div className="main-content">
            <div className="intro-section">
              <h2 className="intro-title">Découvrez votre ligne de vie</h2>
              <p className="intro-text">
                Une lecture claire et structurée de votre ligne de vie
                tarologique, inspirée du Tarot de Marseille et de la tradition
                pythagoricienne.
              </p>
            </div>

            <form className="home-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="prenom" className="form-label">
                  Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  className="form-input"
                  placeholder="Votre prénom"
                />
              </div>

              <div className="form-group">
                <label htmlFor="nom" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  className="form-input"
                  placeholder="Votre nom"
                />
              </div>

              <div className="form-group">
                <label htmlFor="annee" className="form-label">
                  Année de naissance
                </label>
                <input
                  type="number"
                  id="annee"
                  name="annee"
                  className="form-input"
                  placeholder="Ex: 1990"
                  min="1900"
                  max="2100"
                />
              </div>

              <button type="submit" className="form-submit">
                Découvrir ma ligne de vie
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
