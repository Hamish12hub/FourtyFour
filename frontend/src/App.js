import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LoginRegister from "./loginAndRegister/LoginRegister"
import Home from "./home/Home"
import TopBar from './home/TopBar';
// games
import CACGame from "./CACGame/CACGame"
import FlagGame from "./FlagGame/FGame"
// answer pages
import Answers from "./Answers/Answers"
import LanguageAnswers from "./Answers/LanguageAnswers"
//lanages
import Bulgarian from "./FourtyFourWordsGame/Bulgarian"
import Croatian from "./FourtyFourWordsGame/Croatian"
import Czech from "./FourtyFourWordsGame/Czech"
import Danish from "./FourtyFourWordsGame/Danish"
import Dutch from "./FourtyFourWordsGame/Dutch"
import Finnish from "./FourtyFourWordsGame/Finnish"
import French from "./FourtyFourWordsGame/French"
import German from "./FourtyFourWordsGame/German"
import Greek from "./FourtyFourWordsGame/Greek"
import Hungarian from "./FourtyFourWordsGame/Hungarian"
import Italian from "./FourtyFourWordsGame/Italian"
import Polish from "./FourtyFourWordsGame/Polish"
import Portuguese from"./FourtyFourWordsGame/Portuguese"
import Romanian from"./FourtyFourWordsGame/Romanian"
import Russian from "./FourtyFourWordsGame/Russian"
import Spanish from "./FourtyFourWordsGame/Spanish"
import Swedish from "./FourtyFourWordsGame/Swedish"
import Turkish from "./FourtyFourWordsGame/Turkish"

function App() {
  return (
    <div className="App">
      <TopBar />
      <Router>
      <Routes>
        <Route element={<LoginRegister/>} path="/"/>
        <Route element={<Home/>} path="/home"/>
        {/* langauges */}
        <Route element={<Bulgarian/>} path="/home/Bulgarian"/>
        <Route element={<Croatian/>} path="/home/Croatian"/>
        <Route element={<Czech/>} path="/home/Czech"/>
        <Route element={<Danish/>} path="/home/Danish"/>
        <Route element={<Dutch/>} path="/home/Dutch"/>
        <Route element={<Finnish/>} path="/home/Finnish"/>
        <Route element={<French/>} path="/home/French"/>
        <Route element={<German/>} path="/home/German"/>
        <Route element={<Greek/>} path="/home/Greek"/>
        <Route element={<Hungarian/>} path="/home/Hungarian"/>
        <Route element={<Italian/>} path="/home/Italian"/>
        <Route element={<Polish/>} path="/home/Polish"/>
        <Route element={<Romanian/>} path="/home/Romanian"/>
        <Route element={<Portuguese/>} path="/home/Portuguese"/>
        <Route element={<Russian/>} path="/home/Russian"/>
        <Route element={<Spanish/>} path="/home/Spanish"/>
        <Route element={<Swedish/>} path="/home/Swedish"/>
        <Route element={<Turkish/>} path="/home/Turkish"/>
        {/* games */}
        <Route element={<CACGame/>} path="/home/CACGame"/>
        <Route element={<FlagGame/>} path="/home/FGame"/>
        {/* Answer pages */}
        <Route element={<Answers/>} path="/home/Answers"/>
        <Route element={<LanguageAnswers/>} path="/home/languageAnswers"/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;