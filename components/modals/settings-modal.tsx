"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useSettings } from "@/hooks/use-settings";

export const SettingsModal = () => {
  const settings = useSettings();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent className="border-none bg-cornsilk-500 outline-none dark:bg-indigo-800">
        <DialogHeader className="border-b border-cornsilk-700 pb-3 text-gray-700 dark:border-indigo-700 dark:text-indigo-300">
          <h2 className="text-xl font-medium">Settings</h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label className="text-gray-700 dark:text-indigo-300">
              Appearance
            </Label>
            <span className="text-sm text-gray-600 dark:text-indigo-400">
              Choose between light and dark mode
            </span>
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};
