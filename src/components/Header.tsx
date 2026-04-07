import Logo from "./Logo";
import "./Header.css";

export default function Header({ isBreathing }: { isBreathing: boolean }) {
  return (
    <header
      className={isBreathing ? "fade-out animation-duration-short" : undefined}
    >
      <Logo />
    </header>
  );
}
