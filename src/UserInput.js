import React from "react";

const UserInput = () => {
  return (
    <section>
      <div id="enter_number" class="player_info">
        <p>How many people are playing?</p>
        <select name="choose_number_of_players" id="choose_number">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <input type="submit" value="next" id="next" />
      </div>
      <div id="enter_name" class="player_info">
        <p>Please enter your name.</p>
        <form action="">
          <input type="submit" value="Let's Play" id="ready_to_play" />
        </form>
      </div>
      <div id="vs" class="player_info"></div>
      <div class="board_info_1">
        <p id="player_one_mancala"></p>
        <p id="player_one_side" class="side"></p>
      </div>
    </section>
  );
};

export default UserInput;
