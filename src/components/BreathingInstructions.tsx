import { useEffect, useState } from "react";
import "./BreathingInstructions.css";
import type { Seconds } from "../types/time-units";
import BreathingInstructionsFinished from "./BreathingInstructionsFinished";
import BreathingInstructionsActive from "./BreathingInstructionsActive";

const BREATHING_STATE = {
  BREATH_IN: "BREATH_IN",
  BREATH_OUT: "BREATH_OUT",
  BREATH_HOLD: "BREATH_HOLD",
} as const;

type BreathingState = (typeof BREATHING_STATE)[keyof typeof BREATHING_STATE];

const BREATHING_STATE_LABELS: Record<BreathingState, string> = {
  BREATH_IN: "in",
  BREATH_HOLD: "hold",
  BREATH_OUT: "out",
};

const BREATHING_STATES = [
  BREATHING_STATE.BREATH_IN,
  BREATHING_STATE.BREATH_HOLD,
  BREATHING_STATE.BREATH_OUT,
  BREATHING_STATE.BREATH_HOLD,
] as const;

export default function BreathingInstructions({
  breathingInterval,
  isFinished,
  onRepeat,
}: {
  breathingInterval: Seconds;
  isFinished: boolean;
  onRepeat: () => void;
}) {
  const [breathingState, setBreathingState] = useState(0);
  const [showIsFinished, setShowIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished) {
      return;
    }

    const interval = setInterval(() => {
      setBreathingState((prev) => (prev + 1) % BREATHING_STATES.length);
    }, breathingInterval * 1000);

    return () => clearInterval(interval);
  }, [isFinished]);

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
