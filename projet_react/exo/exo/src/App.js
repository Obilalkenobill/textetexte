
import './App.css';
import Person from './Components/Person/Person'

function App() {
  return (
    <div className="main">
    <div className="div2" ><Person  name="Franck" age={Math.floor( ( Math.random() * 100 ) + 1)}/></div>
    <div className="div3" ><Person  age={Math.floor( ( Math.random() * 100 ) + 1)}/></div>
    <div className="div4" ><Person  name="Bilal" age={Math.floor( ( Math.random() * 100 ) + 1)}/></div>
    <div className="div2" ><Person  age={Math.floor( ( Math.random() * 100 ) + 1)}/></div>
    <div className="div2" ><Person  name="Sinok" age={Math.floor( ( Math.random() * 100 ) + 1)}/></div>
    <div className="message">Longue Vie et Prospérité !</div>
    </div>
  );
}

export default App;
