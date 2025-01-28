"use client";

import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { IoMenu } from "react-icons/io5";

import { Title } from "@/app/(main)/_components/title";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface NavigationProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

export const Navigation = ({ isCollapsed, onResetWidth }: NavigationProps) => {
  const params = useParams();

  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<"documents">,
  });

  if (document === null) {
    return null;
  }

  return (
    <>
      <nav className="flex w-full items-center px-3 py-6">
        {isCollapsed && (
          <IoMenu
            onClick={onResetWidth}
            role="button"
            className="h-6 w-6 text-cornsilk-700 transition hover:text-cornsilk-800 dark:text-indigo-700 dark:hover:text-indigo-600"
          />
        )}
        <div className="flex w-full items-center justify-between">
          {document && <Title initialData={document} />}
        </div>
      </nav>
    </>
  );
};
