import React from "react";
import CreateInputs from "./CreateInputs";

const EnterName = ({
  setPlayerOne,
  setPlayerTwo,
  setNameOfPlayersEntered,
  numOfPlayers,
  pipArray,
  setPipArray,
  playerTwo,
}) => {
  function handleClick(e) {
    e.preventDefault();
    setNameOfPlayersEntered("true");
    setPipArray([4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0]);
  }
  return (
    <div id="enter_name" className="player_info">
      <p>Please enter your name.</p>
      <form action="">
        <CreateInputs
          setPlayerOne={setPlayerOne}
          setPlayerTwo={setPlayerTwo}
          numOfPlayers={numOfPlayers}
          playerTwo={playerTwo}
        />
        <input
          type="submit"
          value="Let's Play"
          id="ready_to_play"
          onClick={(e) => handleClick(e)}
        />
      </form>
    </div>
  );
};

export default EnterName;
