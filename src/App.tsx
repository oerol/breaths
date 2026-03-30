import { useState } from "react";
import "./App.css";
import BreathingBox from "./components/BreathingBox";
import BreathingInstructions from "./components/BreathingInstructions";
import type { Seconds } from "./types/time-units";
import StartBreathingButton from "./components/StartBreathingButton";
import BreathingDurationSelector from "./components/BreathingDurationSelector";

function App() {
  const BREATHING_INTERVAL: Seconds = 0.5;
  const [isBreathing, setIsBreathing] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [breathingCycles, setBreathingCycles] = useState<number>(3);

  const [animationKey, setAnimationKey] = useState(0);

  const repeatAnimation = () => {
    setAnimationKey((prev) => prev + 1);
  };

  const repeat = () => {
    setIsBreathing(false);
    setIsFinished(false);
    repeatAnimation();
  };

  return (
    <>
      <BreathingBox
        breathingInterval={BREATHING_INTERVAL}
        breathingCycles={breathingCycles}
        isBreathing={isBreathing}
        isFinished={isFinished}
        setIsFinished={setIsFinished}
        animationKey={animationKey}
      />
      {isBreathing && (
        <BreathingInstructions
          breathingInterval={BREATHING_INTERVAL}
          isFinished={isFinished}
          onRepeat={repeat}
        />
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
