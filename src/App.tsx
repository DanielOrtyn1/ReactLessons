import './App.css';
import { ButtonWithText } from './Button/ButtonWithText';
import { Timer } from './Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
        <ButtonWithText
          text={'Upgrade'}
          callBack={() => {
            console.log('test');
            return false;
          }}
        />
      </header>
    </div>
  );
}

export default App;
