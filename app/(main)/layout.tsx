"use client";

import { useConvexAuth } from 'convex/react';
import { useTheme } from 'next-themes';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';

import { NavigationBar } from '@/app/(main)/_components/navigation-bar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
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

  return (
    <div className="flex h-full bg-gradient-to-br from-cornsilk-200 via-cornsilk-400 to-cornsilk-600 dark:from-indigo-950 dark:via-violet-950 dark:to-blue-950">
      <NavigationBar />
      <main className="h-full flex-1 overflow-y-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
