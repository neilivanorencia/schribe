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

  return <div className="mx-auto max-w-7xl py-16"></div>;
};
