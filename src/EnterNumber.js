import React from "react";

const EnterNumber = ({ setNumOfPlayers, setNumOfPlayersChosen }) => {
  function handleSubmit(e) {
    e.preventDefault();
    setNumOfPlayersChosen(true);
  }

  return (
    <form
      id="enter_number"
      className="player_info"
      onSubmit={(e) => handleSubmit(e)}
    >
      <p>How many people are playing?</p>
      <select
        value="1"
        name="choose_number_of_players"
        id="choose_number"
        onChange={(e) => setNumOfPlayers(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <input type="submit" value="next" id="next" />
    </form>
  );
};

export default EnterNumber;

//Not sure why 2 won't stay visible when I select that option
