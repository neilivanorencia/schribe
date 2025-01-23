"use client";

import { ChevronDown, ChevronRight } from "lucide-react";

import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";

interface ItemProps {
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  label: string;
  onClick: () => void;
  icon: React.ReactNode;
}

export const Item = ({
  id,
  documentIcon,
  active,
  expanded,
  isSearch,
  level = 0,
  label,
  onClick,
  icon,
}: ItemProps) => {
  const ChevronIcon = expanded ? ChevronDown : ChevronRight;

  return (
    <div
      onClick={onClick}
      role="button"
      className={cn(
        "group/item flex min-h-[28px] w-full items-center py-1 pr-3 text-sm text-gray-600 transition duration-300 ease-in-out hover:bg-cornsilk-700 hover:text-gray-700 dark:text-indigo-300 hover:dark:bg-indigo-800",
        active &&
          "bg-cornsilk-700 text-gray-700 dark:bg-indigo-800 dark:text-indigo-300",
      )}
      style={{ paddingLeft: level ? `${level * 12 + 12}px` : "12px" }}
    >
      {!!id && (
        <div role="button" className="h-full">
          <ChevronIcon className="h-4 w-4 shrink-0" />
        </div>
      )}
      {documentIcon ? (
        <div className="mr-2 shrink-0 text-lg">{documentIcon}</div>
      ) : (
        <span className="mr-2 inline-block h-6 w-6 shrink-0 [&>svg]:h-full [&>svg]:w-full [&>svg]:text-current">
          {icon}
        </span>
      )}
      <span className="truncate">{label}</span>
      {isSearch && (
        <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded-sm bg-cornsilk-500 px-1.5 font-mono text-sm opacity-100 dark:bg-indigo-700">
          <span className="text-xs">⌘</span>K
        </kbd>
      )}
    </div>
  );
};
