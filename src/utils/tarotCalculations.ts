// Table pythagoricienne des lettres
const LETTER_VALUES: { [key: string]: number } = {
  a: 1, b: 2, c: 3, d: 5, e: 3, f: 8, g: 10, h: 28,
  i: 15, j: 15, k: 8, l: 21, m: 19, n: 26, o: 8,
  p: 77, q: 27, r: 11, s: 20, t: 6, u: 9, v: 9,
  w: 9, x: 13, y: 50, z: 70
};

/**
 * Convertit une lettre en sa valeur pythagoricienne
 */
function getLetterValue(letter: string): number {
  const normalizedLetter = letter.toLowerCase();
  return LETTER_VALUES[normalizedLetter] || 0;
}

/**
 * Calcule la valeur d'un nom ou prénom
 */
function calculateNameValue(name: string): number {
  let sum = 0;
  for (const letter of name) {
    if (letter.match(/[a-zA-Z]/)) {
      sum += getLetterValue(letter);
    }
  }
  return sum;
}

/**
 * Réduit un nombre à un arcane (entre 1 et 22)
 * Si le résultat est 22, on le garde, sinon on réduit encore
 */
function reduceToArcane(num: number): number {
  while (num > 22) {
    let sum = 0;
    const digits = num.toString().split('');
    for (const digit of digits) {
      sum += parseInt(digit, 10);
    }
    num = sum;
  }
  // Si on obtient 22, on le garde, sinon on réduit encore si > 22
  if (num === 22) {
    return 22;
  }
  // Si encore > 22 après réduction des digits, on réduit à nouveau
  if (num > 22) {
    return reduceToArcane(num);
  }
  return num;
}

/**
 * Calcule l'arcane 1 : La personnalité incarnée (prénom + nom)
 */
export function calculateArcane1(prenom: string, nom: string): number {
  const prenomValue = calculateNameValue(prenom);
  const nomValue = calculateNameValue(nom);
  const total = prenomValue + nomValue;
  return reduceToArcane(total);
}

/**
 * Calcule l'arcane 2 : Le milieu familial / l'enfance (année de naissance)
 */
export function calculateArcane2(annee: number): number {
  return reduceToArcane(annee);
}

/**
 * Calcule l'arcane 3 : L'adolescence → l'âge adulte (réduction du 2e arcane)
 */
export function calculateArcane3(arcane2: number): number {
  // Réduction du 2e arcane : somme des chiffres
  const digits = arcane2.toString().split('');
  let sum = 0;
  for (const digit of digits) {
    sum += parseInt(digit, 10);
  }
  // Si la somme est > 22, on réduit encore, sinon on garde (même si c'est 22)
  if (sum > 22) {
    return reduceToArcane(sum);
  }
  return sum;
}

/**
 * Calcule l'arcane 4 : Réalisations et regrets (1er arcane + 3e arcane)
 */
export function calculateArcane4(arcane1: number, arcane3: number): number {
  const total = arcane1 + arcane3;
  return reduceToArcane(total);
}

/**
 * Calcule l'arcane 5 : L'aboutissement / le sens de la vie (somme de tous les arcanes)
 */
export function calculateArcane5(
  arcane1: number,
  arcane2: number,
  arcane3: number,
  arcane4: number
): number {
  const total = arcane1 + arcane2 + arcane3 + arcane4;
  return reduceToArcane(total);
}

/**
 * Calcule tous les arcanes de la ligne de vie
 */
export interface LifeLineResult {
  arcane1: number; // Personnalité incarnée
  arcane2: number; // Milieu familial / enfance
  arcane3: number; // Adolescence → âge adulte
  arcane4: number; // Réalisations et regrets
  arcane5: number; // Aboutissement / sens de la vie
}

export function calculateLifeLine(
  prenom: string,
  nom: string,
  annee: number
): LifeLineResult {
  const arcane1 = calculateArcane1(prenom, nom);
  const arcane2 = calculateArcane2(annee);
  const arcane3 = calculateArcane3(arcane2);
  const arcane4 = calculateArcane4(arcane1, arcane3);
  const arcane5 = calculateArcane5(arcane1, arcane2, arcane3, arcane4);

  return {
    arcane1,
    arcane2,
    arcane3,
    arcane4,
    arcane5,
  };
}
