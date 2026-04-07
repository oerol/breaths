import "./StartBreathingButton.css";

export default function StartBreathingButton({
  setIsBreathing,
}: {
  setIsBreathing: (value: boolean) => void;
}) {
  return (
    <button
      id="start-breathing-button"
      className="button"
      onClick={() => setIsBreathing(true)}
    >
      start
    </button>
  );
}
