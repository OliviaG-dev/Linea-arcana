export interface ArcaneData {
  number: number;
  name: string;
  coreMeaning: string;
  lifeCycleManifestation: string;
  potential: string;
  risk: string;
  evolutionaryChallenge: string;
}

export interface AgeRange {
  min: number;
  max: number | null;
}

export interface TarologicalLifeCycle {
  cycle: number;
  name: string;
  ageRange: AgeRange;
  coreTheme: string;
  description: string;
  keyIssues: string[];
  dominantDynamic: string;
}

export interface CycleNotes {
  symbolicNature: string;
  flexibility: string;
  nonLinearity: string;
}

export interface CycleDataItem {
  tarologicalLifeCycles: TarologicalLifeCycle[];
  notes: CycleNotes;
}

export type ArcaneDataArray = ArcaneData[];
export type CycleDataArray = CycleDataItem[];
