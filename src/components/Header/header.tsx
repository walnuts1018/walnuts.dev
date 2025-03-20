import Link from "next/link";
import MobileHeaderLinks from "./MobildeHeader";

export default function Header() {
  const headerLinks = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "Payment", href: "/payment" },
  ];

  return (
    <header>
      <div className="flex justify-center w-full ">
        <div className="w-10/12 flex items-center justify-left h-12 md:h-16 text-black font-bold font-Nunito text-xl sm:text-2xl px-3 relative">
          <h1>
            <Link className="logo outline-hidden" href="/">
              Walnuts.dev
            </Link>
          </h1>
          <div className="absolute right-3 top-0 h-full  items-center justify-center flex">
            <div className="hidden md:flex">
              <NormalHeaderLinks headerLinks={headerLinks} />
            </div>
            <div className="flex md:hidden">
              <MobileHeaderLinks headerLinks={headerLinks} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full  border-0 pb-2">
        <div className="w-10/12 h-[4px] rounded-full px-20 bg-gray-200"></div>
      </div>
    </header>
  );
}

function NormalHeaderLinks({
  headerLinks,
}: {
  headerLinks: { href: string; name: string }[];
}) {
  return (
    <>
      {headerLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="flex items-center justify-center hover:scale-105 duration-200 transition-all hover:bg-gray-200 rounded-lg p-2 px-4"
        >
          <span className="text-lg md:text-xl font-Nunito font-semibold">
            {link.name}
          </span>
        </Link>
      ))}
    </>
  );
}
