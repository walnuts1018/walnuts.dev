import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { format } from "date-fns";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
      <TimelineItem>
        <TimelineSeparator>
          <ExperienceTimelineDot
            from={new Date("2024-9-6")}
            to={new Date("2024-9-20")}
            useDay={true}
          />
        </TimelineSeparator>
        <TimelineContent>
          <ExperienceTimelineContent
            title="株式会社 Preferred Networks サマーインターン"
            content="Kubernetesに関するソフトウェア開発"
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <ExperienceTimelineDot
            from={new Date("2024-8-19")}
            to={new Date("2024-8-30")}
            useDay={true}
          />
        </TimelineSeparator>
        <TimelineContent>
          <ExperienceTimelineContent
            title="サイボウズ株式会社 サマーインターン"
            content="Kubernetes 基盤コース Pona チーム"
            href="https://blog.cybozu.io/entry/2024/10/29/080000"
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <ExperienceTimelineDot from={new Date("2023-12-01")} />
        </TimelineSeparator>
        <TimelineContent>
          <ExperienceTimelineContent
            title="株式会社 はてな サービスプラットフォームチーム アルバイト"
            content="Perl/Goを用いたバックエンド開発・サービスのKubernetes移行など"
            href="https://developer.hatenastaff.com/entry/2024/08/29/124236"
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <ExperienceTimelineDot
            from={new Date("2023-08-21")}
            to={new Date("2023-09-01")}
            useDay={true}
          />
        </TimelineSeparator>
        <TimelineContent>
          <ExperienceTimelineContent
            title="ヤフー株式会社（現 LINE ヤフー株式会社）インターン"
            content="Kubernetesに関するソフトウェア開発"
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <ExperienceTimelineDot
            from={new Date("2022-11-01")}
            to={new Date("2024-03-31")}
          />
        </TimelineSeparator>
        <TimelineContent>
          <ExperienceTimelineContent
            title="株式会社 演算工房 開発部 アルバイト"
            content="WPFソフト開発"
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <ExperienceTimelineDot
            from={new Date("2022-04-01")}
            to={new Date("2026-03-31")}
            withConnector={false}
          />
        </TimelineSeparator>
        <TimelineContent>
          <ExperienceTimelineContent title="京都大学 工学部 電気電子工学科" />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

function ExperienceTimelineDot({
  from,
  to,
  useDay = false,
  withConnector = true,
}: {
  from: Date;
  to?: Date;
  useDay?: boolean;
  withConnector?: boolean;
}) {
  if (to && from > to) {
    throw new Error("from date must be past");
  }

  const pattern = useDay ? "yyyy年MM月dd日" : "yyyy年MM月";

  const now = new Date();
  const toStr = !to || to > now ? "現在" : format(to, pattern);

  return (
    <div className="flex items-start h-full gap-2 mt-2">
      <div className="flex flex-col h-full items-center">
        <TimelineDot />
        {withConnector && <TimelineConnector className="h-full" />}
      </div>
      <div className="flex items-center font-Nunito gap-2">
        <p className="text-sm text-gray-500 w-72 mt-2">
          {format(from, pattern)} - {toStr}
        </p>
      </div>
    </div>
  );
}

function ExperienceTimelineContent({
  title,
  content,
  href,
}: {
  title: string;
  content?: string;
  href?: string;
}) {
  const child = (
    <>
      <h3 className="text-lg">{title}</h3>
      <p className="text-gray-500 text-sm">{content}</p>
    </>
  );

  const baseClassName =
    "flex flex-col gap-1 items-start pb-6 font-Noto p-2 px-4";

  return href ? (
    <Link
      href={href}
      className={cn(
        baseClassName,
        "flex flex-col gap-1 items-start pb-6 font-Noto cursor-pointer hover:bg-gray-200 hover:shadow-lg rounded-xl hover:scale-[1.02]  duration-200 transition-all active:scale-100"
      )}
    >
      {child}
    </Link>
  ) : (
    <div className={cn(baseClassName)}>{child}</div>
  );
}
