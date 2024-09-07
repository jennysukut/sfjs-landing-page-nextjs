import type { MakerInfoType } from "@/lib/makersInfo";

function getNextMakerDetails(
  makers: MakerInfoType,
  currentMakerDetail: string,
) {
  const makersDetailsArray = makers.details;
  const totalDetails = makersDetailsArray.length;

  // Find the index of the current maker detail
  const currentIndex = makersDetailsArray.indexOf(currentMakerDetail);

  // Calculate the next index, wrapping around if necessary
  const nextIndex = (currentIndex + 1) % totalDetails;

  // Return the next maker detail
  return makersDetailsArray[nextIndex];
}

export default getNextMakerDetails;
