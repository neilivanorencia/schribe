import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface WordCounterProps {
  content: string | undefined;
}

interface Block {
  content?: Array<{
    type: string;
    text?: string;
  }>;
  children?: Block[];
}

const WordCounter = ({ content }: WordCounterProps) => {
  const [counts, setCounts] = useState({ words: 0, characters: 0 });

  useEffect(() => {
    if (!content) {
      setCounts({ words: 0, characters: 0 });
      return;
    }

    try {
      const parsed = JSON.parse(content);
      let text = "";

      const extractText = (blocks: Block[]) => {
        blocks.forEach((block) => {
          if (block.content) {
            block.content.forEach((item) => {
              if (item.type === "text" && item.text) {
                text += item.text + " ";
              }
            });
          }
          if (block.children) {
            extractText(block.children);
          }
        });
      };

      extractText(parsed);

      const cleanText = text.trim();
      const words = cleanText ? cleanText.split(/\s+/).length : 0;
      const characters = cleanText.replace(/\s/g, "").length;

      setCounts({ words, characters });
    } catch {
      setCounts({ words: 0, characters: 0 });
    }
  }, [content]);

  return (
    <div
      className={`${inter.className} fixed bottom-4 left-1/2 -translate-x-1/2 transform`}
    >
      <div className="w-[300px] rounded-lg border border-cornsilk-700 bg-cornsilk-700/50 px-6 py-2 backdrop-blur-md dark:border-indigo-800 dark:bg-indigo-800/50">
        <div className="text-center text-sm text-gray-800 dark:text-indigo-300">
          {counts.words} words • {counts.characters} characters
        </div>
      </div>
    </div>
  );
};

export default WordCounter;
