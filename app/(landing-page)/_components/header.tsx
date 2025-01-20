"use client";

import { useConvexAuth } from "convex/react";
import { Besley } from "next/font/google";
import Link from "next/link";
import { FaRegHandPointDown, FaRegHandPointRight } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/clerk-react";

const besley = Besley({ subsets: ["latin"] });

export const Header = () => {
  const { isAuthenticated } = useConvexAuth();

  return (
    <div className="max-w-2xl space-y-6 text-center lg:text-left">
      <h1
        className={cn(
          "text-3xl font-semibold text-gray-800 dark:text-indigo-300 sm:text-5xl md:text-6xl",
          besley.className,
        )}
      >
        Capture Ideas and Conquer Your Day
      </h1>
      <h2 className="text-sm font-normal text-gray-700 dark:text-gray-100 sm:text-lg md:text-xl">
        Schribe is a web-based note-taking application designed to help you
        capture your ideas and organize your thoughts. Whether jotting down
        quick reminders, brainstorming ideas, or keeping track of important
        tasks, the main objective will always be to enhance your productivity.
        Start taking notes the easy way with Schribe!
      </h2>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
        {isAuthenticated && (
          <Button
            className="group relative w-auto min-w-[180px] rounded-lg border-2 border-gray-700 bg-gray-700 px-1 py-2 text-sm text-cornsilk-100 transition duration-300 ease-in-out hover:bg-transparent hover:text-gray-700 dark:border-violet-300 dark:bg-violet-300 dark:text-gray-800 dark:hover:bg-transparent dark:hover:text-violet-300 sm:text-base md:min-w-[200px] md:border-[3px] md:px-4 md:py-6 md:text-lg"
            asChild
          >
            <Link href="/documents">
              <span className="mr-2">Access Workspace</span>
              <FaRegHandPointRight
                className={cn(
                  "inline-block scale-125 animate-pulse text-lg sm:text-xl md:text-2xl",
                )}
              />
            </Link>
          </Button>
        )}
        {!isAuthenticated && (
          <SignInButton mode="modal">
            <Button className="group relative w-auto min-w-[180px] rounded-lg border-2 border-gray-700 bg-gray-700 px-1 py-2 text-sm text-cornsilk-100 transition duration-300 ease-in-out hover:bg-transparent hover:text-gray-700 dark:border-violet-300 dark:bg-violet-300 dark:text-gray-800 dark:hover:bg-transparent dark:hover:text-violet-300 sm:text-base md:min-w-[200px] md:border-[3px] md:px-4 md:py-6 md:text-lg">
              <span className="mr-2">Get Started</span>
              <FaRegHandPointRight
                className={cn(
                  "inline-block scale-125 animate-pulse text-lg sm:text-xl md:text-2xl",
                )}
              />
            </Button>
          </SignInButton>
        )}
        <Button className="group relative w-auto min-w-[180px] rounded-lg border-2 border-gray-500 bg-gray-500 px-1 py-2 text-sm text-cornsilk-100 transition duration-300 ease-in-out hover:bg-transparent hover:text-gray-700 dark:border-purple-400 dark:bg-purple-400 dark:text-gray-800 dark:hover:bg-transparent dark:hover:text-purple-400 sm:text-base md:min-w-[200px] md:border-[3px] md:px-4 md:py-6 md:text-lg">
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
