import Image from "next/image";
import Heart from "./Heart";
import ProfileImage from "./ProfileImage";
import "./Profile.css";
import Link from "next/link";

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
        <p className="text-black font-extrabold text-4xl pb-3 sm:pb-5">
          Walnuts
        </p>
        <div className="space-y-1 sm:space-y-2">
          {/* <ProfileList
            src="/icons/id_card_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Name"
          >
            Ryota Tawara
          </ProfileList> */}
          <ProfileList
            src="/icons/twitter-x-line.svg"
            alt="X(Twitter)"
            link="https://twitter.com/walnuts1018"
          >
            @walnuts1018
          </ProfileList>
          <ProfileList
            src="/icons/github-fill.svg"
            alt="GitHub"
            link="https://github.com/walnuts1018"
          >
            walnuts1018
          </ProfileList>
          <ProfileList
            src="/icons/instagram-line.svg"
            alt="Instagram"
            link="https://www.instagram.com/walnuts_1018/"
          >
            @walnuts_1018
          </ProfileList>
          <ProfileList
            src="/icons/mail_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Mail"
            link="mailto:r.juglans.1018@gmail.com"
            fontSize="text-2xl"
          >
            r.juglans.1018@gmail.com
          </ProfileList>
          <ProfileList
            src="/icons/KMClogo_trans.svg"
            alt="KMC"
            link="https://kmc.gr.jp"
            fontSize="text-2xl"
          >
            46th Chairman /
            <br />
            47th Representative
          </ProfileList>
          <ProfileList
            src="/icons/school_FILL0_wght400_GRAD0_opsz24.svg"
            alt="School"
            link="https://www.s-ee.t.kyoto-u.ac.jp/ja"
          >
            Kyoto Univ. / B2
          </ProfileList>
          <ProfileList
            src="/icons/favorite_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Favorite Tech"
            fontSize="text-2xl"
          >
            Kubernetes / Proxmox VE / Golang / Next.js
          </ProfileList>
          <ProfileList
            src="/icons/map_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Map Icon"
            link="https://maps.app.goo.gl/2nuqetk7S8FcNayWA"
          >
            <Image src="/icons/yummy.png" alt="yummy" width={30} height={30} />
          </ProfileList>
          <ProfileList
            src="/icons/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg"
            alt="shopping cart icon"
            link="https://www.amazon.jp/hz/wishlist/ls/1L1NGV8XKP7X6?ref_=wl_share"
          >
            Want-to-Buy
          </ProfileList>
        </div>
      </div>
    </div>
  );
}

function ProfileList({
  src,
  alt,
  children,
  link,
  fontSize = "text-2xl sm:text-3xl",
}: {
  src: string;
  alt: string;
  children: React.ReactNode;
  link?: string;
  fontSize?: string;
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
          className={`flex space-x-3 text-[#7f7f7f] font-bold items-center ${fontSize} w-full sm:outline-none flex rounded-full px-6 py-1 profile-list`}
        >
          {content}
        </div>
      ) : (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className={`flex space-x-3 text-[#7f7f7f] font-bold items-center ${fontSize} w-full sm:outline-none flex rounded-full px-6 py-1 profile-list hover:bg-gray-50 hover:shadow-xl hover:border-gray-600 focus:bg-gray-50 focus:shadow-xl focus:border-gray-600 transition-all duration-50 sm:hover:scale-105 active:scale-100 sm:focus:scale-105`}
          href={link}
        >
          {content}
        </Link>
      )}
    </>
  );
}
