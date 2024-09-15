import SiteButton from "./siteButton";

export default function SignupOptions() {
  return (
    <div className="SignupButtons absolute right-[23rem] top-24 flex flex-col items-start space-y-4">
      <SiteButton variant="filled" colorScheme="b3" aria="business">
        business
      </SiteButton>
      <SiteButton variant="filled" colorScheme="f1" aria="collaborator">
        collaborator
      </SiteButton>
      <SiteButton variant="filled" colorScheme="c1" aria="individual">
        job-seeker
      </SiteButton>
    </div>
  );
}
