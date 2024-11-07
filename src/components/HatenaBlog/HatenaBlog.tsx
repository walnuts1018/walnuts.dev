import { format } from "date-fns";
import Parser from "rss-parser";
import { Card, hatenaTheme } from "../Cards/Card";
import HatenaBlogImage from "./Image";

export default async function HatenaBlog() {
  const feed = await new Parser()
    .parseURL("https://walnuts.hatenablog.com/rss")
    .catch(() => {
      console.error("Failed to fetch Hatena Blog RSS feed");
      return undefined;
    });

  if (!feed) {
    return <></>;
  }

  return (
    <div className="flex overflow-x-auto gap-6 p-4">
      {feed.items.map((item) => (
        <EntryItem
          key={item.link}
          title={item.title}
          url={item.link}
          date={item.pubDate}
          imageSrc={item.enclosure?.url}
        />
      ))}
    </div>
  );
}

function EntryItem({
  title,
  url,
  date,
  imageSrc,
}: {
  title?: string;
  url?: string;
  date?: string;
  imageSrc?: string;
}) {
  if (!title || !url) {
    return <> </>;
  }

  const parsedDate = date ? format(new Date(date), "yyyy年MM月dd日") : "";
  const parsedURL = new URL(url);

  return (
    <Card
      theme={hatenaTheme}
      href={parsedURL.toString()}
      decorationSize="small"
    >
      <div className="flex-none flex items-center justify-between w-[20rem] lg:w-[24rem] card:w-[20rem] aspect-[20/11] p-8">
        <div className="flex flex-col justify-center h-full w-full px-5 gap-1 z-10">
          <h2 className={"text-lg lg:text-xl line-clamp-3"}>{title}</h2>
          <p className={"text-gray-500"}>{parsedDate}</p>
        </div>
        <HatenaBlogImage src={imageSrc || ""} alt={title} />
      </div>
    </Card>
  );
}
