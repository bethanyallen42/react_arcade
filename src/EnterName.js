import React from "react";
import CreateInputs from "./CreateInputs";

const EnterName = ({
  setPlayerOne,
  setPlayerTwo,
  setNameOfPlayersEntered,
  numOfPlayers,
}) => {
  function handleClick(e) {
    e.preventDefault();
    setNameOfPlayersEntered("true");
  }
  return (
    <div id="enter_name" className="player_info">
      <p>Please enter your name.</p>
      <form action="">
        <CreateInputs
          setPlayerOne={setPlayerOne}
          setPlayerTwo={setPlayerTwo}
          numOfPlayers={numOfPlayers}
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
