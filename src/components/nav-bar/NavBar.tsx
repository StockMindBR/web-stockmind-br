import Link from "next/link";


export const FlipNav = () => {
  return (
    <NavLeft />
  );
};

const NavLeft = () => {
  return (
  <nav>
    <header className="flex justify-between items-center p-6 shadow-md">
    <Logo />
    <nav className="space-x-6">
    <Link href="/banking" className="text-gray-700 hover:text-blue-600">Banking</Link>
    <Link href="/energy" className="text-gray-700 hover:text-blue-600">Energy</Link>
    <Link href="/insurance" className="text-gray-700 hover:text-blue-600">Insurance</Link>
    <Link href="/sanitation" className="text-gray-700 hover:text-blue-600">Sanitation</Link>
    <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
    </nav>
    <Link href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Try Free</Link>
  </header>
</nav>
  );
};

const Logo = () => {
  return (
    <div >
      <Link href="/">
      <h1 className="text-2xl font-bold">Stock-Mind</h1>
      </Link>
       
    </div>
  );
};

