"use client";

import { useMutation } from "convex/react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useOrigin } from "@/hooks/use-origin";

interface PublishProps {
  initialData: Doc<"documents">;
}

export const Publish = ({ initialData }: PublishProps) => {
  const origin = useOrigin();
  const update = useMutation(api.documents.update);

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const url = `${origin}/preview/${initialData._id}`;

  const onPublish = () => {
    setIsSubmitting(true);

    const promise = update({
      id: initialData._id,
      isPublished: true,
    }).finally(() => setIsSubmitting(false));

    toast.promise(promise, {
      loading: "Publishing note...",
      success: () => "Note successfully published!",
      error: () => "Error publishing note",
    });
  };

  const onUnpublish = () => {
    setIsSubmitting(true);

    const promise = update({
      id: initialData._id,
      isPublished: false,
    }).finally(() => setIsSubmitting(false));

    toast.promise(promise, {
      loading: "Unpublishing note...",
      success: () => "Successfully removed note from publication!",
      error: () => "Error unpublishing note",
    });
  };

  const onCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);

    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          className="h-auto border-none bg-cornsilk-600 px-3 py-1.5 text-xs font-normal text-gray-700 transition duration-500 ease-in-out hover:bg-cornsilk-700 dark:bg-indigo-600 dark:text-indigo-200 dark:hover:bg-indigo-500 sm:text-sm"
        >
          Publish
          {initialData.isPublished && (
            <MdOutlinePublishedWithChanges className="h-4 w-4 text-gray-600 dark:text-indigo-300" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-72 border-2 border-cornsilk-600 bg-cornsilk-500 shadow-none outline-none dark:border-indigo-700 dark:bg-indigo-800"
        align="end"
        forceMount
      >
        {initialData.isPublished ? (
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <SlGlobe className="mb-2 h-6 w-6 text-gray-500 dark:text-indigo-500" />
              <p className="mb-2 text-sm font-normal text-gray-600 dark:text-indigo-200">
                This note is published online
              </p>
            </div>
            <div className="flex items-center">
              <input
                className="h-8 flex-1 truncate rounded-l-md bg-cornsilk-600 px-2 text-xs dark:bg-indigo-500"
                value={url}
                disabled
              />
              <Button
                onClick={onCopy}
                disabled={copied}
                className="h-8 rounded-l-none border-2 border-none bg-cornsilk-700 text-gray-700 transition duration-500 ease-in-out dark:bg-indigo-600 dark:text-indigo-300"
              >
                {copied ? (
                  <FaCheck className="h-4 w-4" />
                ) : (
                  <IoCopyOutline className="h-4 w-4" />
                )}
              </Button>
            </div>
            <Button
              disabled={isSubmitting}
              onClick={onUnpublish}
              className="w-full border-2 border-cornsilk-600 bg-transparent px-2 py-1 text-xs font-normal text-gray-700 transition duration-500 ease-in-out hover:border-cornsilk-600 hover:bg-cornsilk-600 dark:border-indigo-700 dark:text-indigo-400 dark:hover:bg-indigo-700 sm:text-sm"
              size="sm"
            >
              Unpublish
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <LuUpload className="mb-2 h-8 w-8 text-cornsilk-950 dark:text-indigo-500" />
            <p className="mb-2 text-sm font-normal text-gray-600 dark:text-indigo-200">
              Publish this note to the web
            </p>
            <span className="mb-4 text-xs text-gray-500 dark:text-indigo-400">
              Share this note
            </span>
            <Button
              disabled={isSubmitting}
              onClick={onPublish}
              className="w-full border-2 border-cornsilk-600 bg-transparent px-2 py-1 text-xs font-normal text-gray-700 transition duration-500 ease-in-out hover:border-cornsilk-600 hover:bg-cornsilk-600 dark:border-indigo-700 dark:text-indigo-400 dark:hover:bg-indigo-700 sm:text-sm"
              size="sm"
            >
              Publish
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
