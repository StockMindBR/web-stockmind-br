import Link from "next/link";
import { TransitionLink } from "../utils/TransitionLink";

export const FlipNav = () => {
  return (
    <nav className="p-4 flex items-center justify-between relative">
      <NavLeft />
    </nav>
  );
};

const NavLeft = () => {
  return (
    <div className="flex items-center gap-6">
      <Link href="/">
        <Logo />
      </Link>
      <TransitionLink href="/banking">Banking</TransitionLink>
      <TransitionLink href="/energy">Energy</TransitionLink>
      <TransitionLink href="/insurance">Insurance</TransitionLink>
      <TransitionLink href="/sanitation">Sanitation</TransitionLink>
      <TransitionLink href="/about">About</TransitionLink>
    </div>
  );
};
const Logo = () => {
  return (
    <div className="text-2xl font-bold text-gray-800">
      Stock-Mind
    </div>
  );
};
