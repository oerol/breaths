import type { Seconds } from "../types/time-units";
import "./BreathingIndicator.css";

export default function BreathingIndicator({
  breathingInterval,
  breathingCycles,
  isBreathing,
  isFinished,
  setIsFinished,
  animationKey,
}: {
  breathingInterval: Seconds;
  breathingCycles: number;
  isBreathing: boolean;
  isFinished: boolean;
  setIsFinished: (value: boolean) => void;
  animationKey: number;
}) {
  return (
    <div
      id="breathing-box__wrapper"
      className={isFinished ? "fade-out" : undefined}
    >
      <div
        id="breathing-box"
        key={animationKey}
        style={{
          animationDuration: `${breathingInterval * 4}s`,
          animationIterationCount: String(breathingCycles),
          animationPlayState: isBreathing ? "running" : "paused",
        }}
        onAnimationEnd={() => setIsFinished(true)}
      ></div>
    </div>
  );
}
