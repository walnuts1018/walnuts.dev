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
import WalnutsIconF6F7FA from "./walnuts-f6f7fa.png";
import WalnutsIcon from "./walnuts.png";
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
      <div className="h-full w-full rounded-full bg-linear-to-br from-[#94e5d2] to-[#84E3F6] p-1 duration-200 hover:scale-105">
        <div className="h-full w-full overflow-hidden rounded-full bg-[#f6f7fa]">
          <Image
            src={WalnutsIconF6F7FA}
            alt="walnuts icon"
            width={256}
            height={256}
            className="h-full w-full cursor-pointer rounded-full object-contain"
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
          className="fixed flex h-[100svh] w-screen items-center justify-center overflow-hidden bg-black/50 p-2"
          overlayClassName="fixed inset-0 bg-black/70 z-10"
          appElement={document.body}
        >
          <div
            className="fixed -z-10 h-full w-full"
            onClick={() => {
              setIsExpanded(false);
            }}
          />
          <div className="profile-image relative h-[80vmin] w-[80vmin] rounded-full">
            <Image
              src={WalnutsIcon}
              alt="walnuts icon"
              width={1024}
              height={1024}
              className="h-full w-full rounded-full object-contain"
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
