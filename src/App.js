
import './App.css';
import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <p>Vengo de App.js ♛ el componente principal , de donde vienes tu? 🌞</p>
        <PrimerComponente/>
        <PrimerComponente/>
         <PrimerComponente/>
        <SegundoComponente/>
      
      </header>
    </div>
  );
}

export default App;
