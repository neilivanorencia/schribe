"use client";

import { useTheme } from "next-themes";
import { Inter } from "next/font/google";
import { Toaster as Sonner } from "sonner";

const inter = Inter({ subsets: ["latin"] });

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className={`toaster group ${inter.className}`}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-gray-500 group-[.toaster]:text-cornsilk-100 group-[.toaster]:rounded-lg group-[.toaster]:shadow-lg transition-all duration-200 dark:group-[.toaster]:bg-purple-400 dark:group-[.toaster]:text-indigo-950 outline-none text-base group-[.toaster]:border-2 group-[.toaster]:border-gray-400/50 dark:group-[.toaster]:border-purple-300/30",
          description:
            "group-[.toast]:text-base text-cornsilk-100/80 dark:group-[.toast]:text-indigo-950/80",
          actionButton:
            "group-[.toast]:bg-cornsilk-100/20 group-[.toast]:text-cornsilk-100 group-[.toast]:hover:bg-cornsilk-100/30 text-base font-medium transition-colors dark:group-[.toast]:bg-indigo-950/20 dark:group-[.toast]:text-indigo-950 dark:group-[.toast]:hover:bg-indigo-950/30",
          cancelButton:
            "group-[.toast]:bg-cornsilk-100/10 group-[.toast]:text-cornsilk-100/80 group-[.toast]:hover:bg-cornsilk-100/20 text-sm transition-colors dark:group-[.toast]:bg-indigo-950/10 dark:group-[.toast]:text-indigo-950/80 dark:group-[.toast]:hover:bg-indigo-950/20",
          title:
            "group-[.toast]:text-cornsilk-100/90 font-medium text-base dark:group-[.toast]:text-indigo-950/90",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
