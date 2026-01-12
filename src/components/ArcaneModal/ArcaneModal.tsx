import type { ArcaneData, TarologicalLifeCycle } from "../../data/interface";
import "./ArcaneModal.css";

interface ArcaneModalProps {
  isOpen: boolean;
  onClose: () => void;
  cycle: TarologicalLifeCycle | null;
  arcane: ArcaneData | null;
}

function ArcaneModal({ isOpen, onClose, cycle, arcane }: ArcaneModalProps) {
  if (!isOpen || !cycle || !arcane) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-grid">
          <div className="modal-section modal-cycle">
            <h2 className="modal-title">Cycle {cycle.cycle}</h2>
            <h3 className="modal-subtitle">{cycle.name}</h3>
            <p className="modal-description">{cycle.description}</p>
            <div className="modal-info">
              <p>
                <strong>Thème central :</strong> {cycle.coreTheme}
              </p>
              <p>
                <strong>Dynamique dominante :</strong> {cycle.dominantDynamic}
              </p>
              <div className="modal-key-issues">
                <strong>Enjeux clés :</strong>
                <ul>
                  {cycle.keyIssues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="modal-section modal-arcane">
            <h2 className="modal-title">Arcane {arcane.number}</h2>
            <h3 className="modal-subtitle">{arcane.name}</h3>
            <p className="modal-description">
              <strong>Sens central :</strong> {arcane.coreMeaning}
            </p>
            <div className="modal-info">
              <p>
                <strong>Manifestation dans le cycle de vie :</strong>
              </p>
              <p>{arcane.lifeCycleManifestation}</p>
              <p>
                <strong>Potentiel :</strong> {arcane.potential}
              </p>
              <p>
                <strong>Risque :</strong> {arcane.risk}
              </p>
              <p>
                <strong>Défi évolutif :</strong> {arcane.evolutionaryChallenge}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArcaneModal;
