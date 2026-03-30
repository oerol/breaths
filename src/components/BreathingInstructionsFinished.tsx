import "./BreathingInstructionsFinished.css";
import ReloadButton from "./ReloadButton";

export default function BreathingInstructionsFinished({
  className,
  onRepeat,
}: {
  className: string;
  onRepeat: () => void;
}) {
  return (
    <div>
      <span className={className}>
        All done! Slowly get back to regular breathing.
      </span>
      <div className="repeat-button__wrapper">
        <ReloadButton onClick={onRepeat} className={className} />
      </div>
    </div>
  );
}
