import { useState } from "react";
import InfoBox from "@/components/infoBox";

const StackedCards = () => {
  const [cards, setCards] = useState([
    { id: 1, color: "bg-jade", title: "Card 1", zIndex: 10, move: -2 },
    { id: 2, color: "bg-peach", title: "Card 2", zIndex: 20, move: 0 },
    { id: 3, color: "bg-olive", title: "Card 3", zIndex: 30, move: 7 },
    { id: 4, color: "bg-lilac", title: "Card 4", zIndex: 40, move: -5 },
  ]);

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
    <div className="Cards relative mx-auto h-[50vw] w-[85vw]">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`absolute cursor-pointer rounded-lg p-6 text-eggshell shadow-md ${card.color} flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg`}
          style={{
            top: `${index * 40}px`,
            left: `${card.move}px`,
            zIndex: card.zIndex,
            width: "85vw",
            height: "300px",
          }}
          onClick={() => bringToFront(card.id)}
        >
          <div
            className={`SideDot -ml-10 h-20 w-20 self-start rounded-xl ${card.color}`}
          ></div>
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="mt-2">Click to bring to front</p>
        </div>
      ))}
    </div>
  );
};

export default StackedCards;
