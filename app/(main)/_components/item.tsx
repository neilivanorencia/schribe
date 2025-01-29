"use client";

import { useMutation } from "convex/react";
import { ChevronDown, ChevronRight, MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import {
  HiOutlineFolderOpen,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";
import { toast } from "sonner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/clerk-react";

interface ItemProps {
  id?: Id<"documents">;
  documentIcon?: React.ReactNode;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  label: string;
  onClick?: () => void;
  icon: React.ReactNode;
  hasChildren?: boolean;
}

export const Item = ({
  id,
  documentIcon,
  active,
  expanded,
  isSearch,
  level = 0,
  onExpand,
  label,
  onClick,
  icon,
  hasChildren,
}: ItemProps) => {
  const { user } = useUser();
  const router = useRouter();
  const create = useMutation(api.documents.create);
  const archive = useMutation(api.documents.archive);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const updateDocument = useMutation(api.documents.update);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(label);

  useEffect(() => {
    if (!isEditing) {
      setValue(label);
    }
  }, [label, isEditing]);

  const handleRenameStart = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.setSelectionRange(0, value.length);
    }, 0);
  };

  const handleBlur = () => {
    const finalValue = value.trim() || "Untitled";

    if (finalValue !== label && id) {
      updateDocument({ id, title: finalValue }).catch(() => {
        toast.error("Failed to update title");
        setValue(label);
      });
    }

    setIsEditing(false);
    setValue(finalValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      inputRef.current?.blur();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (id && newValue.trim() !== label) {
        const finalValue = newValue.trim() || "Untitled";
        updateDocument({ id, title: finalValue }).catch(() => {
          toast.error("Failed to update title");
          setValue(label);
        });
      }
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const onArchive = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    if (!id) return;

    const promise = archive({ id });
    toast.promise(promise, {
      loading: "Moving to trash...",
      success: "Note moved to trash successfully!",
      error: "Error moving note to trash",
    });
  };

  const handleExpand = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    onExpand?.();
  };

  const onCreate = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    if (!id) return;

    const promise = create({ title: "New Note", parentDocument: id }).then(
      (documentId) => {
        if (!expanded) onExpand?.();
        router.push(`/documents/${documentId}`);
      },
    );

    toast.promise(promise, {
      loading: "Creating note...",
      success: () => "Note successfully created!",
      error: () => "Error creating note",
    });
  };

  const ChevronIcon = expanded ? ChevronDown : ChevronRight;

  return (
    <div
      onClick={onClick}
      role="button"
      className={cn(
        "group flex min-h-[28px] w-full items-center py-1 pr-3 text-sm text-gray-600 transition duration-300 ease-in-out hover:bg-cornsilk-700 hover:text-gray-700 dark:text-indigo-300 hover:dark:bg-indigo-800",
        active &&
          "bg-cornsilk-700 text-gray-700 dark:bg-indigo-800 dark:text-indigo-300",
        isEditing && "bg-cornsilk-700 dark:bg-indigo-800",
      )}
      style={{ paddingLeft: level ? `${level * 12 + 12}px` : "12px" }}
    >
      <div className="mr-2.5 flex h-full items-center">
        {!!id && (
          <div
            role="button"
            className={cn(
              "h-4 w-4",
              !hasChildren && "pointer-events-none opacity-0",
            )}
            onClick={handleExpand}
          >
            <ChevronIcon className="h-4 w-4 shrink-0" />
          </div>
        )}
      </div>

      <div className="mr-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
        {documentIcon ? (
          <div className="h-full w-full [&>svg]:h-full [&>svg]:w-full">
            {documentIcon}
          </div>
        ) : (
          <span className="h-full w-full [&>svg]:h-full [&>svg]:w-full">
            {icon}
          </span>
        )}
      </div>

      {isEditing ? (
        <input
          ref={inputRef}
          className="ml-2.5 min-w-0 flex-1 truncate bg-transparent outline-none"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <span className="ml-2.5 truncate">{value}</span>
      )}

      {isSearch && (
        <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded-sm bg-cornsilk-500 px-1.5 font-mono text-sm opacity-100 dark:bg-indigo-700">
          <span className="text-xs">⌘</span>K
        </kbd>
      )}

      {!!id && (
        <div className="ml-auto flex items-center gap-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger onClick={(e) => e.stopPropagation()} asChild>
              <div
                role="button"
                className="ml-auto h-full opacity-0 group-hover:opacity-100"
              >
                <MoreHorizontal className="h-4 w-4 text-gray-500 dark:text-indigo-500" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-60 border-0 bg-cornsilk-500 p-2 shadow-none outline-none transition duration-500 ease-in-out dark:border-indigo-700 dark:bg-indigo-800 md:border-2 md:border-cornsilk-600"
              align="start"
              side="right"
              forceMount
            >
              <DropdownMenuItem
                onClick={() => router.push(`/documents/${id}`)}
                className="cursor-pointer text-gray-600 transition-colors duration-500 ease-in-out hover:!bg-cornsilk-600 hover:text-gray-900 dark:text-indigo-200 dark:hover:!bg-indigo-700 dark:hover:text-indigo-100"
              >
                <HiOutlineFolderOpen className="mr-2 h-4 w-4" />
                Open
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleRenameStart}
                className="cursor-pointer text-gray-600 transition-colors duration-500 ease-in-out hover:!bg-cornsilk-600 hover:text-gray-900 dark:text-indigo-200 dark:hover:!bg-indigo-700 dark:hover:text-indigo-100"
              >
                <HiOutlinePencilSquare className="mr-2 h-4 w-4" />
                Rename
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={onArchive}
                className="cursor-pointer text-gray-600 transition-colors duration-500 ease-in-out hover:!bg-cornsilk-600 hover:text-gray-900 dark:text-indigo-200 dark:hover:!bg-indigo-700 dark:hover:text-indigo-100"
              >
                <HiOutlineTrash className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
              <DropdownMenuSeparator className="border border-cornsilk-700 dark:border-indigo-700" />
              <div className="p-2 text-xs text-gray-600 dark:text-indigo-200">
                Last edited by{" "}
                <span className="font-medium">{user?.fullName}</span>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <div
            role="button"
            onClick={onCreate}
            className="ml-auto h-full opacity-0 group-hover:opacity-100"
          >
            <FiPlus className="h-4 w-4 text-gray-500 dark:text-indigo-500" />
          </div>
        </div>
      )}
    </div>
  );
};

Item.Skeleton = function ItemSkeleton({ level }: { level?: number }) {
  return (
    <div
      className="flex gap-x-2 py-1"
      style={{ paddingLeft: level ? `${level * 12 + 24}px` : "12px" }}
    >
      <Skeleton className="h4 w-4" />
      <Skeleton className="h4 w-[30%]" />
    </div>
  );
};
