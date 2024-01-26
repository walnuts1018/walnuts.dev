"use client";
import {
  TwitterShareButton,
  HatenaShareButton,
  LineShareButton,
  FacebookShareButton,
  TwitterIcon,
  HatenaIcon,
  LineIcon,
  FacebookIcon,
} from "react-share";

const URL = "https://walnuts.dev";
const title = "Walnuts-dev";

export default function Share({
  className,
  size = 32,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div className={className}>
      <TwitterShareButton url={URL} title={title}>
        <TwitterIcon size={size} round={true} />
      </TwitterShareButton>
      <FacebookShareButton url={URL} title={title}>
        <FacebookIcon size={size} round={true} />
      </FacebookShareButton>
      <HatenaShareButton url={URL} title={title}>
        <HatenaIcon size={size} round={true} />
      </HatenaShareButton>
      <LineShareButton url={URL} title={title}>
        <LineIcon size={size} round={true} />
      </LineShareButton>
    </div>
  );
}
