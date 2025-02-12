import { Besley, Inter } from "next/font/google";
import Image from "next/image";

const besley = Besley({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const Features = () => {
  return (
    <div className="mx-auto max-w-6xl pt-16">
      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
          <div className="relative flex w-full flex-1 justify-center">
            <div className="relative aspect-square w-full max-w-[500px]">
              <div className="dark:hidden">
                <Image
                  src="/toggle-light.svg"
                  alt="Dual Theme"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="hidden dark:block">
                <Image
                  src="/toggle-dark.svg"
                  alt="Dual Theme"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center text-center sm:px-4 sm:text-left">
            <h3
              className={`${besley.className} mb-3 text-2xl font-semibold text-gray-800 dark:text-indigo-300 md:text-4xl`}
            >
              Dual Theme
            </h3>
            <p
              className={`${inter.className} text-sm text-gray-700 dark:text-indigo-100 md:text-xl`}
            >
              Choose between a light cornsilk and a dark indigo theme for
              preferred theme. This design caters to individual aesthetic
              preferences and ensures optimal readability in diverse viewing
              environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
