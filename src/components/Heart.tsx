"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdFavorite } from "react-icons/md";
import "./Heart.css";
import useSWR from "swr";

const fetchInterval = 10 * 1000;

type HeartRate = {
  heart: number;
  time: string;
};

async function fetcher(key: string) {
  return fetch(key).then(async (res) => res.json() as Promise<HeartRate>);
}

export default function Heart() {
  const [showDetail, setShowDetail] = useState(false);

  const { data, error } = useSWR("/api/heart", fetcher, {
    refreshInterval: fetchInterval,
  });

  const heartRate = data?.heart || 0;
  if (error) {
    console.error(error);
  }

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--heart-interval",
      `${60 / heartRate}s`
    );
  }, [heartRate]);

  return (
    <div className="">
      <Link
        className="flex h-10 w-10 items-center justify-center rounded-full border-red-500 bg-white p-0 text-3xl shadow-md outline-hidden duration-200 hover:scale-110 sm:h-12 sm:w-12 sm:text-4xl"
        href="https://grafana.walnuts.dev/public-dashboards/e6b8482ee79a488f9201b190be2bafac"
        target="_blank"
        onMouseEnter={() => setShowDetail(true)}
        onMouseLeave={() => setShowDetail(false)}
        title="Heart Rate Grafana Dashboard"
      >
        <MdFavorite fontSize="inherit" className="heart text-red-500" />
      </Link>
      <div
        className={`pointer-events-none absolute top-10 left-0 flex h-full w-full items-center justify-center text-2xl font-bold text-black transition-all duration-200 ${showDetail ? "opacity-100" : "opacity-0"}`}
      >
        {heartRate}
      </div>
    </div>
  );
}
