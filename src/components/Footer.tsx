import type { StreakCounter as StreakCounterInterface } from "../services/streak-counter/streak-counter.interface";
import StreakCounter from "./StreakCounter";

export default function Footer({
  isFinished,
  streakCounter,
}: {
  isFinished: boolean;
  streakCounter: StreakCounterInterface;
}) {
  return (
    <footer>
      <StreakCounter isFinished={isFinished} streakCounter={streakCounter} />
    </footer>
  );
}
