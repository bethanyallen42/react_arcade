import "./App.css";
import React, { useState } from "react";
import Board from "./Board";
import UserInput from "./UserInput";

//object.assign

function App() {
  const [numOfPlayers, setNumOfPlayers] = useState(1);
  const [numOfPlayersChosen, setNumOfPlayersChosen] = useState(false);

  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [nameOfPlayersEntered, setNameOfPlayersEntered] = useState(false);
  // const [gameState, setGameState] = useState({
  //   numOfPlayers: 0,
  //   playerOne: "",
  //   playerTwo: "",
  //   pipArray: [],
  //   opposites: {
  //     0: 12,
  //     1: 11,
  //     2: 10,
  //     3: 9,
  //     4: 8,
  //     5: 7,
  //     7: 5,
  //     8: 4,
  //     9: 3,
  //     10: 2,
  //     11: 1,
  //     12: 0,
  //   },
  //   currentPlayer: 0,
  //   winner: "",
  // });

  return (
    <div className="App">
      <header>Mancala</header>
      <UserInput
        numOfPlayers={numOfPlayers}
        setNumOfPlayers={setNumOfPlayers}
        numOfPlayersChosen={numOfPlayersChosen}
        setNumOfPlayersChosen={setNumOfPlayersChosen}
        playerOne={playerOne}
        setPlayerOne={setPlayerOne}
        playerTwo={playerTwo}
        setPlayerTwo={setPlayerTwo}
        nameOfPlayersEntered={nameOfPlayersEntered}
        setNameOfPlayersEntered={setNameOfPlayersEntered}
      />
      <div className="board_info_1">
        <p id="player_one_mancala">Player One's mancala</p>
        <p id="player_one_side" className="side"></p>
      </div>
      <Board />
      <div className="board_info_2">
        <p id="player_two_side" className="side"></p>
        <p id="player_two_mancala"></p>
      </div>
    </div>
  );
}

export default App;
