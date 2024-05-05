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
    <div className="flex items-center gap-5 w-full mt-20 py-2 justify-between px-10 bg-slate-400/20">
      <div className="gap-5 flex">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          const iconSizeClass = index === 0 ? "w-6 h-6" : "w-5 h-5";
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
      </div>

      <Image
        src={PoweredByAvalanche}
        alt="PoweredByAvalanche"
        width={160}
        className="mt-[-30px] mb-[-30px]"
        layout={"intrensic"}
      />
    </div>
  );
}
