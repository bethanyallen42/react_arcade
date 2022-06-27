import React from "react";

const CreateInputs = ({
  setPlayerOne,
  setPlayerTwo,
  numOfPlayers,
  playerTwo,
}) => {
  if (numOfPlayers === 1) {
    return (
      <input
        type="text"
        placeholder="Player 1"
        id="player_1_input"
        onChange={(e) => setPlayerOne(e.target.value)}
      />
    );
  } else {
    return (
      <div>
        <input
          type="text"
          placeholder="Player 1"
          id="player_1_input"
          onChange={(e) => setPlayerOne(e.target.value)}
        />
        <input
          type="text"
          placeholder="Player 2"
          id="player_2_input"
          onChange={(e) => setPlayerTwo(e.target.value)}
        />
      </div>
    );
  }
};

export default CreateInputs;

// if (numOfPlayers === 1) {
//   setPlayerTwo = "Computer";
// }
// console.log(numOfPlayers);

// return (
//   <>
//     {[...Array(numOfPlayers)].map((num, index) => {
//       console.log("creating an input");
//       return (
//         <input
//           type="text"
//           placeholder="Player 1"
//           id="player_1_input"
//           key={index}
//           onChange={(e) => {
//             if (num === 0) {
//               setPlayer1(e.target.value);
//             } else if (num === 1) {
//               setPlayerTwo(e.target.value);
//             }
//           }}
//         />
//       );
//     })}
//   </>
// );
