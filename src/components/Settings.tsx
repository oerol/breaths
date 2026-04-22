import "./Settings.css";
import { SettingsIcon } from "../assets/icons/Settings";
import type { BreathingExercise } from "../services/breathing-instructions/breathing-exercise.interface";
import BreathingExerciseSelector from "./BreathingExerciseSelector";
import { useState } from "react";

export function Settings({
  breathingExercise,
  setBreathingExercise,
}: {
  breathingExercise: BreathingExercise;
  setBreathingExercise: (value: BreathingExercise) => void;
}) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div id="settings" onMouseLeave={() => setIsSettingsOpen(false)}>
      <div id="settings-content__wrapper">
        <div
          id="settings-content"
          className={isSettingsOpen ? "open" : "hidden"}
        >
          <div id="breathing-exercise-selector__wrapper">
            <BreathingExerciseSelector
              breathingExercise={breathingExercise}
              setBreathingExercise={setBreathingExercise}
            />
          </div>
        </div>
      </div>

      <button
        id="settings-icon__wrapper"
        className="icon-button"
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
      >
        <SettingsIcon className={isSettingsOpen ? "open" : "hidden"} />
      </button>
    </div>
  );
}
