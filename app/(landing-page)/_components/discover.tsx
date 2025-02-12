import { Besley, Inter } from "next/font/google";
import { FaFolderOpen, FaGithub, FaSync } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";

const besley = Besley({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const Discover = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"></div>
  );
};
