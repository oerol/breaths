import { BREATHING_EXERCISE_ID } from "../breathing-exercise/breathing-exercise";
import { BREATHING_STATE } from "../breathing-exercise/breathing-state";
import type { BreathingExercise } from "./breathing-exercise.interface";

export class FourFourFourFourBreathing implements BreathingExercise {
  public breathHoldDuration = 4;
  public id = BREATHING_EXERCISE_ID.FOUR_FOUR_FOUR_FOUR_BREATHING;
  public pattern = [
    {
      state: BREATHING_STATE.BREATH_IN,
      duration: 4,
    },
    {
      state: BREATHING_STATE.BREATH_HOLD,
      duration: this.breathHoldDuration,
    },
    {
      state: BREATHING_STATE.BREATH_OUT,
      duration: 4,
    },
    {
      state: BREATHING_STATE.BREATH_HOLD,
      duration: this.breathHoldDuration,
    },
  ];

  public get sumDuration() {
    return this.pattern
      .map(({ duration }) => duration)
      .reduce((acc, prev) => acc + prev, 0);
  }
}
