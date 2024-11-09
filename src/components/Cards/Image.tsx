"use client";
import Image from "next/image";

export default function CardImage({ alt, src }: { alt?: string; src: string }) {
  return (
    <Image
      src={src}
      onError={(e) => {
        e.currentTarget.srcset =
          "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
        e.currentTarget.onerror = null;
      }}
      alt={alt || ""}
      width={200}
      height={200}
      className="rounded-2xl object-cover aspect-square w-1/4"
    />
  );
}
