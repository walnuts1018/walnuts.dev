"use client";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { LuMenu } from "react-icons/lu";
import Modal from "react-modal";

if (typeof document !== "undefined") {
  Modal.setAppElement("body");
}
export default function MobileHeaderLinks({
  headerLinks,
}: {
  headerLinks: { href: string; name: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  return (
    <div className="relative flex items-center justify-center">
      <button
        onClick={() => setIsOpen((open) => !open)}
        title="Menu"
        type="button"
        className="transform transition-all duration-200 hover:scale-110 focus:outline-hidden active:scale-100"
        ref={ref}
      >
        {isOpen ? (
          <CgClose size={35} color="#353535" />
        ) : (
          <LuMenu size={35} color="#353535" />
        )}
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        className="bg-transparent transition-all duration-200"
        overlayClassName="fixed bg-transparent inset-0"
        style={{
          overlay: {
            zIndex: 50,
          },
          content: {
            zIndex: 50,
          },
        }}
      >
        <div className="absolute top-0 right-0 mt-10 flex min-w-max flex-col items-center justify-center bg-transparent bg-white/2 shadow-md backdrop-blur-md will-change-auto">
          {headerLinks.map((link) => (
            <div key={link.href} className="w-full overflow-hidden px-2">
              <Link
                onClick={() => setIsOpen(false)}
                href={link.href}
                className="flex items-center justify-center rounded-lg p-2 px-4 transition-all duration-200 hover:scale-105 hover:bg-gray-200"
              >
                <span className="font-Nunito text-lg font-semibold text-black md:text-xl">
                  {link.name}
                </span>
              </Link>
              {headerLinks.indexOf(link) !== headerLinks.length - 1 && (
                <div className="h-[3px] w-full rounded-full bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
