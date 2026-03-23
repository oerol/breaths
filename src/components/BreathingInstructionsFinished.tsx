export default function BreathingInstructionsFinished({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return <span className={className}> {text}</span>;
}
