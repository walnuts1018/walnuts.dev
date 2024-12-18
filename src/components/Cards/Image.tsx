"use client";
import Image from "next/image";

const gray =
  "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

export default function CardImage({
  alt,
  src,
  loading,
}: {
  alt?: string;
  loading?: "eager" | "lazy";
  src: string;
}) {
  return (
    <Image
      src={src}
      onError={(e) => {
        e.currentTarget.srcset = gray;
        e.currentTarget.onerror = null;
      }}
      alt={alt || ""}
      width={300}
      height={300}
      loading={loading}
      className="rounded-2xl object-cover aspect-square w-1/4"
    />
  );
}
