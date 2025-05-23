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
      <div className="flex w-full justify-center">
        <div className="justify-left font-Nunito relative flex h-12 w-10/12 items-center px-3 text-xl font-bold text-black sm:text-2xl md:h-16">
          <h1>
            <Link className="logo outline-hidden" href="/">
              Walnuts.dev
            </Link>
          </h1>
          <div className="absolute top-0 right-3 flex h-full items-center justify-center">
            <div className="hidden md:flex">
              <NormalHeaderLinks headerLinks={headerLinks} />
            </div>
            <div className="flex md:hidden">
              <MobileHeaderLinks headerLinks={headerLinks} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center border-0 pb-2">
        <div className="h-[4px] w-10/12 rounded-full bg-gray-200 px-20" />
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
          className="flex items-center justify-center rounded-lg p-2 px-4 transition-all duration-200 hover:scale-105 hover:bg-gray-200"
        >
          <span className="font-Nunito text-lg font-semibold md:text-xl">
            {link.name}
          </span>
        </Link>
      ))}
    </>
  );
}
