"use client";

import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { HiOutlineTrash } from "react-icons/hi2";

interface MenuProps {
  documentId: Id<"documents">;
}

export const Menu = ({ documentId }: MenuProps) => {
  const router = useRouter();
  const { user } = useUser();

  const archive = useMutation(api.documents.archive);

  const onArchive = () => {
    const promise = archive({ id: documentId });
    toast.promise(promise, {
      loading: "Moving to trash...",
      success: "Note moved to trash successfully!",
      error: "Error moving note to trash",
    });
    router.push("/documents");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className="bg-transparent hover:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <MoreHorizontal className="h-4 w-4 text-gray-700 dark:text-indigo-300" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60 border-2 border-cornsilk-600 bg-cornsilk-500 p-2 shadow-none outline-none transition duration-500 ease-in-out dark:border-indigo-700 dark:bg-indigo-800"
        align="end"
        forceMount
      >
        <DropdownMenuItem
          onClick={onArchive}
          className="cursor-pointer text-gray-600 transition-colors duration-500 ease-in-out hover:!bg-cornsilk-600 hover:text-gray-900 dark:text-indigo-200 dark:hover:!bg-indigo-700 dark:hover:text-indigo-100"
        >
          <HiOutlineTrash className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
        <DropdownMenuSeparator className="border border-cornsilk-700 dark:border-indigo-700" />
        <div className="p-2 text-xs text-gray-600 dark:text-indigo-200">
          Last edited by <span className="font-medium">{user?.fullName}</span>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
