const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-cornsilk-200 via-cornsilk-400 to-cornsilk-600 dark:from-indigo-950 dark:via-violet-950 dark:to-blue-950">
      {children}
    </div>
  );
};

export default PublicLayout;
