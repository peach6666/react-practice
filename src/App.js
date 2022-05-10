import logo from './logo.svg';
import './App.css';
import Ren,{peach} from './ren';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Ren/>
        <h2>{peach.age}</h2>
      </header>
    </div>
  );
}

export default App;
