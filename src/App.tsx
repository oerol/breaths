import { useState } from "react";
import "./App.css";
import BreathingBox from "./components/BreathingBox";
import BreathingInstructions from "./components/BreathingInstructions";
import type { Seconds } from "./types/time-units";
import StartBreathingButton from "./components/StartBreathingButton";

function App() {
  const BREATHING_INTERVAL: Seconds = 4;
  const [isBreathing, setIsBreathing] = useState(false);

  return (
    <>
      <BreathingBox
        breathingInterval={BREATHING_INTERVAL}
        isBreathing={isBreathing}
      />
      {isBreathing && (
        <BreathingInstructions breathingInterval={BREATHING_INTERVAL} />
      )}
      {!isBreathing && <StartBreathingButton setIsBreathing={setIsBreathing} />}
    </>
  );
}

export default App;
