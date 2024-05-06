"use client";
import Image from "next/image";
import { ModeToggle } from "./Modetoggle";
import ConnectButton from "./ConnectButton";

export default function Nav() {
  return (
    <header>
      <nav className="bg-gray-500/25 px-8 py-4 xl:py-8 rounded-md h-full w-full flex gap-4 flex-col md:flex-row md:gap-6 justify-center items-center md:justify-between">
        <div className="bg-gray-800 rounded-xl px-3 py-2">
          <p className="text-3xl 2xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            CricFi
          </p>
        </div>

        <ConnectButton />
      </nav>
    </header>
  );
}
