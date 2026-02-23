"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/app/providers";
export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const backgroundColors = {
    "/":"bg-emerald-100",
    "/about":"bg-gradient-to-br from-purple-200 to-pink-200"
  };

  const pageBgClass = backgroundColors[pathname] || "";

  return (
        <div className={`${pageBgClass} min-h-screen `}>
          <Providers>
          <Navbar />
          {children}
          <Footer />
          </Providers>
        </div>
  );
}