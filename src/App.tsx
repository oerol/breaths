import "./App.css";
import BreathingInstructions from "./components/BreathingInstructions";
import type { Seconds } from "./types/time-units";

function App() {
  const BREATHING_INTERVAL: Seconds = 4;
  return (
    <>
      <BreathingInstructions breathingInterval={BREATHING_INTERVAL} />
    </>
  );
}

export default App;
