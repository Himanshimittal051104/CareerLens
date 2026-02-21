"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Providers from "@/app/providers";
export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const backgroundColors = {
    "/": "bg-gradient-to-br from-emerald-100 via-sky-100 to-violet-200",
    "/analyze":"bg-gradient-to-br from-purple-300 to-pink-200"
  };

  const pageBgClass = backgroundColors[pathname] || "";

  return (
        <div className={`${pageBgClass} min-h-screen py-14 px-20`}>
          <Providers>
          {/* <Navbar /> */}
          {children}
          </Providers>
        </div>
  );
}