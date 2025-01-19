import { Besley } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const besley = Besley({ subsets: ["latin"] });

export const Logo = () => {
  return (
    <div className="hidden items-center gap-x-2 md:flex">
      <Image src="/icon-light.svg" width={50} height={50} alt="Schribe Logo" />
      <p
        className={cn(
          "text-xl font-semibold uppercase text-gray-800",
          besley.className,
        )}
      >
        Schribe
      </p>
    </div>
  );
};
