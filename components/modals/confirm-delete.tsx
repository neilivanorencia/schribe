"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React from "react";

interface ConfirmDeleteModalProps {
  children: React.ReactNode;
  onConfirm: () => void;
}

export const ConfirmDeleteModal = ({
  children,
  onConfirm,
}: ConfirmDeleteModalProps) => {
  const handleConfirm = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    onConfirm();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger onClick={(event) => event.stopPropagation()} asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent className="rounded-md border-none bg-cornsilk-300 outline-none dark:bg-indigo-900">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-gray-700 dark:text-indigo-300">
            Are you sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-500 dark:text-indigo-400">
            This action will permanently delete this note and it is irreversible.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="border-none bg-cornsilk-600 text-cornsilk-900 transition-all duration-500 ease-in-out hover:bg-cornsilk-700 hover:text-cornsilk-950 dark:bg-indigo-600 dark:text-indigo-300 dark:hover:bg-indigo-700"
            onClick={(event) => event.stopPropagation()}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="border-2 border-cornsilk-700 bg-transparent text-cornsilk-900 transition-all duration-500 ease-in-out hover:bg-cornsilk-600 dark:border-indigo-600 dark:text-indigo-300 dark:hover:bg-indigo-800"
            onClick={handleConfirm}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
