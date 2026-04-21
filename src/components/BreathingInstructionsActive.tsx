import type { Seconds } from "../types/time-units";
import BreathHoldAnimation from "./BreathHoldAnimation";

export default function BreathingInstructionsActive({
  text,
  isBreathHold,
  isFinished,
  breathHoldDuration,
  onFadeOutAnimation,
}: {
  text: string;
  isBreathHold: boolean;
  isFinished: boolean;
  breathHoldDuration: Seconds;
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
          breathingDuration={breathHoldDuration}
        />
      )}
    </span>
  );
}
