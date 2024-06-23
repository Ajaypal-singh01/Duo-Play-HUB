import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RockPapergame from "./components/RockPapergame";
import TicTacToe from "./components/Tictactoe";
import Memorygame from "./components/Memorygame";
import Memorygamefor2player from "./components/Memorygamefor2player";
import Dicegame from "./components/Dicegame";

function App() {
  

  return (
    
    <Router>
      <div className="m-0 p-0 w-full bg-cover bg-hero-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/rock-paper-scissor" element={<RockPapergame />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />}/>
          <Route path="/Memorygame" element={<Memorygame/>}/>
          <Route path="/Memorygamefor2player" element={<Memorygamefor2player/>}/>
          <Route path="/Dicegame" element={<Dicegame/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App



  