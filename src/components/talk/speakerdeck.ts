import Parser from "rss-parser";

export type TalkItem = {
  date?: Date;
  event?: {
    href: string;
    title: string;
  };
  href: string;
  imageSrc?: string;
  title: string;
};

export type TalksResult =
  | {
      items: TalkItem[];
      ok: true;
    }
  | {
      items: TalkItem[];
      ok: false;
    };

type SpeakerDeckRssItem = {
  enclosure?: {
    url?: string;
  };
  link?: string;
  pubDate?: string;
  title?: string;
};

const talkEvents: Record<string, TalkItem["event"]> = {
  "https://speakerdeck.com/walnuts1018/pasukidee2ean-hao-hua-in-android-apps-prf-extension":
    {
      title: "Mobile Act OSAKA 18",
      href: "https://mobileact.connpass.com/event/383587/",
    },
};

export function mapSpeakerDeckItems(items: SpeakerDeckRssItem[]): TalkItem[] {
  return items.map((item) => ({
    title: item.title || "",
    href: item.link || "",
    date: item.pubDate ? new Date(item.pubDate) : undefined,
    event: item.link ? talkEvents[item.link] : undefined,
    imageSrc: item.enclosure?.url,
  }));
}

export default async function speakerDeckItems(): Promise<TalksResult> {
  const feed = await new Parser()
    .parseURL("https://speakerdeck.com/walnuts1018.rss")
    .catch(() => {
      console.error("Failed to fetch Speaker Deck RSS feed");
      return undefined;
    });

  if (!feed) {
    return {
      items: [],
      ok: false,
    };
  }

  return {
    items: mapSpeakerDeckItems(feed.items),
    ok: true,
  };
}
