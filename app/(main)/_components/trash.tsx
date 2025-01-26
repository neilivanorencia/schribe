"use client";

import { useMutation, useQuery } from "convex/react";
import { useTheme } from "next-themes";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdRestore } from "react-icons/md";
import { BeatLoader } from "react-spinners";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { IoTrashBinOutline } from "react-icons/io5";
import { ConfirmDeleteModal } from "@/components/modals/confirm-delete";
import { ConfirmRestoreModal } from "@/components/modals/confirm-restore";

export const Trash = () => {
  const router = useRouter();
  const params = useParams();
  const documents = useQuery(api.documents.getTrash);
  const restore = useMutation(api.documents.restore);
  const remove = useMutation(api.documents.remove);

  const [search, setSearch] = useState("");

  const filteredDocuments = documents?.filter((document) => {
    return document.title.toLowerCase().includes(search.toLowerCase());
  });

  const onClick = (documentId: string) => {
    router.push(`/documents/${documentId}`);
  };

  const onRestore = (documentId: Id<"documents">) => {
    const promise = restore({ id: documentId });
    toast.promise(promise, {
      loading: "Restoring note...",
      success: () => "Note successfully restored!",
      error: () => "Error restoring note",
    });
  };

  const onRemove = (documentId: Id<"documents">) => {
    const promise = remove({ id: documentId });
    toast.promise(promise, {
      loading: "Deleting note...",
      success: () => "Note successfully deleted!",
      error: () => "Error deleting note",
    });

    if (params.documentId === documentId) {
      router.push("/documents");
    }
  };

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

  if (documents === undefined) {
    return (
      <div className="flex h-full items-center justify-center p-4">
        <BeatLoader color={spinnerColor} size={8} />
      </div>
    );
  }

  return (
    <div className="text-sm">
      <div className="flex items-center gap-x-2 p-2">
        <div className="rounded-md border-2 border-cornsilk-600 p-1.5 dark:border-indigo-700">
          <HiOutlineSearch className="h-4 w-4 text-cornsilk-700 dark:text-indigo-400" />
        </div>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-7 border-2 border-cornsilk-600 bg-transparent px-2 text-gray-600 outline-none placeholder:text-cornsilk-700 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 dark:border-indigo-700 dark:text-indigo-200 dark:placeholder:text-indigo-400"
          placeholder="Filter by page title"
        />
      </div>
      <div className="mt-2 px-1 pb-2">
        <p className="hidden pb-2 text-center text-gray-500 last:block dark:text-indigo-200">
          No notes found
        </p>
        {filteredDocuments?.map((document) => (
          <div
            key={document._id}
            role="button"
            onClick={() => onClick(document._id)}
            className="flex w-full items-center justify-between rounded-sm hover:bg-cornsilk-600 dark:hover:bg-indigo-700"
          >
            <span className="truncate pl-2 text-gray-500 dark:text-indigo-300">
              {document.title}
            </span>
            <div className="flex items-center">
              <ConfirmRestoreModal
                onConfirm={() => onRestore(document._id)}
                onClick={(event: React.MouseEvent) => event.stopPropagation()}
              >
                <div role="button" className="p-1">
                  <MdRestore className="h-5 w-5 text-cornsilk-800 dark:text-indigo-500" />
                </div>
              </ConfirmRestoreModal>
              <ConfirmDeleteModal onConfirm={() => onRemove(document._id)}>
                <div role="button" className="p-1">
                  <IoTrashBinOutline className="h-5 w-5 text-cornsilk-800 dark:text-indigo-500" />
                </div>
              </ConfirmDeleteModal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
