import { useEffect, useState } from "react";
import "./BreathingInstructions.css";
import type { Seconds } from "../types/time-units";
import BreathingInstructionsFinished from "./BreathingInstructionsFinished";
import BreathingInstructionsActive from "./BreathingInstructionsActive";
import type {
  BreathingExercise,
  BreathingPattern,
} from "../services/breathing-instructions/breathing-exercise.interface";
import { BREATHING_STATE } from "../services/breathing-exercise/breathing-state";

const BREATHING_STATE_LABELS: Record<BREATHING_STATE, string> = {
  [BREATHING_STATE.BREATH_IN]: "in",
  [BREATHING_STATE.BREATH_HOLD]: "hold",
  [BREATHING_STATE.BREATH_OUT]: "out",
};

export default function BreathingInstructions({
  breathingExercise,
  breathingCycles,
  isFinished,
  onRepeat,
}: {
  breathingExercise: BreathingExercise; // TODO: Rename due to name clash with BREATHING_EXERCISE
  breathingCycles: number;
  isFinished: boolean;
  onRepeat: () => void;
}) {
  const [breathingState, setBreathingState] = useState(0);
  const [showIsFinished, setShowIsFinished] = useState(false);

  const getBreathingPattern = () => {
    const breathingPattern: BreathingPattern[] = [];

    for (let index = 0; index < breathingCycles; index++) {
      breathingPattern.push(...breathingExercise.pattern);
    }

    return breathingPattern;
  };

  const breathingPattern = getBreathingPattern();

  const BREATHING_STATES = breathingPattern.map(({ state }) => state);

  const initializeBreathingInstructions = () => {
    const breathingPattern = getBreathingPattern();
    const timers = [];

    for (let index = 1; index < breathingPattern.length; index++) {
      const timeout: Seconds = breathingPattern
        .slice(0, index)
        .map(({ duration }) => duration)
        .reduce((acc, curr) => acc + curr, 0);
      console.log(timeout);

      const timer = setTimeout(() => {
        setBreathingState((prev) => (prev + 1) % BREATHING_STATES.length);
      }, timeout * 1000);

      timers.push(timer);
    }

    return {
      timers,
    };
  };

  useEffect(() => {
    const { timers } = initializeBreathingInstructions();

    return () => {
      timers.forEach((timer) => {
        clearTimeout(timer);
      });
    };
  }, []);

  const onFadeOutAnimation = () => {
    setShowIsFinished(true);
  };

  const currentState = BREATHING_STATES[breathingState];
  const currentLabel = BREATHING_STATE_LABELS[currentState];
  const isBreathHold = currentState === BREATHING_STATE.BREATH_HOLD;

  return (
    <div id="breathing-instructions">
      {showIsFinished ? (
        <BreathingInstructionsFinished
          className="fade-in"
          onRepeat={onRepeat}
        />
      ) : (
        <BreathingInstructionsActive
          text={currentLabel}
          isBreathHold={isBreathHold}
          isFinished={isFinished}
          breathingInterval={breathingInterval}
          onFadeOutAnimation={onFadeOutAnimation}
        />
      )}
    </div>
  );
}
