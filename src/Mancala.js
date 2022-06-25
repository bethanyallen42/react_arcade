import React from "react";

const Mancala = ({ index, player }) => {
  return (
    <div className="mancala" data-index={index} data-player={player}>
      {index}
    </div>
  );
};

export default Mancala;
