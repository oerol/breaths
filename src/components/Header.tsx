import Logo from "./Logo";
import "./Header.css";
import type { BreathingExercise } from "../services/breathing-instructions/breathing-exercise.interface";

export default function Header({
  isBreathing,
}: {
  isBreathing: boolean;
  breathingExercise: BreathingExercise;
  setBreathingExercise: (value: BreathingExercise) => void;
}) {
  return (
    <header
      className={isBreathing ? "fade-out animation-duration-short" : undefined}
    >
      <Logo />
    </header>
  );
}
