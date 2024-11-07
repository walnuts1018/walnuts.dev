import type { Metadata } from "next";
import { Nunito, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import AppleTouchIcon from "../../public/favicons/apple-touch-icon.png";
import Favicon16 from "../../public/favicons/favicon-16x16.png";
import Favicon32 from "../../public/favicons/favicon-32x32.png";
import Favicon from "../../public/favicons/favicon.ico";
import Header from "@/components/Header/header";

const title = "Walnuts-dev | I'm Walnuts";
const description =
  "Hi, I'm Walnuts. このサイトでは、SNSアカウント一覧、ポートフォリオ、自宅サーバーの状態、WalnutsのHealth Metricsなどを公開しています。";
const url = "https://walnuts.dev";

const NunitoFont = Nunito({
  subsets: ["latin"],
  variable: "--font-Nunito",
});

const ZenMaruGothicFont = Zen_Maru_Gothic({
  weight: "400",
  preload: false,
  variable: "--font-ZenMaruGothic",
});

const NotoFont = localFont({
  src: "./font/NotoSansCJKjp-Regular.woff2",
  variable: "--font-Noto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: `%s - ${title}`,
  },
  description: description,
  icons: [
    { rel: "icon", url: Favicon.src },
    { rel: "apple-touch-icon", url: AppleTouchIcon.src },
    { rel: "icon", type: "image/png", sizes: "32x32", url: Favicon32.src },
    { rel: "icon", type: "image/png", sizes: "16x16", url: Favicon16.src },
  ],
  openGraph: {
    title: title,
    description,
    url,
    siteName: title,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description,
    site: "@walnuts1018",
    creator: "@walnuts1018",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#FF9F21" />
        <meta name="theme-color" content="#FF9F21" />
        <meta name="twitter:image" content="https://walnuts.dev/walnuts.jpg" />
      </head>
      <body
        className={`${NunitoFont.variable} ${NotoFont.variable} ${ZenMaruGothicFont.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
