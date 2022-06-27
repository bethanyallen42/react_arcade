import React from "react";

const Pit = ({ index, player, pipArray }) => {
  let numOfPips = pipArray[index];

  return (
    <div className="pit player_one_box" data-index={index} data-player={player}>
      {numOfPips}
      {[...Array(numOfPips)].map((pip, index) => {
        return <div className="pip" key={index}></div>;
      })}
    </div>
  );
};

export default Pit;
