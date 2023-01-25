import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <h1>
        <span className="LivelyText1">T</span>
        <span className="LivelyText2">i</span>
        <span className="LivelyText3">c</span>
        <span className="LivelyText4">T</span>
        <span className="LivelyText5">a</span>
        <span className="LivelyText6">c</span>
        <span className="LivelyText7">T</span>
        <span className="LivelyText8">o</span>
        <span className="LivelyText9">e</span>
      </h1>
      <div>Click on the game board to start. X goes first.</div>
      <Board/>
    </div>
  );
}

export default App;
