import "./App.css";
import BreathingBox from "./components/BreathingBox";
import BreathingInstructions from "./components/BreathingInstructions";
import type { Seconds } from "./types/time-units";

function App() {
  const BREATHING_INTERVAL: Seconds = 4;
  return (
    <>
      <BreathingBox breathingInterval={BREATHING_INTERVAL} />
      <BreathingInstructions breathingInterval={BREATHING_INTERVAL} />
    </>
  );
}

export default App;
