"use client";

import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

import { Cover } from "@/components/cover";
import { Toolbar } from "@/components/toolbar";
import WordCounter from "@/components/word-counter";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
  const Editor = useMemo(
    () => dynamic(() => import("@/components/editor"), { ssr: false }),
    [],
  );
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  const update = useMutation(api.documents.update);

  const onChange = (content: string) => {
    update({
      id: params.documentId,
      content,
    });
  };

  if (document === undefined) return <div></div>;

  if (document === null) return <div>Note not found</div>;

  return (
    <div className="pb-40">
      <Cover url={document.coverImage} />
      <div>
        <Toolbar initialData={document} />
        <Editor onChange={onChange} initialContent={document.content} />
        <WordCounter content={document.content} />
      </div>
    </div>
  );
};

export default DocumentIdPage;
