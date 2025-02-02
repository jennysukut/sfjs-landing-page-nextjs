import { useState, useEffect } from "react";
import InfoBox from "@/components/infoBox";

const StackedCards = ({ selectedFeature }: any) => {
  const [cards, setCards] = useState([
    {
      id: "honest + active job board",
      color: "bg-jade",
      title: "Honest + Active Job Board",
      zIndex: 10,
      move: 10,
      width: "85vw",
      shadow: "drop-shadow-watermelon",
    },
    {
      id: "human-focused tech",
      color: "bg-orange",
      title: "Human Focused Tech",
      zIndex: 20,
      move: -80,
      width: "85vw",

      shadow: "drop-shadow-sky",
    },
    {
      id: "two-way application managment",
      color: "bg-olive",
      title: "Two-Way Application Manager",
      zIndex: 30,
      move: 80,
      width: "85vw",

      shadow: "drop-shadow-peach",
    },
    {
      id: "no ghosting",
      color: "bg-lilac",
      title: "No More Ghosting",
      zIndex: 40,
      move: -10,
      width: "85vw",
      shadow: "drop-shadow-lime",
    },
  ]);

  useEffect(() => {
    bringToFront(selectedFeature);
    console.log("trying to bring relevant card to the front:", selectedFeature);
  }, [selectedFeature]);

  const bringToFront = (selectedId: any) => {
    const maxZ = Math.max(...cards.map((card) => card.zIndex));
    setCards(
      cards.map((card) => ({
        ...card,
        zIndex: card.id === selectedId ? maxZ + 10 : card.zIndex,
      })),
    );
  };

  return (
    <div className="CardsContainer flex items-center self-center">
      <div className="Cards relative ml-[10vw] h-[500px] w-[85vw]">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute cursor-pointer rounded-3xl p-6 text-eggshell ${card.shadow} ${card.color} flex flex-col transition-all duration-300 ease-in-out hover:-translate-x-1.5 hover:-translate-y-1.5`}
            style={{
              top: `${index * 70}px`,
              left: `${card.move}px`,
              zIndex: card.zIndex,
              width: "75vw",
              height: "300px",
            }}
            onClick={() => bringToFront(card.id)}
          >
            <h3 className="ml-2 text-xl font-semibold leading-9 text-eggshell">
              {card.title}
            </h3>
            <p className="mt-2">details</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedCards;
