import Blogs from "@/components/blog/Blogs";
import { person } from "@/lib/jsonld";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { FaArrowRight } from "react-icons/fa";
import { JsonLd } from "react-schemaorg";
import { WebSite } from "schema-dts";
import Cards from "../components/Cards/Cards";
import { ContentHeader } from "../components/ContentHeader";
import { Profile } from "../components/Profile";
import QR from "../components/QR";
import ExperienceTimeline from "../components/timeline/timeline";

const title = "Walnuts (@walnuts1018)";
const description = "Walnuts (@walnuts1018) です。";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function Home() {
  return (
    <>
      <JsonLd<WebSite>
        item={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Walnuts.dev",
          url: "https://walnuts.dev",
          inLanguage: "jp",
          publisher: person,
          headline: title,
          description: description,
        }}
      />
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
              <Blogs className="lg:justify-start" maxItems={6} />
            </Suspense>
            <div className="flex justify-end w-full pr-16 lg:pr-24">
              <Link
                href="/blogs"
                className="flex items-center justify-center font-ZenMaruGothic font-bold text-md text-gray-500 hover:text-gray-700 hover:scale-110 duration-200 transition-all cursor-pointer active:scale-100 gap-1"
              >
                もっと見る
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <QR className="fixed bottom-0 right-0 z-10 p-4" />
    </>
  );
}
