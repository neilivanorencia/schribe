"use client";

import { Discover } from "@/app/(landing-page)/_components/discover";
import { Example } from "@/app/(landing-page)/_components/example";
import { Features } from "@/app/(landing-page)/_components/features";
import { Footer } from "@/app/(landing-page)/_components/footer";
import { Header } from "@/app/(landing-page)/_components/header";
import { Hero } from "@/app/(landing-page)/_components/hero";
import { NavigationBar } from "@/app/(landing-page)/_components/navigation-bar";

const LandingPageLayout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cornsilk-200 via-cornsilk-400 to-cornsilk-600 dark:from-indigo-950 dark:via-violet-950 dark:to-blue-950">
      <div>
        <NavigationBar />
        <div className="pt-20">
          <section>
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-center">
                <Header />
                <Hero />
              </div>
            </div>
          </section>

          <section
            id="scroll-section"
            className="bg-gradient-to-br from-cornsilk-50 via-cornsilk-200 to-cornsilk-400 dark:from-[#24205A] dark:via-[#38137C] dark:to-[#1F3270]"
          >
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <Discover />
              <Features />
            </div>
          </section>

          <section className="mx-auto max-w-7xl p-2 sm:p-4 lg:p-6">
            <Example />
            <Footer currentYear={currentYear} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingPageLayout;
