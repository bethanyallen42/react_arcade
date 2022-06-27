import React from "react";
import Pit from "./Pit";
import Mancala from "./Mancala";

const Board = ({
  pipArray,
  setPipArray,
  playerOne,
  playerTwo,
  currentPlayer,
  setCurrentPlayer,
}) => {
  function isComputer() {
    if (currentPlayer === 2 && playerTwo === "Computer") {
      return true;
    } else {
      return false;
    }
  }

  function turn(event) {
    let index;
    let hand;
    let player = event.target.dataset.player;
    let targetClassList = event.target.classList;
    let pipArrayCopy = [...pipArray];

    if (isComputer()) {
      //index = isValidComputerPit();
    } else {
      index = parseInt(event.target.dataset.index);
    }
    //const firstBox = document.querySelector(`[data-index="${index}"]`);
    hand = pipArrayCopy[index];
    pipArrayCopy[index] = 0;

    let endIndex = movePips(hand, index, pipArrayCopy);
    const box = document.querySelector(`[data-index="${endIndex}"]`);

    console.log("The end is a mancala", box.classList.contains("mancala"));

    //?????????????????????how do I select an element that I don't click on?????????????????
    if (
      pipArray[endIndex] === 1 &&
      player === currentPlayer &&
      box.classList.contains("mancala")
    ) {
      console.log("time to steal");
      //stealPips(endIndex);
    }

    //fadePips(firstBox, placePips);

    // if (isSideEmpty()) {
    //   gameOver(whoWins);
    //   return;
    // }

    // if (box.classList.contains("mancala")) {
    //   displayTurn.innerText = `You get another turn!`;
    // } else {
    //   changePlayer();
    // }
    changePlayer();

    if (isComputer()) {
      setTimeout(turn, 2000);
    }
  }

  function movePips(numOfPips, pitIndex, pipArrayCopy) {
    let currentIndex;
    for (let i = 1; i <= numOfPips; i++) {
      currentIndex = (pitIndex + i) % 14;
      if (currentPlayer === 1 && currentIndex === 13) {
        numOfPips++;
        continue;
      } else if (currentPlayer === 2 && currentIndex === 6) {
        numOfPips++;
        continue;
      }
      pipArrayCopy[currentIndex]++;
      setPipArray(pipArrayCopy);
      // const box = document.querySelector(`[data-index="${currentIndex}"]`);
      // box.classList.add("addPip");
    }

    return currentIndex;
  }

  function changePlayer() {
    if (currentPlayer === 1) {
      setCurrentPlayer(2);
    } else {
      setCurrentPlayer(1);
    }
  }

  const handleClick = (e) => {
    console.log(e.target.classList);
    turn(e);
  };
  return (
    <main
      className="board"
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <Mancala index="6" player="1" pipArray={pipArray} />
      <div className="pit_wrapper">
        <Pit index="5" player="1" pipArray={pipArray} />
        <Pit index="4" player="1" pipArray={pipArray} />
        <Pit index="3" player="1" pipArray={pipArray} />
        <Pit index="2" player="1" pipArray={pipArray} />
        <Pit index="1" player="1" pipArray={pipArray} />
        <Pit index="0" player="1" pipArray={pipArray} />
        <Pit index="7" player="2" pipArray={pipArray} />
        <Pit index="8" player="2" pipArray={pipArray} />
        <Pit index="9" player="2" pipArray={pipArray} />
        <Pit index="10" player="2" pipArray={pipArray} />
        <Pit index="11" player="2" pipArray={pipArray} />
        <Pit index="12" player="2" pipArray={pipArray} />
      </div>
      <Mancala index="13" player="2" pipArray={pipArray} />
    </main>
  );
};

export default Board;
