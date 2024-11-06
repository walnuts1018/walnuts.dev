import Cards from "./components/Cards/Cards";
import { Profile } from "./components/Profile";
import QR from "./components/QR";
import SwapText from "./components/SwapText";
import ExperienceTimeline from "./components/timeline/timeline";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-start lg:items-start lg:justify-center px-6 lg:px-10 lg:py-6 flex-col lg:flex-row gap-8">
        <div className="w-96">
          <Profile />
        </div>
        <div className="flex flex-col gap-20 w-full lg:w-[calc(95%-24rem)] 2xl:w-[calc(85%-24rem)]">
          <div className="flex flex-col gap-8">
            <SwapText
              textClassName="cursor-default text-4xl text-center lg:text-left"
              initialText="Projects"
              initialTextClassName="font-Nunito"
              finalText="作品"
              finalTextClassName="font-ZenMaruGothic font-semibold"
              disableClick={true}
            />
            <Cards className="" />
          </div>
          <div className="flex flex-col gap-8">
            <SwapText
              textClassName="cursor-default text-4xl text-center lg:text-left"
              initialText="Education & Work Experience"
              initialTextClassName="font-Nunito"
              finalText="学歴・職歴"
              finalTextClassName="font-ZenMaruGothic font-semibold"
              disableClick={true}
            />
            <ExperienceTimeline />
          </div>
        </div>
      </main>
      <QR className="fixed bottom-0 right-0 z-10 p-4" />
    </>
  );
}
