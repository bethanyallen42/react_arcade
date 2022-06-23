import React from "react";
import Pit from "./Pit";
import Mancala from "./Mancala";

const Board = () => {
  return (
    <main className="board">
      <Mancala index="6" player="1" />
      <div className="pit_wrapper">
        <Pit index="5" player="1" />
        <Pit index="4" player="1" />
        <Pit index="3" player="1" />
        <Pit index="2" player="1" />
        <Pit index="1" player="1" />
        <Pit index="0" player="1" />
        <Pit index="7" player="2" />
        <Pit index="8" player="2" />
        <Pit index="9" player="2" />
        <Pit index="10" player="2" />
        <Pit index="11" player="2" />
        <Pit index="12" player="2" />
      </div>
      <Mancala index="13" player="2" />
    </main>
  );
};

export default Board;
