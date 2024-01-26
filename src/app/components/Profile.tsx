import Image from "next/image";
import Heart from "./Heart";
import ProfileImage from "./ProfileImage";
import "./Profile.css";

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
        {/* <Heart /> */}
        <div className="space-y-1 sm:space-y-2">
          {/*<ProfileList src='/icons/sell_FILL0_wght400_GRAD0_opsz24.svg' alt='Name' text='Ryota Tawara' />*/}
          <ProfileList
            src="/icons/twitter-x-line.svg"
            alt="X(Twitter)"
            text="@walnuts1018"
            link="https://twitter.com/walnuts1018"
          />
          <ProfileList
            src="/icons/github-fill.svg"
            alt="GitHub"
            text="walnuts1018"
            link="https://github.com/walnuts1018"
          />
          <ProfileList
            src="/icons/instagram-line.svg"
            alt="Instagram"
            text="@walnuts_1018"
            link="https://www.instagram.com/walnuts_1018/"
          />
          <ProfileList
            src="/icons/mail_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Mail"
            text="r.juglans.1018@gmail.com"
            link="mailto:r.juglans.1018@gmail.com"
            fontSize="text-2xl"
          />
          <ProfileList
            src="/icons/KMClogo_trans.svg"
            alt="KMC"
            text="KMC 46th Chairman"
            link="https://kmc.gr.jp"
          />
          <ProfileList
            src="/icons/school_FILL0_wght400_GRAD0_opsz24.svg"
            alt="School"
            text="Kyoto Univ. / B2"
            link="https://www.s-ee.t.kyoto-u.ac.jp/ja"
          />
          <ProfileList
            src="/icons/favorite_FILL0_wght400_GRAD0_opsz24.svg"
            alt="School"
            text="Kubernetes / Proxmox VE / Golang / Next.js"
            fontSize="text-2xl"
          />
        </div>
      </div>
    </div>
  );
}

function ProfileList({
  src,
  alt,
  text,
  link,
  fontSize = "text-2xl sm:text-3xl",
}: {
  src: string;
  alt: string;
  text: string;
  link?: string;
  fontSize?: string;
}) {
  const children = (
    <>
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="min-w-[36px] max-w-[36px] sm:min-w-[40px] sm:max-w-[40px] object-contain"
      />
      <p>{text}</p>
    </>
  );
  return (
    <>
      {link === undefined ? (
        <div
          className={`flex space-x-3 text-[#7f7f7f] font-bold items-center ${fontSize} w-full sm:outline-none flex rounded-full px-6 py-1 profile-list`}
        >
          {children}
        </div>
      ) : (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={`flex space-x-3 text-[#7f7f7f] font-bold items-center ${fontSize} w-full sm:outline-none flex rounded-full px-6 py-1 profile-list hover:bg-gray-50 hover:shadow-xl hover:border-gray-600 focus:bg-gray-50 focus:shadow-xl focus:border-gray-600 transition-all duration-50 sm:hover:scale-105 active:scale-100 sm:focus:scale-105`}
          href={link}
        >
          {children}
        </a>
      )}
    </>
  );
}
