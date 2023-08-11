import React, { useState, useEffect } from "react";
import axios from "axios";
import UsersCard from "./UsersCard";

const Deck = () => {
  const [deckId, setDeckId] = useState("");
  const [drawnCards, setDrawnCards] = useState([]);

  useEffect(() => {
    async function fetchDeck() {
      const response = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      setDeckId(response.data.deck_id);
    }
    fetchDeck();
  }, []);

  return (
    <div>
      <UsersCard
        deckId={deckId}
        drawnCards={drawnCards}
        setDrawnCards={setDrawnCards}
      />
    </div>
  );
};

export default Deck;
