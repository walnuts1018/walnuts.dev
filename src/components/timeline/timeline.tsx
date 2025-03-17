import { format } from "date-fns";
import Link from "next/link";
import { FaCircle } from "react-icons/fa6";
import { cn } from "@/lib/utils";

function ExperienceTimelineItem({
  from,
  to,
  useDay = false,

  title,
  content,
  href,

  withConnector = true,
}: {
  content?: string;
  from: Date;
  href?: string;

  title: string;
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

  const child = (
    <>
      <h3 className="text-base lg:text-lg">{title}</h3>
      <p className="text-gray-500 text-xs lg:text-sm">{content}</p>
    </>
  );

  const baseClassName =
    "flex flex-col gap-1 items-start font-Noto w-full md:w-[calc(100%-18rem-1rem)] rounded-xl min-w-72 p-2 px-4 pb-6";

  const timelineContent = href ? (
    <Link
      href={href}
      className={cn(
        baseClassName,
        "cursor-pointer hover:bg-gray-200 hover:shadow-lg hover:scale-[1.02]  duration-200 transition-all active:scale-100"
      )}
    >
      {child}
    </Link>
  ) : (
    <div className={cn(baseClassName)}>{child}</div>
  );

  return (
    <div className="grid grid-cols-[2rem_1fr] grid-rows-[2rem_1fr] min-h-20">
      <div className="w-full h-full col-start-1 col-end-2 row-start-1 row-end-2 flex justify-center items-center">
        <FaCircle className="w-3 h-3 text-[#bdbdbd] " />
      </div>
      {withConnector && (
        <div className="w-full h-full col-start-1 col-end-2 row-start-2 row-end-3 flex justify-center items-center">
          <span className="w-[2px] rounded-full h-full bg-[#bdbdbd]" />
        </div>
      )}
      <div className="flex flex-wrap items-start font-Nunito col-start-2 col-end-3 row-start-1 row-end-3 pt-[0.4rem] pl-2">
        <p className="text-sm text-gray-500 min-w-64 lg:w-72">
          {format(from, pattern)} - {toStr}
        </p>
        {timelineContent}
      </div>
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <div className="font-Noto w-full flex flex-col justify-between">
      <ExperienceTimelineItem
        from={new Date("2024-9-6")}
        to={new Date("2024-9-20")}
        useDay={true}
        title="株式会社 Preferred Networks サマーインターン"
        content="Kubernetesに関するソフトウェア開発"
        href="https://tech.preferred.jp/ja/blog/pod-level-internet-traffic-measurement-using-ebpf/"
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
        to={new Date("2026-03-31")}
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
        to={new Date("2025-03-31")}
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
    </div>
  );
}
