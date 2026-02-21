"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 border-b">
      <h1 className="font-bold text-xl">AI Resume Analyzer</h1>

      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/analyze">Analyze</Link>
      </div>
    </nav>
  );
}