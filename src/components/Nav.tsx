"use client";
import Image from "next/image";
import { ModeToggle } from "./Modetoggle";
import ConnectButton from "./ConnectButton";

export default function Nav() {
  return (
    <header>
      <nav className="bg-gray-500/25 px-8 py-8 rounded-md h-full w-full flex flex-col md:flex-row justify-center items-center md:justify-between">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-gray-800 rounded-xl px-3 py-2">
            <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              CricFi
            </p>
          </div>
        </a>
        <ConnectButton />
      </nav>
    </header>
  );
}
