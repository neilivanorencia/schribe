"use client";

import { useQuery } from "convex/react";

import { Cover } from "@/components/cover";
import { Toolbar } from "@/components/toolbar";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  if (document === undefined) return <div></div>;

  if (document === null) return <div>Note not found</div>;

  return (
    <div className="pb-40">
      <Cover url={document.coverImage} />
      <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl">
        <Toolbar initialData={document} />
      </div>
    </div>
  );
};

export default DocumentIdPage;
