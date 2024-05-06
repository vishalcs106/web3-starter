import React from "react";
import Image from "next/image";
function HeroPlayers() {
  return (
    <div className="h-full w-full justify-center items-center border-solid border-2 border-white  py-12 rounded-lg">
      <div className=" flex gap-4  w-fit self-center justify-center items-center">
        <Image
          src={"/TH.jpg"}
          alt="player"
          width={150}
          height={150}
          className=" rounded-lg relative left-20 h-40 w-40 border-solid border-2 border-white"
        ></Image>
        <Image
          src={"/vk.jpg"}
          alt="player"
          width={150}
          height={150}
          className="rounded-lg  relative top-6 z-30 h-40 w-40 border-solid border-2 border-white"
        ></Image>
        <Image
          src={"/JB.jpg"}
          alt="player"
          width={150}
          height={150}
          className="rounded-lg  relative right-20 h-40 w-40 border-solid border-2 border-white"
        ></Image>
      </div>
      <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl py-3 px-6 mt-16 text-lg font-semibold">
        Minting Soon
      </button>
    </div>
  );
}

export default HeroPlayers;
