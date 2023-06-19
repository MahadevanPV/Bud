import './App.css';
import Header from './components/Header/Header';
import Bud from './components/Bud/Bud';
import Flow from './components/Canvas/Canvas';

function App() {
  return (
    <div className="App">
      <Header/>
      <Flow />
      <Bud />
    </div>
  );
}

export default App;
