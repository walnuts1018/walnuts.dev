"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import { LuMenu } from "react-icons/lu";
import Modal from "react-modal";

export default function MobileHeaderLinks({
  headerLinks,
}: {
  headerLinks: { name: string; href: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  return (
    <div className="relative flex items-center justify-center">
      <button
        onClick={() => setIsOpen((open) => !open)}
        title="Menu"
        type="button"
        className="focus:outline-none transform hover:scale-110 active:scale-100 duration-200 transition-all"
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
        className="bg-transparent duration-200 transition-all"
        overlayClassName="fixed bg-transparent inset-0"
        appElement={document.body}
      >
        <div className="absolute mt-10 min-w-max top-0 right-0 will-change-auto backdrop-blur-md shadow-md bg-white/2 flex flex-col items-center justify-center bg-transparent z-10">
          {headerLinks.map((link) => (
            <div key={link.href} className="px-2 overflow-hidden w-full">
              <Link
                onClick={() => setIsOpen(false)}
                href={link.href}
                className="flex items-center justify-center hover:scale-105 duration-200 transition-all hover:bg-gray-200 rounded-lg p-2 px-4"
              >
                <span className="text-lg md:text-xl font-Nunito font-semibold text-black">
                  {link.name}
                </span>
              </Link>
              {headerLinks.indexOf(link) !== headerLinks.length - 1 && (
                <div className="w-full h-[3px] rounded-full bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
