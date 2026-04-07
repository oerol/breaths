import type { StreakCounter as StreakCounterInterface } from "../services/streak-counter/streak-counter.interface";
import StreakCounter from "./StreakCounter";

export default function Footer({
  isBreathing,
  isFinished,
  streakCounter,
}: {
  isBreathing: boolean;
  isFinished: boolean;
  streakCounter: StreakCounterInterface;
}) {
  return (
    <footer
      className={isBreathing ? "fade-out animation-duration-short" : undefined}
    >
      <StreakCounter isFinished={isFinished} streakCounter={streakCounter} />
    </footer>
  );
}
