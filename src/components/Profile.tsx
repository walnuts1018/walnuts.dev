import Image from "next/image";
import Link from "next/link";
import Heart from "./Heart";
import ProfileImage from "./ProfileImage";
import "./Profile.css";
import SwapText from "./SwapText";

export function Profile() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 font-Nunito">
      <div className=" h-48 w-48 sm:h-60 sm:w-60 relative">
        <ProfileImage />
        <div className="absolute bottom-4 right-0">
          <Heart />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="pb-3 sm:pb-5">
          <SwapText
            textClassName="text-black font-extrabold text-4xl text-center font-Nunito"
            initialText="Walnuts"
            initialTextClassName=""
            finalText="Ryota Tawara"
            finalTextClassName=""
            disableClick={true}
          />
        </div>
        <div className="space-y-1 sm:space-y-2">
          <ProfileItem
            src="/icons/twitter-x-line.svg"
            alt="X(Twitter)"
            link="https://twitter.com/walnuts1018"
          >
            @walnuts1018
          </ProfileItem>
          <ProfileItem
            src="/icons/github-fill.svg"
            alt="GitHub"
            link="https://github.com/walnuts1018"
          >
            walnuts1018
          </ProfileItem>
          <ProfileItem
            src="/icons/instagram-line.svg"
            alt="Instagram"
            link="https://www.instagram.com/walnuts_1018/"
          >
            @walnuts_1018
          </ProfileItem>
          <ProfileItem
            src="/icons/mail_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Mail"
            link="mailto:r.juglans.1018@gmail.com"
            fontSize="text-2xl"
          >
            r.juglans.1018@gmail.com
          </ProfileItem>
          <School />
          <ProfileItem
            src="/icons/favorite_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Favorite Tech"
            fontSize="text-2xl"
          >
            Kubernetes / Golang / OpenTelemetry / React
          </ProfileItem>
          <ProfileItem
            src="/icons/map_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Map Icon"
            link="https://maps.app.goo.gl/2nuqetk7S8FcNayWA"
          >
            <Image src="/icons/yummy.png" alt="yummy" width={30} height={30} />
          </ProfileItem>
          <ProfileItem
            src="/icons/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg"
            alt="shopping cart icon"
            link="https://www.amazon.jp/hz/wishlist/ls/1L1NGV8XKP7X6?ref_=wl_share"
          >
            Want-to-Buy
          </ProfileItem>
        </div>
      </div>
    </div>
  );
}

function ProfileItem({
  src,
  alt,
  children,
  link,
  fontSize = "text-2xl sm:text-3xl",
}: {
  alt: string;
  children: React.ReactNode;
  fontSize?: string;
  link?: string;
  src: string;
}) {
  const content = (
    <>
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="min-w-[36px] max-w-[36px] sm:min-w-[40px] sm:max-w-[40px] object-contain"
      />
      <p className="leading-7">{children}</p>
    </>
  );
  return (
    <>
      {link === undefined ? (
        <div
          className={`flex space-x-3 text-[#7f7f7f] font-bold items-center ${fontSize} w-full sm:outline-none flex rounded-full px-4 py-1 profile-list`}
        >
          {content}
        </div>
      ) : (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className={`flex space-x-3 text-[#7f7f7f] font-bold items-center ${fontSize} w-full sm:outline-none flex rounded-full px-4 py-1 profile-list hover:bg-gray-50 hover:shadow-xl hover:border-gray-600 focus:bg-gray-50 focus:shadow-xl focus:border-gray-600 transition-all duration-50 sm:hover:scale-105 active:scale-100 sm:focus:scale-105`}
          href={link}
        >
          {content}
        </Link>
      )}
    </>
  );
}

function School() {
  const now = new Date();
  if (now >= new Date("2026-03-31")) {
    return <></>;
  }

  const b = now >= new Date("2025-04-01") ? "B4" : "B3";

  return (
    <ProfileItem
      src="/icons/school_FILL0_wght400_GRAD0_opsz24.svg"
      alt="School"
      link="https://www.s-ee.t.kyoto-u.ac.jp/ja"
    >
      Kyoto Univ. / {b}
    </ProfileItem>
  );
}
