import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { LowerDecoration, UpperDecoration } from "../Decoration";
import hatenaBlogIcon from "../icons/hatenablog-logo.svg";
import zennIcon from "../icons/zenn.svg";
import CardImage from "./Image";
import { cn } from "@/lib/utils";
import "./Card.css";

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
  loading,
}: {
  date?: Date;
  decorationSize?: "small" | "medium";
  description?: string;
  href: string;
  icon?: "github" | "zenn" | "hatena";
  imageSrc?: string;
  loading?: "eager" | "lazy";
  theme?: CardTheme;
  title?: string;
}) {
  const iconComponent = {
    github: (
      <div className="flex items-center justify-center text-3xl">
        <BsGithub fontSize="inherit" />
      </div>
    ),
    zenn: <Image src={zennIcon} alt="zenn" className="w-8" loading={loading} />,
    hatena: (
      <Image
        src={hatenaBlogIcon}
        alt="hatena"
        className="-m-2 w-11"
        loading={loading}
      />
    ),
    none: <></>,
  }[icon || "none"];

  const parsedDate = date ? format(date, "yyyy年MM月dd日") : "";

  return (
    <div className="font-Noto aspect-20/11 w-80 transition-all duration-200 hover:scale-105 active:scale-100">
      <Link
        href={href}
        className="card-shadow relative flex h-full cursor-pointer overflow-hidden rounded-2xl bg-[#f6f7fa] outline-hidden transition-all duration-200 focus:scale-105 active:bg-[#e2e2e2]"
        target="_blank"
      >
        <UpperDecoration
          className="absolute top-0 left-0"
          innerClassName={cn(
            decorationSize === "medium" ? "scale-[0.3]" : "scale-[0.2]"
          )}
          primaryColor={theme?.primaryColor}
          secondaryColor={theme?.secondaryColor}
        />
        <div className="flex items-center justify-center gap-1 px-5">
          <div className="flex flex-col gap-1">
            <div
              className={cn("flex items-center justify-center gap-2 pr-2", {
                "pl-8": description,
              })}
            >
              {iconComponent}
              <h2
                className={cn(
                  "line-clamp-4",
                  countTextLength(title || "") < 20
                    ? "text-xl"
                    : countTextLength(title || "") < 30
                      ? "text-lg"
                      : "text-base"
                )}
              >
                {title}
              </h2>
            </div>
            {parsedDate && <p className="px-5 text-gray-500">{parsedDate}</p>}
            {description && (
              <div className="w-full pt-1 pr-11">
                <p
                  className={cn(
                    "text-gray-500",
                    countTextLength(description) < 50 ? "text-sm" : "text-xs"
                  )}
                >
                  {description}
                </p>
              </div>
            )}
          </div>
          {imageSrc && (
            <CardImage src={imageSrc || ""} alt={title} loading="lazy" />
          )}
        </div>
        <LowerDecoration
          className="absolute right-0 bottom-0"
          innerClassName={cn(
            decorationSize === "medium" ? "scale-[0.9]" : "scale-[0.7]"
          )}
          primaryColor={theme?.primaryColor}
          secondaryColor={theme?.secondaryColor}
        />
      </Link>
    </div>
  );
}

function countTextLength(text: string) {
  const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });
  return [...segmenter.segment(text)].length;
}
