"use client";
import { LuMenu } from "react-icons/lu";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { useRef, useState } from "react";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";

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
        className="focus:outline-none transform hover:scale-105 duration-200 transition-all"
        ref={ref}
      >
        {isOpen ? (
          <CgClose size={35} color="#353535" />
        ) : (
          <LuMenu size={35} color="#353535" />
        )}
      </button>
      <Menu
        id="basic-menu"
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        slotProps={{
          paper: {
            className: "backdrop-blur-sm bg-white/2",
            style: {
              backgroundColor: "transparent",
              willChange: "auto",
            },
          },
        }}
        MenuListProps={{
          style: { padding: 0 },
        }}
      >
        {headerLinks.map((link) => (
          <div key={link.href} className="px-2">
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
              <Divider />
            )}
          </div>
        ))}
      </Menu>
    </div>
  );
}
