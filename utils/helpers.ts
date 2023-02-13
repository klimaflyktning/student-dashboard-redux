export function getGradeFromScore (score: number): string {
  if (score <= 100 && score >= 90) return 'A'
  else if (score < 90 && score >= 78) return 'B'
  else if (score < 78 && score >= 70) return 'C'
  else if (score < 70 && score >= 60) return 'D'
  else if (score < 60 && score >= 40) return 'E'
  else return 'F'
}
