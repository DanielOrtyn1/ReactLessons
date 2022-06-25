import './App.css';
import { Timer } from './Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer key={'UniqueId'} />
      </header>
    </div>
  );
}

export default App;
