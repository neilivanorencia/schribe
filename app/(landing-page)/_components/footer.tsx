"use client";

import { useEffect, useState } from "react";
import { BsArrowUpSquare } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { VscGithub } from "react-icons/vsc";

export const Footer = ({ currentYear }: { currentYear: number }) => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <footer>
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-700 dark:text-indigo-400 md:text-base">
            Copyright &copy; {currentYear} Neil Ivan Orencia. All rights
            reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/neilivanorencia/schribe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors duration-500 ease-in-out hover:text-gray-500 dark:text-indigo-500 dark:hover:text-indigo-400"
          >
            <VscGithub className="h-5 w-5 md:h-8 md:w-8" />
          </a>

          <a
            href="mailto:neilivanorencia@protonmail.com"
            className="text-gray-600 transition-colors duration-500 ease-in-out hover:text-gray-500 dark:text-indigo-500 dark:hover:text-indigo-400"
          >
            <GoMail className="h-5 w-5 md:h-8 md:w-8" />
          </a>

          <button
            onClick={scrollToTop}
            className={`text-gray-600 transition-opacity duration-500 ease-in-out dark:text-indigo-500 ${
              showScroll ? "opacity-100" : "opacity-0"
            } hover:text-gray-500 dark:hover:text-indigo-400`}
            aria-label="Scroll to top"
          >
            <BsArrowUpSquare className="h-5 w-5 md:h-8 md:w-8" />
          </button>
        </div>
      </div>
    </footer>
  );
};
