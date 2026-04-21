import Logo from "./Logo";
import "./Header.css";
import BreathingExerciseSelector from "./BreathingExerciseSelector";
import type { BreathingExercise } from "../services/breathing-instructions/breathing-exercise.interface";

export default function Header({
  isBreathing,
  breathingExercise,
  setBreathingExercise,
}: {
  isBreathing: boolean;
  breathingExercise: BreathingExercise;
  setBreathingExercise: (value: BreathingExercise) => void;
}) {
  return (
    <header
      className={isBreathing ? "fade-out animation-duration-short" : undefined}
    >
      <div id="breathing-exercise-selector__wrapper">
        <BreathingExerciseSelector
          breathingExercise={breathingExercise}
          setBreathingExercise={setBreathingExercise}
        />
      </div>
      <Logo />
    </header>
  );
}
