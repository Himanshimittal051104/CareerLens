"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="bg-white h-20 rounded-full flex items-center justify-between px-10">
      <Link href='/' className="text-emerald-600 font-bold text-3xl  text-center">CareerLens</Link>
      <div className="flex items-center gap-3">
        <div className="text-purple-950 bg-sky-100 p-4 rounded-lg font-semibold text-xl"><Link href="/analyze">Analyze</Link></div>
        <div className="bg-purple-950 p-4 text-xl rounded-full text-white  font-semibold ">
          {session ? (
            <button onClick={() => signOut()} className="cursor-pointer">Logout</button>
          ) : (
            <button onClick={() => signIn("google")} className="cursor-pointer">Log In</button>
          )}
        </div>
      </div>
    </nav>
  );
}