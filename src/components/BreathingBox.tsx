import type { Seconds } from "../types/time-units";
import "./BreathingBox.css";

export default function BreathingBox({
  breathingInterval,
  breathingCycles,
  isBreathing,
  setIsFinished,
}: {
  breathingInterval: Seconds;
  breathingCycles: number;
  isBreathing: boolean;
  setIsFinished: (value: boolean) => void;
}) {
  return (
    <div id="breathing-box__wrapper">
      <div
        id="breathing-box"
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
