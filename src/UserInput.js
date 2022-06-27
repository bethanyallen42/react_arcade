import React, { useEffect, useState } from "react";
import EnterNumber from "./EnterNumber";
import EnterName from "./EnterName";

const UserInput = ({
  numOfPlayers,
  setNumOfPlayers,
  numOfPlayersChosen,
  setNumOfPlayersChosen,
  playerOne,
  setPlayerOne,
  playerTwo,
  setPlayerTwo,
  nameOfPlayersEntered,
  setNameOfPlayersEntered,
  currentPlayer,
  pipArray,
  setPipArray,
}) => {
  if (!numOfPlayersChosen) {
    return (
      <EnterNumber
        setNumOfPlayers={setNumOfPlayers}
        setNumOfPlayersChosen={setNumOfPlayersChosen}
      />
    );
  }

  if (numOfPlayersChosen && !nameOfPlayersEntered) {
    return (
      <EnterName
        setPlayerOne={setPlayerOne}
        setPlayerTwo={setPlayerTwo}
        setNameOfPlayersEntered={setNameOfPlayersEntered}
        numOfPlayers={numOfPlayers}
        setPipArray={setPipArray}
        pipArray={pipArray}
        playerTwo={playerTwo}
      />
    );
  }

  if (numOfPlayersChosen && nameOfPlayersEntered) {
    return (
      <div id="vs" className="player_info">
        {currentPlayer === 1 ? `${playerOne}'s turn` : `${playerTwo}'s turn`}
      </div>
    );
  }
};

export default UserInput;
