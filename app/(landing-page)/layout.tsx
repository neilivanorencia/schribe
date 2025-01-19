import { Header } from "@/app/(landing-page)/_components/header";
import { Hero } from "@/app/(landing-page)/_components/hero";
import { NavigationBar } from "@/app/(landing-page)/_components/navigation-bar";

const LandingPageLayout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cornsilk-200 via-cornsilk-400 to-cornsilk-600">
      <div>
        <NavigationBar />
        <div className="pt-20">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-center">
              <Header />
              <Hero />
            </div>
            <footer className="mt-8 text-center text-sm text-gray-800 md:text-base">
              Copyright &copy; {currentYear} Neil Ivan Orencia. All rights
              reserved.
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageLayout;
