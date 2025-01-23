"use client";

import { ChevronsLeftRight } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutButton, useUser } from "@clerk/clerk-react";

export const UserItem = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn || !user) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="m-2 cursor-pointer rounded-lg bg-cornsilk-500 dark:bg-indigo-800"
        >
          <div className="flex w-full items-center p-3 text-sm">
            <div className="flex max-w-[150px] items-center gap-x-2">
              <Avatar className="h-6 w-6 border-2 border-cornsilk-800 dark:border-indigo-700">
                <AvatarImage src={user.imageUrl} />
              </Avatar>
              <span className="line-clamp-1 text-start text-gray-800 dark:text-gray-100">
                {user.fullName}
              </span>
            </div>
            <ChevronsLeftRight className="ml-2 h-4 w-4 rotate-90 text-gray-800 dark:text-gray-100" />
          </div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-80 rounded-lg border-0 bg-cornsilk-500 p-2 shadow-none outline-none transition duration-500 ease-in-out dark:border-none dark:bg-indigo-800 md:border-2 md:border-cornsilk-600"
        align="start"
        forceMount
      >
        <div className="flex flex-col space-y-3">
          <p className="px-1 text-xs text-gray-800 dark:text-gray-300">
            {user.emailAddresses[0].emailAddress}
          </p>
          <div className="flex items-center gap-x-2 pb-2">
            <Avatar className="h-12 w-12 rounded-md border-2 border-cornsilk-700 dark:border-indigo-700">
              <AvatarImage src={user.imageUrl} />
            </Avatar>
            <div className="space-y-[2px]">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {user.fullName}
              </p>
              <p className="text-xs text-gray-800 dark:text-gray-300">
                Username: {user.username ?? "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div className="py-2">
          {" "}
          <DropdownMenuSeparator className="border-2 border-cornsilk-700 dark:border-indigo-700" />
        </div>

        <div className="px-2 py-2 text-xs text-gray-800 dark:text-gray-300">
          {" "}
          <p>Last active: {new Date().toLocaleDateString()}</p>
          <p>
            Member since:{" "}
            {user.createdAt
              ? new Date(user.createdAt).toLocaleDateString()
              : "N/A"}
          </p>
        </div>

        <DropdownMenuItem className="mt-1 focus:bg-transparent">
          {" "}
          <SignOutButton>
            <div className="w-full cursor-pointer rounded-md bg-cornsilk-600 px-3 py-1.5 text-center text-sm text-gray-800 transition-colors duration-500 ease-in-out hover:bg-cornsilk-700 hover:text-gray-900 dark:bg-indigo-700 dark:text-gray-200 dark:hover:bg-indigo-600 dark:hover:text-gray-100">
              Log Out
            </div>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
