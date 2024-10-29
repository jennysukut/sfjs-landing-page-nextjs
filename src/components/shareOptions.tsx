import Link from "next/link";
import SiteButton from "./siteButton";
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "next-share";

export default function ShareOptions({ setClickedButton }: any) {
  return (
    <div className="ShareButtons absolute right-[5rem] top-24 flex flex-col items-end space-y-4">
      <LinkedinShareButton url="straightforwardjobsite.com">
        <SiteButton
          variant="filled"
          colorScheme="b3"
          aria="linkedin"
          onClick={() => setClickedButton("")}
        >
          linkedin
        </SiteButton>
      </LinkedinShareButton>
      <Link href="/referral-program">
        <SiteButton
          variant="filled"
          colorScheme="f1"
          aria="facebook"
          onClick={() => setClickedButton("")}
        >
          referral program
        </SiteButton>
      </Link>
      <FacebookShareButton url="straightforwardjobsite.com">
        <SiteButton
          variant="filled"
          colorScheme="c1"
          aria="facebook"
          onClick={() => setClickedButton("")}
        >
          facebook
        </SiteButton>
      </FacebookShareButton>
    </div>
  );
}
