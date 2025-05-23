import Parser from "rss-parser";
import { BlogItem } from "./Blogs";

export default async function hatenaBlogItems(): Promise<BlogItem[]> {
  const feed = await new Parser()
    .parseURL("https://walnuts.hatenablog.com/rss")
    .catch(() => {
      console.error("Failed to fetch Hatena Blog RSS feed");
      return undefined;
    });

  if (!feed) {
    return [];
  }

  const feeds: BlogItem[] = feed.items.map((item) => ({
    title: item.title || "",
    href: item.link || "",
    date: item.pubDate ? new Date(item.pubDate) : undefined,
    imageSrc: item.enclosure?.url,
    type: "hatena",
  }));

  return feeds;
}
