import { useState } from "react";
import "./BreathingDurationSelector.css";

interface BreathingDuration {
  id: string;
  label: string;
  cycles: number;
}

export default function BreathingDurationSelector({
  className,
  setBreathingCycles,
}: {
  className: string | undefined;
  setBreathingCycles: (value: number) => void;
}) {
  const durations: BreathingDuration[] = [
    {
      id: "short",
      label: "short",
      cycles: 3,
    },
    {
      id: "medium",
      label: "medium",
      cycles: 6,
    },
    {
      id: "long",
      label: "long",
      cycles: 9,
    },
  ];
  const [checkedOption, setCheckedOption] = useState(durations[0].id);

  const onInput = ({
    id,
    cycles,
  }: Pick<BreathingDuration, "id" | "cycles">) => {
    setCheckedOption(id);
    setBreathingCycles(cycles);
  };

  // TODO: Radio Input
  return (
    <div id="breathing-duration-selector__wrapper" className={className}>
      {durations.map(({ id, label, cycles }) => (
        <>
          <input
            type="radio"
            name="breathing-duration-selector"
            id={id}
            onInput={() => onInput({ id, cycles })}
          />
          <label
            className={id === checkedOption ? "checked" : undefined}
            htmlFor={id}
          >
            {label}
          </label>
        </>
      ))}
    </div>
  );
}
