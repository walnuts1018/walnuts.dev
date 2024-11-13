import { Card, hatenaTheme, qiitaTheme, zennTheme } from "../Cards/Card";
import hatenaBlogItems from "./hatena-blog";
import { cn } from "@/lib/utils";

export default async function Blogs({
  maxItems,
  className,
}: {
  maxItems?: number;
  className?: string;
}) {
  const items = blogItems.concat(await hatenaBlogItems());
  items.sort((a, b) =>
    (a.date || new Date()) > (b.date || new Date()) ? -1 : 1
  );

  return (
    <div className={cn("flex flex-wrap justify-center gap-8", className)}>
      {items.slice(0, maxItems).map((item, index) => (
        <Card
          key={index}
          title={item.title}
          href={item.href}
          date={item.date}
          imageSrc={item.imageSrc}
          decorationSize="small"
          icon={
            item.type === "hatena"
              ? "hatena"
              : item.type === "zenn"
                ? "zenn"
                : undefined
          }
          theme={
            item.type === "hatena"
              ? hatenaTheme
              : item.type === "zenn"
                ? zennTheme
                : item.type === "qiita"
                  ? qiitaTheme
                  : undefined
          }
        />
      ))}
    </div>
  );
}

export type BlogItem = {
  title: string;
  href: string;
  date?: Date;
  imageSrc?: string;
  type?: "hatena" | "qiita" | "zenn";
};

const blogItems: BlogItem[] = [
  {
    title: "ESP32と赤外線LEDを用いてエアコンを遠隔操作する",
    href: "https://zenn.dev/walnuts/articles/300213a4ceee19",
    type: "zenn",
    date: new Date("2023-09-13"),
  },
  {
    title:
      "はてなブログやGigaViewerで使われている画像変換プロキシをEC2からEKSに移行しました",
    href: "https://developer.hatenastaff.com/entry/2024/08/29/124236",
    type: "hatena",
    date: new Date("2024-08-29"),
  },
  {
    title: "プログラミングサークルの新歓を支える技術",
    href: "https://speakerdeck.com/walnuts1018/puroguramingusakurunoxin-huan-wozhi-eruji-shu",
    date: new Date("2024-06-25"),
  },
  {
    title: "HedgeDocをKubernetesに構築する",
    href: "https://hedgedoc.walnuts.dev/s/rhYgE94FN",
    date: new Date("2023-11-27"),
  },
  {
    title: "zitadelでoauth2-proxy",
    href: "https://zenn.dev/walnuts/scraps/2c504e78536d84",
    type: "zenn",
    date: new Date("2023-11-11"),
  },
  {
    title: "NextAuthとZITADELでrefresh_tokenを得る",
    href: "https://zenn.dev/walnuts/scraps/3f60401529cf2d",
    type: "zenn",
    date: new Date("2023-11-06"),
  },
  {
    title:
      "eBPFを用いてPod ごとのインターネットトラフィック量を計測するツールの開発",
    href: "https://tech.preferred.jp/ja/blog/pod-level-internet-traffic-measurement-using-ebpf/",
    date: new Date("2024-11-13"),
  },
];
