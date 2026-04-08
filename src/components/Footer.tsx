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
  const getClassName = () => {
    if (isFinished) {
      return "fade-in";
    }
    if (isBreathing) {
      return "fade-out animation-duration-short";
    }

    return undefined;
  };
  return (
    <footer className={getClassName()}>
      <StreakCounter isFinished={isFinished} streakCounter={streakCounter} />
    </footer>
  );
}
