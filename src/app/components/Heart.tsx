"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import { useState, useEffect } from "react";
import "./Heart.css";

const fetchInterval = 60 * 1000;

type HeartRate = {
  heart: number;
  time: string;
};

export default function Heart() {
  const [heartRate, setHeartRate] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    async function fetchHeart() {
      const res = await fetch("/api/heart");
      const data: HeartRate = await res.json();
      console.debug(data);
      setHeartRate(data.heart);
    }
    fetchHeart();
    setInterval(async () => {
      fetchHeart();
    }, fetchInterval);
    return () => {
      clearInterval(fetchInterval);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--heart-interval",
      `${60 / heartRate}s`
    );
  }, [heartRate]);

  return (
    <div>
      <Link
        className="flex items-center justify-center outline-none border-red-500 rounded-full p-0 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-md text-3xl sm:text-4xl"
        href="https://grafana.walnuts.dev/public-dashboards/e6b8482ee79a488f9201b190be2bafac"
        target="_blank"
        onMouseEnter={() => setShowDetail(true)}
        onMouseLeave={() => setShowDetail(false)}
        title="Heart Rate Grafana Dashboard"
      >
        <div className=" text-red-500 heart">
          <FavoriteIcon fontSize="inherit" />
        </div>
      </Link>
      <div
        className={`absolute items-center h-full w-full top-10 flex left-0 justify-center text-2xl font-bold text-black transition-all duration-100 pointer-events-none 
        ${showDetail ? "opacity-100" : "opacity-0"}`}
      >
        {heartRate}
      </div>
    </div>
  );
}
