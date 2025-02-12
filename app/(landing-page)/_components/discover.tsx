import { Besley, Inter } from "next/font/google";
import { FaFolderOpen, FaGithub, FaSync } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";

const besley = Besley({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const Discover = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
      <div className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-b from-azure-100 to-azure-50 p-[2px] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-azure-100/20 dark:from-violet-800 dark:to-violet-900 dark:hover:shadow-violet-900/20 md:rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-azure-200/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-violet-700/30" />
        <div className="flex h-full overflow-hidden rounded-2xl md:rounded-3xl">
          <div className="flex w-1/3 items-center justify-center bg-azure-100 p-4 dark:bg-violet-800">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-azure-200 transition-all duration-300 group-hover:bg-azure-300 dark:bg-violet-700 dark:group-hover:bg-violet-600 md:h-24 md:w-24">
              <FaGithub className="h-8 w-8 text-azure-400 transition-transform duration-300 group-hover:scale-110 dark:text-violet-300 md:h-16 md:w-16" />
            </div>
          </div>
          <div className="w-2/3 bg-azure-50 p-4 dark:bg-violet-900 md:p-6">
            <h3
              className={`${besley.className} mb-2 text-lg font-medium leading-5 text-azure-500 dark:text-violet-300 md:mb-3 md:text-2xl md:leading-9 lg:text-3xl`}
            >
              Open Source and Free of Charge
            </h3>
            <p
              className={`${inter.className} text-xs font-normal leading-[1.25] text-azure-900 dark:text-slate-200 md:text-base`}
            >
              Committed to accessibility and transparency as a free and
              open-source application. Benefit from note-taking tool without any
              cost, and with the assurance of a community-driven project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
