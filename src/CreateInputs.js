import React from "react";

const CreateInputs = ({ setPlayerOne, setPlayerTwo, numOfPlayers }) => {
  if (numOfPlayers === 1) {
    setPlayerTwo = "Computer";
    return (
      <input
        type="text"
        placeholder="Player 1"
        id="player_1_input"
        onChange={(e) => setPlayerOne(e.target.value)}
      />
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Player 1"
        id="player_1_input"
        onChange={(e) => setPlayerOne(e.target.value)}
      />
      <input
        type="text"
        placeholder="Player 2"
        id="player_2_input"
        onChange={(e) => setPlayerTwo(e.target.value)}
      />
    </div>
  );
};

export default CreateInputs;
