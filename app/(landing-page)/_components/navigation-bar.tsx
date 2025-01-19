"use client";

import { Logo } from "@/app/(landing-page)/_components/logo";
import { ModeToggle } from "@/components/mode-toggle";

export const NavigationBar = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-opacity-10 backdrop-blur-lg backdrop-filter">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-4">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};
