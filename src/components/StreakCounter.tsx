import { useEffect, useState } from "react";
import type { StreakCounter } from "../services/streak-counter/streak-counter.interface";
import "./StreakCounter.css";
import { FlameIcon } from "../assets/icons/Flame";

export default function StreakCounter({
  isFinished,
  streakCounter,
}: {
  isFinished: boolean;
  streakCounter: StreakCounter;
}) {
  const [streakCount, setStreakCount] = useState(streakCounter.getCount());

  useEffect(() => {
    if (isFinished) {
      streakCounter.addToStreak();
      setStreakCount(streakCounter.getCount());
    }
  }, [isFinished]);

  return (
    <div id="streak-counter">
      <FlameIcon />
      {streakCount}
    </div>
  );
}
