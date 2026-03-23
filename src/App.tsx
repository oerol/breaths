import { useState } from "react";
import "./App.css";
import BreathingBox from "./components/BreathingBox";
import BreathingInstructions from "./components/BreathingInstructions";
import type { Seconds } from "./types/time-units";
import StartBreathingButton from "./components/StartBreathingButton";
import BreathingDurationSelector from "./components/BreathingDurationSelector";

function App() {
  const BREATHING_INTERVAL: Seconds = 4;
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathingCycles, setBreathingCycles] = useState<number>(3);

  return (
    <>
      <BreathingBox
        breathingInterval={BREATHING_INTERVAL}
        breathingCycles={breathingCycles}
        isBreathing={isBreathing}
      />
      {isBreathing && (
        <BreathingInstructions breathingInterval={BREATHING_INTERVAL} />
      )}
      {!isBreathing && <StartBreathingButton setIsBreathing={setIsBreathing} />}
      {
        <BreathingDurationSelector
          className={isBreathing ? "visibility-hidden" : undefined}
          setBreathingCycles={setBreathingCycles}
        />
      }
    </>
  );
}

export default App;
