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

  return <div className="mx-auto max-w-7xl py-16"></div>;
};
