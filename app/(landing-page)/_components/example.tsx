import Image from "next/image";
import { useState } from "react";
import { GoTasklist } from "react-icons/go";
import {
  IoBookOutline,
  IoDocumentOutline,
  IoFastFoodOutline,
  IoGridOutline,
} from "react-icons/io5";

type ImageKey = "journal" | "documents" | "tasks" | "recipes" | "more";

export const Example = () => {
  const [activeImage, setActiveImage] = useState<ImageKey>("journal");
  const [fade, setFade] = useState(false);

  const imageSources = {
    journal: { light: "/journal-light.png", dark: "/journal-dark.png" },
    documents: {
      light: "/documentation-light.png",
      dark: "/documentation-dark.png",
    },
    tasks: { light: "/tasks-light.png", dark: "/tasks-dark.png" },
    recipes: { light: "/recipe-light.png", dark: "/recipe-dark.png" },
    more: { light: "/more-light.png", dark: "/more-dark.png" },
  } as const;

  const handleImageChange = (image: ImageKey) => {
    setFade(true);
    setTimeout(() => {
      setActiveImage(image);
      setFade(false);
    }, 300);
  };

  const getButtonClasses = (key: ImageKey) => {
    const baseClasses =
      "flex items-center justify-center gap-1 rounded-lg p-2 md:p-3 transition-colors";

    if (key === "more") {
      return `${baseClasses} ${
        activeImage === key
          ? "border-2 border-gray-600 bg-gray-400 text-gray-600 dark:border-indigo-700 dark:text-indigo-400 dark:bg-indigo-800"
          : "border-2 border-gray-600 bg-transparent text-gray-600 dark:border-indigo-700 dark:text-indigo-400"
      }`;
    }

    const isActive = activeImage === key;

    const lightStyles = {
      journal: isActive
        ? "border-2 border-azure-400 bg-azure-50 text-azure-700"
        : "border-2 border-azure-400 bg-transparent text-azure-700",
      documents: isActive
        ? "border-2 border-mustard-600 bg-mustard-50 text-mustard-900"
        : "border-2 border-mustard-600 bg-transparent text-mustard-900",
      tasks: isActive
        ? "border-2 border-sienna-400 bg-sienna-50 text-sienna-700"
        : "border-2 border-sienna-400 bg-transparent text-sienna-700",
      recipes: isActive
        ? "border-2 border-pistachio-600 bg-pistachio-50 text-pistachio-900"
        : "border-2 border-pistachio-600 bg-transparent text-pistachio-900",
    };

    const darkStyles = {
      journal: isActive
        ? "dark:border-violet-800 dark:bg-violet-900 dark:text-violet-400"
        : "dark:border-violet-800 dark:bg-transparent dark:text-violet-400",
      documents: isActive
        ? "dark:border-purple-800 dark:bg-purple-900 dark:text-purple-400"
        : "dark:border-purple-800 dark:bg-transparent dark:text-purple-400",
      tasks: isActive
        ? "dark:border-blue-800 dark:bg-blue-900 dark:text-blue-400"
        : "dark:border-blue-800 dark:bg-transparent dark:text-blue-400",
      recipes: isActive
        ? "dark:border-sky-800 dark:bg-sky-900 dark:text-sky-400"
        : "dark:border-sky-800 dark:bg-transparent dark:text-sky-400",
    };

    return `${baseClasses} ${lightStyles[key]} ${darkStyles[key]}`;
  };

  return (
    <div className="mx-auto max-w-7xl py-16">
      <div className="grid grid-cols-5 gap-2 md:gap-4">
        {(
          ["journal", "documents", "tasks", "recipes", "more"] as ImageKey[]
        ).map((key) => (
          <button
            key={key}
            onClick={() => handleImageChange(key)}
            className={getButtonClasses(key)}
          >
            {
              {
                journal: <IoBookOutline className="h-5 w-5 md:h-6 md:w-6" />,
                documents: (
                  <IoDocumentOutline className="h-5 w-5 md:h-6 md:w-6" />
                ),
                tasks: <GoTasklist className="h-5 w-5 md:h-6 md:w-6" />,
                recipes: (
                  <IoFastFoodOutline className="h-5 w-5 md:h-6 md:w-6" />
                ),
                more: <IoGridOutline className="h-5 w-5 md:h-6 md:w-6" />,
              }[key]
            }
            <span className="hidden md:inline md:text-base">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
