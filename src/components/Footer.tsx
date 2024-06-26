import React from "react";

import Link from "next/link";
import { SiX } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import PoweredByAvalanche from "../app/assets/Powered-by-Avalanche.png";

export default function Footer() {
  const socials = [
    {
      link: "https://t.me/+qH3H1W5m3aM4NmZl",
      label: "Telegram",
      Icon: FaTelegramPlane,
    },
    {
      link: "https://twitter.com/CricFiXYZ",
      label: "x",
      Icon: SiX,
    },
  ];
  return (
    <div className="flex items-center gap-5 py-3 w-full  justify-between px-10 bg-indigo-950/20">
      <div className="gap-5 flex items-center">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          const iconSizeClass = index === 0 ? "w-4 h-4" : "w-3 h-3";
          return (
            <div className="rounded-full bg-gray-500/40 p-3" key={index}>
              <Link
                href={social.link}
                aria-label={social.label}
                target="_blank"
              >
                <Icon
                  className={`${iconSizeClass} hover:scale-125 transition-all`}
                />
              </Link>
            </div>
          );
        })}
        <Link href="https://cricfi.gitbook.io/cricfi/">
          <p className="hover:underline text-lg font-semibold">Docs</p>
        </Link>
      </div>

      <Image src={PoweredByAvalanche} alt="PoweredByAvalanche" height={50} />
    </div>
  );
}
