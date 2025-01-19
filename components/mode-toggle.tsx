"use client";

import * as React from "react";
import { Moon, Settings, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-lg border-2 border-gray-700 bg-cornsilk-300 transition-all duration-500 ease-in-out hover:bg-cornsilk-600/50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0"
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 text-gray-700 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 text-gray-700 transition-all duration-500 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border-2 border-gray-700 bg-cornsilk-500 dark:border-slate-500 dark:bg-slate-900"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex cursor-pointer items-center gap-2  focus:bg-cornsilk-100 focus:outline-none dark:text-white dark:hover:bg-slate-700/50"
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex cursor-pointer items-center gap-2  focus:bg-cornsilk-100 focus:outline-none dark:text-white dark:hover:bg-slate-700/50"
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex cursor-pointer items-center gap-2  focus:bg-cornsilk-100 focus:outline-none dark:text-white dark:hover:bg-slate-700/50"
        >
          <Settings className="h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
