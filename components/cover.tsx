"use client";

import { useMutation } from "convex/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { BsImages } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useCoverImage } from "@/hooks/use-cover-image";
import { useEdgeStore } from "@/lib/edgestore";
import { cn } from "@/lib/utils";

interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

export const Cover = ({ url, preview }: CoverImageProps) => {
  const { edgestore } = useEdgeStore();
  const params = useParams();
  const coverImage = useCoverImage();
  const removeCoverImage = useMutation(api.documents.removeCoverImage);

  const onRemove = async () => {
    if (url) {
      await edgestore.publicFiles.delete({ url: url });
    }
    removeCoverImage({
      id: params.documentId as Id<"documents">,
    });
  };

  return (
    <div className={cn("group relative h-[60vh] w-full", !url && "h-[12vh]")}>
      {!!url && (
        <Image
          src={url}
          fill
          alt="Cover Image"
          className="object-cover [mask-image:linear-gradient(to_bottom,white,transparent)]"
        />
      )}
      {url && !preview && (
        <div className="absolute bottom-5 right-5 flex items-center gap-x-2 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
          <Button
            onClick={() => coverImage.onReplace(url)}
            className="border-2 border-gray-500 bg-transparent text-xs font-normal text-gray-600 transition duration-500 ease-in-out hover:bg-cornsilk-600 dark:border-indigo-600 dark:text-indigo-300 dark:hover:bg-indigo-800 md:text-sm"
            size="sm"
          >
            <BsImages className="h-4 w-4" /> Change cover
          </Button>
          <Button
            onClick={onRemove}
            className="border-2 border-gray-500 bg-transparent text-xs font-normal text-gray-600 transition duration-500 ease-in-out hover:bg-cornsilk-600 dark:border-indigo-600 dark:text-indigo-300 dark:hover:bg-indigo-800 md:text-sm"
            size="sm"
          >
            <IoImageOutline className="h-4 w-4" /> Remove cover
          </Button>
        </div>
      )}
    </div>
  );
};
