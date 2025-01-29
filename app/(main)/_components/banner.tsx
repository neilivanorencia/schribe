"use client";

import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { ConfirmDeleteModal } from "@/components/modals/confirm-delete";
import { ConfirmRestoreModal } from "@/components/modals/confirm-restore";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface BannerProps {
  documentId: Id<"documents">;
}

export const Banner = ({ documentId }: BannerProps) => {
  const router = useRouter();
  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);

  const onRemove = () => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: "Deleting note...",
      success: () => "Note successfully deleted!",
      error: () => "Error deleting note",
    });

    router.push("/documents");
  };

  const onRestore = () => {
    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: "Restoring note...",
      success: () => "Note successfully restored!",
      error: () => "Error restoring note",
    });
  };

  return (
    <div className="flex w-full items-center justify-center gap-x-2 bg-cornsilk-600/60 p-1.5 text-center text-xs text-gray-700 dark:bg-indigo-700 dark:text-indigo-100 sm:text-sm">
      <p>This page is in the trash</p>
      <ConfirmRestoreModal onConfirm={onRestore}>
        <Button
          size="sm"
          className="h-auto border-2 border-cornsilk-700 bg-cornsilk-700 px-2 py-1 text-xs font-normal text-gray-700 transition duration-500 ease-in-out hover:border-cornsilk-700/50 hover:bg-cornsilk-700/50 dark:border-indigo-400 dark:bg-indigo-400 dark:text-indigo-900 dark:hover:border-indigo-300 dark:hover:bg-indigo-300 sm:text-sm"
        >
          Restore note
        </Button>
      </ConfirmRestoreModal>
      <ConfirmDeleteModal onConfirm={onRemove}>
        <Button
          size="sm"
          className="h-auto border-2 border-cornsilk-700 bg-transparent px-2 py-1 text-xs font-normal text-gray-700 transition duration-500 ease-in-out hover:bg-cornsilk-600 dark:border-indigo-400 dark:text-indigo-200 dark:hover:bg-indigo-500 sm:text-sm"
        >
          Delete forever
        </Button>
      </ConfirmDeleteModal>
    </div>
  );
};
