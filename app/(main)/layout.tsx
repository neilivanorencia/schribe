"use client";

import { useConvexAuth } from "convex/react";
import { useTheme } from "next-themes";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

import { NavigationBar } from "@/app/(main)/_components/navigation-bar";
import { SearchCommand } from "@/components/search-command";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const spinnerColor = currentTheme === "dark" ? "#6366f1" : "#374151";

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center bg-gradient-to-br from-cornsilk-200 via-cornsilk-400 to-cornsilk-600 dark:from-indigo-950 dark:via-violet-950 dark:to-blue-950">
        <BeatLoader color={spinnerColor} size={16} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  const isDark = currentTheme === "dark";
  const trackColor = isDark ? "hsl(242, 47%,34%)" : "hsl(47, 24%, 70%)";
  const thumbColor = isDark ? "hsl(245, 58%, 51%)" : "hsl(47, 71%, 88%)";

  return (
    <div className="flex h-full bg-gradient-to-br from-cornsilk-200 via-cornsilk-400 to-cornsilk-600 dark:from-indigo-950 dark:via-violet-950 dark:to-blue-950">
      <NavigationBar />
      <main className="scrollbar-custom h-full flex-1 overflow-y-auto">
        <SearchCommand />
        {children}
      </main>

      <style jsx global>{`
        .scrollbar-custom::-webkit-scrollbar-track {
          background: ${trackColor};
        }

        .scrollbar-custom::-webkit-scrollbar-thumb {
          background-color: ${thumbColor};
        }

        .scrollbar-custom {
          scrollbar-width: thin;
          scrollbar-color: ${thumbColor} ${trackColor};
        }
      `}</style>
    </div>
  );
};

export default MainLayout;
