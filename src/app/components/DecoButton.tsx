import Link from "next/link";
import "./DecoButton.css";
export default function DecoButton({
  className,
  children,
  mode,
  href,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  mode: "link" | "button";
  href?: string;
  onClick?: () => void;
}) {
  className =
    className +
    " text-white py-4 px-8 rounded-full transition-all duration-200 hover:scale-110 duration-200 transition-all active:scale-100 font-Noto font-bold bg-[#94e5d2] cursor-pointer active:bg-[#7fd9c7] deco-button overflow-hidden relative";

  const shineOverlay = (
    <div className="left-[-10000px] top-[-3px] absolute deco-button-shine-overlay overflow-hidden z-0 bg-white opacity-80 w-48 h-8 rotate-[110deg] blur-lg"></div>
  );

  return (
    <>
      {mode === "link" ? (
        <Link className={`${className}`} href={href ?? "/"}>
          {children}
          {shineOverlay}
        </Link>
      ) : (
        <button className={`${className} `}>
          {children}
          {shineOverlay}
        </button>
      )}
    </>
  );
}
