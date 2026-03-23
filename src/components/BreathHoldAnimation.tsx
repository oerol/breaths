import { useEffect, useState } from "react";
import type { Seconds } from "../types/time-units";

export default function BreathHoldAnimation({
  breathingInterval,
  isFinished,
}: {
  isFinished: boolean;
  breathingInterval: Seconds;
}) {
  const MAX_NUMBER_OF_DOTS = 3;
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (isFinished) {
          clearInterval(interval);
          return;
        }
        setDotCount((prev) => (prev + 1) % (MAX_NUMBER_OF_DOTS + 1));
      },
      (breathingInterval * 1000) / MAX_NUMBER_OF_DOTS,
    );

    return () => clearInterval(interval);
  }, [isFinished]);

  return <>{".".repeat(dotCount)}</>;
}
