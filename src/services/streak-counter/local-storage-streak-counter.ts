import type { StreakCounter } from "./streak-counter.interface";

interface Streak {
  count: number;
  lastExercisedAt: Date | undefined;
}

export class LocalStorageStreakCounter implements StreakCounter {
  private readonly KEY = "streak";
  private streak: Streak;

  public constructor() {
    this.streak = this.getStreakFromLocalStorage();
    if (!this.isLastExercisedAtYesterday && !this.isLastExercisedAtToday) {
      this.resetCount();
    }
    this.save();
  }

  private getStreakFromLocalStorage() {
    const localStorageValue = localStorage.getItem(this.KEY);

    if (!localStorageValue) {
      return {
        count: 0,
        lastExercisedAt: undefined,
      };
    } else {
      const streak: Streak = JSON.parse(localStorageValue);

      return {
        count: streak.count,
        lastExercisedAt:
          streak.lastExercisedAt && new Date(streak.lastExercisedAt),
      };
    }
  }

  private resetCount() {
    this.streak.count = 0;
  }

  public getCount() {
    return this.streak.count;
  }

  private get isLastExercisedAtYesterday() {
    if (!this.streak.lastExercisedAt) {
      return false;
    }

    const lastExercisedAt = new Date(this.streak.lastExercisedAt);
    lastExercisedAt.setDate(lastExercisedAt.getDate() + 1);

    return lastExercisedAt.toDateString() === new Date().toDateString();
  }

  private get isLastExercisedAtToday() {
    return (
      this.streak.lastExercisedAt?.toDateString() === new Date().toDateString()
    );
  }

  private updateStreak() {
    if (this.isLastExercisedAtToday) {
      return;
    }

    this.streak = {
      count: this.streak.count + 1,
      lastExercisedAt: new Date(),
    };
  }

  private save() {
    localStorage.setItem(this.KEY, JSON.stringify(this.streak));
  }

  public addToStreak() {
    this.updateStreak();
    this.save();

    return { updatedCounter: this.getCount() };
  }
}
