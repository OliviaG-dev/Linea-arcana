import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { calculateLifeLine } from "../utils/tarotCalculations";
import "./Home.css";

interface FormErrors {
  prenom?: string;
  nom?: string;
  annee?: string;
}

function Home() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const prenom = (formData.get("prenom") as string)?.trim() || "";
    const nom = (formData.get("nom") as string)?.trim() || "";
    const anneeStr = (formData.get("annee") as string)?.trim() || "";
    const annee = parseInt(anneeStr, 10);

    const newErrors: FormErrors = {};

    // Validation prénom
    if (!prenom) {
      newErrors.prenom = "Le prénom est requis";
    } else if (prenom.length < 2) {
      newErrors.prenom = "Le prénom doit contenir au moins 2 caractères";
    } else if (!/^[a-zA-ZÀ-ÿ\s-']+$/.test(prenom)) {
      newErrors.prenom = "Le prénom ne doit contenir que des lettres";
    }

    // Validation nom
    if (!nom) {
      newErrors.nom = "Le nom est requis";
    } else if (nom.length < 2) {
      newErrors.nom = "Le nom doit contenir au moins 2 caractères";
    } else if (!/^[a-zA-ZÀ-ÿ\s-']+$/.test(nom)) {
      newErrors.nom = "Le nom ne doit contenir que des lettres";
    }

    // Validation année
    if (!anneeStr) {
      newErrors.annee = "L'année de naissance est requise";
    } else if (isNaN(annee)) {
      newErrors.annee = "L'année doit être un nombre valide";
    } else if (annee < 1900 || annee > new Date().getFullYear()) {
      newErrors.annee = `L'année doit être entre 1900 et ${new Date().getFullYear()}`;
    } else if (annee > new Date().getFullYear() - 10) {
      newErrors.annee = "L'année semble trop récente";
    }

    setErrors(newErrors);

    // Si des erreurs existent, ne pas soumettre
    if (Object.keys(newErrors).length > 0) {
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
                  className={`form-input ${
                    errors.prenom ? "form-input-error" : ""
                  }`}
                  placeholder="Votre prénom"
                  onFocus={() => {
                    if (errors.prenom) {
                      setErrors({ ...errors, prenom: undefined });
                    }
                  }}
                />
                {errors.prenom && (
                  <span className="form-error">{errors.prenom}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="nom" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  className={`form-input ${
                    errors.nom ? "form-input-error" : ""
                  }`}
                  placeholder="Votre nom"
                  onFocus={() => {
                    if (errors.nom) {
                      setErrors({ ...errors, nom: undefined });
                    }
                  }}
                />
                {errors.nom && <span className="form-error">{errors.nom}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="annee" className="form-label">
                  Année de naissance
                </label>
                <input
                  type="number"
                  id="annee"
                  name="annee"
                  className={`form-input ${
                    errors.annee ? "form-input-error" : ""
                  }`}
                  placeholder="Ex: 1990"
                  min="1900"
                  max={new Date().getFullYear()}
                  onFocus={() => {
                    if (errors.annee) {
                      setErrors({ ...errors, annee: undefined });
                    }
                  }}
                />
                {errors.annee && (
                  <span className="form-error">{errors.annee}</span>
                )}
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
