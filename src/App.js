import './App.css';
import Header from './Header.js';
import Skittle from './Skittle.js';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="board-row">
        <Skittle />
        <Skittle />
        <Skittle />
        <Skittle />
        <Skittle />
      </div>
    </div>
  );
}

export default App;
