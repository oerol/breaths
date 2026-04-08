import { useEffect, useState, type AnimationEvent } from "react";
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
  const [className, setClassName] = useState<string | undefined>(undefined);

  const startFirstHalfOfNumberAnimation = () => {
    setClassName("vanish");
  };

  const startSecondHalfOfNumberAnimation = () => {
    setClassName("appear");
  };

  useEffect(() => {
    if (isFinished) {
      // TODO: Return the updated value here.
      streakCounter.addToStreak();

      const updatedCount = streakCounter.getCount();
      const streakCountHasIncreased = streakCount !== updatedCount;

      if (streakCountHasIncreased) {
        startFirstHalfOfNumberAnimation();
      }
    }
  }, [isFinished]);

  const onAnimationEnd = (event: AnimationEvent) => {
    //TODO: Get rid of this magic string.
    if (event.animationName === "number-vanish") {
      setStreakCount(streakCounter.getCount());
      startSecondHalfOfNumberAnimation();
    }
  };

  return (
    <div id="streak-counter">
      <FlameIcon />
      <span className={className} id="count" onAnimationEnd={onAnimationEnd}>
        {streakCount}
      </span>
    </div>
  );
}
