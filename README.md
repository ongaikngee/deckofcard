# Deck of Cards Game

A React application that integrates with the Deck of Cards API to create and manage card game sessions.

Users can create a new game, which generates a fresh shuffled deck from the Deck of Cards API. Once a game is created, players can draw cards from the deck and view the remaining cards available.

## Features

- Create a new game with a freshly shuffled deck
- Retrieve deck information from the Deck of Cards API
- Draw cards from an active deck
- Display drawn cards
- Track remaining cards in the deck
- Responsive user interface built with React and Vite

## Demo Workflow

1. Create a new game
2. Application requests a new shuffled deck from the Deck of Cards API
3. Deck ID is stored for the game session
4. Player draws cards from the deck
5. Drawn cards are displayed in the interface
6. Remaining card count is updated after each draw

## API Integration

This application uses the public Deck of Cards API:

https://deckofcardsapi.com/

### Create a New Deck

```http
GET https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
```

### Draw Cards

```http
GET https://deckofcardsapi.com/api/deck/{deck_id}/draw/?count=1
```

## Technology Stack

- React
- Vite
- JavaScript (ES6+)
- Fetch API
- CSS / Styling Framework (update if applicable)

## Project Structure

```text
src/
├── components/
├── pages/
├── services/
├── hooks/
├── utils/
├── App.jsx
└── main.jsx
```

> Update the structure above to match your actual project layout.

## Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/<repository-name>.git
```

Navigate into the project directory:

```bash
cd <repository-name>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Design Considerations

- Separation of UI and API logic
- Reusable React components
- Simple and intuitive user experience
- Efficient state management for game sessions and card draws
- Clear handling of API loading and error states

## Future Enhancements

- Support multiple players
- Game history tracking
- Persistent game sessions
- Card discard pile
- Multiple deck support
- Player scoring system
- Dark mode support

## Error Handling

The application handles:

- Network request failures
- Invalid deck identifiers
- Empty deck scenarios
- API response errors

## License

This project is provided for educational and demonstration purposes.