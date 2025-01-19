"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/app/(landing-page)/_components/logo";
import { ModeToggle } from "@/components/mode-toggle";

import { BeatLoader } from "react-spinners";
import { cn } from "@/lib/utils";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { useTheme } from "next-themes";

import { IoAddCircleOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

export const NavigationBar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { theme } = useTheme();

  return (
    <div className="fixed top-0 z-50 w-full bg-opacity-10 backdrop-blur-lg backdrop-filter">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-2">
            {isLoading && (
              <BeatLoader color={theme === "dark" ? "#6366f1" : "#374151"} />
            )}
            {!isAuthenticated && !isLoading && (
              <>
                <SignUpButton mode="modal">
                  <Button
                    size="icon"
                    className="hidden rounded-lg border-2 border-gray-700 bg-gray-700 px-12 py-2 text-sm text-cornsilk-100 transition duration-300 ease-in-out hover:bg-transparent hover:text-gray-700 dark:border-violet-300 dark:bg-violet-300 dark:text-gray-800 dark:hover:bg-transparent dark:hover:text-violet-300 md:flex"
                  >
                    Sign Up
                    <IoAddCircleOutline
                      className={cn("inline-block scale-125")}
                    />
                  </Button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <Button
                    size="icon"
                    className="rounded-lg border-2 border-gray-500 bg-gray-500 px-12 py-2 text-sm text-cornsilk-100 transition duration-300 ease-in-out hover:bg-transparent hover:text-gray-700 dark:border-purple-400 dark:bg-purple-400 dark:text-gray-800 dark:hover:bg-transparent dark:hover:text-purple-400"
                  >
                    Log In
                    <IoLogOutOutline className={cn("inline-block scale-125")} />
                  </Button>
                </SignInButton>
              </>
            )}
            {isAuthenticated && !isLoading && (
              <>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox:
                        "w-10 h-10 rounded-lg border-2 border-gray-700 dark:border-indigo-600",
                    },
                  }}
                />
              </>
            )}
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};
