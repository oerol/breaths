import { ReloadIcon } from "../assets/icons/Reload";
import "./BreathingInstructionsFinished.css";

export default function BreathingInstructionsFinished({
  text,
  className,
  onRepeat,
}: {
  text: string;
  className: string;
  onRepeat: () => void;
}) {
  return (
    <div>
      <span className={className}> {text} </span>
      {/* TODO: Export to a seperate component. */}
      <div className="repeat-button__wrapper">
        <button onClick={onRepeat}>
          <ReloadIcon className={className} />
        </button>
      </div>
    </div>
  );
}
