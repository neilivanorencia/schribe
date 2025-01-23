"use client";

import { useMutation, useQuery } from "convex/react";
import { usePathname } from "next/navigation";
import React, { ElementRef, useEffect, useRef, useState } from "react";
import { FiChevronsLeft } from "react-icons/fi";
import { HiSearch } from "react-icons/hi";
import { IoMenu, IoSettingsOutline } from "react-icons/io5";
import { PiFilePlus } from "react-icons/pi";
import { toast } from "sonner";
import { useMediaQuery } from "usehooks-ts";

import { Item } from "@/app/(main)/_components/item";
import { UserItem } from "@/app/(main)/_components/user-item";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";

export const NavigationBar = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const documents = useQuery(api.documents.get);
  const create = useMutation(api.documents.create);

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

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
        sidebarRef.current.style.width = "85%";
        navbarRef.current.style.setProperty("width", "15%");
        navbarRef.current.style.setProperty("left", "85%");
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

  const handleCreate = () => {
    const promise = create({ title: "New Note" });

    toast.promise(promise, {
      loading: "Creating note...",
      success: () => "Note successfully created!",
      error: () => "Error creating note",
    });
  };

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[99999] bg-black/50 transition-opacity",
          isCollapsed ? "hidden" : "block",
          !isMobile && "hidden",
        )}
        onClick={collapse}
      />
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar relative z-[99999] flex h-full flex-col bg-[#ddd4b5] dark:bg-[#312e81]",
          isResetting && "transition-all duration-300 ease-in-out",
          isMobile ? "fixed w-0 max-w-[85%]" : "w-60",
          "overflow-y-auto",
        )}
      >
        <div
          onClick={collapse}
          role="button"
          className={cn(
            "absolute right-4 top-6 h-6 w-6 text-cornsilk-800 opacity-0 transition hover:text-cornsilk-900 group-hover/sidebar:opacity-100 dark:text-indigo-600 dark:hover:text-indigo-500",
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
            onClick={() => {}}
          />
          <Item
            label="Settings"
            icon={<IoSettingsOutline />}
            onClick={() => {}}
          />
          <Item onClick={handleCreate} label="New Note" icon={<PiFilePlus />} />
        </div>
        <div className="mt-4">
          {documents?.map((document) => (
            <p
              className="text-gray-700 dark:text-indigo-300"
              key={document._id}
            >
              {document.title}
            </p>
          ))}
        </div>
        {!isMobile && (
          <div
            onMouseDown={handleMouseDown}
            onClick={resetWidth}
            className="absolute right-0 top-0 h-full w-1 cursor-ew-resize bg-cornsilk-700 opacity-0 transition group-hover/sidebar:opacity-100 dark:bg-indigo-800"
          />
        )}
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[99999]",
          isResetting && "transition-all duration-300 ease-in-out",
          isMobile ? "left-0 w-full" : "left-60 w-[calc(100%-240px)]",
        )}
      >
        <nav className="w-full px-3 py-2">
          {isCollapsed && (
            <IoMenu
              onClick={resetWidth}
              role="button"
              className="h-6 w-6 text-cornsilk-700 transition hover:text-cornsilk-800 dark:text-indigo-700 dark:hover:text-indigo-600"
            />
          )}
        </nav>
      </div>
    </>
  );
};
