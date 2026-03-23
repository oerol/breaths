import { useEffect, useState } from "react";
import "./BreathingInstructions.css";
import BreathHoldAnimation from "./BreathHoldAnimation";
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

const FINISHED_TEXT = "All done! Slowly get back to regular breathing.";

export default function BreathingInstructions({
  breathingInterval,
  isFinished,
}: {
  breathingInterval: Seconds;
  isFinished: boolean;
}) {
  const [breathingState, setBreathingState] = useState(0);
  const [showIsFinished, setShowIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isFinished) {
        clearInterval(interval);
        console.log(isFinished);
        return;
      }
      setBreathingState((prev) => (prev + 1) % BREATHING_STATES.length);
    }, breathingInterval * 1000);

    return () => clearInterval(interval);
  }, [isFinished]);

  const onFadeOutAnimation = () => {
    setShowIsFinished(true);
  };

  // TODO: This looks ugly, refactor.
  return (
    <div id="breathing-instructions">
      <BreathingInstructionsFinished
        className={showIsFinished ? "fade-in" : "display-none"}
        text={FINISHED_TEXT}
      />
      {!showIsFinished && (
        <BreathingInstructionsActive
          text={BREATHING_STATE_LABELS[BREATHING_STATES[breathingState]]}
          isBreathHold={
            BREATHING_STATES[breathingState] === BREATHING_STATE.BREATH_HOLD
          }
          isFinished={isFinished}
          breathingInterval={breathingInterval}
          onFadeOutAnimation={onFadeOutAnimation}
        />
      )}
      {/* {isFinished && FINISHED_TEXT} */}
      {/* {BREATHING_STATE_LABELS[BREATHING_STATES[breathingState]]} */}
      {/* {BREATHING_STATES[breathingState] === BREATHING_STATE.BREATH_HOLD && ( */}
      {/*   <BreathHoldAnimation breathingInterval={breathingInterval} /> */}
      {/* )} */}
    </div>
  );
}
