import { useState, useEffect } from "react";
import InfoBox from "@/components/infoBox";

const StackedCards = ({ selectedFeature, setSelectedFeature }: any) => {
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
      title: "Human Focused Tech",
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
    bringToFront(selectedFeature);
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

  return (
    <div className="CardsContainer flex items-center self-center">
      <div className="Cards relative ml-[10vw] h-[600px] w-[85vw]">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute cursor-pointer rounded-3xl p-6 text-eggshell ${card.shadow} ${card.color} ${card.isActive ? "translate-x-2 translate-y-2" : ""}flex flex-col transition-all duration-300 ease-in-out hover:-translate-x-1.5 hover:-translate-y-1.5`}
            style={{
              top: `${index * 70}px`,
              left: `${card.move}px`,
              zIndex: card.zIndex,
              width: "75vw",
              height: "400px",
              transform: card.isActive ? "translateY(-20px) scale(1.05)" : "",
            }}
            onClick={() => bringToFront(card.id)}
          >
            <div className="CardChildren p-8">
              <h1 className="text-eggshell">{card.title}:</h1>
              <p className="mt-2">details</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedCards;
