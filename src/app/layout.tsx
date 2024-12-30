import type { Metadata } from "next";
import { Nunito, Zen_Maru_Gothic, Noto_Sans_JP } from "next/font/google";
import AppleTouchIcon from "../../public/favicons/apple-touch-icon.png";
import Favicon16 from "../../public/favicons/favicon-16x16.png";
import Favicon32 from "../../public/favicons/favicon-32x32.png";
import Favicon from "../../public/favicons/favicon.ico";
import Header from "@/components/Header/header";
import "./globals.css";

const defaultTitle = "Walnuts (@walnuts1018)";
const defaultDescription =
  "Hi, I'm Walnuts. このサイトでは、SNSアカウント一覧、ポートフォリオ、自宅サーバーの状態、WalnutsのHealth Metricsなどを公開しています。";
const url = "https://walnuts.dev";

const NunitoFont = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Nunito",
});

const ZenMaruGothicFont = Zen_Maru_Gothic({
  weight: ["400"],
  display: "swap",
  preload: false,
  variable: "--font-ZenMaruGothic",
});

const NotoFont = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Noto",
});

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: defaultTitle,
    template: `%s | Walnuts.dev`,
  },
  description: defaultDescription,
  authors: [
    {
      name: "Walnuts (@walnuts1018)",
      url: new URL(url),
    },
    {
      name: "Walnuts (id:walnuts1018)",
      url: new URL("http://www.hatena.ne.jp/walnuts1018/"),
    },
  ],
  icons: [
    { rel: "icon", url: Favicon.src },
    { rel: "apple-touch-icon", url: AppleTouchIcon.src },
    { rel: "icon", type: "image/png", sizes: "32x32", url: Favicon32.src },
    { rel: "icon", type: "image/png", sizes: "16x16", url: Favicon16.src },
  ],
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: new URL(url),
    siteName: defaultTitle,
    locale: "ja_JP",
    type: "website",
    images: "/opengraph-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
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
