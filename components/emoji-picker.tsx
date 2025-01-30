"use client";

import EmojiPicker, { Theme, EmojiStyle } from "emoji-picker-react";
import { useTheme } from "next-themes";
import styles from "@/components/emoji-picker.module.css";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface EmojiPickerProps {
  onChange: (icon: string) => void;
  children: React.ReactNode;
  asChild?: boolean;
}

export const EmojiPickerComponent = ({
  onChange,
  children,
  asChild = false,
}: EmojiPickerProps) => {
  const { resolvedTheme } = useTheme();
  const currentTheme = (resolvedTheme || "light") as keyof typeof themeMap;

  const themeMap = {
    dark: Theme.DARK,
    light: Theme.LIGHT,
  };

  const theme = themeMap[currentTheme];

  return (
    <Popover>
      <PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>
      <PopoverContent
        align="start"
        className={`${styles.customPicker} w-full rounded-md border-none p-0 shadow-none`}
      >
        <EmojiPicker
          height="100%"
          width="100%"
          theme={theme}
          emojiStyle={EmojiStyle.GOOGLE}
          onEmojiClick={(data) => onChange(data.emoji)}
        />
      </PopoverContent>
    </Popover>
  );
};
