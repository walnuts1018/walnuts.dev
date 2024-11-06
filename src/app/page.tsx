import { Suspense } from "react";
import Cards from "./components/Cards/Cards";
import { ContentHeader } from "./components/ContentHeader";
import HatenaBlog from "./components/HatenaBlog/HatenaBlog";
import { Profile } from "./components/Profile";
import QR from "./components/QR";
import ExperienceTimeline from "./components/timeline/timeline";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-start lg:items-start lg:justify-center px-6 lg:px-10 lg:py-6 flex-col lg:flex-row gap-8">
        <div className="w-96">
          <Profile />
        </div>
        <div className="flex flex-col gap-20 w-full lg:w-[calc(95%-24rem)] 2xl:w-[calc(85%-24rem)] pb-24">
          <div className="flex flex-col gap-8">
            <ContentHeader initialText="Projects" finalText="作品" />
            <Cards className="" />
          </div>
          <div className="flex flex-col gap-8">
            <ContentHeader
              initialText="Education & Work Experience"
              finalText="学歴・職歴"
            />
            <ExperienceTimeline />
          </div>
          <div className="flex flex-col gap-8">
            <ContentHeader initialText="Blog" finalText="ブログ" />
            <Suspense fallback={<h2>Loading...</h2>}>
              <HatenaBlog />
            </Suspense>
          </div>
        </div>
      </main>
      <QR className="fixed bottom-0 right-0 z-10 p-4" />
    </>
  );
}
