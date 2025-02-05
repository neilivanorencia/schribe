"use client";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

import { useTheme } from "next-themes";

import styles from "@/components/editor.module.css";
import {
  BlockNoteSchema,
  BlockSchemaFromSpecs,
  defaultBlockSpecs,
} from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";

import type { PartialBlock } from "@blocknote/core";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const { resolvedTheme } = useTheme();

  const lightTheme = {
    colors: {
      editor: {
        text: "hsl(215, 28%, 17%)",
        background: "transparent",
      },
      menu: {
        text: "hsl(217, 19%, 27%)",
        background: "hsl(47, 71%, 88%)",
      },
      tooltip: {
        text: "hsl(217, 19%, 27%)",
        background: "hsl(47, 72%, 89%)",
      },
      hovered: {
        text: "hsl(217, 19%, 27%)",
        background: "hsl(47, 37%, 79%)",
      },
      selected: {
        text: "hsl(0, 0%, 100%)",
        background: "hsl(47, 24%, 70%)",
      },
      disabled: {
        text: "hsl(217, 19%, 27%)",
        background: "hsl(47, 74%, 94%)",
      },
      shadow: "none",
      border: "hsl(47, 24%, 70%)",
      sideMenu: "hsl(218, 11%, 65%)",
    },
    borderRadius: 8,
    fontFamily: "Inter, sans-serif",
  };

  const darkTheme = {
    colors: {
      editor: {
        text: "hsl(222, 100%, 95%)",
        background: "transparent",
      },
      menu: {
        text: "hsl(226, 100%, 94%)",
        background: "hsl(244, 55%, 41%)",
      },
      tooltip: {
        text: "hsl(226, 100%, 94%)",
        background: "hsl(243, 75%, 59%)",
      },
      hovered: {
        text: "hsl(226, 100%, 94%)",
        background: "hsl(245, 58%, 51%)",
      },
      selected: {
        text: "hsl(226, 100%, 94%)",
        background: "hsl(239, 84%, 67%)",
      },
      disabled: {
        text: "hsl(230, 94%, 82%)",
        background: "hsl(245, 58%, 51%)",
      },
      shadow: "none",
      border: "hsl(243, 75%, 59%)",
      sideMenu: "hsl(234, 88%, 68%)",
    },
    borderRadius: 8,
    fontFamily: "Inter, sans-serif",
  };

  const customTheme = {
    light: lightTheme,
    dark: darkTheme,
  };

  const themeKey: "light" | "dark" = (resolvedTheme || "light") as
    | "light"
    | "dark";

  const customBlockSpecs = Object.fromEntries(
    Object.entries(defaultBlockSpecs).filter(
      ([key]) =>
        key !== "codeBlock" &&
        key !== "table" &&
        key !== "audio" &&
        key !== "file" &&
        key !== "video" &&
        key !== "emoji"
    ),
  );

  const schema = BlockNoteSchema.create({
    blockSpecs: customBlockSpecs,
  });

  type CustomBlockSchemaType = BlockSchemaFromSpecs<typeof customBlockSpecs>;

  const editor = useCreateBlockNote({
    schema,
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock<CustomBlockSchemaType>[])
      : undefined,
  });

  return (
    <div className={styles.customBlocknoteEditor}>
      <BlockNoteView
        editor={editor}
        editable={editable}
        theme={customTheme[themeKey]}
        onChange={() => {
          onChange(JSON.stringify(editor.document, null, 2));
        }}
      />
      <style>
        {`
          .${styles.customBlocknoteEditor} {
             --bn-scrollbar-thumb: ${customTheme[themeKey].colors.selected.background};
          }
        `}
      </style>
    </div>
  );
};

export default Editor;