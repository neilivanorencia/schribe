"use client";

import { Moon, Settings, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className="h-10 w-10 rounded-lg border-2 border-cornsilk-600 !bg-transparent transition-all duration-500 ease-in-out hover:bg-transparent focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-indigo-600 dark:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 text-gray-700 transition-all duration-500 dark:-rotate-90 dark:scale-0 dark:text-indigo-400" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 text-gray-700 transition-all duration-500 dark:rotate-0 dark:scale-100 dark:text-indigo-400" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border-2 border-cornsilk-600 bg-cornsilk-500 shadow-none dark:border-indigo-600 dark:bg-indigo-900"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`flex cursor-pointer items-center gap-2 px-4 py-2 focus:outline-none dark:text-white ${
            theme === "light"
              ? "!bg-cornsilk-600 dark:!bg-indigo-700/50"
              : "hover:!bg-cornsilk-600 dark:hover:!bg-indigo-700/50"
          }`}
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <div className="my-1" />
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`flex cursor-pointer items-center gap-2 px-4 py-2 focus:outline-none dark:text-white ${
            theme === "dark"
              ? "!bg-cornsilk-600 dark:!bg-indigo-700/50"
              : "hover:!bg-cornsilk-600 dark:hover:!bg-indigo-700/50"
          }`}
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <div className="my-1" />
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`flex cursor-pointer items-center gap-2 px-4 py-2 focus:outline-none dark:text-white ${
            theme === "system"
              ? "!bg-cornsilk-600 dark:!bg-indigo-700/50"
              : "hover:!bg-cornsilk-600 dark:hover:!bg-indigo-700/50"
          }`}
        >
          <Settings className="h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
