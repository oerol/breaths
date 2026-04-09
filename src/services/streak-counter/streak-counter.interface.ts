export interface StreakCounter {
  getCount(): number;
  addToStreak(): { updatedCounter: number };
}
