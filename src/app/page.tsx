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
import Blogs from "@/components/blog/Blogs";
import { person } from "@/lib/jsonld";

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
      <main className="min-h-[100dvh] w-full flex justify-center">
        <div className="w-full md:w-10/12 h-full px-6 md:px-0 flex items-center justify-start lg:items-start lg:justify-center flex-col lg:flex-row gap-8">
          <div className="w-min-[24rem] lg:w-min-[20rem] 2xl:w-min-[24rem]">
            <Profile />
          </div>
          <div className="flex flex-col gap-20 w-full pb-24">
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
                <Blogs
                  className="lg:justify-start"
                  maxItems={6}
                  loading="lazy"
                />
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
        </div>
      </main>
      <QR className="fixed bottom-0 right-0 z-10 p-4" />
    </>
  );
}
