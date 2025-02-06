"use client";

import { useMutation } from "convex/react";
import { X } from "lucide-react";
import { ElementRef, useRef, useState } from "react";
import { IoImagesOutline, IoPersonAddOutline } from "react-icons/io5";
import TextAreaAutoSize from "react-textarea-autosize";

import { EmojiPickerComponent } from "@/components/emoji-picker";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useCoverImage } from "@/hooks/use-cover-image";

interface ToolbarProps {
  initialData: Doc<"documents">;
  preview?: boolean;
}

export const Toolbar = ({ initialData, preview }: ToolbarProps) => {
  const inputRef = useRef<ElementRef<"textarea">>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialData.title);

  const update = useMutation(api.documents.update);
  const removeIcon = useMutation(api.documents.removeIcon);

  const enableInput = () => {
    if (preview) return;

    setIsEditing(true);
    setTimeout(() => {
      setValue(initialData.title);
      inputRef.current?.focus();
    }, 0);
  };

  const disableInput = () => setIsEditing(false);

  const onInput = (value: string) => {
    setValue(value);
    update({
      id: initialData._id,
      title: value || "Untitled",
    });
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      disableInput();
    }
  };

  const onIconSelect = (icon: string) => {
    update({
      id: initialData._id,
      icon,
    });
  };

  const onRemoveIcon = () => {
    removeIcon({
      id: initialData._id,
    });
  };

  const coverImage = useCoverImage();

  return (
    <div
      className={`group relative pl-14 ${initialData.isArchived ? "mt-10" : ""}`}
    >
        {!!initialData.icon && !preview && (
          <div className="group/icon flex items-center gap-x-2 pt-6">
            <EmojiPickerComponent onChange={onIconSelect}>
              <p className="text-5xl transition hover:opacity-75 sm:text-6xl">
                {initialData.icon}
              </p>
            </EmojiPickerComponent>
            <Button
              className="rounded-xl border-2 border-cornsilk-700 bg-transparent text-xs opacity-0 transition duration-300 ease-in-out hover:bg-cornsilk-600 group-hover/icon:opacity-100 dark:border-indigo-700 dark:bg-transparent dark:hover:bg-indigo-800"
              size="icon"
              onClick={onRemoveIcon}
            >
              <X className="h-4 w-4 text-gray-500 dark:text-indigo-400" />
            </Button>
          </div>
        )}
        {!!initialData.icon && preview && (
          <p className="pt-6 text-6xl">{initialData.icon}</p>
        )}
        <div className="flex items-center gap-x-2 pb-3 pt-6 opacity-100 group-hover:opacity-100">
          {!initialData.icon && !preview && (
            <EmojiPickerComponent asChild onChange={onIconSelect}>
              <Button
                className="border-2 border-cornsilk-700 bg-transparent text-sm font-normal text-gray-600 transition duration-500 ease-in-out hover:bg-cornsilk-600 dark:border-indigo-600 dark:text-indigo-300 dark:hover:bg-indigo-800"
                size="sm"
              >
                <IoPersonAddOutline className="h-4 w-4" /> Add icon
              </Button>
            </EmojiPickerComponent>
          )}
          {!initialData.coverImage && !preview && (
            <Button
              onClick={coverImage.onOpen}
              className="border-2 border-cornsilk-700 bg-transparent text-sm font-normal text-gray-600 transition duration-500 ease-in-out hover:bg-cornsilk-600 dark:border-indigo-600 dark:text-indigo-300 dark:hover:bg-indigo-800"
              size="sm"
            >
              <IoImagesOutline className="h-4 w-4" /> Add cover
            </Button>
          )}
        </div>
        {isEditing && !preview ? (
          <TextAreaAutoSize
            ref={inputRef}
            onBlur={disableInput}
            onKeyDown={onKeyDown}
            value={value}
            onChange={(e) => onInput(e.target.value)}
            className="resize-none break-words bg-transparent text-3xl font-semibold text-slate-700 outline-none dark:text-indigo-300 sm:text-4xl"
          />
        ) : (
          <div
            onClick={enableInput}
            className="break-words pb-3 text-3xl font-semibold text-slate-700 outline-none dark:text-indigo-300 sm:text-4xl"
          >
            {initialData.title}
          </div>
        )}
    </div>
  );
};
