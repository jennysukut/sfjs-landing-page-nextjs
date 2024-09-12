import SiteButton from "./siteButton";
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "next-share";

export default function ShareOptions() {
  return (
    <div className="ShareButtons absolute right-[5rem] top-24 flex flex-col items-end space-y-4">
      <LinkedinShareButton url="straightforwardjobsite.com">
        <SiteButton variant="filled" colorScheme="b3" aria="linkedin">
          linkedin
        </SiteButton>
      </LinkedinShareButton>
      <FacebookShareButton url="straightforwardjobsite.com">
        <SiteButton variant="filled" colorScheme="f1" aria="facebook">
          facebook
        </SiteButton>
      </FacebookShareButton>
      <TwitterShareButton url="straightforwardjobsite.com">
        <SiteButton variant="filled" colorScheme="c1" aria="threads">
          twitter
        </SiteButton>
      </TwitterShareButton>
    </div>
  );
}
