import { ContentHeader } from "@/components/ContentHeader";
import Talks from "@/components/talk/Talks";

export default function TalksPage() {
  return (
    <main className="flex flex-col items-center justify-center pb-24 lg:py-6">
      <div className="flex w-10/12 max-w-[88rem] flex-col gap-8">
        <ContentHeader initialText="Talks" finalText="登壇" />
        <div className="flex flex-col gap-20">
          <Talks loading="eager" />
        </div>
      </div>
    </main>
  );
}
