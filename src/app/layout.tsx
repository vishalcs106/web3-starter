import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { headers } from "next/headers";

import { cn } from "@/lib/utils";
import Nav from "@/components/Nav";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";
import { cookieToInitialState } from "wagmi";

import { config } from "@/configs";
import Web3ModalProvider from "@/contexts/Web3Modal";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const initialState = cookieToInitialState(config, headers().get("cookie")) || null;
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        ></link>
        <title>CricFi</title>
        <meta name="description" content="Fantasy cricket On-Chain" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased min-w-screen",
          fontSans.variable
        )}
      >
        <div
          id="root"
          className="bg-[url('./assets/HeroBg.jpg')] md:bg-no-repeat bg-cover bg-center  h-full sm:h-screen  "
        >
          <div className="backdrop-blur h-full w-full  flex flex-col">
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Web3ModalProvider>
                <Nav />
                {children}
                <div className="flex flex-grow"></div>
                <div className="">
                  <Footer />
                </div>
              </Web3ModalProvider>
            </ThemeProvider>
          </div>
        </div>

        <Toaster richColors />
      </body>
    </html>
  );
}
