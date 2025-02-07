"use client";

import { useMutation } from "convex/react";
import { useTheme } from "next-themes";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { ElementRef, useEffect, useRef, useState } from "react";
import { FiChevronsLeft } from "react-icons/fi";
import { HiSearch } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi2";
import { IoMenu, IoSettingsOutline } from "react-icons/io5";
import { PiFilePlus } from "react-icons/pi";
import { toast } from "sonner";
import { useMediaQuery } from "usehooks-ts";

import { DocumentList } from "@/app/(main)/_components/document-list";
import { Item } from "@/app/(main)/_components/item";
import { Navigation } from "@/app/(main)/_components/navigation";
import { Trash } from "@/app/(main)/_components/trash";
import { UserItem } from "@/app/(main)/_components/user-item";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { api } from "@/convex/_generated/api";
import { useSearch } from "@/hooks/use-search";
import { useSettings } from "@/hooks/use-settings";
import { cn } from "@/lib/utils";

export const NavigationBar = () => {
  const router = useRouter();
  const search = useSearch();
  const settings = useSettings();
  const params = useParams();
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const create = useMutation(api.documents.create);

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [pathname, isMobile]);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;

    let newWidth = event.clientX;
    if (newWidth < 240) newWidth = 240;
    if (newWidth > 440) newWidth = 440;

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - ${newWidth}px)`,
      );
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      if (isMobile) {
        document.body.style.overflow = "hidden";
        sidebarRef.current.style.width = "90%";
      } else {
        document.body.style.overflow = "";
        sidebarRef.current.style.width = "240px";
        navbarRef.current.style.setProperty("width", "calc(100% - 240px)");
        navbarRef.current.style.setProperty("left", "240px");
      }

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      document.body.style.overflow = "";
      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleCreate = () => {
    const promise = create({ title: "New Note" }).then((documentId) =>
      router.push(`/documents/${documentId}`),
    );

    toast.promise(promise, {
      loading: "Creating note...",
      success: () => "Note successfully created!",
      error: () => "Error creating note",
    });
  };

  return (
    <>
      <style>
        {`
          .scrollbar-custom {
            scrollbar-gutter: stable;
          }
          .scrollbar-custom::-webkit-scrollbar {
            width: 3px;
          }
          .scrollbar-custom::-webkit-scrollbar-thumb {
            background: transparent;
            transition: opacity 0.2s;
          }
          .scrollbar-custom:hover::-webkit-scrollbar-thumb {
            background: ${currentTheme === "dark" ? "#4f46e5" : "#c5bda0"};
          }
          .scrollbar-custom::-webkit-scrollbar-track {
            background: transparent;
          }
        `}
      </style>
      <div
        className={cn(
          "scrollbar-custom fixed inset-0 z-[99999] bg-black/50 transition-opacity",
          isCollapsed ? "hidden" : "block",
          !isMobile && "hidden",
        )}
        onClick={collapse}
      />
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar relative z-[99999] flex h-full flex-col bg-[#ddd4b5] py-2 dark:bg-[#312e81]",
          isResetting && "transition-all duration-300 ease-in-out",
          isMobile ? "fixed w-0 max-w-[85%]" : "w-60",
          "scrollbar-custom overflow-y-auto",
        )}
      >
        <div
          onClick={collapse}
          role="button"
          className={cn(
            "absolute right-4 top-8 h-6 w-6 text-cornsilk-800 opacity-0 transition hover:text-cornsilk-900 group-hover/sidebar:opacity-100 dark:text-indigo-600 dark:hover:text-indigo-500",
            isMobile && "opacity-100",
          )}
        >
          <FiChevronsLeft className="h-6 w-6 animate-bounce" />
        </div>
        <div>
          <UserItem />
          <Item
            label="Search"
            icon={<HiSearch />}
            isSearch
            onClick={search.onOpen}
          />
          <Item
            label="Settings"
            icon={<IoSettingsOutline />}
            onClick={settings.onOpen}
          />
          <Item onClick={handleCreate} label="Add Note" icon={<PiFilePlus />} />
        </div>
        <div className="mt-4">
          <DocumentList level={1} />
          <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger className="mt-4 w-full">
              <Item label="Trash" icon={<HiOutlineTrash />} />
            </PopoverTrigger>
            <PopoverContent
              className="z-[99999] mx-1 my-2 w-72 border-2 border-cornsilk-600 bg-cornsilk-500 p-0 shadow-none outline-none dark:border-indigo-700 dark:bg-indigo-800"
              side={isMobile ? "bottom" : "right"}
              align={isMobile ? "start" : "center"}
              collisionPadding={isMobile ? 16 : 0}
              style={
                isMobile ? { marginLeft: "4px", width: "calc(100% - 8px)" } : {}
              }
            >
              <Trash onClose={() => setIsPopoverOpen(false)} />
            </PopoverContent>
          </Popover>
        </div>
        {!isMobile && (
          <div
            onMouseDown={handleMouseDown}
            onClick={resetWidth}
            className="absolute right-0 top-0 h-full w-4 cursor-ew-resize bg-transparent opacity-0 dark:bg-transparent"
          />
        )}
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[99998]",
          isResetting && "transition-all duration-300 ease-in-out",
          isMobile ? "left-0 w-full" : "left-60 w-[calc(100%-240px)]",
        )}
      >
        {!!params.documentId ? (
          <Navigation isCollapsed={isCollapsed} onResetWidth={resetWidth} />
        ) : (
          <nav className="w-full px-3 py-2">
            {isCollapsed && (
              <IoMenu
                onClick={resetWidth}
                role="button"
                className="h-6 w-6 text-cornsilk-700 transition hover:text-cornsilk-800 dark:text-indigo-700 dark:hover:text-indigo-600"
              />
            )}
          </nav>
        )}
      </div>
    </>
  );
};
