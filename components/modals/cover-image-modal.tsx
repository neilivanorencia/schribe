"use client";

import { useMutation } from "convex/react";
import { useParams } from "next/navigation";
import { useState } from "react";

import { SingleImageDropzone } from "@/components/single-image-dropdown";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useCoverImage } from "@/hooks/use-cover-image";
import { useEdgeStore } from "@/lib/edgestore";

export const CoverImageModal = () => {
  const [file, setFile] = useState<File>();
  const [submitting, setSubmitting] = useState(false);
  const params = useParams();
  const update = useMutation(api.documents.update);

  const coverImage = useCoverImage();
  const { edgestore } = useEdgeStore();

  const onClose = () => {
    setFile(undefined);
    setSubmitting(false);
    coverImage.onClose();
  };

  const onChange = async (file?: File) => {
    if (file) {
      setFile(file);
      setSubmitting(true);

      const res = await edgestore.publicFiles.upload({
        file,
      });

      await update({
        id: params.documentId as Id<"documents">,
        coverImage: res.url,
      });

      onClose();
    }
  };

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent className="border-none bg-cornsilk-500 outline-none dark:bg-indigo-800">
        <DialogHeader className="border-b border-cornsilk-700 pb-3 text-gray-700 dark:border-indigo-700 dark:text-indigo-300">
          <h2 className="text-center text-xl font-medium">Cover Image</h2>
        </DialogHeader>
        <div>
          <SingleImageDropzone
            className="w-full outline-none"
            value={file}
            onChange={onChange}
            disabled={submitting}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
