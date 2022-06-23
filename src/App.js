import "./App.css";
import Board from "./Board";
import UserInput from "./UserInput";

function App() {
  return (
    <div className="App">
      <header>Mancala</header>
      <UserInput />
      <Board />
    </div>
  );
}

export default App;
