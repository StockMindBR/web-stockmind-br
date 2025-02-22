import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900">
      <main className="flex flex-col items-center text-center py-20 px-6">
        <h2 className="text-sm text-blue-600 font-semibold">WHY API HUB?</h2>
        <h1 className="text-4xl font-bold mt-2">Because Your APIs <br /> Deserve the Best.</h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          API Hub integrates effortlessly with the tools your team depends on, centralizing design, testing, documentation, 
          and exploration in one unified experience. Eliminate silos and unlock innovation.
        </p>
        <Link href="#" className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Start Free Trial</Link>
      </main>
    </div>
  );
};

export default Home;
