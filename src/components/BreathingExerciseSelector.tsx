import "./BreathingExerciseSelector.css";
import { BREATHING_EXERCISE_ID } from "../services/breathing-exercise/breathing-exercise";
import type { BreathingExercise } from "../services/breathing-instructions/breathing-exercise.interface";
import { FourSevenEightBreathing } from "../services/breathing-instructions/four-seven-eight-breathing";
import { FourFourFourFourBreathing } from "../services/breathing-instructions/four-four-four-four-breathing";

const BREATHING_EXERCISES = [
  BREATHING_EXERCISE_ID.FOUR_FOUR_FOUR_FOUR_BREATHING,
  BREATHING_EXERCISE_ID.FOUR_SEVEN_EIGHT,
];

const BREATHING_EXERCISES_LABELS: Record<BREATHING_EXERCISE_ID, string> = {
  [BREATHING_EXERCISE_ID.FOUR_FOUR_FOUR_FOUR_BREATHING]: "4 - 4 - 4",
  [BREATHING_EXERCISE_ID.FOUR_SEVEN_EIGHT]: "4 - 7 - 8",
};

// TODO: Make this accessible.
export default function BreathingExerciseSelector({
  breathingExercise,
  setBreathingExercise,
}: {
  breathingExercise: BreathingExercise;
  setBreathingExercise: (value: BreathingExercise) => void;
}) {
  const getBreathingExerciseById = (
    id: BREATHING_EXERCISE_ID,
  ): BreathingExercise => {
    switch (id) {
      case BREATHING_EXERCISE_ID.FOUR_FOUR_FOUR_FOUR_BREATHING:
        return new FourFourFourFourBreathing();
      case BREATHING_EXERCISE_ID.FOUR_SEVEN_EIGHT:
        return new FourSevenEightBreathing();
      default:
        throw new Error(`Couldn't resolve breathing exercise for id ${id}`);
    }
  };

  const onClick = (id: BREATHING_EXERCISE_ID) => {
    setBreathingExercise(getBreathingExerciseById(id));
  };

  return (
    <div id="breathing-exercise-selector">
      {BREATHING_EXERCISES.map((id) => (
        <div
          className={breathingExercise.id === id ? "active" : undefined}
          onClick={() => onClick(id)}
        >
          {BREATHING_EXERCISES_LABELS[id]}
        </div>
      ))}
    </div>
  );
}
