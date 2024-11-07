import Link from "next/link";
import { MobileHeader } from "./mobile-header";

export default function Header() {
  const headerLinks = [
    { name: "Home", href: "/" },
    { name: "Payment", href: "/payment" },
    { name: "About", href: "/about" },
  ];

  return (
    <header>
      <div className="flex justify-center w-full ">
        <div className="w-10/12 flex items-center justify-left h-12 md:h-16 text-black font-bold font-Nunito text-xl sm:text-2xl px-3 relative">
          {/* <div className='h-full '>
            <UpperDecoration
              className='h-3/4 sm:h-2/3 pr-2 sm:pr-0 mr-7 sm:mr-12'
              innerClassName='scale-[0.15] sm:scale-[0.2]'
            />
          </div> */}
          <h1>
            <Link className="logo outline-none" href="/">
              Walnuts.dev
            </Link>
          </h1>
          {/* <div className='h-full items-end flex right-0 relative'>
            <LowerDecoration className='pl-1 scale-[0.4] sm:scale-[0.5] ml-10 bottom-0' />
          </div> */}
          <div className="absolute right-3 top-0 h-full flex items-center justify-center">
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
            <MobileHeader>
              {({}) => (
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
              )}
            </MobileHeader>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full  border-0 pb-2">
        <div className="w-10/12 h-[4px] rounded-full px-20 bg-gray-200"></div>
      </div>
    </header>
  );
}
