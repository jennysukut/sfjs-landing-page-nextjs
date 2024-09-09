"useclient";

import InfoBox from "@/components/infoBox";

export default function HopesSection() {
  return (
    <section className="HopesSection flex w-full flex-col items-center p-20">
      <div className="HopesContainer">
        <div className="HopesTitleContainer w-full">
          <h1 className="HopeTitle text-start">our hopes:</h1>
          <p className="HopeSubtitle mb-5 max-w-xl font-semibold italic">
            we have big ideals and even bigger dreams
          </p>
        </div>
        <InfoBox
          aria="change perspectives"
          variant="filled"
          colorScheme="f3"
          addClasses="rounded-full text-sm text-center"
        >
          to change perspectives in the current work landscape
        </InfoBox>
        <div className="HopesDetails flex gap-6">
          <div className="infoBoxesLeft flex max-w-sm flex-col items-end gap-6 py-6">
            <InfoBox
              aria="change perspectives"
              variant="filled"
              colorScheme="d4"
              addClasses="text-sm text-center"
            >
              to show how exciting & successful people-focused, conscious,
              transparent businesses can be{" "}
            </InfoBox>
            <InfoBox
              aria="change perspectives"
              variant="filled"
              colorScheme="f4"
              addClasses="rounded-full text-sm px-14"
            >
              to do good{" "}
            </InfoBox>
          </div>
          <div className="infoBoxesRight flex max-w-sm flex-col items-start gap-6 py-6">
            <InfoBox
              aria="change perspectives"
              variant="filled"
              colorScheme="c5"
              addClasses="text-sm rounded-full"
            >
              to empower individuals
            </InfoBox>
            <InfoBox
              aria="change perspectives"
              variant="filled"
              colorScheme="e6"
              addClasses=" text-sm text-center"
            >
              to make human decency & honest communication a standard business
              practice
            </InfoBox>
          </div>
        </div>
      </div>
    </section>
  );
}
