import { characters, Character } from "@/data/characters";

type Profile = [number, number, number, number, number, number];

function cosineSimilarity(a: Profile, b: Profile): number {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  const denominator = Math.sqrt(normA) * Math.sqrt(normB);
  if (denominator === 0) return 0;

  return dotProduct / denominator;
}

export function findMatchingCharacter(
  userScores: Profile
): { character: Character; similarity: number } {
  let bestMatch = characters[0];
  let bestScore = -Infinity;

  for (const character of characters) {
    const score = cosineSimilarity(userScores, character.profile);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = character;
    }
  }

  // 유사도를 0~100% 스케일로 변환
  const percentage = Math.round(((bestScore + 1) / 2) * 100);

  return { character: bestMatch, similarity: percentage };
}

export function aggregateScores(
  answerScores: Profile[]
): Profile {
  const result: Profile = [0, 0, 0, 0, 0, 0];

  for (const scores of answerScores) {
    for (let i = 0; i < 6; i++) {
      result[i] += scores[i];
    }
  }

  return result;
}
