export const makeReferralCode = (name: string, setReferralCode: any) => {
  const nameParts = name.trim().split(" ");
  const firstPart = nameParts[0].slice(0, 3);
  const lastPart = nameParts[nameParts.length - 1].slice(0, 3);
  const randomNumbers = Math.floor(100 + Math.random() * 900);
  const referralCode = `${firstPart}${lastPart}${randomNumbers}`.toUpperCase();
  setReferralCode(referralCode);
};
