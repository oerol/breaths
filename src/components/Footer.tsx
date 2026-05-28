import "./Footer.css";
import type { StreakCounter as StreakCounterInterface } from "../services/streak-counter/streak-counter.interface";
import StreakCounter from "./StreakCounter";
import type { BreathingExercise } from "../services/breathing-instructions/breathing-exercise.interface";
import { Settings } from "./Settings";

export default function Footer({
  isBreathing,
  isFinished,
  streakCounter,
  breathingExercise,
  setBreathingExercise,
}: {
  isBreathing: boolean;
  isFinished: boolean;
  streakCounter: StreakCounterInterface;
  breathingExercise: BreathingExercise;
  setBreathingExercise: (value: BreathingExercise) => void;
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
      <div id="settings__wrapper">
        <Settings
          breathingExercise={breathingExercise}
          setBreathingExercise={setBreathingExercise}
        />
      </div>
      <StreakCounter isFinished={isFinished} streakCounter={streakCounter} />
    </footer>
  );
}
