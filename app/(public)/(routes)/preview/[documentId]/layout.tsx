"use client";

import { useQuery } from "convex/react";
import { notFound } from "next/navigation";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface PreviewLayoutProps {
  children: React.ReactNode;
  params: {
    documentId: Id<"documents">;
  };
}

const PreviewLayout = ({ children, params }: PreviewLayoutProps) => {
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  if (document === undefined) {
    return null;
  }

  if (document === null) {
    notFound();
  }

  return (
    <>
      <head>
        <title>{`${document.title} — Schribe Preview`}</title>
      </head>
      {children}
    </>
  );
};

export default PreviewLayout;
