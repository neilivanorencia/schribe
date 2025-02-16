"use client";

import { useMutation } from "convex/react";
import React, { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";

interface TitleProps {
  initialData: Doc<"documents">;
  showIcon?: boolean;
}

export const Title = ({ initialData, showIcon = true }: TitleProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const update = useMutation(api.documents.update);

  const [title, setTitle] = useState(initialData.title || "New Note");
  const [isEditing, setIsEditing] = useState(false);

  const enableInput = () => {
    setTitle(initialData.title);
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.setSelectionRange(0, inputRef.current.value.length);
    }, 0);
  };

  const disableInput = () => {
    setIsEditing(false);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    update({
      id: initialData._id,
      title: event.target.value || "Untitled",
    });
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      disableInput();
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      {!!initialData.icon && showIcon && <p>{initialData.icon}</p>}
      {isEditing ? (
        <Input
          ref={inputRef}
          onClick={enableInput}
          onBlur={disableInput}
          onKeyDown={onKeyDown}
          onChange={onChange}
          value={title}
          className={cn(
            "h-9 max-w-[160px] border-none bg-transparent px-4 text-gray-800 outline-none transition-colors duration-500 ease-in-out placeholder:text-gray-600 hover:bg-transparent dark:bg-transparent dark:text-gray-200 dark:placeholder:text-indigo-400 hover:dark:bg-transparent sm:max-w-xs md:max-w-sm",
            "border-none ring-0",
            "focus:outline-none focus:ring-0",
            "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-cornsilk-700 focus-visible:ring-offset-0",
          )}
        />
      ) : (
        <Button
          onClick={enableInput}
          className={cn(
            "h-9 max-w-[160px] border-none bg-transparent px-4 font-normal text-gray-800 outline-none transition-colors duration-500 ease-in-out hover:bg-transparent dark:bg-transparent dark:text-gray-200 hover:dark:bg-transparent sm:max-w-xs md:max-w-sm",
            "border-none ring-0",
            "focus:outline-none focus:ring-0",
            "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-cornsilk-700 focus-visible:ring-offset-0",
          )}
        >
          <span className="truncate">{initialData.title}</span>
        </Button>
      )}
    </div>
  );
};
