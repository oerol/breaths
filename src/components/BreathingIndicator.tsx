import { BREATHING_EXERCISE_ID } from "../services/breathing-exercise/breathing-exercise";
import type { Seconds } from "../types/time-units";
import "./BreathingIndicator.css";

export default function BreathingIndicator({
  breathingExerciseId,
  breathingCycleDuration,
  breathingCycles,
  isBreathing,
  isFinished,
  setIsFinished,
  animationKey,
}: {
  breathingExerciseId: BREATHING_EXERCISE_ID;
  breathingCycleDuration: Seconds;
  breathingCycles: number;
  isBreathing: boolean;
  isFinished: boolean;
  setIsFinished: (value: boolean) => void;
  animationKey: number;
}) {
  const getAnimationName = () => {
    switch (breathingExerciseId) {
      case BREATHING_EXERCISE_ID.FOUR_FOUR_FOUR_FOUR_BREATHING:
        return "four-four-four-four__breathing";
      case BREATHING_EXERCISE_ID.FOUR_SEVEN_EIGHT:
        return "four-seven-eight__breathing";
      default:
        throw new Error("Couldn't determine animation name.");
    }
  };

  return (
    <div
      id="breathing-box__wrapper"
      className={isFinished ? "fade-out" : undefined}
    >
      <div
        id="breathing-box"
        key={animationKey}
        style={{
          animationDuration: `${breathingCycleDuration}s`,
          animationIterationCount: String(breathingCycles),
          animationPlayState: isBreathing ? "running" : "paused",
          animationName: getAnimationName(),
        }}
        onAnimationEnd={() => setIsFinished(true)}
      ></div>
    </div>
  );
}
