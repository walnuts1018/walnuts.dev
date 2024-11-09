import { cn } from "@/lib/utils";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { format } from "date-fns";
import Link from "next/link";

export default function ExperienceTimeline() {
  return (
    <Timeline
      className="font-Noto w-full flex flex-col justify-between"
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <ExperienceTimelineItem
        from={new Date("2024-9-6")}
        to={new Date("2024-9-20")}
        useDay={true}
        title="株式会社 Preferred Networks サマーインターン"
        content="Kubernetesに関するソフトウェア開発"
      />
      <ExperienceTimelineItem
        from={new Date("2024-8-19")}
        to={new Date("2024-8-30")}
        useDay={true}
        title="サイボウズ株式会社 サマーインターン"
        content="Kubernetes 基盤コース Pona チーム"
        href="https://blog.cybozu.io/entry/2024/10/29/080000"
      />
      <ExperienceTimelineItem
        from={new Date("2023-12-01")}
        title="株式会社 はてな サービスプラットフォームチーム アルバイト"
        content="Perl/Goを用いたバックエンド開発・サービスのKubernetes移行など"
      />
      <ExperienceTimelineItem
        from={new Date("2023-08-21")}
        to={new Date("2023-09-01")}
        useDay={true}
        title="ヤフー株式会社（現 LINE ヤフー株式会社）インターン"
        content="Kubernetesに関するソフトウェア開発"
      />
      <ExperienceTimelineItem
        from={new Date("2022-11-01")}
        to={new Date("2024-03-31")}
        title="株式会社 演算工房 開発部 アルバイト"
        content="WPFソフト開発"
      />
      <ExperienceTimelineItem
        from={new Date("2022-04-01")}
        to={new Date("2026-03-31")}
        title="KMC (京大マイコンクラブ) 所属"
        content="第46代 会長 / 第47代 代表"
        href="https://www.kmc.gr.jp/"
      />
      <ExperienceTimelineItem
        from={new Date("2022-04-01")}
        to={new Date("2026-03-31")}
        withConnector={false}
        title="京都大学 工学部 電気電子工学科"
      />
    </Timeline>
  );
}

function ExperienceTimelineItem({
  from,
  to,
  useDay = false,

  title,
  content,
  href,

  withConnector = true,
}: {
  from: Date;
  to?: Date;
  useDay?: boolean;

  title: string;
  content?: string;
  href?: string;

  withConnector?: boolean;
}) {
  if (to && from > to) {
    throw new Error("from date must be past");
  }

  const pattern = useDay ? "yyyy年MM月dd日" : "yyyy年MM月";

  const now = new Date();
  const toStr = !to || to > now ? "現在" : format(to, pattern);

  const child = (
    <>
      <h3 className="text-base lg:text-lg">{title}</h3>
      <p className="text-gray-500 text-xs lg:text-sm">{content}</p>
    </>
  );

  const baseClassName =
    "flex flex-col gap-1 items-start pb-6 font-Noto p-2 px-4 w-full md:w-[calc(100%-18rem-1rem)] rounded-xl min-w-72";

  const timelineContent = href ? (
    <Link
      href={href}
      className={cn(
        baseClassName,
        "flex flex-col gap-1 items-start pb-6 font-Noto cursor-pointer hover:bg-gray-200 hover:shadow-lg hover:scale-[1.02]  duration-200 transition-all active:scale-100"
      )}
    >
      {child}
    </Link>
  ) : (
    <div className={cn(baseClassName)}>{child}</div>
  );

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        {withConnector && <TimelineConnector className="h-full" />}
      </TimelineSeparator>
      <TimelineContent>
        <div className="flex  flex-wrap items-start font-Nunito gap-2">
          <p className="text-sm text-gray-500 min-w-64 lg:w-72 mt-1">
            {format(from, pattern)} - {toStr}
          </p>
          {timelineContent}
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}
