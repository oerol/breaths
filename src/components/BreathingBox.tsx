import type { Seconds } from "../types/time-units";
import "./BreathingBox.css";

export default function BreathingBox({
  breathingInterval,
  isBreathing,
}: {
  breathingInterval: Seconds;
  isBreathing: boolean;
}) {
  return (
    <div id="breathing-box__wrapper">
      <div
        id="breathing-box"
        style={{
          animationDuration: `${breathingInterval * 4}s`,
          animationPlayState: isBreathing ? "running" : "paused",
        }}
      ></div>
    </div>
  );
}
