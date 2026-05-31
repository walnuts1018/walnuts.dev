import Link from "next/link";
import { Card, chocoMintTheme } from "../Cards/Card";
import speakerDeckItems from "./speakerdeck";
import { cn } from "@/lib/utils";

export default async function Talks({
  className,
  loading,
  maxItems,
}: {
  className?: string;
  loading?: "eager" | "lazy";
  maxItems?: number;
}) {
  const result = await speakerDeckItems();
  const items = result.items.sort((a, b) =>
    (a.date || new Date()) > (b.date || new Date()) ? -1 : 1
  );

  return (
    <div className="flex flex-col gap-4">
      {!result.ok && (
        <p className="font-Noto text-sm text-gray-500">
          Speaker Deck のRSSを取得できませんでした。
        </p>
      )}
      <div className={cn("flex flex-wrap justify-center gap-8", className)}>
        {items.slice(0, maxItems).map((item) => (
          <div key={item.href} className="flex flex-col gap-2">
            <Card
              title={item.title}
              href={item.href}
              date={item.date}
              imageSrc={item.imageSrc}
              decorationSize="small"
              loading={loading}
              theme={chocoMintTheme}
            />
            {item.event && (
              <Link
                href={item.event.href}
                target="_blank"
                className="font-Noto w-80 text-sm text-gray-500 underline-offset-4 transition-colors hover:text-gray-700 hover:underline"
              >
                {item.event.title}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
