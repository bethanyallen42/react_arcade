import React from "react";

const Mancala = ({ index, player, pipArray }) => {
  let numOfPips = pipArray[index];

  return (
    <div className="mancala" data-index={index} data-player={player}>
      {numOfPips}
      {[...Array(numOfPips)].map((pip, index) => {
        return <div className="pip" key={index}></div>;
      })}
    </div>
  );
};

export default Mancala;
