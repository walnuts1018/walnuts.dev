import Link from "next/link";
import "./DecoButton.css";
export default function DecoButton({
  className,
  children,
  mode,
  href,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  mode: "link" | "button";
  onClick?: () => void;
}) {
  className =
    className +
    " text-white py-4 px-8 rounded-full transition-all duration-200 hover:scale-110 duration-200 transition-all active:scale-100 font-Noto font-bold bg-[#94e5d2] cursor-pointer active:bg-[#7fd9c7] deco-button overflow-hidden relative";

  const shineOverlay = (
    <div className="deco-button-shine-overlay absolute top-[-3px] left-[-10000px] z-0 h-8 w-48 rotate-[110deg] overflow-hidden bg-[#eafff8ea] blur-lg" />
  );

  return (
    <>
      {mode === "link" ? (
        <Link className={`${className}`} href={href ?? "/"}>
          {children}
          {shineOverlay}
        </Link>
      ) : (
        <button className={`${className} `} onClick={onClick}>
          {children}
          {shineOverlay}
        </button>
      )}
    </>
  );
}
