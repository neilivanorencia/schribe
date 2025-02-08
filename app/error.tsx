"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Error = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4 bg-gradient-to-br from-cornsilk-200 via-cornsilk-400 to-cornsilk-600 dark:from-indigo-950 dark:via-violet-950 dark:to-blue-950">
      <Image
        src="/error-light.svg"
        height="400"
        width="400"
        alt="Error Image"
        className="dark:hidden"
      />
      <Image
        src="/error-dark.svg"
        height="500"
        width="500"
        alt="Error Image"
        className="hidden dark:block"
      />
      <h2 className="text-xl text-gray-800 dark:text-indigo-300">
        Something went wrong
      </h2>
      <Button className="rounded-lg border-2 border-gray-700 bg-gray-700 text-sm text-cornsilk-100 transition duration-300 ease-in-out hover:bg-transparent hover:text-gray-700 dark:border-violet-300 dark:bg-violet-300 dark:text-gray-800 dark:hover:bg-transparent dark:hover:text-violet-300 sm:text-base" asChild>
        <Link href="/documents">Go back</Link>
      </Button>
    </div>
  );
};

export default Error;
