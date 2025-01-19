"use client";

import { Besley } from "next/font/google";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { FaRegHandPointDown } from "react-icons/fa";
import { FaRegHandPointRight } from "react-icons/fa";

const besley = Besley({ subsets: ["latin"] });

export const Header = () => {
  return (
    <div className="max-w-2xl space-y-6 text-center lg:text-left">
      <h1
        className={cn(
          "text-3xl font-semibold text-gray-800 sm:text-5xl md:text-6xl",
          besley.className,
        )}
      >
        Capture Ideas and Conquer Your Day
      </h1>
      <h2 className="text-sm font-normal text-gray-700 sm:text-lg md:text-xl">
        Schribe is a web-based note-taking application designed to help you
        capture your ideas and organize your thoughts. Whether jotting down
        quick reminders, brainstorming ideas, or keeping track of important
        tasks, the main objective will always be to enhance your productivity.
        Start taking notes the easy way with Schribe!
      </h2>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
        <Button className="group relative w-auto min-w-[180px] rounded-lg border-2 border-gray-700 bg-gray-700 px-1 py-2 text-sm text-cornsilk-100 transition duration-300 ease-in-out hover:bg-transparent hover:text-gray-700 sm:text-base md:min-w-[200px] md:border-[3px] md:px-4 md:py-6 md:text-lg">
          <span className="mr-2">Get Started</span>
          <FaRegHandPointRight
            className={cn(
              "inline-block scale-125 animate-pulse text-lg sm:text-xl md:text-2xl",
            )}
          />
        </Button>
        <Button className="group relative w-auto min-w-[180px] rounded-lg border-2 border-gray-500 bg-gray-500 px-1 py-2 text-sm text-cornsilk-100 transition duration-300 ease-in-out hover:bg-transparent hover:text-gray-700 sm:text-base md:min-w-[200px] md:border-[3px] md:px-4 md:py-6 md:text-lg">
          <span className="mr-2">Explore More</span>
          <FaRegHandPointDown
            className={cn(
              "inline-block scale-125 animate-pulse text-lg sm:text-xl md:text-2xl",
            )}
          />
        </Button>
      </div>
    </div>
  );
};

export default Header;
