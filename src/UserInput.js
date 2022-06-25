import React, { useState } from "react";
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
      />
    );
  }

  if (numOfPlayersChosen && nameOfPlayersEntered) {
    console.log("turns?");
    return (
      <div id="vs" className="player_info">
        Whose Turn?
      </div>
    );
  }
};

export default UserInput;
