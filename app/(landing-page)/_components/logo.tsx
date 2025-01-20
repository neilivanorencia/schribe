import { Besley } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";

const besley = Besley({ subsets: ["latin"] });

export const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        src="/icon-light.svg"
        width={50}
        height={50}
        alt="Schribe Logo"
        className="dark:hidden"
      />
      <Image
        src="/icon-dark.svg"
        width={50}
        height={50}
        alt="Schribe Logo"
        className="hidden dark:block"
      />
      <p
        className={cn(
          "text-xl font-semibold uppercase text-gray-800 dark:text-white",
          besley.className,
        )}
      >
        Schribe
      </p>
    </div>
  );
};
