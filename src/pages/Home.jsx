import React from 'react'
import { useState, useEffect } from 'react'
import { getNewDeck } from '../services/api'

export const Home = () => {

  const [deckId, setDeckId] = useState(null)

  useEffect(() => {
    const fetchDeck = async () => {
      try {
        const deckData = await getNewDeck()
        setDeckId(deckData.deck_id)
      } catch (error) {
        console.error("Error fetching deck:", error)
      }
    }

    fetchDeck()
  }, [])

  useEffect(() => {
    const fetchDeck = async () => {
      try {
        const deckData = await getNewDeck()
        console.log("New Deck:", deckData)
      } catch (error) {
        console.error("Error fetching deck:", error)
      }
    }

    fetchDeck()

  }, [])
  return (
    <>
      <div>Home</div>
      <p>{deckId}</p>
    </>

  )
}
