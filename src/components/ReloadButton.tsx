import { ReloadIcon } from "../assets/icons/Reload";

export default function ReloadButton({
  className,
  onClick,
}: {
  className: string;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="icon-button">
      <ReloadIcon className={className} />
    </button>
  );
}
