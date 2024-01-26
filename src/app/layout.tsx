import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import AppleTouchIcon from "../../public/favicons/apple-touch-icon.png";
import Favicon16 from "../../public/favicons/favicon-16x16.png";
import Favicon32 from "../../public/favicons/favicon-32x32.png";
import Favicon from "../../public/favicons/favicon.ico";

const title = "Walnuts-dev | I'm Walnuts";
const description =
  "Hi, I'm Walnuts. このサイトでは、SNSアカウント一覧、ポートフォリオ、自宅サーバーの状態、WalnutsのHealth Metricsなどを公開しています。";
const url = "https://walnuts.dev";

const NunitoFont = Nunito({
  subsets: ["latin"],
  variable: "--font-Nunito",
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
      <body className={`${NunitoFont.variable} ${NotoFont.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

function Header() {
  return (
    <header>
      <div className="flex justify-center w-full ">
        <div className="w-10/12 flex items-center justify-left h-12 md:h-16 text-black font-bold font-Nunito text-xl sm:text-2xl px-3 relative">
          {/* <div className='h-full '>
            <UpperDecoration
              className='h-3/4 sm:h-2/3 pr-2 sm:pr-0 mr-7 sm:mr-12'
              innerClassName='scale-[0.15] sm:scale-[0.2]'
            />
          </div> */}
          <h1>
            <a className="logo" href="/">
              Walnuts.dev
            </a>
          </h1>
          {/* <div className='h-full items-end flex right-0 relative'>
            <LowerDecoration className='pl-1 scale-[0.4] sm:scale-[0.5] ml-10 bottom-0' />
          </div> */}
          <div className="absolute right-0 top-0 h-full flex items-center justify-center">
            <div className="h-2/3 text-md md:text-xl"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full  border-0 pb-2">
        <div className="w-10/12 h-[4px] rounded-full px-20 bg-gray-200"></div>
      </div>
    </header>
  );
}
