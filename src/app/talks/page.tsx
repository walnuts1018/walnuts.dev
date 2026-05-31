import { ContentHeader } from "@/components/ContentHeader";
import Talks from "@/components/talk/Talks";

export default function TalksPage() {
  return (
    <main className="flex flex-col items-center justify-center px-6 pb-24 lg:px-10 lg:py-6">
      <div className="flex max-w-full flex-col gap-8 lg:max-w-[66.6%]">
        <ContentHeader initialText="Talks" finalText="登壇" />
        <div className="flex flex-col gap-20">
          <Talks loading="eager" />
        </div>
      </div>
    </main>
  );
}
