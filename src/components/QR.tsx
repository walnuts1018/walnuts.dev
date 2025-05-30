"use client";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MdScreenRotationAlt, MdQrCode2 } from "react-icons/md";
import Modal from "react-modal";
import "./QR.css";

export default function QR({ className }: { className?: string }) {
  const [isShown, setIsShown] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  useEffect(() => {
    if (isShown) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isShown]);

  return (
    <div className={className}>
      <button
        onClick={() => setIsShown(true)}
        title="show QR"
        className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-linear-to-br from-red-400 to-red-600 p-1 text-4xl shadow-lg outline-hidden hover:from-red-500 hover:to-red-600 hover:shadow-lg focus:from-red-500 focus:to-red-600 focus:shadow-lg sm:h-16 sm:w-16 sm:text-5xl"
      >
        <MdQrCode2 fontSize="inherit" className="text-white" />
      </button>
      {isShown ? (
        <Modal
          isOpen={isShown}
          onRequestClose={() => {
            setIsShown(false);
            setIsRotated(false);
          }}
          className="fixed flex h-[100svh] w-screen flex-col items-center justify-center overflow-hidden bg-black/50"
          overlayClassName="fixed inset-0 bg-black/50 z-10"
          appElement={document.body}
        >
          <div
            className="fixed -z-10 h-full w-full"
            onClick={() => {
              setIsShown(false);
              setIsRotated(false);
            }}
          />
          <div className="flex w-2/3 flex-col items-center justify-between sm:w-3/4 md:w-1/2 xl:w-1/3">
            <div
              className={`z-30 container flex flex-col items-center justify-center rounded-3xl bg-white p-4 shadow-md transition-all duration-500 ${
                isRotated ? "rotate-180" : "rotate-0"
              }`}
            >
              <div className="flex items-center justify-center">
                <Image
                  src="/walnuts.png"
                  alt="favicon"
                  width={50}
                  height={50}
                  className="rounded-full object-contain"
                />
                <p className="font-Nunito bg-white px-1 text-center text-2xl font-bold text-black">
                  Walnuts.dev
                </p>
              </div>

              <div className="flex items-center justify-center sm:w-2/3">
                <Image
                  src="/QR-walnuts.dev.svg"
                  alt="walnuts.dev QR"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              title="rotate QR"
              className="shadow-neumorphism-button active:shadow-neumorphism-button-pressed mt-10 h-[72px] w-[72px] cursor-pointer rounded-full border-4 border-white bg-white p-3 outline-hidden"
              onClick={() => setIsRotated((prev) => !prev)}
            >
              <div
                className={`flex items-center justify-center text-[#83dbd6] transition-all duration-500 ease-in-out ${
                  isRotated ? "rotate-[360deg]" : "rotate-0"
                }`}
              >
                <MdScreenRotationAlt size="38px" />
              </div>
            </button>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
}
