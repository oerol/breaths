import Logo from "./Logo";
import "./Header.css";
import type { BreathingExercise } from "../services/breathing-instructions/breathing-exercise.interface";
import { Settings } from "./Settings";

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
      <div id="settings__wrapper">
        <Settings
          breathingExercise={breathingExercise}
          setBreathingExercise={setBreathingExercise}
        />
      </div>

      <Logo />
    </header>
  );
}
