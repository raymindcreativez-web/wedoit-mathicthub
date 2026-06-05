/**
 * Calculate mastery percentage based on scores
 */
export const calculateMasteryPercentage = (scores: Array<{ score: number; maxScore: number }>): number => {
  if (scores.length === 0) return 0;

  const totalScore = scores.reduce((sum, item) => sum + item.score, 0);
  const totalMaxScore = scores.reduce((sum, item) => sum + item.maxScore, 0);

  return totalMaxScore === 0 ? 0 : (totalScore / totalMaxScore) * 100;
};

/**
 * Determine mastery level based on percentage
 */
export const getMasteryLevel = (percentage: number): 'beginner' | 'developing' | 'proficient' | 'advanced' | 'mastery' => {
  if (percentage < 60) return 'beginner';
  if (percentage < 70) return 'developing';
  if (percentage < 80) return 'proficient';
  if (percentage < 90) return 'advanced';
  return 'mastery';
};

/**
 * Calculate trend based on recent scores
 */
export const calculateTrend = (scores: Array<{ score: number; maxScore: number; date: string }>): 'improving' | 'declining' | 'stable' => {
  if (scores.length < 2) return 'stable';

  // Sort by date (oldest first)
  const sortedScores = [...scores].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Calculate average of first half vs second half
  const midpoint = Math.ceil(sortedScores.length / 2);
  const firstHalf = sortedScores.slice(0, midpoint);
  const secondHalf = sortedScores.slice(midpoint);

  const firstHalfAvg = calculateMasteryPercentage(firstHalf);
  const secondHalfAvg = calculateMasteryPercentage(secondHalf);

  const diff = secondHalfAvg - firstHalfAvg;

  if (diff > 5) return 'improving';
  if (diff < -5) return 'declining';
  return 'stable';
};

/**
 * Format date for display
 */
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default {
  calculateMasteryPercentage,
  getMasteryLevel,
  calculateTrend,
  formatDate
};