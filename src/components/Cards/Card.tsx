import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { LowerDecoration, UpperDecoration } from "../Decoration";
import "./Card.css";
import { format } from "date-fns";
import CardImage from "./Image";

export type CardTheme = {
  primaryColor: string;
  secondaryColor: string;
};

export const chocoMintTheme: CardTheme = {
  primaryColor: "#94E5D2",
  secondaryColor: "#745344",
};

export const pinkskyTheme: CardTheme = {
  primaryColor: "#8EF1FD",
  secondaryColor: "#F5BAE6",
};

export const githubTheme: CardTheme = {
  primaryColor: "#c2c2c2",
  secondaryColor: "#323232",
};

export const qiitaTheme: CardTheme = {
  primaryColor: "#5db212",
  secondaryColor: "#1f800e",
};

export const zennTheme: CardTheme = {
  primaryColor: "#80BFFA",
  secondaryColor: "#3ca8ff",
};

export const hatenaTheme: CardTheme = {
  primaryColor: "#bbbbbb",
  secondaryColor: "#22A9F0",
};

export function Card({
  title,
  description,
  icon,
  decorationSize = "medium",
  theme,
  href,
  date,
  imageSrc,
}: {
  title?: string;
  description?: string;
  icon?: "github" | "zenn" | "hatena";
  decorationSize?: "small" | "medium";
  theme?: CardTheme;
  href: string;
  date?: Date;
  imageSrc?: string;
}) {
  const iconComponent = {
    github: (
      <div className="text-3xl lg:text-4xl card:text-3xl items-center justify-center flex">
        <BsGithub fontSize="inherit" />
      </div>
    ),
    zenn: <Image src="/icons/zenn.svg" alt="zenn" width={30} height={30} />,
    hatena: (
      <Image
        src="/icons/hatenablog-logo.svg"
        alt="hatena"
        width={45}
        height={45}
        className="-m-2"
      />
    ),
    none: <></>,
  }[icon || "none"];

  const parsedDate = date ? format(date, "yyyy年MM月dd日") : "";

  return (
    <div className="w-[20rem] lg:w-[24rem] card:w-[20rem] aspect-[20/11] hover:scale-105  duration-200 transition-all active:scale-100 font-Noto ">
      <Link
        href={href}
        className="flex justify-center items-center h-full rounded-2xl focus:scale-105 relative bg-[#f6f7fa] cursor-pointer active:bg-[#e2e2e2] duration-200 outline-none transition-all card-shadow"
        target="_blank"
      >
        <UpperDecoration
          className="absolute top-0 left-0"
          innerClassName={cn(
            decorationSize === "medium"
              ? "scale-[0.3] lg:scale-[0.4] card:scale-[0.3]"
              : "scale-[0.2] lg:scale-[0.3] card:scale-[0.2]"
          )}
          primaryColor={theme?.primaryColor}
          secondaryColor={theme?.secondaryColor}
        />
        <LowerDecoration
          className="absolute bottom-0 right-0 "
          innerClassName={cn(
            decorationSize === "medium"
              ? "scale-[0.9] lg:scale-[1.1] card:scale-[0.9]"
              : "scale-[0.7] lg:scale-[0.9] card:scale-[0.7]"
          )}
          primaryColor={theme?.primaryColor}
          secondaryColor={theme?.secondaryColor}
        />

        <div className="flex justify-center items-center px-5 gap-1">
          <div className="flex flex-col gap-1">
            <div
              className={cn("flex justify-center items-center gap-2 pr-2", {
                "pl-8": description,
              })}
            >
              {iconComponent}
              <h2
                className={cn(
                  "line-clamp-4",
                  countTextLength(title || "") < 20
                    ? "text-xl lg:text-2xl card:text-xl"
                    : countTextLength(title || "") < 30
                      ? "text-lg lg:text-xl card:text-lg"
                      : "text-base lg:text-lg card:text-base"
                )}
              >
                {title}
              </h2>
            </div>
            {parsedDate && <p className="text-gray-500 px-5">{parsedDate}</p>}
            {description && (
              <div className="w-full pr-11 pt-1">
                <p
                  className={cn(
                    "text-gray-500",
                    countTextLength(description) < 50
                      ? "text-sm lg:text-base card:text-sm"
                      : "text-xs lg:text-sm card:text-xs"
                  )}
                >
                  {description}
                </p>
              </div>
            )}
          </div>
          {imageSrc && <CardImage src={imageSrc || ""} alt={title} />}
        </div>
      </Link>
    </div>
  );
}

function countTextLength(text: string) {
  const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });
  return [...segmenter.segment(text)].length;
}
