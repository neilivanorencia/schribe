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

        <div className="flex flex-col items-center gap-6 sm:flex-row-reverse sm:items-center">
          <div className="relative flex w-full flex-1 justify-center">
            <div className="relative aspect-square w-full max-w-[500px]">
              <div className="dark:hidden">
                <Image
                  src="/blocks-light.svg"
                  alt="Block-Based"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="hidden dark:block">
                <Image
                  src="/blocks-dark.svg"
                  alt="Block-Based"
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
              Block-Based
            </h3>
            <p
              className={`${inter.className} text-sm text-gray-700 dark:text-indigo-100 md:text-xl`}
            >
              Notes are structured into independent modules, breaking down
              content into manageable segments. This modular design enables
              users to manipulate granular content elements with precision.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="relative flex w-full flex-1 justify-center">
            <div className="relative aspect-square w-full max-w-[500px]">
              <div className="dark:hidden">
                <Image
                  src="/text-format-light.svg"
                  alt="Rich Formatting"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="hidden dark:block">
                <Image
                  src="/text-format-dark.svg"
                  alt="Rich Formatting"
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
              Rich Formatting
            </h3>
            <p
              className={`${inter.className} text-sm text-gray-700 dark:text-indigo-100 md:text-xl`}
            >
              Enhance notes with a full suite of text formatting options. Users
              can utilize bolding, italics, headings, lists, and various other
              formatting tools to emphasize key information and organize notes.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 sm:flex-row-reverse sm:items-center">
          <div className="relative flex w-full flex-1 justify-center">
            <div className="relative aspect-square w-full max-w-[500px]">
              <div className="dark:hidden">
                <Image
                  src="/documents-light.svg"
                  alt="Document Nesting"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="hidden dark:block">
                <Image
                  src="/documents-dark.svg"
                  alt="Document Nesting"
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
              Document Nesting
            </h3>
            <p
              className={`${inter.className} text-sm text-gray-700 dark:text-indigo-100 md:text-xl`}
            >
              Organize information with hierarchical notes and subtopics with
              nested structures, organizing complex information into clear,
              logical hierarchies for efficient navigation through related
              ideas.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="relative flex w-full flex-1 justify-center">
            <div className="relative aspect-square w-full max-w-[500px]">
              <div className="dark:hidden">
                <Image
                  src="/notebook-light.svg"
                  alt="Archive Notes"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="hidden dark:block">
                <Image
                  src="/notebook-dark.svg"
                  alt="Archive Notes"
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
              Archive Notes
            </h3>
            <p
              className={`${inter.className} text-sm text-gray-700 dark:text-indigo-100 md:text-xl`}
            >
              Incorporates an archive functionality to provide a safeguard for
              note deletion. Upon initial deletion, notes are moved to a trash
              archive, granting users a recovery period to reinstate notes if
              needed.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 sm:flex-row-reverse sm:items-center">
          <div className="relative flex w-full flex-1 justify-center">
            <div className="relative aspect-square w-full max-w-[500px]">
              <div className="dark:hidden">
                <Image
                  src="/sharing-light.svg"
                  alt="Share Notes Publicly"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="hidden dark:block">
                <Image
                  src="/sharing-dark.svg"
                  alt="Share Notes Publicly"
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
              Share Notes
            </h3>
            <p
              className={`${inter.className} text-sm text-gray-700 dark:text-indigo-100 md:text-xl`}
            >
              Enables users to share notes publicly through shareable links.
              This allows for easy distribution of information to make notes
              accessible to a wider audience without requiring recipients to
              have an account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
