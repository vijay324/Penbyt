"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Button } from "./ui/moving-border";
import { useUser } from "@clerk/nextjs";
import { FlipWords } from "./ui/flip-words";
import Content from "../(content)/sm/Content";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Link from "next/link";
import { FeedBack } from "./feedback";
const people = [
  {
    id: 1,
    name: "S.VIJAY KUMAR",
    designation: "Founder & Full stack developer",
    image: "/vijay.svg",
  },
  {
    id: 2,
    name: "S.VIJAY KUMAR",
    designation: "Content Manager",
    image: "/vijay.svg",
  },
];

const Header = () => {
  // const { user } = useUser();
  const words = ["comprehensive", "engaging", "high-quality", "innovative"];
  // if (!isLoaded || !isSignedIn) {
  //   return null;
  // } Succeed in your studies with appealing, gorgeous resources from Penbyt.
  // const words = [
  //   {
  //     text: "Unlock",
  //   },
  //   {
  //     text: "your",
  //   },
  //   {
  //     text: "academic",
  //   },
  //   {
  //     text: "potential",
  //   },
  //   {
  //     text: "with",
  //   },
  //   {
  //     text: "PENBYT.",
  //     className: "text-purple-700 dark:text-purple-500",
  //   },
  // ];

  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="flex flex-col items-center justify-center h-[40rem]  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
          The road to academic successes starts from here
        </p>
        {/* <TypewriterEffectSmooth words={words} /> */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 text-center p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4">
          Access
          <FlipWords words={words} /> <br />
          educational content on Penbyt.
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-purple-600 border  border-transparent text-white text-sm">
            <Link href="/content">Get Content</Link>
          </button>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-purple-800 "
          >
            <Link href="/about">About Us</Link>
          </Button>
        </div>
        <h1 className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base mt-5">
          Our Team
        </h1>
        <div className="flex flex-row items-center justify-center mb-10 mt-2 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </div>
  );
};

export default Header;
