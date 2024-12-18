import Blogs from "@/components/blog/Blogs";
import { ContentHeader } from "@/components/ContentHeader";
export default function BlogsPage() {
  return (
    <main className="flex flex-col items-center justify-center px-6 lg:px-10 lg:py-6  pb-24">
      <div className="flex flex-col gap-8 max-w-full lg:max-w-[66.6%]">
        <ContentHeader initialText="Blog" finalText="ブログ" />
        <div className="flex flex-col gap-20 ">
          <Blogs loading="eager" />
        </div>
      </div>
    </main>
  );
}
