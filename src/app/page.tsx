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
import Talks from "@/components/talk/Talks";
import { person } from "@/lib/jsonld";
import "./home.css";

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
      <main className="home-main flex min-h-dvh justify-center">
        <div className="home-shell">
          <div className="home-profile">
            <Profile />
          </div>
          <div className="home-content flex w-full flex-col gap-20 pb-24">
            <div className="home-section">
              <ContentHeader initialText="Projects" finalText="作品" />
              <Cards className="card-grid--home" />
            </div>
            <div className="home-section">
              <ContentHeader
                initialText="Education & Work Experience"
                finalText="学歴・職歴"
              />
              <ExperienceTimeline />
            </div>
            <div className="home-section">
              <ContentHeader initialText="Blog" finalText="ブログ" />
              <Suspense fallback={<h2>Loading...</h2>}>
                <Blogs
                  className="card-grid--home"
                  maxItems={6}
                  loading="lazy"
                />
              </Suspense>
              <div className="home-more-link flex w-full justify-end">
                <Link
                  href="/blogs"
                  className="font-ZenMaruGothic text-md flex cursor-pointer items-center justify-center gap-1 font-bold text-gray-500 transition-all duration-200 hover:scale-110 hover:text-gray-700 active:scale-100"
                >
                  もっと見る
                  <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="home-section">
              <ContentHeader initialText="Talks" finalText="登壇" />
              <Suspense fallback={<h2>Loading...</h2>}>
                <Talks
                  className="card-grid--home"
                  maxItems={3}
                  loading="lazy"
                />
              </Suspense>
              <div className="home-more-link flex w-full justify-end">
                <Link
                  href="/talks"
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
