import React from "react";

const Pit = ({ index, player }) => {
  return (
    <div className="pit player_one_box" data-index={index} data-player={player}>
      {index}
    </div>
  );
};

export default Pit;
