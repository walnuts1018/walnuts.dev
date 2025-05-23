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
      <main className="flex min-h-[100dvh] w-full justify-center">
        <div className="flex h-full w-full flex-col items-center justify-start gap-8 px-6 md:w-10/12 md:px-0 lg:flex-row lg:items-start lg:justify-center">
          <div className="w-min-[24rem] lg:w-min-[20rem] 2xl:w-min-[24rem]">
            <Profile />
          </div>
          <div className="flex w-full flex-col gap-20 pb-24">
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
              <div className="flex w-full justify-end pr-16 lg:pr-24">
                <Link
                  href="/blogs"
                  className="font-ZenMaruGothic text-md flex cursor-pointer items-center justify-center gap-1 font-bold text-gray-500 transition-all duration-200 hover:scale-110 hover:text-gray-700 active:scale-100"
                >
                  もっと見る
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <QR className="fixed right-0 bottom-0 z-10 p-4" />
    </>
  );
}
