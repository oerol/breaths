import type { Seconds } from "../types/time-units";
import BreathHoldAnimation from "./BreathHoldAnimation";

export default function BreathingInstructionsActive({
  text,
  isBreathHold,
  isFinished,
  breathingInterval,
  onFadeOutAnimation,
}: {
  text: string;
  isBreathHold: boolean;
  isFinished: boolean;
  breathingInterval: Seconds;
  onFadeOutAnimation: () => void;
}) {
  return (
    <span
      className={isFinished ? "fade-out" : undefined}
      onAnimationEnd={onFadeOutAnimation}
    >
      {text}
      {isBreathHold && (
        <BreathHoldAnimation
          isFinished={isFinished}
          breathingInterval={breathingInterval}
        />
      )}
    </span>
  );
}
