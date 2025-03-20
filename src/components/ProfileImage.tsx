"use client";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import Modal from "react-modal";
import WalnutsIcon from "./walnuts.png";
import WalnutsIconF6F7FA from "./walnuts-f6f7fa.png";
import "./ProfileImage.css";

export default function ProfileImage() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isExpanded]);

  return (
    <>
      <div className="rounded-full bg-linear-to-br from-[#94e5d2] to-[#84E3F6] p-1 h-full w-full hover:scale-105 duration-200">
        <div className="rounded-full h-full w-full overflow-hidden bg-[#f6f7fa]">
          <Image
            src={WalnutsIconF6F7FA}
            alt="walnuts icon"
            width={256}
            height={256}
            className="rounded-full h-full w-full cursor-pointer object-contain"
            priority={true}
            onClick={() => {
              setIsExpanded(true);
            }}
            quality={60}
          />
        </div>
      </div>
      {isExpanded ? (
        <Modal
          isOpen={isExpanded}
          onRequestClose={() => {
            setIsExpanded(false);
          }}
          className="fixed h-[100svh] w-screen bg-black/50 flex items-center justify-center overflow-hidden p-2"
          overlayClassName="fixed inset-0 bg-black/70 z-10"
          appElement={document.body}
        >
          <div
            className="fixed h-full w-full -z-10"
            onClick={() => {
              setIsExpanded(false);
            }}
          ></div>
          <div className="rounded-full relative profile-image h-[80vmin] w-[80vmin]">
            <Image
              src={WalnutsIcon}
              alt="walnuts icon"
              width={1024}
              height={1024}
              className="rounded-full object-contain h-full w-full"
            />
          </div>
          <button
            title="close image expand"
            className="absolute top-4 right-4 text-4xl"
            onClick={() => setIsExpanded(false)}
          >
            <MdClose fontSize="inherit" className="text-white" />
          </button>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}
