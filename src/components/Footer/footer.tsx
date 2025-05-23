import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "../icons/github-fill.svg";

export default function Footer() {
  return (
    <footer>
      <div className="text-md font-Nunito mb-4 flex w-full items-center justify-center gap-2 font-semibold text-gray-500">
        <p>©Walnuts</p>
        <p>|</p>
        <Link
          href="https://github.com/walnuts1018/walnuts.dev"
          className="flex h-full items-center justify-center"
        >
          <Image
            src={GitHubIcon}
            alt="GitHub"
            width={18}
            height={18}
            className="h-full object-contain"
          />
        </Link>
      </div>
    </footer>
  );
}
