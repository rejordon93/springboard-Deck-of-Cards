import React from "react";

const UsersCard = ({ deckId, drawnCards, setDrawnCards }) => {
  const handleButtonClick = async () => {
    try {
      const response = await fetch(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
      );
      const data = await response.json();
      if (data.cards && data.cards.length > 0) {
        setDrawnCards([...drawnCards, data.cards[0]]);
      }
    } catch (error) {
      console.error("Error drawing a card:", error);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>GIMME A CARD!</button>
      <div>
        {drawnCards.map((card, index) => (
          <img key={index} src={card.image} alt={card.code} />
        ))}
      </div>
    </div>
  );
};

export default UsersCard;
