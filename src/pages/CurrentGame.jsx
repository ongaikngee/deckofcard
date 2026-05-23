import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { drawCardFromDeck } from "../services/api";

export const CurrentGame = () => {
  const { deckId } = useParams();
  const navigate = useNavigate();
  const [deckInfo, setDeckInfo] = useState(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch initial deck information and set up the page
    const fetchDeckInfo = async () => {
      try {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/`);
        const data = await response.json();
        setDeckInfo(data);
      } catch (err) {
        setError("Failed to load deck information");
        console.error(err);
      }
    };

    if (deckId) {
      fetchDeckInfo();
    }
  }, [deckId]);

  const handleDrawCard = async () => {
    setLoading(true);
    setError(null);

    try {
      const drawData = await drawCardFromDeck(deckId, 1);
      if (!drawData.success) {
        throw new Error("Failed to draw a card from the deck.");
      }

      setCards((prevCards) => [...prevCards, ...drawData.cards]);
      setDeckInfo((prevInfo) => ({
        ...prevInfo,
        remaining: drawData.remaining,
      }));
    } catch (err) {
      setError(err.message || "Could not draw a card.");
      console.error("Error drawing card:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!deckId) {
    return (
      <div className="container">
        <h2>Invalid Game ID</h2>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Game: {deckId}</h2>
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          Back to Games
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {deckInfo && (
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Deck Information</h5>
            <p>
              <strong>Deck ID:</strong> {deckInfo.deck_id}
            </p>
            <p>
              <strong>Cards Remaining:</strong> {deckInfo.remaining} / {deckInfo.remaining + cards.length}
            </p>
            <p>
              <strong>Shuffled:</strong> {deckInfo.shuffled ? "Yes" : "No"}
            </p>
            <button
              className="btn btn-primary"
              onClick={handleDrawCard}
              disabled={loading || deckInfo.remaining === 0}
            >
              {loading ? "Drawing..." : "Draw Card"}
            </button>
          </div>
        </div>
      )}

      {cards.length > 0 && (
        <div className="mt-4">
          <h5>Cards Drawn</h5>
          <div className="row">
            {cards.map((card, index) => (
              <div key={index} className="col-md-3 col-sm-6 mb-3">
                <img
                  src={card.image}
                  alt={`${card.value} of ${card.suit}`}
                  className="img-fluid"
                  style={{ maxHeight: "200px" }}
                />
                <p className="text-center mt-2">
                  {card.value} of {card.suit}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
