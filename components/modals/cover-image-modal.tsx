"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useCoverImage } from "@/hooks/use-cover-image";

export const CoverImageModal = () => {
  const coverImage = useCoverImage();

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent className="border-none bg-cornsilk-500 outline-none dark:bg-indigo-800">
        <DialogHeader className="border-b border-cornsilk-700 pb-3 text-gray-700 dark:border-indigo-700 dark:text-indigo-300">
          <h2 className="text-center text-xl font-medium">Cover Image</h2>
        </DialogHeader>
        <div></div>
      </DialogContent>
    </Dialog>
  );
};
