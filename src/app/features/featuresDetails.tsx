import { useState, useEffect } from "react";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
const StackedCards = ({ selectedFeature, setSelectedFeature }: any) => {
  const [clickedButton, setClickedButton] = useState("job seekers");
  const [cards, setCards] = useState([
    {
      id: "honest + active job board",
      color: "bg-jade",
      title: "Honest + Active Job Board",
      zIndex: 10,
      move: 10,
      width: "85vw",
      shadow: "drop-shadow-watermelon",
      isActive: false,
    },
    {
      id: "human-focused tech",
      color: "bg-orange",
      title: "Human-Focused Tech",
      zIndex: 20,
      move: -80,
      width: "85vw",
      shadow: "drop-shadow-lime",
      isActive: false,
    },
    {
      id: "two-way application managment",
      color: "bg-olive",
      title: "Two-Way Application Manager",
      zIndex: 30,
      move: 80,
      width: "85vw",
      shadow: "drop-shadow-sky",
      isActive: false,
    },
    {
      id: "no ghosting",
      color: "bg-watermelon",
      title: "No More Ghosting",
      zIndex: 40,
      move: -10,
      width: "85vw",
      shadow: "drop-shadow-emerald",
      isActive: false,
    },
  ]);

  useEffect(() => {
    if (selectedFeature === "") {
      setSelectedFeature("no ghosting");
    } else {
      bringToFront(selectedFeature);
    }
  }, [selectedFeature]);

  const bringToFront = (selectedId: any) => {
    setSelectedFeature(selectedId);
    const maxZ = Math.max(...cards.map((card) => card.zIndex));
    setCards(
      cards.map((card) => ({
        ...card,
        zIndex: card.id === selectedId ? maxZ + 10 : card.zIndex,
        isActive: card.id === selectedId,
      })),
    );
    setTimeout(() => {
      setCards((cards) =>
        cards.map((card) => ({
          ...card,
          isActive: false,
        })),
      );
    }, 300);
  };

  const jobSeekersDetails = [
    "tracks every application you've submitted",
    "gives real-time updates on the status of your application",
    "you can communicate with businesses via messaging system",
    "schedule and track your interviews",
  ];

  const businessDetails = [
    "keeps track of all your open positions",
    "allows for easy management of applications",
    "communicate and schedule interviews all in one place",
    "keep your applicants up-to-date",
    "move through the hiring process easily and efficiently",
  ];

  const currentCardDetails = () => {
    if (selectedFeature === "no ghosting") {
      return <p className="test">testing</p>;
    } else if (
      selectedFeature === "two-way application managment" &&
      clickedButton === "job seekers"
    ) {
      return (
        <div className="AmsDetails my-10 flex align-middle font-medium">
          <ul className="Details mr-8 flex list-disc flex-col gap-2">
            {jobSeekersDetails.map((detail: string, index: number) => {
              return <li key={index}>{detail}</li>;
            })}
          </ul>
          <video
            src="/ams-video.mp4"
            width={500}
            height={300}
            autoPlay
            className={`rounded-2xl border-2 border-jade align-middle drop-shadow-jade`}
          />
        </div>
      );
    } else if (
      selectedFeature === "two-way application managment" &&
      clickedButton === "businesses"
    ) {
      return (
        <div className="AmsDetails my-10 flex align-middle font-medium">
          <ul className="Details mr-8 flex list-disc flex-col gap-2">
            {businessDetails.map((detail: string, index: number) => {
              return <li key={index}>{detail}</li>;
            })}
          </ul>
          <video
            src="/ams-video.mp4"
            width={500}
            height={300}
            autoPlay
            className={`rounded-2xl border-2 border-jade align-middle drop-shadow-jade`}
          />
        </div>
      );
    }
  };

  const amsButtonOptions = () => {
    return (
      <div className="ButtonOptions flex gap-4">
        <SiteButton
          variant="filled"
          colorScheme="e5"
          aria="test"
          onClick={() => setClickedButton("job seekers")}
          isSelected={clickedButton === "job seekers"}
        >
          for job seekers
        </SiteButton>
        <SiteButton
          variant="filled"
          colorScheme="d1"
          aria="test"
          onClick={() => setClickedButton("businesses")}
          isSelected={clickedButton === "businesses"}
        >
          for businesses
        </SiteButton>
      </div>
    );
  };

  return (
    <div className="CardsContainer flex items-center self-center">
      <div className="Cards relative ml-[10vw] min-h-[600px] w-[85vw]">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute cursor-pointer rounded-3xl p-6 text-eggshell ${card.shadow} ${card.color} ${card.isActive ? "translate-x-2 translate-y-2" : ""}flex flex-col transition-all duration-300 ease-in-out hover:-translate-x-1.5 hover:-translate-y-1.5`}
            style={{
              top: `${index * 50}px`,
              left: `${card.move}px`,
              zIndex: card.zIndex,
              width: "75vw",
              height: "450px",
              transform: card.isActive ? "translateY(-20px) scale(1.05)" : "",
            }}
            onClick={() => bringToFront(card.id)}
          >
            {(card.isActive || card.id === selectedFeature) && (
              <div className="CardChildren p-8">
                <div className="TitleOptButtons flex gap-4">
                  <h1 className="text-[1.75rem] font-medium tracking-superwide text-eggshell">
                    {card.title}:
                  </h1>
                  {card.id === "two-way application managment" &&
                    amsButtonOptions()}
                </div>
                {currentCardDetails()}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedCards;
