//css
import './App.css';

//React
import { useCallback, useEffect, useState } from 'react';

//data
import { wordsList } from './data/words';

//components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';


const stages = [
  { id: 1, name: 'start', },
  { id: 2, name: 'game', },
  { id: 3, name: 'end', },
];


function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);


  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    //pegando uma categoria aleatoria
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category)

    //pegando uma palavra desta categoria aleatoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word);

    return { word, category };
  }

  //Início do jogo
  const startGame = () => {
    // escolhendo a palavra e escolhendo a categoria
    const { word, category } = pickWordAndCategory();
    let wordLetters = word.split('');
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    //pegando a palavra e transformando em letras
    console.log(word, category);
    console.log(wordLetters)
    
    //setando os estados
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);

    setGameStage(stages[1].name);
  }

  //verfificando a palavra
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  //reinicializar o jogo
  const retry = () => {
    setGameStage(stages[0].name);
  }
  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
