import { useState } from "react";
import "./App.css";
import BreathingIndicator from "./components/BreathingIndicator";
import BreathingInstructions from "./components/BreathingInstructions";
import StartBreathingButton from "./components/StartBreathingButton";
import BreathingDurationSelector from "./components/BreathingDurationSelector";
import { LocalStorageStreakCounter } from "./services/streak-counter/local-storage-streak-counter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FourFourFourFourBreathing } from "./services/breathing-instructions/four-four-four-four-breathing";
import type { BreathingExercise } from "./services/breathing-instructions/breathing-exercise.interface";

function App() {
  const [breathingExercise, setBreathingExercise] = useState<BreathingExercise>(
    new FourFourFourFourBreathing(),
  );

  // TODO: Pass this down.
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

  const breathingCycleDuration = breathingExercise.sumDuration;

  return (
    <>
      <Header
        isBreathing={isBreathing}
        breathingExercise={breathingExercise}
        setBreathingExercise={setBreathingExercise}
      />
      <main className="fade-in">
        <BreathingIndicator
          breathingExerciseId={breathingExercise.id}
          breathingCycleDuration={breathingCycleDuration}
          breathingCycles={breathingCycles}
          isBreathing={isBreathing}
          isFinished={isFinished}
          setIsFinished={setIsFinished}
          animationKey={animationKey}
        />
        {isBreathing && (
          <BreathingInstructions
            breathingExercise={breathingExercise}
            breathingCycles={breathingCycles}
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
