"use client";

import { useQuery } from "convex/react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import {
  PiFileText,
  PiFolderOpen,
  PiFolderOpenFill,
  PiFolderSimple,
  PiFolderSimpleFill,
} from "react-icons/pi";

import { Item } from "@/app/(main)/_components/item";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";

interface DocumentListProps {
  parentDocumentId?: Id<"documents">;
  level?: number;
  data?: Doc<"documents">[];
}

export const DocumentList = ({
  parentDocumentId,
  level = 0,
}: DocumentListProps) => {
  const params = useParams();
  const router = useRouter();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const onExpand = (documentId: string) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [documentId]: !prevExpanded[documentId],
    }));
  };

  const documents = useQuery(api.documents.getSidebar, {
    parentDocument: parentDocumentId,
  });

  const totalDocuments = useQuery(
    api.documents.getTotalCount,
    level === 0 ? {} : undefined,
  );

  const onRedirect = (documentId: string) => {
    router.push(`/documents/${documentId}`);
  };

  if (documents === undefined) {
    return (
      <>
        <Item.Skeleton level={level} />
        {level === 0 && (
          <>
            <Item.Skeleton level={level} />
            <Item.Skeleton level={level} />
          </>
        )}
      </>
    );
  }

  return (
    <>
      {level === 0 && documents.length === 0 && (totalDocuments ?? 0) > 0 && (
        <p
          className={cn("my-1 text-sm text-gray-600 dark:text-indigo-400")}
          style={{ paddingLeft: level ? `${level * 12 + 24}px` : undefined }}
        >
          No pages inside
        </p>
      )}
      {documents.map((document) => {
        const isActive = params.documentId === document._id;
        const isExpanded = expanded[document._id];
        const showFilled = isActive || isExpanded;

        return (
          <div key={document._id}>
            <Item
              id={document._id}
              onClick={() => onRedirect(document._id)}
              label={document.title}
              icon={<PiFileText className="h-4 w-4" />}
              documentIcon={
                document.hasChildren ? (
                  level === 0 ? (
                    showFilled ? (
                      <PiFolderSimpleFill className="h-4 w-4" />
                    ) : (
                      <PiFolderSimple className="h-4 w-4" />
                    )
                  ) : showFilled ? (
                    <PiFolderOpenFill className="h-4 w-4" />
                  ) : (
                    <PiFolderOpen className="h-4 w-4" />
                  )
                ) : undefined
              }
              active={isActive}
              level={level}
              onExpand={() => onExpand(document._id)}
              expanded={isExpanded}
              hasChildren={document.hasChildren}
            />
            {isExpanded && (
              <DocumentList parentDocumentId={document._id} level={level + 1} />
            )}
          </div>
        );
      })}
    </>
  );
};
