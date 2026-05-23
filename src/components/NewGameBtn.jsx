import React from "react";

const NewGameBtn = ({addGame}) => {
  return (
    <button type="button" onClick={addGame} className="btn btn-primary">
      New Game
    </button>
  );
};

export default NewGameBtn;
