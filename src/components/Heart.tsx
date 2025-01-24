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
  return fetch(key).then((res) => res.json() as Promise<HeartRate>);
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
        className="flex items-center justify-center outline-hidden border-red-500 rounded-full p-0 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-md text-3xl sm:text-4xl hover:scale-110 duration-200"
        href="https://grafana.walnuts.dev/public-dashboards/e6b8482ee79a488f9201b190be2bafac"
        target="_blank"
        onMouseEnter={() => setShowDetail(true)}
        onMouseLeave={() => setShowDetail(false)}
        title="Heart Rate Grafana Dashboard"
      >
        <MdFavorite fontSize="inherit" className=" text-red-500 heart" />
      </Link>
      <div
        className={`absolute items-center h-full w-full top-10 flex left-0 justify-center text-2xl font-bold text-black transition-all duration-200 pointer-events-none 
        ${showDetail ? "opacity-100" : "opacity-0"}`}
      >
        {heartRate}
      </div>
    </div>
  );
}
