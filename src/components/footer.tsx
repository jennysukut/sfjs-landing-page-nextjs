import SiteButton from "./siteButton";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="Footer flex h-24 w-full items-end justify-between px-8 py-8">
      <div className="FooterButtonContainer flex gap-4">
        <SiteButton variant="filled" colorScheme="b2" aria="contact us">
          signup
        </SiteButton>
        <Link href={"/support"}>
          <SiteButton variant="filled" colorScheme="d4" aria="our makers">
            support us
          </SiteButton>
        </Link>
        <SiteButton variant="filled" colorScheme="f3" aria="our sponsors">
          pricing
        </SiteButton>
        <SiteButton variant="filled" colorScheme="e6" aria="about">
          share
        </SiteButton>
      </div>
      <div className="FooterInfo">
        <p className="Copywrite text-xs text-olive">
          ©2024, Straightforward Job Site
        </p>
      </div>
    </div>
  );
}
