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

      <div className="group relative h-full cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-b from-mustard-100 to-mustard-50 p-[2px] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-mustard-100/20 dark:from-indigo-800 dark:to-indigo-900 dark:hover:shadow-indigo-900/20 md:rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-mustard-200/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-indigo-700/30" />
        <div className="flex h-full overflow-hidden rounded-2xl md:rounded-3xl">
          <div className="flex w-1/3 items-center justify-center bg-mustard-100 p-4 dark:bg-indigo-800">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mustard-300 transition-all duration-300 group-hover:bg-mustard-400 dark:bg-indigo-700 dark:group-hover:bg-indigo-600 md:h-24 md:w-24">
              <FaSync className="h-8 w-8 text-mustard-600 transition-transform duration-300 group-hover:rotate-180 dark:text-indigo-300 md:h-12 md:w-12" />
            </div>
          </div>
          <div className="w-2/3 bg-mustard-50 p-4 dark:bg-indigo-900 md:p-6">
            <h3
              className={`${besley.className} mb-2 text-lg font-medium leading-5 text-mustard-700 dark:text-indigo-300 md:mb-3 md:text-2xl md:leading-9 lg:text-3xl`}
            >
              Effortless Sync and Organization
            </h3>
            <p
              className={`${inter.className} text-xs font-normal leading-[1.25] text-mustard-900 dark:text-slate-200 md:text-base`}
            >
              Characterized by minimalist design and advanced organizational
              capabilities. Its architecture facilitates content creation and
              manipulation through a block-based editing system of notes.
            </p>
          </div>
        </div>
      </div>

      <div className="group relative h-full cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-b from-sienna-100 to-sienna-50 p-[2px] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sienna-100/20 dark:from-blue-800 dark:to-blue-900 dark:hover:shadow-blue-900/20 md:rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-sienna-200/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-700/30" />
        <div className="flex h-full overflow-hidden rounded-2xl md:rounded-3xl">
          <div className="flex w-1/3 items-center justify-center bg-sienna-100 p-4 dark:bg-blue-800">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sienna-200 transition-all duration-300 group-hover:bg-sienna-300 dark:bg-blue-700 dark:group-hover:bg-blue-600 md:h-24 md:w-24">
              <FaFolderOpen className="h-8 w-8 text-sienna-400 transition-transform duration-300 group-hover:-translate-y-1 dark:text-blue-300 md:h-12 md:w-12" />
            </div>
          </div>
          <div className="w-2/3 bg-sienna-50 p-4 dark:bg-blue-900 md:p-6">
            <h3
              className={`${besley.className} mb-2 text-lg font-medium leading-5 text-sienna-500 dark:text-blue-300 md:mb-3 md:text-2xl md:leading-9 lg:text-3xl`}
            >
              Adaptable for Productivity
            </h3>
            <p
              className={`${inter.className} text-xs font-normal leading-[1.25] text-sienna-800 dark:text-slate-200 md:text-base`}
            >
              Offers a flexible architecture that conforms to diverse user
              workflows. Its structural design allows for note organization that
              aligns with individual thought processes to enhance productivity.
            </p>
          </div>
        </div>
      </div>

      <div className="group relative h-full cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-b from-pistachio-100 to-pistachio-50 p-[2px] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pistachio-100/20 dark:from-sky-800 dark:to-sky-900 dark:hover:shadow-sky-900/20 md:rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-pistachio-200/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-sky-700/30" />
        <div className="flex h-full overflow-hidden rounded-2xl md:rounded-3xl">
          <div className="flex w-1/3 items-center justify-center bg-pistachio-100 p-4 dark:bg-sky-800">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pistachio-400 transition-all duration-300 group-hover:bg-pistachio-500 dark:bg-sky-700 dark:group-hover:bg-sky-600 md:h-24 md:w-24">
              <IoShareSocialSharp className="h-8 w-8 text-pistachio-600 transition-transform duration-300 group-hover:scale-125 dark:text-sky-300 md:h-12 md:w-12" />
            </div>
          </div>
          <div className="w-2/3 bg-pistachio-50 p-4 dark:bg-sky-900 md:p-6">
            <h3
              className={`${besley.className} mb-2 text-lg font-medium leading-5 text-pistachio-700 dark:text-sky-300 md:mb-3 md:text-2xl md:leading-9 lg:text-3xl`}
            >
              Public Sharing Capability
            </h3>
            <p
              className={`${inter.className} text-xs font-normal leading-[1.25] text-pistachio-800 dark:text-slate-200 md:text-base`}
            >
              Extends beyond individual note-taking through integrated
              information sharing capabilities. Public links facilitate the
              dissemination of notes enabling broader communication of ideas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
