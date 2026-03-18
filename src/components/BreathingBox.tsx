import type { Seconds } from "../types/time-units";
import "./BreathingBox.css";

export default function BreathingBox({
  breathingInterval,
}: {
  breathingInterval: Seconds;
}) {
  return (
    <div id="breathing-box__wrapper">
      <div
        id="breathing-box"
        style={{ animationDuration: `${breathingInterval * 4}s` }}
      ></div>
    </div>
  );
}
