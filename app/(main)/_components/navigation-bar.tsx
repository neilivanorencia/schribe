"use client";

export const NavigationBar = () => {
  return (
    <>
      <aside className="group/sidebar relative z-[9999] flex h-full w-60 flex-col overflow-y-auto bg-[#ddd4b5] dark:bg-[#312e81]">
        <div></div>
        <div className="mt-4"></div>
        <div className="absolute right-0 top-0 h-full w-1 cursor-ew-resize opacity-0 transition group-hover/sidebar:opacity-100 bg-cornsilk-700 dark:bg-indigo-800" />
      </aside>
    </>
  );
};
