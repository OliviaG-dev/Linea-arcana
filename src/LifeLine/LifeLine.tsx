import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { LifeLineResult } from "../utils/tarotCalculations";
import type {
  ArcaneData,
  TarologicalLifeCycle,
  CycleDataItem,
} from "../data/interface";
import arcaneData from "../data/arcaneData.json";
import cycleData from "../data/cycleData.json";
import ArcaneModal from "../components/ArcaneModal/ArcaneModal";
import "./LifeLine.css";

interface LocationState {
  prenom: string;
  nom: string;
  annee: number;
  result: LifeLineResult;
}

function LifeLine() {
  const [showName, setShowName] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleCardClick = (cardIndex: number) => {
    setSelectedCard(cardIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  const getSelectedArcane = (): ArcaneData | null => {
    if (selectedCard === null) return null;
    const arcaneNumbers = [
      result.arcane1,
      result.arcane2,
      result.arcane3,
      result.arcane4,
      result.arcane5,
    ];
    const arcaneNumber = arcaneNumbers[selectedCard - 1];
    return (
      (arcaneData as ArcaneData[]).find((a) => a.number === arcaneNumber) ||
      null
    );
  };

  const getSelectedCycle = (): TarologicalLifeCycle | null => {
    if (selectedCard === null) return null;
    const cycleDataItem = (cycleData as CycleDataItem[])[0];
    return cycleDataItem.tarologicalLifeCycles[selectedCard - 1] || null;
  };

  // Calculer l'âge actuel et déterminer le cycle actuel
  const getCurrentAge = (): number => {
    const currentYear = new Date().getFullYear();
    return currentYear - annee;
  };

  const getCurrentCycle = (): number | null => {
    const age = getCurrentAge();
    const cycleDataItem = (cycleData as CycleDataItem[])[0];
    
    // Vérifier dans l'ordre inverse (du plus récent au plus ancien)
    // pour gérer les chevauchements
    for (let i = cycleDataItem.tarologicalLifeCycles.length - 1; i >= 0; i--) {
      const cycle = cycleDataItem.tarologicalLifeCycles[i];
      const { min, max } = cycle.ageRange;
      
      if (age >= min && (max === null || age <= max)) {
        return cycle.cycle;
      }
    }
    
    return null;
  };

  const currentCycle = getCurrentCycle();

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
          <div
            className={`arcane-card arcane-card-1 ${
              currentCycle === 1 ? "arcane-card-current" : ""
            }`}
            onClick={() => handleCardClick(1)}
            style={{ cursor: "pointer" }}
          >
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
            <p className="arcane-click-hint">(clic pour découvrir)</p>
          </div>

          <div
            className={`arcane-card arcane-card-2 ${
              currentCycle === 2 ? "arcane-card-current" : ""
            }`}
            onClick={() => handleCardClick(2)}
            style={{ cursor: "pointer" }}
          >
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
            <p className="arcane-click-hint">(clic pour découvrir)</p>
          </div>

          <div
            className={`arcane-card arcane-card-3 ${
              currentCycle === 3 ? "arcane-card-current" : ""
            }`}
            onClick={() => handleCardClick(3)}
            style={{ cursor: "pointer" }}
          >
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
            <p className="arcane-click-hint">(clic pour découvrir)</p>
          </div>

          <div
            className={`arcane-card arcane-card-4 ${
              currentCycle === 4 ? "arcane-card-current" : ""
            }`}
            onClick={() => handleCardClick(4)}
            style={{ cursor: "pointer" }}
          >
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
            <p className="arcane-click-hint">(clic pour découvrir)</p>
          </div>

          <div
            className={`arcane-card arcane-card-5 ${
              currentCycle === 5 ? "arcane-card-current" : ""
            }`}
            onClick={() => handleCardClick(5)}
            style={{ cursor: "pointer" }}
          >
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
            <p className="arcane-click-hint">(clic pour découvrir)</p>
          </div>
        </div>

        <button className="life-line-back-button" onClick={() => navigate("/")}>
          Nouveau calcul
        </button>
      </div>

      <ArcaneModal
        isOpen={isModalOpen}
        onClose={closeModal}
        cycle={getSelectedCycle()}
        arcane={getSelectedArcane()}
      />
    </div>
  );
}

export default LifeLine;
