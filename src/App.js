import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import PokemonSelector from './components/PokemonSelector';
import Pokemon from './components/Pokemon';
import FightScreen from './components/FIghtScreen';
import MoveButton from './components/MoveButton';
import Charmander from './components/pokemon/Charmander';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/FightScreen' element={<Charmander/>}/>
        </Routes>
        <PokemonSelector/>
    </Router>
  );
}

export default App;
