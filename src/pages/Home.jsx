import React from 'react'
import { useState, useEffect } from 'react'
import { getNewDeck, drawCardFromDeck } from '../services/api'

export const Home = () => {
  const [deckId, setDeckId] = useState(null)
  const [card, setCard] = useState(null)
  const [remaining, setRemaining] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDeck = async () => {
      try {
        const deckData = await getNewDeck()
        setDeckId(deckData.deck_id)
        setRemaining(deckData.remaining)
      } catch (error) {
        console.error('Error fetching deck:', error)
        setError('Could not create a new deck.')
      }
    }

    fetchDeck()
  }, [])

  const handleDrawCard = async () => {
    if (!deckId) return

    setLoading(true)
    setError(null)

    try {
      const drawData = await drawCardFromDeck(deckId, 1)
      if (!drawData.success) {
        throw new Error('Failed to draw a card from the deck.')
      }

      const [drawnCard] = drawData.cards
      setCard(drawnCard)
      setRemaining(drawData.remaining)
    } catch (err) {
      console.error('Error drawing card:', err)
      setError(err.message || 'Could not draw a card.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>Home</div>
      <p>
        Deck ID: {deckId ?? 'Loading...'}
      </p>
      <button onClick={handleDrawCard} disabled={!deckId || loading}>
        {loading ? 'Drawing...' : 'Draw a card'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {card && (
        <div className="card-draw-result">
          <img
            src={card.image}
            alt={`${card.value} of ${card.suit}`}
            width="150"
          />
          <p>
            {card.value} of {card.suit}
          </p>
          <p>Remaining: {remaining}</p>
        </div>
      )}
    </>
  )
}
