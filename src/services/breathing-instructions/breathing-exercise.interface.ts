import type { Seconds } from "../../types/time-units";
import type { BREATHING_EXERCISE_ID } from "../breathing-exercise/breathing-exercise";
import type { BREATHING_STATE } from "../breathing-exercise/breathing-state";

export interface BreathingPattern {
  state: BREATHING_STATE;
  duration: Seconds;
}

export interface BreathingExercise {
  id: BREATHING_EXERCISE_ID;
  pattern: BreathingPattern[];
  sumDuration: Seconds;
  breathHoldDuration: Seconds;
}
