"use client";

import { useMutation } from "convex/react";
import Image from "next/image";
import { MdNoteAdd } from "react-icons/md";
import { SlPencil } from "react-icons/sl";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({
      title: "New Note",
    });

    toast.promise(promise, {
      loading: "Creating note...",
      success: () => "Note created!",
      error: () => "Error creating note",
    });
  };

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <Image
        src="/notes-light.svg"
        height="400"
        width="400"
        alt="Notes Image"
        className="dark:hidden"
      />
      <Image
        src="/notes-dark.svg"
        height="400"
        width="400"
        alt="Notes Image"
        className="hidden dark:block"
      />
      <div className="flex items-center gap-x-2">
        <h2 className="text-xl font-normal text-gray-800 dark:text-indigo-300">
          Welcome to Schribe! {user?.firstName}
        </h2>
        <SlPencil className="h-5 w-5 text-gray-800 dark:text-indigo-300" />
      </div>
      <Button
        onClick={onCreate}
        className="border-2 border-gray-700 bg-gray-700 text-cornsilk-100 transition duration-300 ease-in-out hover:bg-transparent hover:text-gray-700 dark:border-violet-300 dark:bg-violet-300 dark:text-gray-800 dark:hover:bg-transparent dark:hover:text-violet-300"
      >
        <MdNoteAdd className="animate-pulse" />
        Create note
      </Button>
    </div>
  );
};

export default DocumentsPage;
