"use client";

import { useEffect, useState } from "react";

export const Footer = ({ currentYear }: { currentYear: number }) => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <footer></footer>;
};
