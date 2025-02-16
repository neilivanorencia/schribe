"use client";

import { useConvexAuth } from "convex/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoAddCircleOutline, IoLogOutOutline } from "react-icons/io5";
import { BeatLoader } from "react-spinners";

import { Logo } from "@/app/(landing-page)/_components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

export const NavigationBar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const spinnerColor = mounted
    ? currentTheme === "dark"
      ? "#6366f1"
      : "#374151"
    : "none";

  return (
    <div className="fixed top-0 z-50 w-full bg-opacity-20 backdrop-blur-xl backdrop-filter">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-2">
            {isLoading && <BeatLoader color={spinnerColor} size={8} />}
            {!isAuthenticated && !isLoading && (
              <>
                <SignUpButton mode="modal">
                  <Button
                    size="icon"
                    className="rounded-lg border-2 border-gray-700 bg-gray-700 px-12 py-2 text-sm text-cornsilk-100 transition duration-300 ease-in-out hover:bg-transparent hover:text-gray-700 dark:border-violet-300 dark:bg-violet-300 dark:text-gray-800 dark:hover:bg-transparent dark:hover:text-violet-300"
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
                    className="hidden rounded-lg border-2 border-gray-500 bg-gray-500 px-12 py-2 text-sm text-cornsilk-100 transition duration-300 ease-in-out hover:bg-transparent hover:text-gray-700 dark:border-purple-400 dark:bg-purple-400 dark:text-gray-800 dark:hover:bg-transparent dark:hover:text-purple-400 md:flex"
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
