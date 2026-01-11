import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { LifeLineResult } from "../utils/tarotCalculations";
import "./LifeLine.css";

interface LocationState {
  prenom: string;
  nom: string;
  annee: number;
  result: LifeLineResult;
}

function LifeLine() {
  const [showName, setShowName] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState | null;

  if (!state) {
    return (
      <div className="life-line">
        <div className="life-line-container">
          <h1 className="life-line-title">No Data</h1>
          <p className="life-line-subtitle">Please fill the form first</p>
          <button
            className="life-line-back-button"
            onClick={() => navigate("/")}
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const { prenom, nom, annee, result } = state;

  const arcaneNames = {
    1: "Le Bateleur",
    2: "La Papesse",
    3: "L'Impératrice",
    4: "L'Empereur",
    5: "Le Pape",
    6: "L'Amoureux",
    7: "Le Chariot",
    8: "La Justice",
    9: "L'Ermite",
    10: "La Roue de Fortune",
    11: "La Force",
    12: "Le Pendu",
    13: "La Mort",
    14: "Tempérance",
    15: "Le Diable",
    16: "La Maison Dieu",
    17: "L'Étoile",
    18: "La Lune",
    19: "Le Soleil",
    20: "Le Jugement",
    21: "Le Monde",
    22: "Le Mat",
  };

  const arcaneDescriptions = {
    1: "Comment tu te manifestes",
    2: "L'héritage familial",
    3: "Le passage initiatique",
    4: "Ce qui est réellement accompli",
    5: "La mission d'âme",
  };

  const arcaneAgeRanges = {
    1: "0-20 ans",
    2: "0-14 ans",
    3: "15-35 ans",
    4: "36-55 ans",
    5: "56+ ans",
  };

  const getArcaneImagePath = (arcaneNumber: number): string => {
    const formattedNumber = arcaneNumber.toString().padStart(2, "0");
    return `/arcanes/${formattedNumber}.png`;
  };

  return (
    <div className="life-line">
      <div className="life-line-container">
        <h1 className="life-line-section-title">
          Les 5 arcanes de la ligne de vie
        </h1>

        <div className="life-line-header">
          <button
            className="life-line-toggle-name"
            onClick={() => setShowName(!showName)}
          >
            {showName ? "Masquer le nom" : "Afficher le nom"}
          </button>
          {showName && (
            <h2 className="life-line-title">
              {prenom} {nom}
            </h2>
          )}
          <p className="life-line-subtitle">Né(e) en {annee}</p>
        </div>

        <div className="life-line-arcanes">
          <div className="arcane-card arcane-card-1">
            <div className="arcane-age-range">{arcaneAgeRanges[1]}</div>
            <p className="arcane-description">{arcaneDescriptions[1]}</p>
            <div className="arcane-image-wrapper">
              <div className="arcane-image-back">
                <img
                  src="/arcanes/back.svg"
                  alt="Dos de carte"
                  className="arcane-back-image"
                />
              </div>
              <div className="arcane-image-front">
                <img
                  src={getArcaneImagePath(result.arcane1)}
                  alt={arcaneNames[result.arcane1 as keyof typeof arcaneNames]}
                  className="arcane-image"
                />
              </div>
            </div>
            <div className="arcane-number">Arcane {result.arcane1}</div>
            <h3 className="arcane-name">
              {arcaneNames[result.arcane1 as keyof typeof arcaneNames]}
            </h3>
          </div>

          <div className="arcane-card arcane-card-2">
            <div className="arcane-age-range">{arcaneAgeRanges[2]}</div>
            <p className="arcane-description">{arcaneDescriptions[2]}</p>
            <div className="arcane-image-wrapper">
              <div className="arcane-image-back">
                <img
                  src="/arcanes/back.svg"
                  alt="Dos de carte"
                  className="arcane-back-image"
                />
              </div>
              <div className="arcane-image-front">
                <img
                  src={getArcaneImagePath(result.arcane2)}
                  alt={arcaneNames[result.arcane2 as keyof typeof arcaneNames]}
                  className="arcane-image"
                />
              </div>
            </div>
            <div className="arcane-number">Arcane {result.arcane2}</div>
            <h3 className="arcane-name">
              {arcaneNames[result.arcane2 as keyof typeof arcaneNames]}
            </h3>
          </div>

          <div className="arcane-card arcane-card-3">
            <div className="arcane-age-range">{arcaneAgeRanges[3]}</div>
            <p className="arcane-description">{arcaneDescriptions[3]}</p>
            <div className="arcane-image-wrapper">
              <div className="arcane-image-back">
                <img
                  src="/arcanes/back.svg"
                  alt="Dos de carte"
                  className="arcane-back-image"
                />
              </div>
              <div className="arcane-image-front">
                <img
                  src={getArcaneImagePath(result.arcane3)}
                  alt={arcaneNames[result.arcane3 as keyof typeof arcaneNames]}
                  className="arcane-image"
                />
              </div>
            </div>
            <div className="arcane-number">Arcane {result.arcane3}</div>
            <h3 className="arcane-name">
              {arcaneNames[result.arcane3 as keyof typeof arcaneNames]}
            </h3>
          </div>

          <div className="arcane-card arcane-card-4">
            <div className="arcane-age-range">{arcaneAgeRanges[4]}</div>
            <p className="arcane-description">{arcaneDescriptions[4]}</p>
            <div className="arcane-image-wrapper">
              <div className="arcane-image-back">
                <img
                  src="/arcanes/back.svg"
                  alt="Dos de carte"
                  className="arcane-back-image"
                />
              </div>
              <div className="arcane-image-front">
                <img
                  src={getArcaneImagePath(result.arcane4)}
                  alt={arcaneNames[result.arcane4 as keyof typeof arcaneNames]}
                  className="arcane-image"
                />
              </div>
            </div>
            <div className="arcane-number">Arcane {result.arcane4}</div>
            <h3 className="arcane-name">
              {arcaneNames[result.arcane4 as keyof typeof arcaneNames]}
            </h3>
          </div>

          <div className="arcane-card arcane-card-5 arcane-final">
            <div className="arcane-age-range">{arcaneAgeRanges[5]}</div>
            <p className="arcane-description">{arcaneDescriptions[5]}</p>
            <div className="arcane-image-wrapper">
              <div className="arcane-image-back">
                <img
                  src="/arcanes/back.svg"
                  alt="Dos de carte"
                  className="arcane-back-image"
                />
              </div>
              <div className="arcane-image-front">
                <img
                  src={getArcaneImagePath(result.arcane5)}
                  alt={arcaneNames[result.arcane5 as keyof typeof arcaneNames]}
                  className="arcane-image"
                />
              </div>
            </div>
            <div className="arcane-number">Arcane {result.arcane5}</div>
            <h3 className="arcane-name">
              {arcaneNames[result.arcane5 as keyof typeof arcaneNames]}
            </h3>
          </div>
        </div>

        <button className="life-line-back-button" onClick={() => navigate("/")}>
          Nouveau calcul
        </button>
      </div>
    </div>
  );
}

export default LifeLine;
