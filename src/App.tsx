import { useState } from "react";
import "./App.css";
import BreathingBox from "./components/BreathingBox";
import BreathingInstructions from "./components/BreathingInstructions";
import type { Seconds } from "./types/time-units";
import StartBreathingButton from "./components/StartBreathingButton";
import BreathingDurationSelector from "./components/BreathingDurationSelector";
import { LocalStorageStreakCounter } from "./services/streak-counter/local-storage-streak-counter";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const BREATHING_INTERVAL: Seconds = 4;
  const [breathingCycles, setBreathingCycles] = useState<number>(3);

  const [isBreathing, setIsBreathing] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [animationKey, setAnimationKey] = useState(0);

  const repeatAnimation = () => {
    setAnimationKey((prev) => prev + 1);
  };

  const repeat = () => {
    setIsBreathing(false);
    setIsFinished(false);
    repeatAnimation();
  };

  const streakCounter = new LocalStorageStreakCounter();

  return (
    <>
      <Header isBreathing={isBreathing} />
      <main className="fade-in">
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
        {!isBreathing && (
          <StartBreathingButton setIsBreathing={setIsBreathing} />
        )}
        {
          <BreathingDurationSelector
            className={isBreathing ? "visibility-hidden" : undefined}
            setBreathingCycles={setBreathingCycles}
          />
        }
      </main>
      <Footer
        isBreathing={isBreathing}
        isFinished={isFinished}
        streakCounter={streakCounter}
      />
    </>
  );
}

export default App;
