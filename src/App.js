import logo from './logo.svg';
import './App.css';
import Ren,{peach,Wade} from './ren';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Ren></Ren>
        <h2>{peach.age}</h2>
        <Wade id="1" name="wade" age="40"></Wade>
      </header>
    </div>
  );
}

export default App;