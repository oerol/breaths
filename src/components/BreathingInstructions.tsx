import { useEffect, useState } from "react";
import "./BreathingInstructions.css";
import BreathHoldAnimation from "./BreathHoldAnimation";
import type { Seconds } from "../types/time-units";

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
}: {
  breathingInterval: Seconds;
}) {
  const [breathingState, setBreathingState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBreathingState((prev) => (prev + 1) % BREATHING_STATES.length);
    }, breathingInterval * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="breathing-instructions">
      {BREATHING_STATE_LABELS[BREATHING_STATES[breathingState]]}
      {BREATHING_STATES[breathingState] === BREATHING_STATE.BREATH_HOLD && (
        <BreathHoldAnimation breathingInterval={breathingInterval} />
      )}
    </div>
  );
}
