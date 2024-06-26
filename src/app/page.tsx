"use client";
import { useEffect } from "react";
import CardStack from "@/components/CardStack";
import { Button } from "@/components/ui/button";
import {
  useAccount,
  useSendTransaction,
  useSignMessage,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseEther } from "viem";
import { toast } from "sonner";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import ConnectButton from "@/components/ConnectButton";
import Image from "next/image";
import HeroPlayers from "@/components/HeroPlayers";
export default function Home() {
  const { isConnected } = useAccount();
  const { signMessage } = useSignMessage();
  const { sendTransaction, data: hash } = useSendTransaction();
  const { open } = useWeb3Modal();
  const handleConnect = () => {
    open();
  };
  const {
    isLoading: isConfirming,
    error,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (isConfirming) {
      toast.loading("Transaction Pending");
    }
    toast.dismiss();

    if (isConfirmed) {
      toast.success("Transaction Successful", {
        action: {
          label: "View on Etherscan",
          onClick: () => {
            window.open(`https://explorer-testnet.morphl2.io/tx/${hash}`);
          },
        },
      });
    }
    if (error) {
      toast.error("Transaction Failed");
    }
  }, [isConfirming, isConfirmed, error, hash]);

  return (
    <main className="h-full w-full self-center flex justify-center items-center">
      <div className="flex flex-col lg:flex-row  text-center gap-8 w-full h-full justify-between items-center px-2 md:px-8 py-8 ">
        <div className=" bg-indigo-950/90 rounded-lg w-full max-w-[500px] 2xl:max-w-[650px] justify-center items-center  p-8 gap-6 flex flex-col self-center">
          <p className="text-3xl 3xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Fantasy Cricket On-Chain
          </p>
          <p className="text-md 3xl:text-xl  font-semibold ">
            Tournament: ICC Mens T20 World Cup 2024
          </p>
          <div className="flex flex-col gap-6 mt-6 justify-start items-start">
            <p className="text-lg 2xl:text-2xl text-start">
              💰 Total supply of packs is 5000.
            </p>
            <p className="text-lg 2xl:text-2xl text-start">
              🧧 Mint a pack to collect 10 random player cards.
            </p>
            <p className="text-lg 2xl:text-2xl text-start">
              ⚔️ Play tournaments by creating a deck of 5 cards.
            </p>
            <p className="text-lg 2xl:text-2xl text-start">
              🏆 90% of minted AVAX will be distributed as rewards.
            </p>
            <p className="text-lg 2xl:text-2xl text-start">
              🚀 Level up to earn more rewards.
            </p>
            <p className="text-lg 2xl:text-2xl text-start">
              🛒 Trade player cards on marketplace.
            </p>
          </div>
        </div>

        <div className="self-center">
          <HeroPlayers />
        </div>
      </div>
    </main>
  );
}
