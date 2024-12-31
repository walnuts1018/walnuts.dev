import Image from "next/image";
import GitHubIcon from "../icons/github-fill.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center gap-2 items-center w-full mb-4 text-md text-gray-500 font-Nunito font-semibold">
        <p>©Walnuts</p>
        <p>|</p>
        <Link
          href="https://github.com/walnuts1018/walnuts.dev"
          className="flex justify-center items-center h-full"
        >
          <Image
            src={GitHubIcon}
            alt="GitHub"
            width={18}
            height={18}
            className="object-contain h-full"
          />
        </Link>
      </div>
    </footer>
  );
}
